import { Box, Icon, IconButton } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import React, { ButtonHTMLAttributes, PropsWithChildren } from 'react';

type AddButtonProps = {
  Icon: React.ElementType
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const AddButton = ({ Icon, onClick }: PropsWithChildren<AddButtonProps>) => {

  return(
    <Box sx={{
      mt: 3, display: 'flex', flexDirection: 'row',
      alignItems: 'center'
    }}>
    <Icon />
      <IconButton color="primary" aria-label="add" onClick={onClick}>
        <AddBoxIcon />
      </IconButton>
    </Box>
  )
}
