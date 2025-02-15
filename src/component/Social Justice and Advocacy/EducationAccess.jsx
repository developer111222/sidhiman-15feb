import React from 'react'

const EducationAccess = () => {
    return (
        <section className='mt-5'>
            <div className="container">
                <div className="heading">
                    <img alt="icon" src="assets/img/logo-icon.png" />
                    {/* <p>welcome to foundation.</p> */}
                    <h2>Education Access and Equity</h2>
                </div>
                <div className="row align-items-center">


                    <div className="col-lg-6 ps-xl-5">
                        <div className="help-man-data">
                            <p>
                                Access to quality education is a basic right, yet many children and adults are deprived of this opportunity due to systemic inequalities.


                            </p>
                            <ul>
                                <li><div className="bol"></div>Work to eliminate barriers to education for marginalized communities.

                                </li>
                                <li><div className="bol"></div>Establish learning centers in remote and underprivileged areas.

                                </li>
                                <li><div className="bol"></div>Provide scholarships, resources, and mentorship to promote equity in education.

                                </li>
                            </ul>
                            {/* <a href="about.html" className="btn"><span>Learn More</span></a> */}
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="row">



                            <div className=" full-width">
                                <div className="help-man hovering">
                                    <figure>
                                        <img alt="man" className="w-100" src="assets/img/education-access.jpg" />
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

                </div>
            </div>
        </section>
    )
}

export default EducationAccess