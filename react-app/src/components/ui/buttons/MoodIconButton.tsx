import { IconButton } from '@mui/material';
import React, { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { MoodIcon } from '../MoodIcon';
import { Enum_Dailymood_Mood, Enum_Emotion_Emotiontype } from '../../../graphql/generated/graphql';

type MoodIconButtonProps = {
  moodType: Enum_Dailymood_Mood | Enum_Emotion_Emotiontype | null,
  strongEmotion?: boolean,
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const MoodIconButton = ({ moodType, strongEmotion = false, onClick }: PropsWithChildren<MoodIconButtonProps>) => {

  return (
      <IconButton sx={{ color: '#E8EAF6'}} aria-label='add' onClick={onClick}>
        <MoodIcon moodType={moodType} strongEmotion={strongEmotion}/>
      </IconButton>
  )
}
