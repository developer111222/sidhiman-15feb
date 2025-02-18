import React, { useEffect, useRef } from 'react';


const TestDonation = () => {
  const formRef = useRef(null);

 useEffect(() => {
    let script;
    if (formRef.current) {
      // Create the script element
      script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
      script.setAttribute('data-payment_button_id', 'pl_Px3HUWJ7CwbVTz'); // Replace with your actual payment button id
      script.async = true;

      // Append the script inside the form tag
      formRef.current.appendChild(script);
    }

    // Cleanup function to remove the script when the component unmounts
    return () => {
      if (formRef.current && script && formRef.current.contains(script)) {
        formRef.current.removeChild(script);
      }
    };
  }, []);

  return (
    <div style={{ marginTop: '200px' }}>
      <form ref={formRef}>
        {/* The Razorpay payment button will be rendered by the script */}
      </form>
    </div>
  );
};

export default  TestDonation;
