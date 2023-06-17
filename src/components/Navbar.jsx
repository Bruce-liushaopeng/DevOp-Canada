import React from "react";
import { AppBar, Toolbar, Typography, Button, Link } from "@mui/material";

function Navbar() {
  return (
    <AppBar position="static" style={{marginBottom: "10px"}}>
      <Toolbar>
        <div style={{ flex: 1 }}>
          <Button color="inherit" href="/">
            <Typography variant="h6">DevOps Canada Community of Practice</Typography>
          </Button>
        </div>
        <Button color="inherit" href="/contact">
          Contact Us
        </Button>
        <Button color="inherit" href="/events">
          Events
        </Button>
        <Button color="inherit" href="/about">
          About Us
        </Button>
        <Button color="inherit" href="/blog">
          Blog
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
