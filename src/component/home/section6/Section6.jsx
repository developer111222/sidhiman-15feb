import React from 'react'

const Section6 = () => {
  return (
    <section
    className="donation-section gap"
    style={{ backgroundImage: 'url(https://via.placeholder.com/1920x874)' }}
  >
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="homeless">
            <h2>
              35,123 Kids Homeless <span>Reached So Far!</span>
            </h2>
            <h6>
              Duis sed odio sit amet nibh vulputate cursus a amet accu msan
              ipsuy veli Nam nec tellus a odio tincidunt it con nec tellus a odio
              sequat auctor.
            </h6>
            <div className="d-flex">
              <div>
                <h5>
                  Raised<span>$8,100</span>
                </h5>
                <div className="separator"></div>
                <h5>
                  Goal<span>$26,500</span>
                </h5>
              </div>
              <div className="progressbar">
                <div className="circle three" data-percent="75">
                  <div>75%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="please-donate-today">
            <h2>Please Donate Today!</h2>
            <p>How often you want to donate ?</p>
            <form className="donate-form">
              <ul className="d-flex">
                <li>
                  <input type="radio" id="Weekly" name="fav_language" value="Weekly" />
                  <label htmlFor="Weekly">Weekly</label>
                </li>
                <li>
                  <input type="radio" id="Monthly" name="fav_language" value="Monthly" />
                  <label htmlFor="Monthly">Monthly</label>
                </li>
                <li>
                  <input type="radio" id="Yearly" name="fav_language" value="Yearly" />
                  <label htmlFor="Yearly">Yearly</label>
                </li>
              </ul>
              <h6>How much to donate?</h6>
              <span className="give-currency-symbol">$</span>
              <input className="donated_amount give-text-input" name="give-amount" type="text" />
              <ul className="give-donation-levels-wrap">
                <li>
                  <a className="donating give-donation-level-btn" href="JavaScript:void(0)">
                    $<span className="donation_amount">10</span>
                  </a>
                </li>
                <li>
                  <a className="donating give-donation-level-btn" href="JavaScript:void(0)">
                    $<span className="donation_amount">20</span>
                  </a>
                </li>
                <li>
                  <a className="donating give-donation-level-btn" href="JavaScript:void(0)">
                    $<span className="donation_amount">50</span>
                  </a>
                </li>
                <li>
                  <a className="donating give-donation-level-btn" href="JavaScript:void(0)">
                    $<span className="donation_amount">100</span>
                  </a>
                </li>
                <li>
                  <a className="donating give-donation-level-btn" href="JavaScript:void(0)">
                    $<span className="donation_amount">200</span>
                  </a>
                </li>
                <li>
                  <button type="button" className="give-donation-level-btn give-btn give-btn-level-custom" value="custom">
                    Custom Amount
                  </button>
                </li>
              </ul>
              <input type="submit" className="give-submit" name="give-purchase" value="Donate Now" />
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default Section6
