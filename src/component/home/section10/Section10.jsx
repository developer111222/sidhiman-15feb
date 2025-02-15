import React from 'react'

const Section10 = () => {
  return (
    <section className="environment-section" style={{ backgroundImage: 'url(https://via.placeholder.com/1920x766)' }}>
    <div className="container">
      <div className="environment">
        <div className="heading">
          <h2>Get The <span>Latest Environment </span>News In The World</h2>
        </div>
        <p>You may unsubscribe at any time and we will not share your email address with any 3rd party.</p>
        <form>
          <input type="text" name="email" placeholder="Enter your email address..." />
          <button className="btn"><span>Subscribe</span></button>
        </form>
      </div>
    </div>
  </section>
  
 
  
  )
}

export default Section10
