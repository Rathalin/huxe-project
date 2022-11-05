import { useState } from 'react';
import { useStore } from '../stores/useStore';
import { Button, Container, IconButton, styled, ButtonProps, Typography, Box, Checkbox } from '@mui/material';
import { MOODS } from '../utils/utils';
import { MoodIcon } from './MoodIcon';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import { useQuery } from '@tanstack/react-query';
import request from 'graphql-request';
import { GRAPHQL_ENDPOINT } from '../graphql/endpoint';
import { EMOTION_TYPES_QUERY } from '../graphql/queries/emotion-types.query';
import { Loading } from './ui/loading/Loading';

export const SelectEmotionType = () => {
  const [selectedEmotionType, setSelectedEmotionType] = useState<string | null>(null);

  const { data, isLoading } = useQuery({
    queryKey: ['EMOTION_TYPES_QUERY'],
    queryFn: () => request(GRAPHQL_ENDPOINT, EMOTION_TYPES_QUERY),
  });

  if (isLoading) return <Loading />;

  const emotionTypes = data?.emotionTypes?.data
    .map(emotionType => emotionType.attributes?.name)
    .filter((emotionTypeName): emotionTypeName is string => emotionTypeName != null) ?? [];

  return (
    <Container maxWidth='xl'>

      <Typography component='h3' variant='h4'>
        Is your strong emotion good or bad?
      </Typography>

      <Box sx={{
        mt: 3, display: 'flex', flexDirection: 'row',
        alignItems: 'center'
      }}>
        {emotionTypes.map(emotionType => (
          <Checkbox key={emotionType}
            icon={<MoodIcon moodType={emotionType.toLowerCase()} />}
            checkedIcon={<MoodIcon moodType={emotionType.toLowerCase()} />}
            onChange={() => { setSelectedEmotionType(emotionType); }}
            checked={selectedEmotionType === emotionType} />
        ))}
      </Box>

      {/* <MoodButton
        value={'Good'}
        onClick={emotionSelect}>
        <img
          src={`${process.env.PUBLIC_URL}/mood1.png`}
          alt={'good'} /></MoodButton>

      <MoodButton
        value={'Good'}
        onClick={emotionSelect}>
        <img
          src={`${process.env.PUBLIC_URL}/mood4.png`}
          alt={'good'} /></MoodButton> */}

    </Container>
  );
};
