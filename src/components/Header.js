import React from 'react';
import { AppBar, Toolbar, Typography, Avatar, Button } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static" style={{ background: '#2D5B57' }}>
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6">Creative Space</Typography>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="body1" style={{ marginRight: '10px' }}>Maksym K.</Typography>
          <Avatar style={{ marginRight: '10px' }}>M</Avatar>
          <Button variant="contained" color="primary">Join</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
