import React from 'react'

const Section2 = () => {
  return (
    <section className="gap">
    <div className="container">
      <div className="heading">
        <img alt="icon" src="assets/img/logo-icon.png" />
        <p>working on charity</p>
        <h2>We help communities to be self-reliant</h2>
      </div>
      <div className="row">
        <div className="col-lg-5">
          {/* <div className="about-text"> */}
            <div className="poor-boy-data">
              <h3 style={{ color: '#bf2828',fontSize:'26px' }}>Our Mission</h3>
            </div>
            <p>
            At Sidhiman Foundation, our mission is to empower diverse communities by fostering economic autonomy through small-scale industries, skill development, and sustainable practices. We aim to alleviate poverty, promote equitable resource distribution, and nurture a decentralized economy prioritizing human dignity, environmental stewardship, and social justice. Through innovative local solutions, we endeavor to make a lasting impact on lives while addressing contemporary challenges in a rapidly globalizing world.

            </p>
           
          {/* </div> */}
        </div>
        <div className="offset-lg-1 col-lg-5">
      
          <div className="poor-boy-data">
            <h3 style={{ color: '#bf2828' }}>Our Vision</h3>
            <p>
            To build a self-reliant and sustainable society where every individual, regardless of their background, has access to resources, dignity in labor, and growth opportunities. Guided by principles of fairness, community empowerment, and environmental sustainability, we strive to create a harmonious balance between local solutions and global challenges.

            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="about-img hoverimg">
            <figure>
              <img alt="img" src="assets/img/dummy3.jpg" style={{ height: '350px' }} />
            </figure>
          </div>
        </div>
        <div className="col-md-6">
          <div className="about-img hoverimg">
            <figure>
              <img alt="img" src="assets/img/dummy5.jpg" style={{ height: '350px' }} />
            </figure>
          </div>
        </div>
      </div>
    </div> 
  </section>
  
  )
}

export default Section2
