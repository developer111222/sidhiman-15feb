import React from 'react'

const HumanRIghts = () => {
  return (
    <section className='m-5'>
    <div className="container">
        <div className="heading">
            <img alt="icon" src="assets/img/logo-icon.png" />
            {/* <p>welcome to foundation.</p> */}
            <h2>Global Human Rights and Advocacy
            </h2>
        </div>
        <div className="row align-items-center">


            <div className="col-lg-6 ps-xl-5">
                <div className="help-man-data">
                    <p>
                    Human rights are universal, and their protection is essential for global harmony and progress. At Sidhiman Foundation, we work tirelessly to uphold these rights by advocating for marginalized populations and addressing social injustices.


                    </p>
                    <ul>
                        <li><div className="bol"></div>Raise awareness about human rights violations and promote accountability.

                        </li>
                        <li><div className="bol"></div>Partner with local and international organizations to drive impactful advocacy campaigns.


                        </li>
                        <li><div className="bol"></div>Support initiatives aimed at eradicating exploitation, discrimination, and poverty.


                        </li>
                    </ul>
                    {/* <a href="about.html" className="btn"><span>Learn More</span></a> */}
                    <p>Through our commitment to social justice and advocacy, the Sidhiman Foundation strives to create a world where fairness, equity, and dignity are upheld for every individual. Together, we can build a society that values compassion, inclusivity and shared progress.</p>
                </div>
            </div>

            <div className="col-lg-6">
                <div className="row">



                    <div className=" full-width">
                        <div className="help-man hovering">
                            <figure>
                                <img alt="man" className="w-100" src="assets/img/human-right.jpg" />
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

export default HumanRIghts