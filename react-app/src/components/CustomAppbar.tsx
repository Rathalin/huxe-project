import {
  AppBar,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import { useState, MouseEvent } from 'react';
import { AccountCircle } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../stores/authStore';

export const CustomAppbar = () => {
  const { user, logout } = useAuthStore();
  const loggedIn = user != null;
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  function handleLogout() {
    logout();
    navigate('/login');
  }

  function handleMenu(event: MouseEvent<HTMLElement>) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          <Link to='/dashboard' style={{ textDecoration: 'none', color: 'inherit' }}>
            Mood Tracking
          </Link>
        </Typography>
        {loggedIn && (
          <div>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleMenu}
              color='inherit'
              sx={{ gap: 1 }}
            >
              <AccountCircle />
              <Typography variant='h6' component='span' sx={{ flexGrow: 1 }}>
                Hello, {user.username}
              </Typography>
            </IconButton>
            <Menu
              id='menu-appbar'
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
                <Link to='/'>Dashboard</Link></MenuItem>
              <MenuItem onClick={() => { handleClose(); handleLogout(); }}>Logout</MenuItem>
            </Menu>
          </div>
        )}
      </Toolbar>
    </AppBar>
  )
}
