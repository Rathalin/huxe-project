import { useState, MouseEvent, useContext } from 'react';
import { Container, Checkbox, Box, Typography } from '@mui/material';
import { EmotionCard } from './EmotionCard';
import { useQuery } from '@tanstack/react-query';
import request from 'graphql-request';
import { GRAPHQL_ENDPOINT } from '../graphql/endpoint';
import { EMOTIONS_BY_TYPE_QUERY } from '../graphql/queries/emotions-by-type.query';
import { Loading } from './ui/loading/Loading';
import { SelectedEmotionTypeCtx } from './StrongEmotion';

export const SelectEmotion = () => {
  const { selectedEmotionType } = useContext(SelectedEmotionTypeCtx);
  const [strongFeelings, setStrongFeelings] = useState<string[]>([]);
  const { data: emotionsData, isLoading, isSuccess } = useQuery({
    queryKey: ['EMOTIONS_BY_TYPE_QUERY', selectedEmotionType],
    queryFn: () => request(GRAPHQL_ENDPOINT, EMOTIONS_BY_TYPE_QUERY, { emotionType: selectedEmotionType ?? '' }),
  });

  const emotionOptions = emotionsData?.emotions?.data
    .map(data => data.attributes?.name)
    .filter((emotion): emotion is string => emotion != null) ?? [];

  function addStrongFeeling(feeling: string): void {
    if (strongFeelings.every(existingFeeling => existingFeeling !== feeling)) {
      setStrongFeelings([...strongFeelings, feeling]);
    }
  }


  function removeStrongFeeling(feeling: string): void {
    setStrongFeelings(strongFeelings.filter(existingFeeling => existingFeeling !== feeling));
  }

  function toggleStrongFeeling(feeling: string): void {
    if (strongFeelings.includes(feeling)) {
      removeStrongFeeling(feeling);
    } else {
      addStrongFeeling(feeling);
    }
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
          <Checkbox key={emotion}
            icon={<EmotionCard emotion={emotion} />}
            checkedIcon={<EmotionCard emotion={emotion} />}
            onChange={() => { toggleStrongFeeling(emotion) }}
            checked={strongFeelings.includes(emotion)} />
        ))}
      </Box>
    </Container>
  );
};
