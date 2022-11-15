import { Alert, Box, Button } from '@mui/material';
import { AddPriorityField } from './AddPriorityField';
import { useMutation } from '@tanstack/react-query';
import request from 'graphql-request';
import { GRAPHQL_ENDPOINT } from '../../../graphql/endpoint';
import { CREATE_PRIORITY_MUTATION } from '../../../graphql/mutations/create-priority.mutation';
import { useState } from 'react';
import { UPLOAD_IMAGE_MUTATION } from '../../../graphql/mutations/upload-image.mutation';
import { Loading } from '../loading/Loading';
import { PriorityItem } from './PriorityItem';

export const NewPriority = () => {
  const [title, setTitle] = useState('');
  const [weeklyGoal, setWeeklyGoal] = useState(1);
  const [image, setImage] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [priorityId, setPriorityId] = useState('');

  const {
    mutate: uploadImageAndCreatePriority,
    isLoading: isLoadingUpload,
    error: uploadError
  } = useMutation({
    mutationKey: ['UPLOAD_IMAGE_MUTATION'],
    mutationFn: () => request(GRAPHQL_ENDPOINT, UPLOAD_IMAGE_MUTATION, {
      file: image
    }),
    onSuccess: (data) => createPriority(data.upload.data?.id!)
  });
  const {
    mutate: createPriority,
    isLoading: isLoadingCreatePriority,
    error: createPriorityError
  } = useMutation({
    mutationKey: ['CREATE_PRIORITY_MUTATION'],
    mutationFn: (imageId?: string) => request(GRAPHQL_ENDPOINT, CREATE_PRIORITY_MUTATION, {
      priority: {
        title,
        image: imageId,
        weeklyGoal,
        active: false,
      }
    }),
    onSuccess: (data) => {
      setPriorityId(data.createPriority?.data?.id ?? '');
    }
  });
  if (createPriorityError != null) console.log(JSON.stringify(
    createPriorityError
  ));

  function onFinishClick() {
    setError(null);
    if (title.trim().length === 0 || weeklyGoal <= 0) {
      setError('Title and weekly goal are required.');
      return;
    }
    if (image == null) {
      createPriority(undefined);
    } else {
      uploadImageAndCreatePriority();
    }
  }

  const isLoading = isLoadingUpload || isLoadingCreatePriority;

  return (
    <Box sx={{ width: '100%', alignItems: 'center', display: 'flex', flexDirection: 'column', my: 1 }}>
      {priorityId ?
        <Box sx={{ width: '50%', my: 3 }}>
          <PriorityItem priorityId={priorityId} />
        </Box>
        :
        <Box>
          <AddPriorityField
            title={title}
            setTitle={setTitle}
            weeklyGoal={weeklyGoal}
            setWeeklyGoal={setWeeklyGoal}
            image={image}
            setImage={setImage}
          />
          {isLoading && <Loading />}
          {error != null && <Alert severity='error'>{error}</Alert>}
          {uploadError != null && <Alert severity='error'>An error occurred during upload.</Alert>}
          {createPriorityError != null && <Alert severity='error'>Title already exists.</Alert>}
          <Box sx={{ display: 'flex', columnGap: 2, flexWrap: 'wrap' }}>
            <Button
              onClick={() => onFinishClick()}
              disabled={isLoading}
              variant='outlined'
            >
              Finish
            </Button>
          </Box>
        </Box>
      }
    </Box>
  );
};
