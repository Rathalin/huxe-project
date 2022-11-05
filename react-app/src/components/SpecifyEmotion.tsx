import { useState, MouseEvent } from 'react';
import { Container, Checkbox, Box, FormControlLabel, Typography } from '@mui/material';
import { MoodIcon } from './MoodIcon';
import { EmotionCard } from './EmotionCard';
import { useQuery } from '@tanstack/react-query';
import request from 'graphql-request';
import { GRAPHQL_ENDPOINT } from '../graphql/endpoint';
import { EMOTIONS_BY_TYPE_QUERY } from '../graphql/queries/emotions-by-type-query';
import { Loading } from './ui/loading/Loading';

type SpecifyEmotionProps = {
  emotionType: 'GOOD' | 'BAD',
};

export const SpecifyEmotion = ({ emotionType }: SpecifyEmotionProps) => {
  const [strongFeelings, setStrongFeelings] = useState<string[]>([]);
  const { data: emotionsData, isLoading } = useQuery({
    queryKey: ['EMOTIONS_BY_TYPE_QUERY'],
    queryFn: () => request(GRAPHQL_ENDPOINT, EMOTIONS_BY_TYPE_QUERY, { emotionType }),
  });
  if (isLoading || emotionsData == null) return <Loading />;

  console.log(emotionsData);

  const emotionOptions = emotionsData.emotions?.data
    .map(data => data.attributes?.name)
    .filter((emotion): emotion is string => emotion != null) ?? [];

  console.log(emotionOptions);

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

  const strongSelect = (e: MouseEvent<HTMLButtonElement>) => {
    console.dir(e.currentTarget.value)
    //setStrongFeeling(e.currentTarget.value)
  };

  return (
    <Container maxWidth='xl'>

      <Typography component='h3' variant='h4'>
        Select the emotions you are feeling
      </Typography>

      <Box sx={{
        mt: 3, display: 'flex', flexDirection: 'row',
        alignItems: 'center'
      }}>
        {emotionOptions.map((emotion) => (
          <Checkbox key={emotion}
            icon={<EmotionCard emotion={emotion} />}
            checkedIcon={<EmotionCard emotion={emotion} />}
            onChange={() => { toggleStrongFeeling(emotion) }}
            checked={strongFeelings.includes(emotion)} />
        ))}
      </Box>

      {/*
      <Box>
        <FormControlLabel
          label='Feeling'
          control={<Checkbox />}
        />
      </Box> */}

    </Container>
  );
};
