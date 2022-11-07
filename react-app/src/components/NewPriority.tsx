import React, { useState } from 'react';
import { useStore } from '../stores/useStore';
import { Button, Container} from '@mui/material';
import { AddPriorityField } from './AddPriorityField';

export const NewPriority = () => {
  const { addPriority } = useStore();

  return (
    <Container maxWidth={false} sx={{textAlign: "center"}}>
      <AddPriorityField />
      <Button variant='contained' onClick={() => addPriority("test", parseInt("3"))}>Finish</Button>
    </Container>
  );
};
