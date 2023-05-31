import React from 'react';
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { DUMMY_EVENTS } from '../dummy'; // Import the DUMMY_EVENTS array

const EventCard = styled(Card)`
  border-radius: 8px;
  overflow: hidden;
`;


function Events() {
  return (
    <>
      <div style={{ marginTop: '20px' }}></div>
      <Grid container spacing={2}>
        {DUMMY_EVENTS.map((event) => (
          <Grid item key={event.title} xs={12} sm={6} md={6} lg={3}>
            <EventCard>
              <CardMedia component="img" height="200" image={event.image} alt={event.title} />
              <CardContent>
                <Typography variant="h6" component="div" gutterBottom>
                  {event.title}
                </Typography>
                <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                  Date: {event.date}
                </Typography>
                <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                  Guest: {event.guest}
                </Typography>
                <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                  Location: {event.location}
                </Typography>
              </CardContent>
            </EventCard>
          </Grid>
        ))}
      </Grid>
      <div style={{ marginTop: '50px' }}></div>
    </>
  );
}

export default Events;
