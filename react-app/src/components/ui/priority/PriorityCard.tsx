import { Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import request from 'graphql-request';
import { GRAPHQL_ENDPOINT } from '../../../graphql/endpoint';
import { PRIORITY_QUERY } from '../../../graphql/queries/priority.query';
import { MEDIA_ENDPOINT } from '../../../utils/media-endpoint';
import { Loading } from '../loading/Loading';

type PriorityProps = {
  priorityId: string,
  hideProgress?: boolean
  borderColor?: string
}

export const PriorityCard = ({ priorityId, hideProgress = false, borderColor = '#fff' }: PriorityProps) => {
  const { data, isLoading } = useQuery({
    queryKey: ['PRIORITY_QUERY', priorityId],
    queryFn: () => request(GRAPHQL_ENDPOINT, PRIORITY_QUERY, { priorityId }),
  });

  if (isLoading) return <Loading />;

  const priority = data?.priority?.data;
  const imageUrl = data?.priority?.data?.attributes?.image?.data?.attributes?.url;

  return (
    <Card variant='outlined'
      sx={{
        border: 3,
        borderColor: borderColor,
        borderRadius: 3,
        backgroundColor: '#323463',
        width: '100%'
      }}>
      <CardHeader
        title={priority?.attributes?.title}
        sx={{ textAlign: 'center', my: 1 }}
        disableTypography={true}
      />
      <CardMedia
        component='img'
        height='75'
        image={imageUrl != null ? MEDIA_ENDPOINT + imageUrl : 'mood1.png'}
        alt={priority?.attributes?.image?.data?.attributes?.alternativeText ?? ''}
        sx={{
          objectFit: 'contain'
        }}
      />
      <CardContent sx={{ textAlign: 'right' }}>
        {!hideProgress &&
          <Typography variant='body2' color='text.secondary'>
            {Math.ceil(((priority?.attributes?.weeklyGoal ?? 1) / 7) * 100)}%
          </Typography>
        }
      </CardContent>
    </Card>
  );
};
