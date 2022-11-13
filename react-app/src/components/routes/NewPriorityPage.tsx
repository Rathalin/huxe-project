import { Alert, Box, Button, Container, Typography } from '@mui/material';
import { AddPriorityField } from '../ui/priority/AddPriorityField';
import { useMutation } from '@tanstack/react-query';
import request from 'graphql-request';
import { GRAPHQL_ENDPOINT } from '../../graphql/endpoint';
import { CREATE_PRIORITY_MUTATION } from '../../graphql/mutations/create-priority.mutation';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PriorityInput } from '../../graphql/generated/graphql';
import { ArrowBack } from '@mui/icons-material';
import { UPLOAD_FILE_MUTATION } from '../../graphql/mutations/upload-file.mutation';
import { UPLOAD_IMAGE_MUTATION } from '../../graphql/mutations/upload-image.mutation';
import { Loading } from '../ui/loading/Loading';

export const NewPriorityPage = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [weeklyGoal, setWeeklyGoal] = useState(1);
  const [image, setImage] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

  const { mutate: uploadImageAndCreatePriority, isLoading: isLoadingUpload } = useMutation({
    mutationKey: ['UPLOAD_IMAGE_MUTATION'],
    mutationFn: () => request(GRAPHQL_ENDPOINT, UPLOAD_IMAGE_MUTATION, {
      file: image,
    }),
    onSuccess: (data) => createPriority(data.upload.data?.id!),
  });
  const { mutate: createPriority, isLoading: isLoadingCreatePriority } = useMutation({
    mutationKey: ['CREATE_PRIORITY_MUTATION'],
    mutationFn: (imageId?: string) => request(GRAPHQL_ENDPOINT, CREATE_PRIORITY_MUTATION, {
      priority: {
        title,
        image: imageId,
        weeklyGoal,
        active: true,
      }
    }),
    onSuccess: () => {
      navigate('/dashboard');
    },
  });

  function onFinishClick() {
    setError(null);
    if (title.trim().length === 0 || weeklyGoal <= 0) {
      setError('Title and weekyl goal are required!');
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
    <Container component='main' maxWidth='md' sx={{ textAlign: "center" }}>
      <Box sx={{
        mt: 5, display: 'flex', flexDirection: 'column',
        alignItems: 'center', minHeight: '80vh'
      }}>
        <Typography component='h1' variant='h3'>
          Add Priority
        </Typography>
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
        <Button
          onClick={() => onFinishClick()}
          disabled={isLoading}
          variant='contained'
          sx={{ mt: 3, mb: 2, gap: 1, width: '250px' }}
        >
          <ArrowBack />
          <span>Finish</span>
        </Button>
      </Box>
    </Container>
  );
};
