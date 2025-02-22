  import React, { useEffect } from 'react';
  import { useDispatch, useSelector } from 'react-redux';
  import {getSingleEvent,ResetClear} from '../../action/eventAction';
  import { useParams } from 'react-router-dom';
  import DOMPurify from 'dompurify';
  import { toast } from 'react-toastify';

  const EventDetails = () => {
  const {id}=useParams();
  const dispatch=useDispatch();

  const {loading,error,event}=useSelector(state=>state.events);

  useEffect(()=>{
    if(error){
    toast.error(error)
    dispatch(ResetClear())
    }
    if(id){
      dispatch(getSingleEvent(id));
      dispatch(ResetClear())
    }
  },[dispatch,error,id])

  console.log(event)


    return (
      <>
        {/* Page Title Area */}
        <section className="page-title-area" style={{ backgroundImage: 'url(https://via.placeholder.com/1920x430)' }}>
          <div className="container">
            <div className="title-area-data">
              <h2>Event Details</h2>
              <p>{event.title}</p>
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

        {/* Event Details Section */}
        <section className="gap">
          <div className="container">
            <div className="event-details hoverimg">
              {/* <figure>
                <img alt="img" src="https://via.placeholder.com/1290x590" />
              </figure> */}
              <div className="event-details-text p-100">
                <div className="upcoming-event-time">
                  <h4>
                  {new Date(event.startDate).toLocaleDateString()}
                  </h4>
                  <div className="upcoming-event-separator"></div>
                  <h4>
                  {new Date(event.endDate).toLocaleDateString()}
                  </h4>
                </div>
                <h2>{event && event.title}</h2>
                <div className="row pt-4 pb-4 align-items-center">
                  <div className="col-lg-4 col-md-6">
                    <div className="event-time">
                      <i className="fa-solid fa-calendar-days"></i>
                      <div>
                        <span>Opening Times</span>
                        <h6>{event.openingTime} - {event.closeTime} </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="event-time">
                      <i className="fa-solid fa-location-dot"></i>
                      <div>
                        <span>Event Location</span>
                        <h6>{event.location}</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="event-time mb-0">
                      <i className="fa-solid fa-ticket"></i>
                      <div>
                        <span>Tickets Information:</span>
                        <h6>Free</h6>
                      </div>
                    </div>
                  </div>
               <div className='mt-5'>
               <p className="pt-4" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(event.content) }}></p>
               </div>
                  
                {/* <div className="contact-map pt-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.27988761215!2d-74.25986708594112!3d40.69767006828117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1670920528913!5m2!1sen!2s"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div> */}
             
                <div className="share-post-icon mt-5">
                  <h6>share post:</h6>
                  <ul className="social-media-icon full">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f icon"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter icon"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-google-plus-g icon"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          </div>
        </section>
      </>
    );
  };

  export default EventDetails;