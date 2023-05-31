import React from 'react';
import { useParams } from 'react-router-dom';

const EventDetailsPage = () => {
  const { id } = useParams();

  // Fetch event details based on the id and display the content

  return (
    <div>
      <h2>Event Details</h2>
      <p>Event ID: {id}</p>
      {/* Display other event details based on the fetched data */}
    </div>
  );
};

export default EventDetailsPage;