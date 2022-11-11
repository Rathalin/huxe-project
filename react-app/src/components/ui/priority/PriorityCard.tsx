import { Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import request from 'graphql-request';
import { GRAPHQL_ENDPOINT } from '../../../graphql/endpoint';
import { PRIORITY_QUERY } from '../../../graphql/queries/priority.query';
import { Loading } from '../loading/Loading';

type PriorityProps = {
  priorityId: string,
}

export const PriorityCard = ({ priorityId }: PriorityProps) => {
  const { data, isLoading } = useQuery({
    queryKey: ['PRIORITY_QUERY', priorityId],
    queryFn: () => request(GRAPHQL_ENDPOINT, PRIORITY_QUERY, { priorityId }),
  });

  if (isLoading) return <Loading />;

  const priority = data?.priority?.data;

  return (
    <Card variant='outlined'
      sx={{
        border: 3,
        borderColor: '#fff',
        borderRadius: 3,
        backgroundColor: '#323463'
      }}>
      <CardHeader title={priority?.attributes?.title} sx={{ textAlign: 'center', my: 1 }} disableTypography={true} />
      <CardMedia
        component='img'
        height='75'
        image='mood1.png'
        alt='priority image'
        sx={{
          objectFit: 'contain'
        }}
      />
      <CardContent sx={{ textAlign: 'right' }}>
        <Typography variant='body2' color='text.secondary'>
          {Math.ceil(((priority?.attributes?.weeklyGoal ?? 1) / 7) * 100)}%
        </Typography>
      </CardContent>
    </Card>
  );
};
