import React from 'react'

const RuralWhatDo = () => {
  return (
    <section>
    <div className="container mt-5">
      <div className="heading">
        <img alt="icon" src="assets/img/logo-icon.png" />
        <p>Access to Education and Skills Development</p>
        <h2>What We Do</h2>
      </div>
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="row">
            <div className="full-width">
              <div className="">
                <figure style={{borderRadius:'30px'}}>
                  {/* <img alt="man" className="w-100" src="assets/img/help-img-1.jpg" /> */}
                <img alt="man" className="helptwo" src="assets/img/ruraldo.png"  />
                {/* <img src="https://csrbox.org/company/proj_img/1495428844Rural.PNG" /> */}
                {/* </figure>
                <h5>Our Approach</h5>
              </div>
            </div>
            <div className="col-4">
              <div className="help-man hoverimg">
                <figure> */}
                  {/* <img alt="man" className="w-100 mt-4" src="assets/img/help-img-3.jpg" /> */}
                </figure>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 ps-xl-5">
          <div className="help-man-data">
            <p>
            In line with Gandhiji's emphasis on education, we work to provide rural communities with access to quality education and skills training. Education, for Gandhi, was the gateway to freedom, dignity, and empowerment. Sidhiman Foundation is dedicated to bringing educational opportunities to rural children and adults, helping them break the cycle of poverty and become self-reliant.

            </p>
            <ul>
              <li><div className="bol"></div>Establishing learning centers in remote areas to promote literacy and digital learning.</li>
              <li><div className="bol"></div>Offering vocational training programs in fields like agriculture, tailoring, and handicrafts to equip individuals with skills that can help them generate income.</li>
              <li><div className="bol"></div>Providing scholarships and mentorship for rural students to pursue higher education and career opportunities.
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

export default RuralWhatDo