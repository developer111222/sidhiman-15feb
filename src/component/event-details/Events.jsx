import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllEvents } from '../../action/eventAction';
import ImageUrl from '../../utils/ImageUrl';

const Events = () => {
    const dispatch = useDispatch();
    const { loading, error, events } = useSelector(state => state.events);

    const imageurl=ImageUrl();

    useEffect(() => {
        dispatch(getAllEvents());
    }, [dispatch]);

    console.log(events);

    return (
        <>

        <section className="page-title-area" style={{ backgroundImage: 'url(https://via.placeholder.com/1920x430)' }}>
        <div className="container">
          <div className="title-area-data">
            <h2>Event Details</h2>
            <p>Organisations committed to ending poverty worldwide.</p>
          </div>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Our Event
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Event Details
            </li>
          </ol>
        </div>
      </section>

      <div style={styles.container} className="mt-5">
    {loading ? (
        <p>Loading...</p>
    ) : error ? (
        <p style={styles.error}>{error}</p>
    ) : (
        events?.length > 0 ? (
            events.map(event => (
                <div 
                key={event._id} 
                style={{ ...styles.card, ':hover': styles.cardHover }}  // Apply hover effect
            >
                    {/* Event Image */}
                    <img 
                        src={`${imageurl}/${event.image}`} 
                        alt={event.title} 
                        style={styles.image}
                    />

                    {/* Event Details */}
                    <div style={styles.details}>
                        <h3 style={styles.title}>{event.title}</h3>
                        <p style={styles.date}>
                            📅 {new Date(event.startDate).toDateString()} - {new Date(event.endDate).toDateString()}
                        </p>

                        {/* Location & Read More Section */}
                        <div style={styles.footer}>
                            <p style={styles.location}>📍 {event.location}</p>
                            <a href={`/events/${event.slug}`} style={styles.readMore}>Read More →</a>
                        </div>
                    </div>
                </div>
            ))
        ) : (
            <p>No events available.</p>
        )
    )}
</div>

        </>
    );
};

// **Inline Styles**
const styles = {
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
        padding: '20px',
    },
    card: {
        width: '100%',  
        maxWidth: '320px',  
        background: '#ffffff',
        borderRadius: '12px',
        boxShadow: 'rgba(1, 1, 1, 0.5) 4px 4px 15px',
        overflow: 'hidden',
        textAlign: 'center',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        // border: '2px solid #ff5733',
    },
    cardHover: {
        transform: 'scale(1.05)',
        boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.3)',  // Darker shadow on hover
    },
    image: {
        width: '100%',
        height: '180px',
        objectFit: 'cover',
        borderTopLeftRadius: '12px',
        borderTopRightRadius: '12px',
    },
    details: {
        padding: '16px',
        background: '#fff',
        borderBottomLeftRadius: '12px',
        borderBottomRightRadius: '12px',
    },
    title: {
        fontSize: '18px',
        fontWeight: 'bold',
        marginBottom: '8px',
        color: '#333',
    },
    date: {
        fontSize: '14px',
        color: '#555',
        fontWeight: 'bold',
    },
    footer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '12px',
        paddingTop: '10px',
        borderTop: '1px solid #ddd',
    },
    location: {
        fontSize: '14px',
        color: '#ff5733',
        fontWeight: 'bold',
        marginLeft: '10px',
    },
    readMore: {
        fontSize: '14px',
        color: '#007bff',
        textDecoration: 'none',
        fontWeight: 'bold',
        marginRight: '10px',
        transition: 'color 0.2s ease-in-out',
    },
    readMoreHover: {
        color: '#0056b3',
    },
    error: {
        color: 'red',
        fontSize: '16px',
        textAlign: 'center',
    }
};



export default Events;
