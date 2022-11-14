import { IconButton } from '@mui/material';
import React, { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { MoodIcon } from '../MoodIcon';
import { Enum_Dailymood_Mood, Enum_Emotion_Emotiontype } from '../../../graphql/generated/graphql';
import NewReleasesIcon from '@mui/icons-material/NewReleases';

type MoodIconButtonProps = {
  moodType: Enum_Dailymood_Mood | Enum_Emotion_Emotiontype | null,
  strongEmotion?: boolean,
  highlight?: boolean,
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const MoodIconButton = ({
  moodType,
  strongEmotion = false,
  highlight = false,
  onClick
}: PropsWithChildren<MoodIconButtonProps>) => {

  return (
    <IconButton sx={{ color: highlight ? '#FFC107' : '#E8EAF6', position: 'relative' }} aria-label='add' onClick={onClick} >
      <MoodIcon moodType={moodType} highlight={highlight === true} />
      {strongEmotion && <NewReleasesIcon sx={{ position: 'absolute', width: '15px', height: '15px', top: '0', right: '0' }} />}
    </IconButton>
  );
};
