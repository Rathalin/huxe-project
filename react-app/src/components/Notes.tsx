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
            //backgroundColor: '#91B7ED',
            margin: '1em'
          }}>
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              {notes.note}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              {notes.date.toString()}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Container>

  )

}
