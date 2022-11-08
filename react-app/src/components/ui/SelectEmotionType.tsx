import { Container, Typography, Box, Checkbox } from '@mui/material';
import { MoodIcon } from './MoodIcon';
import { useQuery } from '@tanstack/react-query';
import request from 'graphql-request';
import { GRAPHQL_ENDPOINT } from '../../graphql/endpoint';
import { Loading } from '../ui/loading/Loading';
import { useContext } from 'react';
import { emotionTypeOptions, SelectedEmotionTypeCtx } from '../routes/StrongEmotionPage';
import { Enum_Emotion_Emotiontype } from '../../graphql/generated/graphql';

export const SelectEmotionType = () => {
  const { selectedEmotionType, setSelectedEmotionType } = useContext(SelectedEmotionTypeCtx);

  function onEmotionTypeChange(emotionType: Enum_Emotion_Emotiontype | null): void {
    setSelectedEmotionType(emotionType);
  }

  return (
    <Container maxWidth='xl'>
      <Typography component='h5' variant='h5'>
        Is your strong emotion good or bad?
      </Typography>

      <Box sx={{
        mt: 3, display: 'flex', flexDirection: 'row',
        alignItems: 'center'
      }}>
        {emotionTypeOptions.map(emotionType => (
          <Checkbox key={emotionType}
            icon={<MoodIcon moodType={emotionType} />}
            checkedIcon={<MoodIcon moodType={emotionType} />}
            onChange={() => onEmotionTypeChange(emotionType)}
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
