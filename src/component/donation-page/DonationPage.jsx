import React, { useState } from 'react';

import axios from 'axios';
import { toast } from 'react-toastify';
import { createPaymentOrder, verifyPayment } from '../../action/paymentAction';
import { useDispatch,useSelector } from 'react-redux';

function DonationPage() {

  // const { error, isLoading, Razorpay } = useRazorpay();
const dispatch=useDispatch()

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

//   const handleSubmit = async (e) => {
// e.preventDefault()

//     if (!formData.amount || formData.amount <= 0) {
//       alert("Please enter a valid amount");
//       return;
//     }

//     try {
//       // Step 1: Create order from backend
//       const response = await axios.post("http://localhost:5000/api/create-order", formData);
//       const { order } = response.data;
// console.log(order,"order -data")
//       // Step 2: Open Razorpay Payment Window
//       const options = {
//         key: "rzp_test_qEmBTt5Ssq87mn", // Replace with your Razorpay Key
//         amount: order.amount,
//         currency: "INR",
//         name: "Test Company",
//         description: "Donation Payment",
//         order_id: order.id,
//         handler: async function (response) {
//           // Step 3: Verify payment
//           const verifyResponse = await axios.post("http://localhost:5000/api/verify-payment", {
//             orderId: order.id,
//             paymentId: response.razorpay_payment_id,
//             signature: response.razorpay_signature,
//           });

//           if (verifyResponse.data.success) {
//             alert("Payment Successful!");
//           } else {
//             alert("Payment Verification Failed!");
//           }
//         },
//         prefill: {
//           name: formData.name,
//           email: formData.email,
//           contact: formData.phone,
//         },
//         theme: { color: "#3399cc" },
//       };

//       const razorpayInstance = new window.Razorpay(options);
//       razorpayInstance.open();
//     } catch (error) {
//       console.error(error);
//       alert("Error in payment processing!");
//     }
//   };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.amount || formData.amount <= 0) {
      alert("Please enter a valid amount");
      return;
    }

    try {
      // Step 1: Create order using Redux action
      const order = await dispatch(createPaymentOrder(formData));

      // Step 2: Open Razorpay Payment Window
      const options = {
        key: "rzp_test_qEmBTt5Ssq87mn", // Replace with your Razorpay Key
        amount: order.amount,
        currency: "INR", 
        name: "Test Company",
        description: "Donation Payment",
        order_id: order.id,
        handler: async function(response) {
          // Step 3: Verify payment using Redux action
          const verifyResponse = await dispatch(verifyPayment({
            orderId: order.id,
            paymentId: response.razorpay_payment_id,
            signature: response.razorpay_signature
          }));

          if (verifyResponse.success) {
            toast.success("Payment Successful!");
            setFormData({
              name: "",
              email: "",
              phone: "",
              city: "",
              state: "",
              amount: "",
            })
            window.location.href = "/";
          } else {
            toast.error("Payment Verification Failed!");
          }
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone
        },
        theme: { color: "#3399cc" }
      };

      const razorpayInstance = new window.Razorpay(options);
      razorpayInstance.open();

    } catch (error) {
      console.error(error);
      toast.error("Error in payment processing!");
    }
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
                  required
                />
                <label>Complete Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                <label>City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
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
                {/* {isLoading && <p>Loading Razorpay...</p>}
                {error && <p>Error loading Razorpay: {error}</p>} */}
                <input type="submit" className="give-submit" value="Donate Now"   />

           
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default DonationPage;
