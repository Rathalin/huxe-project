import { Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import request from 'graphql-request';
import { GRAPHQL_ENDPOINT } from '../../../graphql/endpoint';
import { PRIORITY_QUERY } from '../../../graphql/queries/priority.query';
import { MEDIA_ENDPOINT } from '../../../utils/media-endpoint';
import { Loading } from '../loading/Loading';

type PriorityProps = {
  priority: {
    title: string,
    image: {
      url: string,
      alt: string,
    }
  }
  progressPercent?: number,
  checked?: boolean,
}

export const PriorityCard = ({ priority, progressPercent, checked = false }: PriorityProps) => {
  const borderColor = checked ? '#FFC107' : '#FFF';

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
        title={priority.title}
        sx={{ textAlign: 'center', my: 1 }}
        disableTypography={true}
      />
      <CardMedia
        component='img'
        height='75'
        image={priority.image.url}
        alt={priority.image.alt}
        sx={{
          objectFit: 'contain'
        }}
      />
      <CardContent sx={{ textAlign: 'right' }}>
        {progressPercent != null &&
          <Typography variant='body2' color='text.secondary'>
            {progressPercent}%
          </Typography>
        }
      </CardContent>
    </Card>
  );
};
