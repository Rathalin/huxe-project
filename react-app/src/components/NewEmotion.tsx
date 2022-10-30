import { useState } from 'react';
import { useStore } from '../store/useStore';
import { Button, Container, IconButton, styled, ButtonProps } from '@mui/material';

export const NewEmotion = () => {
  const [emotion, setEmotion] = useState('');
  
  const emotionSelect = (e: React.MouseEvent<HTMLButtonElement>) => {
    //console.dir(e.currentTarget.value)
    setEmotion(e.currentTarget.value)
  };

  const MoodButton = styled(IconButton)<ButtonProps>(({ theme }) => ({
    '&:hover': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
    '&:active': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,1)',
      },
    '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,1)',
    },
  }));

  return (
    <Container maxWidth='xl'>

      <h5>Is your strong emotion good or bad?</h5>

      <MoodButton 
        value={"Good"}
        onClick={emotionSelect}>
        <img
        src={`${process.env.PUBLIC_URL}/mood1.png`}
        alt={'good'}/></MoodButton>

      <MoodButton 
        value={"Good"}
        onClick={emotionSelect}>
        <img
        src={`${process.env.PUBLIC_URL}/mood4.png`}
        alt={'good'}/></MoodButton>

    </Container>
  );
};
