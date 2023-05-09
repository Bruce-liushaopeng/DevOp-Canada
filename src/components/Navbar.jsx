import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <div style={{flex: 1}}>
          <Button color="inherit" href="/"  >
            <Typography variant="h6">
            DevOp Canada
            </Typography>
          </Button>
        </div>
        <Button color="inherit" href="/contact">
          Contact Us
        </Button>
        <Button color="inherit" href="/events">
          Events
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
