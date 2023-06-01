import React from "react";
import { useParams } from "react-router-dom";
import { Typography, Divider, TextField, Button, Grid } from "@mui/material";
import { styled } from "@mui/system";
import { DUMMY_EVENTS } from "../dummy";

const BannerImage = styled("div")`
  width: 100%;
  height: 400px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  margin-top: 10px;
  margin-bottom: 12px;
`;

const DescriptionContainer = styled("div")`
  width: 70%;
  margin: 0 auto;
  text-align: left;
`;

const ButtonWrapper = styled("div")`
  display: flex;
  justify-content: flex-end;
`;

const ReserveContainer = styled("div")`
  width: 70%;
  margin: 16px auto;
  text-align: left;
`;

const ReserveButton = styled(Button)`
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  margin-top: 16px;
  text-align: left;
`;

const EventDetailsPage = () => {
  const { id } = useParams();
  const event = DUMMY_EVENTS.find((event) => event.id === id);

  if (!event) {
    return <div>Event not found</div>;
  }

  const imageURL = `../../public/${event.image}`;
  return (
    <div>
      <BannerImage image={imageURL} />
      <div
        style={{
          textAlign: "center",
          marginTop: "16px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <Typography variant="h4" component="h1">
          {event.title}
        </Typography>

        <Typography variant="subtitle1" color="textSecondary">
          Date: {event.date}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Time: {event.time}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Guest: {event.guest}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Location: {event.location}
        </Typography>
        <Divider sx={{ margin: "10px 50px" }} />

        <DescriptionContainer>
          <Typography variant="h6" color="textSecondary">
            Event Description
          </Typography>
          <Typography variant="body1" style={{ marginTop: "16px" }}>
            {event.description}
          </Typography>
        </DescriptionContainer>

        <ReserveContainer>
          <Typography variant="h6" color="textSecondary">
            Reserve Your Spot
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <TextField label="First Name" fullWidth margin="normal" />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <TextField label="Last Name" fullWidth margin="normal" />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <TextField label="Email" fullWidth margin="normal" />
            </Grid>
          </Grid>
          <ButtonWrapper>
            <ReserveButton variant="contained" color="primary">
              Reserve
            </ReserveButton>
          </ButtonWrapper>
        </ReserveContainer>
      </div>
    </div>
  );
};

export default EventDetailsPage;
