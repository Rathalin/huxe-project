import { useState } from 'react';
import { useStore } from '../stores/useStore';
import { Button, Container, IconButton, styled, ButtonProps, Typography, Box, Checkbox } from '@mui/material';
import { MOODS } from '../utils/utils';
import { MoodIcon } from './MoodIcon';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

export const NewEmotion = () => {
  //const [emotion, setEmotion] = useState('');
  //const { addEmotion } = useStore();
  const [selectedEmotion, setSelectedEmotion] = useState("")

  const handleSelect = () => {
    //addEmotion(selectedEmotion)
    //navigate("/dashboard")
  }


  // const emotionSelect = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   //console.dir(e.currentTarget.value)
  //   setEmotion(e.currentTarget.value)
  // };

  // const MoodButton = styled(IconButton)<ButtonProps>(({ theme }) => ({
  //   '&:hover': {
  //     boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  //   },
  //   '&:active': {
  //     boxShadow: '0 0 0 0.2rem rgba(0,123,255,1)',
  //   },
  //   '&:focus': {
  //     boxShadow: '0 0 0 0.2rem rgba(0,123,255,1)',
  //   },
  // }));

  return (
    <Container maxWidth='xl'>

      <Typography component='h3' variant='h4'>
        Is your strong emotion good or bad?
      </Typography>

      <Box sx={{
          mt: 3, display: 'flex', flexDirection: 'row',
          alignItems: 'center'
        }}>
            <Checkbox key={'good'} 
              icon={<MoodIcon moodType={'veryGood'} />} 
              checkedIcon={<MoodIcon moodType={'veryGood'} />} 
              onChange={() => { setSelectedEmotion("good"); handleSelect() }} 
              checked={selectedEmotion === "good"} />       

            <Checkbox key={'bad'} 
              icon={<MoodIcon moodType={'veryBad'} />} 
              checkedIcon={<MoodIcon moodType={'veryBad'} />} 
              onChange={() => { setSelectedEmotion("bad"); handleSelect() }} 
              checked={selectedEmotion === "bad"} /> 
        </Box>

      {/* <MoodButton
        value={"Good"}
        onClick={emotionSelect}>
        <img
          src={`${process.env.PUBLIC_URL}/mood1.png`}
          alt={'good'} /></MoodButton>

      <MoodButton
        value={"Good"}
        onClick={emotionSelect}>
        <img
          src={`${process.env.PUBLIC_URL}/mood4.png`}
          alt={'good'} /></MoodButton> */}

    </Container>
  );
};
