import { Box, Chip } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import request from 'graphql-request';
import { GRAPHQL_ENDPOINT } from '../../../graphql/endpoint';
import { EMOTION_QUERY } from '../../../graphql/queries/emotion.query';
import { NoteCard } from '../notes/NoteCard';

type EmotionCardProps = {
  emotionId: string,
};

export const EmotionCard = ({ emotionId }: EmotionCardProps) => {
  const { data } = useQuery({
    queryKey: ['EMOTION_QUERY', emotionId],
    queryFn: () => request(GRAPHQL_ENDPOINT, EMOTION_QUERY, { emotionId })
  });

  return (
    <Box>
      {data?.strongEmotion?.data?.attributes?.emotions?.data.map((emotion, i) => (
        <Chip key={i} label={emotion?.attributes?.name} variant='outlined' sx={{ mx: 1, fontSize: "1rem" }} />
      ))}
      {data?.strongEmotion?.data?.attributes?.note?.data?.id && <NoteCard noteId={data?.strongEmotion?.data?.attributes?.note?.data?.id!} />}
    </Box>
  );
};
