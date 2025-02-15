import React from 'react';

const EventDetails = () => {
  return (
    <>
      {/* Page Title Area */}
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

      {/* Event Details Section */}
      <section className="gap">
        <div className="container">
          <div className="event-details hoverimg">
            <figure>
              <img alt="img" src="https://via.placeholder.com/1290x590" />
            </figure>
            <div className="event-details-text p-100">
              <div className="upcoming-event-time">
                <h4>
                  27<span>Jul<br />2023</span>
                </h4>
                <div className="upcoming-event-separator"></div>
                <h4>
                  30<span>Sep<br />2023</span>
                </h4>
              </div>
              <h2>Trustee Leadership Programme – London Event Program Spring 2023</h2>
              <div className="row pt-4 pb-4 align-items-center">
                <div className="col-lg-4 col-md-6">
                  <div className="event-time">
                    <i className="fa-solid fa-calendar-days"></i>
                    <div>
                      <span>Opening Times</span>
                      <h6>Mon - Thu 9am - 5pm</h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="event-time">
                    <i className="fa-solid fa-location-dot"></i>
                    <div>
                      <span>Event Location</span>
                      <h6>London Park Uk</h6>
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
                <div className="col-lg-6">
                  <div className="organizer">
                    <img alt="man" src="https://via.placeholder.com/90x90" />
                    <div>
                      <h4>Walkar Thomas</h4>
                      <h6>Event Organizer, Director NGO</h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="organizer">
                    <img alt="man" src="https://via.placeholder.com/90x90" />
                    <div>
                      <h4>Willimes Domson</h4>
                      <h6>Charity Speaker</h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <p className="pt-4 pb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    <br />
                    <br />
                    Magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
                <div className="col-lg-5">
                  <div className="event-img-two">
                    <figure>
                      <img alt="img" src="https://via.placeholder.com/440x460" />
                    </figure>
                  </div>
                </div>
                <div className="col-lg-7 ps-sm-5">
                  <p className="pb-4">
                    Duis sed odio sit amet nibh vulputate cursus a amet ma san ip veli Nam nec tellus a odio tincidunt auct ursus mauris Morbi ac msan ipsuy veli Nam nec per tora tor ec tellus. cursus a amet m accumsan ipsuy veli Nam cumsan ipsuy veli Nam nec perus. a Nam nec per tora tor ec tellus. cursus
                  </p>
                  <ul className="team-list">
                    <li>
                      <i className="fa-regular fa-circle-check"></i>Watch the Bathroom Sessions
                    </li>
                    <li>
                      <i className="fa-regular fa-circle-check"></i>Find everything you need to get fundraising from the comfort
                    </li>
                    <li>
                      <i className="fa-regular fa-circle-check"></i>Order a personalised present
                    </li>
                    <li>
                      <i className="fa-regular fa-circle-check"></i>What have you given today.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="youtube-video mt-5 mb-5 hoverimg">
                <a data-fancybox="" href="https://www.youtube.com/watch?v=1La4QzGeaaQ">
                  <i>
                    <svg
                      enableBackground="new 0 0 437.499 437.499"
                      height="512"
                      viewBox="0 0 437.499 437.499"
                      width="512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m46.875 437.498c-2.67 0-5.341-.687-7.751-2.06-4.868-2.777-7.874-7.95-7.874-13.566v-406.27c0-5.616 3.006-10.789 7.874-13.566 4.913-2.762 10.88-2.701 15.701.107l343.749 203.136c4.761 2.823 7.675 7.935 7.675 13.459s-2.914 10.636-7.675 13.459l-343.749 203.135c-2.457 1.435-5.204 2.167-7.95 2.166zm15.625-394.521v351.521l297.409-175.76z" />
                    </svg>
                  </i>
                </a>
                <figure>
                  <img alt="img" src="https://via.placeholder.com/1070x470" />
                </figure>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="obviously">
                <h3>There is obviously a lot of uncertainty but that doesn’t have to be a scary thing, as the great Yogi Berra said,</h3>
              </div>
              <div className="row pt-4">
                <div className="col-lg-4 col-md-4 col-sm-6 hoverimg">
                  <div className="event-details-img">
                    <figure>
                      <img alt="img" className="w-100" src="https://via.placeholder.com/349x365" />
                    </figure>
                  </div>
                  <div className="event-details-img">
                    <figure>
                      <img alt="img" className="w-100" src="https://via.placeholder.com/349x251" />
                    </figure>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="event-details-img">
                    <figure>
                      <img alt="img" className="w-100" src="https://via.placeholder.com/349x251" />
                    </figure>
                  </div>
                  <div className="event-details-img">
                    <figure>
                      <img alt="img" className="w-100" src="https://via.placeholder.com/349x365" />
                    </figure>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="event-details-img">
                    <figure>
                      <img alt="img" className="w-100" src="https://via.placeholder.com/349x251" />
                    </figure>
                  </div>
                  <div className="event-details-img">
                    <figure>
                      <img alt="img" className="w-100" src="https://via.placeholder.com/349x365" />
                    </figure>
                  </div>
                </div>
              </div>
              <p className="pt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                <br />
                <br />
                Magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="contact-map pt-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.27988761215!2d-74.25986708594112!3d40.69767006828117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1670920528913!5m2!1sen!2s"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <p className="pt-4">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
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
      </section>
    </>
  );
};

export default EventDetails;