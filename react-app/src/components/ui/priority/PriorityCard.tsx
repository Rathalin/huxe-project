import { Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';

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
};

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
