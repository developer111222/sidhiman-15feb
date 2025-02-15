import React from 'react'

const Section4 = () => {
  return (
<section className="gap">
  <div className="container">
    <div className="row">
      <div className="col-lg-4 col-md-6">
        <div className="nonprofit">
          <img alt="shaps" src="assets/img/" />
          <p>Nonprofit partners create access to opportunities for </p>
          <div className="justify-content-center d-flex align-items-center">
            <div id="odometer" className="odometer odometer1" data-id="200000">0</div>
            <span>+</span>
          </div>
          <h6>Youth Each Year</h6>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="nonprofit">
          <img alt="shaps" src="assets/img/" />
          <p>Our Partners build the social emotional learning</p>
          <div className="justify-content-center d-flex align-items-center">
            <div id="odometer2" className="odometer odometer2" data-id="100">0</div>
            <span>M</span>
          </div>
          <h6>of young people served</h6>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="nonprofit">
          <img alt="shaps" src="assets/img/" />
          <p>Investing in Generates an 11x return, producing</p>
          <div className="justify-content-center d-flex align-items-center">
            <span>$</span>
            <div id="odometer3" className="odometer odometer3" data-id="1">0</div>
            <span>B+</span>
          </div>
          <h6>in impact since inception</h6>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Section4
