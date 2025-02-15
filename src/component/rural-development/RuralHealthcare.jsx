import React from 'react'

const RuralHealthcare = () => {
  return (
    <section className='mt-5'>
    <div className="container">
        <div className="heading">
            <img alt="icon" src="assets/img/logo-icon.png" />
            {/* <p>welcome to foundation.</p> */}
            <h2>Healthcare and Rural Health Systems</h2>
        </div>
        <div className="row align-items-center">


            <div className="col-lg-6 ps-xl-5">
                <div className="help-man-data">
                    <p>
                    Gandhi advocated for a simple, decentralized healthcare system that could serve the rural population effectively. He believed in self-reliance and ensuring that every community had access to basic healthcare services. Sidhiman Foundation follows Gandhiji’s principles by strengthening rural health systems and providing accessible medical care to the underserved.



                    </p>
                    <ul>
                        <li><div className="bol"></div>Organizing health camps and wellness programs in rural areas to provide curative services, preventive care, and nutrition.
                        </li>
                        <li><div className="bol"></div>Training community health workers and local healthcare providers to ensure sustainable healthcare delivery at the grassroots level.


                        </li>
                        <li><div className="bol"></div>Improving access to maternal and child health services to reduce infant and maternal mortality rates in rural regions.

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
                                <img alt="man" className="w-100" src="assets/img/rural-healthcare.jpg" />
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

export default RuralHealthcare