import { grey } from '@mui/material/colors';
import {
  SentimentVeryDissatisfied,
  SentimentDissatisfied,
  SentimentSatisfied,
  SentimentVerySatisfied,
  SentimentNeutral,
  Circle,
} from '@mui/icons-material';
import { Enum_Dailymood_Mood, Enum_Emotion_Emotiontype } from '../../graphql/generated/graphql';

type MoodIconProps = {
  moodType: Enum_Dailymood_Mood | Enum_Emotion_Emotiontype | null,
  strongEmotion?: boolean, // TODO Display strong emotion icon when true
};

export const MoodIcon = ({ moodType, strongEmotion = false }: MoodIconProps) => {
  let icon: JSX.Element | null;
  switch (moodType) {
    case (Enum_Dailymood_Mood.VeryGood):
      icon = <SentimentVerySatisfied name='veryGood' type='veryGood' />;
      break;
    case (Enum_Dailymood_Mood.Good):
      icon = <SentimentSatisfied name='good' type='good' />;
      break;
    case (Enum_Dailymood_Mood.Neutral):
      icon = <SentimentNeutral name='neutral' type='neutral' />;
      break;
    case (Enum_Dailymood_Mood.Bad):
      icon = <SentimentDissatisfied name='bad' type='bad' />;
      break;
    case (Enum_Dailymood_Mood.VeryBad):
      icon = <SentimentVeryDissatisfied name='veryBad' type='veryBad' />;
      break;
    default:
      // icon = <Circle sx={{ color: grey[500] }} />;
      icon = <Circle sx={{ color: '#323463' }} />;
  }
  return icon;
};
