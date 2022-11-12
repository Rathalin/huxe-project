import { Container, Typography, Box, Checkbox } from '@mui/material';
import { MoodIcon } from '../MoodIcon';
import { useContext } from 'react';
import { emotionTypeOptions, SelectedEmotionTypeCtx } from '../../routes/StrongEmotionPage';
import { Enum_Emotion_Emotiontype } from '../../../graphql/generated/graphql';

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
        alignItems: 'center', justifyContent: 'center'
      }}>
        {emotionTypeOptions.map(emotionType => (
          <Checkbox key={emotionType}
            sx={{color: '#fff', transform: 'scale(2)', mx: 2, my: 4,  "&.MuiButtonBase-root:hover": {
              color: "#EDD99D"
            }}}
            disableRipple
            color="secondary"
            icon={<MoodIcon moodType={emotionType} />}
            checkedIcon={<MoodIcon moodType={emotionType} />}
            onChange={() => onEmotionTypeChange(emotionType)}
            checked={selectedEmotionType === emotionType} />
        ))}
      </Box>
    </Container>
  );
};
