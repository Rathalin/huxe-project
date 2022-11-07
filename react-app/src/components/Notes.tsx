import { useStore } from '../stores/useStore';
import { Card, CardContent, Container, Typography } from '@mui/material';


export const Notes = () => {
  const { notes } = useStore();

  return (
    <Container maxWidth='xl'>
      {notes.map((notes) => (
        <Card
          variant='outlined'
          sx={{
            border: 3,
            borderColor: '#fff',
            borderRadius: 3,
            backgroundColor: '#323463',
            margin: '1em 0px'
          }}>
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              {notes.note}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              {notes.date.toLocaleString()}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Container>

  )

}
