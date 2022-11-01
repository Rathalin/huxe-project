import React, { PropsWithChildren } from 'react';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';

export const moodSmileys = {
  'veryGood': <SentimentVerySatisfiedIcon name='veryGood' type='veryGood'/>,
  'good': <SentimentSatisfiedIcon name='good' type='good'/>,
  'neutral': <SentimentNeutralIcon name='neutral' type='neutral'/>,
  'bad': <SentimentDissatisfiedIcon name='bad' type='bad' />,
  'veryBad': <SentimentVeryDissatisfiedIcon name='veryBad' type='veryBad' />
};

type MoodIconProps = {
  moodType: string
};


function hasKey<O>(obj: O, key: PropertyKey): key is keyof O {
  return key in obj
}

export const MoodIcon = ({ moodType }: PropsWithChildren<MoodIconProps>) => {
  return (
    <React.Fragment>
      {
        hasKey(moodSmileys, moodType) ? moodSmileys[moodType] : ""
      }
    </React.Fragment>
  );
};
