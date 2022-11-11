import { useState, MouseEvent, useContext } from 'react';
import { Container, Checkbox, Box, Typography } from '@mui/material';
import { EmotionCard } from './EmotionCard';
import { useQuery } from '@tanstack/react-query';
import request from 'graphql-request';
import { GRAPHQL_ENDPOINT } from '../../graphql/endpoint';
import { EMOTIONS_BY_TYPE_QUERY } from '../../graphql/queries/emotions-by-type.query';
import { Loading } from '../ui/loading/Loading';
import { SelectedEmotionTypeCtx } from '../routes/StrongEmotionPage';

type SelectEmotionProps = {
  selectedEmotionIds: string[],
  setSelectedEmotionIds: (ids: string[]) => void,
};

export const SelectEmotion = ({ selectedEmotionIds, setSelectedEmotionIds }: SelectEmotionProps) => {
  const { selectedEmotionType } = useContext(SelectedEmotionTypeCtx);
  const [selectedEmotionNames, setSelectedEmotionNames] = useState<string[]>([]);
  const { data: emotionsData, isLoading, isSuccess } = useQuery({
    queryKey: ['EMOTIONS_BY_TYPE_QUERY', selectedEmotionType],
    queryFn: () => request(GRAPHQL_ENDPOINT, EMOTIONS_BY_TYPE_QUERY, { emotionType: selectedEmotionType ?? '' }),
  });

  const emotionOptions = emotionsData?.emotions?.data
    .map(data => ({
      id: data.id!,
      name: data.attributes?.name!,
    })) ?? [];

  function addSelectedEmotionId(id: string): void {
    if (selectedEmotionIds.every(existingId => existingId !== id)) {
      setSelectedEmotionIds([...selectedEmotionIds, id]);
    }
  }

  function removeSelectedEmotionId(id: string): void {
    setSelectedEmotionIds(selectedEmotionIds.filter(existingId => existingId !== id));
  }

  function toggleSelectedEmotionId(id: string): void {
    if (selectedEmotionIds.includes(id)) {
      removeSelectedEmotionId(id);
    } else {
      addSelectedEmotionId(id);
    }
  }

  function addSelectedEmotionName(name: string): void {
    if (selectedEmotionNames.every(existingName => existingName !== name)) {
      setSelectedEmotionNames([...selectedEmotionNames, name]);
    }
  }

  function removeSelectedEmotionName(name: string): void {
    setSelectedEmotionNames(selectedEmotionNames.filter(existingName => existingName !== name));
  }

  function toggleSelectedEmotionName(name: string): void {
    if (selectedEmotionNames.includes(name)) {
      removeSelectedEmotionName(name);
    } else {
      addSelectedEmotionName(name);
    }
  }

  function toggleSelectedEmotion({ id, name }: { id: string, name: string }): void {
    toggleSelectedEmotionId(id);
    toggleSelectedEmotionName(name);
  }

  return (
    <Container maxWidth='xl'>
      <Typography component='h5' variant='h5'>
        Select the emotions you are feeling
      </Typography>

      <Box sx={{
        mt: 3, display: 'flex', flexDirection: 'row',
        alignItems: 'center'
      }}>
        {isLoading && <Loading />}
        {isSuccess && emotionOptions.map((emotion) => (
          <Checkbox key={emotion.id}
            icon={<EmotionCard emotion={emotion.name} />}
            checkedIcon={<EmotionCard emotion={emotion.name} />}
            onChange={() => toggleSelectedEmotion(emotion)}
            checked={selectedEmotionIds.includes(emotion.id)} />
        ))}
      </Box>
    </Container>
  );
};
