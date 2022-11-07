import { grey } from '@mui/material/colors';
import {
  SentimentVeryDissatisfied,
  SentimentDissatisfied,
  SentimentSatisfied,
  SentimentVerySatisfied,
  SentimentNeutral,
  Circle,
} from '@mui/icons-material';

type MoodIconProps = {
  moodType: string,
  strongEmotion?: boolean, // TODO Display strong emotion icon when true
};

export const MoodIcon = ({ moodType, strongEmotion = false }: MoodIconProps) => {
  let icon: JSX.Element | null;
  switch (moodType) {
    case ('veryGood'):
      icon = <SentimentVerySatisfied name='veryGood' type='veryGood' />;
      break;
    case ('good'):
      icon = <SentimentSatisfied name='good' type='good' />;
      break;
    case ('neutral'):
      icon = <SentimentNeutral name='neutral' type='neutral' />;
      break;
    case ('bad'):
      icon = <SentimentDissatisfied name='bad' type='bad' />;
      break;
    case ('veryBad'):
      icon = <SentimentVeryDissatisfied name='veryBad' type='veryBad' />;
      break;
    default:
      // icon = <Circle sx={{ color: grey[500] }} />;
      icon = <Circle sx={{ color: '#323463' }} />;
  }
  return icon;
};
