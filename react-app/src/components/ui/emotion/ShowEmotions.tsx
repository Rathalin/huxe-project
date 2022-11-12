import { EmotionCard } from './EmotionCard';
import { Box } from '@mui/material';

type ShowEmotionsProps = {
  emotionIds: string[],
}

export const ShowEmotions = ({ emotionIds }: ShowEmotionsProps) => {
  return (
    <Box sx={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
      {emotionIds.map((emotionId) => (
      <EmotionCard key={emotionId} emotionId={emotionId} />
      ))}
    </Box>
  );
};
