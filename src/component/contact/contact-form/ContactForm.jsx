import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    question: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // You can replace this with a function to send the data
  };

  return (
    <section className="contact-form">
      <div className="container">
        <div className="heading">
          <p>If you have any questions</p>
          <h2>Don't be a stranger just say hello.</h2>
        </div>
        <div className="dont-stranger">
          <div className="row">
            <div className="col-lg-6">
              <div className="contact-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.27988761215!2d-74.25986708594112!3d40.69767006828117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1670920528913!5m2!1sen!2s"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="comment p-0">
                <form className="leave-comment" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Complete Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone No"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <textarea
                    name="question"
                    placeholder="Question"
                    value={formData.question}
                    onChange={handleChange}
                  ></textarea>
                  <button className="btn">
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
