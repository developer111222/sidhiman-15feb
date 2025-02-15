import React from 'react'

const OurApproach = () => {
  return (
    <section>
    <div className="container">
      <div className="heading">
        <img alt="icon" src="assets/img/logo-icon.png" />
        <p>welcome to foundation.</p>
        <h2>OUR APPROACH</h2>
      </div>
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="row">
            <div className="col-8">
              <div className="help-man hovering">
                <figure>
                  <img alt="man" className="w-100" src="assets/img/help-img-1.jpg" />
                </figure>
                <h5>Our Approach</h5>
              </div>
            </div>
            <div className="col-4">
              <div className="help-man hoverimg">
                <img alt="man" className="helptwo" src="assets/img/help-img-2.jpg" />
                <figure>
                  <img alt="man" className="w-100 mt-4" src="assets/img/help-img-3.jpg" />
                </figure>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 ps-xl-5">
          <div className="help-man-data">
            <p>
            We work closely with communities to identify gaps in education and provide them with solutions. From establishing learning centers to fostering a culture of continuous growth, we ensure that education reaches every corner. In line with Gandhiji's emphasis on education, we work to provide rural communities with access to quality education and skills training. Education, for Gandhi, was the gateway to freedom, dignity, and empowerment. Sidhiman Foundation is dedicated to bringing educational opportunities to rural children and adults, helping them break the cycle of poverty and become self-reliant.
            </p>
            <ul>
              <li><div className="bol"></div>Establishing learning centers in remote areas to promote literacy and digital learning.</li>
              <li><div className="bol"></div>Offering vocational training programs in fields like agriculture, tailoring, and handicrafts to equip individuals with skills that can help them generate income.
              </li>
              <li><div className="bol"></div>Providing scholarships and mentorship for rural students to pursue higher education and career opportunities.</li>
            </ul>
            {/* <a href="about.html" className="btn"><span>Learn More</span></a> */}
          </div>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default OurApproach
