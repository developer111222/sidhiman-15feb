import React, { useState } from 'react';

function DonationPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    amount: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    // Handle form submission and Razorpay logic here...
    alert("Donation Submitted");
  };

  return (
    <>
      <section className="page-title-area" style={{ backgroundImage: "url(https://via.placeholder.com/1920x430)" }}>
        <div className="container">
          <div className="title-area-data">
            <h2>Start Donation</h2>
            <p>Organisations committed to ending poverty worldwide.</p>
          </div>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">Donation</li>
          </ol>
        </div>
      </section>

      <section className="gap">
        <div className="container">
          <form className="donate-page" onSubmit={handleSubmit}>



            <div className="enter-your-information pt-5">
              <div className="enter-your-information-data">
                <h5>Enter your billing information</h5>
                <label>Email Address</label>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <label>Complete Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <label>City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                />
                <label>State</label>
                <div className="d-flex">
                  <input
                    type="text"
                    className="form-control"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="enter-your-information-data payment">
                <h5>Enter Your Payment Information</h5>
                <label htmlFor="phone" className="form-label">
                Phone Number
              </label>
              
                <div className="d-flex">
                <input
                type="tel"
                className="form-control"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />

                </div>

                <label htmlFor="amount" className="form-label">
                  Donation Amount (in INR)
                </label>

                <div className="d-flex">
                  <input
                    type="number"
                    className="form-control"
                    id="amount"
                    name="amount"
                    value={formData.amount}
                    onChange={handleInputChange}
                    required
                  />

                </div>

                <input type="submit" className="give-submit" value="Donate Now" />
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default DonationPage;
