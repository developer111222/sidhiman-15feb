import React from 'react'

const GenderEquality = () => {
  return (
    <section className='mt-5'>
    <div className="container">
      <div className="heading">
        <img alt="icon" src="assets/img/logo-icon.png" />
        {/* <p>welcome to foundation.</p> */}
        <h2>Gender Equality and Women’s Rights</h2>
      </div>
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="row">
            <div className=" full-width">
              <div className="help-man hovering">
                <figure>
                  <img alt="man" className="w-100" src="assets/img/gender-equality.jpg" />
                </figure>
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
            <p>
            At Sidhiman Foundation, we are committed to breaking gender stereotypes and promoting women’s rights. Through education, skill development, and leadership programs, we empower women to become active participants in decision-making processes and societal growth.

            </p>
            <ul>
              <li><div className="bol"></div>Provide training and resources to support women entrepreneurs.
              </li>
              <li><div className="bol"></div>Advocate for policies that ensure equal opportunities for women in all spheres.
              </li>
              <li><div className="bol"></div>Conduct workshops to raise awareness about gender equality and combat violence against women.

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

export default GenderEquality