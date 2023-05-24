import React from 'react';

function Events() {
  const events = [
    {
      id: 1,
      title: 'Event 1',
      date: '2023-05-20',
      description: 'We are group of 5 people helping in building this community website',
      image: 'https://wallpapercave.com/wp/wp7848258.jpg'
    },
  ];

  return (
    <>
      <h1>Event Page</h1>
      {/* Render events */}
      {events.map(event => (
        <div key={event.id}>
          <h2 style={{ color: 'green', fontSize: '24px' }}>{event.title}</h2>
          <p>Date: {event.date}</p>
          <p>{event.description}</p>
          <img src={event.image} alt={event.title} style={{ maxWidth: '300px' }} />
        </div>
      ))}
    </>
  );
}

export default Events;
