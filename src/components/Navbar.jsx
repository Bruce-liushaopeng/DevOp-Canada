import React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

function Navbar() {
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            DevOp Canada
          </Typography>
          <Button color="inherit" href="/contact">Contact Us</Button>
          <Button color="inherit" href="/events">Events</Button>
        </Toolbar>
      </AppBar>
    );
  }
  
  export default Navbar;