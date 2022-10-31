import {
  AppBar,
  IconButton,
  Menu,
  MenuItem,
  Toolbar, Typography
} from '@mui/material';
import React from 'react';
import { AccountCircle } from '@mui/icons-material';
import { Link, useNavigate  } from 'react-router-dom';
import { useStore } from '../store/useStore';

export const CustomAppbar = () => {
  const { setUsername, setLoggedIn, loggedIn, username } = useStore();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleLogout = () => {
    setUsername("");
    setLoggedIn(false);
    navigate('/login')
  }

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return(
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Mood Tracking
        </Typography>
        {loggedIn && (
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
              <Typography variant="h6" component="span" sx={{ flexGrow: 1 }}>
                Hello, {username}
              </Typography>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>My Priorities</MenuItem>
              <MenuItem onClick={handleClose}>
                <Link to="/">Dashboard</Link></MenuItem>
              <MenuItem onClick={() => { handleClose();handleLogout();}}>Logout</MenuItem>
            </Menu>
          </div>
        )}
      </Toolbar>
    </AppBar>
  )
}
