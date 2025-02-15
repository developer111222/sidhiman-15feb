import React from 'react'

const WhatWeDo = () => {
  return (
    <section className='mt-5'>
    <div className="container">
      <div className="heading">
        <img alt="icon" src="assets/img/logo-icon.png" />
        {/* <p>welcome to foundation.</p> */}
        <h2>What We Do</h2>
      </div>
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="row">
            <div className="full-width">
              <div className="">
                {/* <figure> */}
                  <img alt="man" className="w-100" src="assets/img/social-justice-do.png" style={{borderRadius:'30px'}} />
                {/* </figure> */}
                {/* <h5>Our Approach</h5> */}
              </div>
            </div>
            {/* <div className="col-4">
              <div className="help-man hoverimg">
                <img alt="man" className="helptwo" src="assets/img/help-img-2.jpg" />
                <figure>
                  <img alt="man" className="w-100 mt-4" src="assets/img/help-img-3.jpg" />
                </figure>
              </div>
            </div> */}
          </div>
        </div>
        <div className="col-lg-6 ps-xl-5">
          <div className="help-man-data">
            {/* <p>
              Lorem ipsum dolor sit amet, consect etur adipis elit. Aenean egestas magna at porttitor vehicula lam augue lorem ipsum dolor sit amet Lorem ips dolor sit amet, consect etur adipiscing elit.
            </p> */}
            <ul>
              <li><div className="bol"></div>Advocate for equitable access to education and healthcare for underserved communities.</li>
              <li><div className="bol"></div>Raise awareness about pressing social issues like gender discrimination, poverty, and child exploitation.</li>
              <li><div className="bol"></div>Collaborate with policymakers to draft and implement inclusive policies.
              </li>
            </ul>
            {/* <a href="about.html" className="btn"><span>Learn More</span></a> */}
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default WhatWeDo