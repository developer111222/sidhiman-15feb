import React from 'react'

const PageNotFound = () => {
  return (

<section className="error-section" style={{backgroundImage:"url('https://via.placeholder.com/1920x990')"}}>
    <div className="container">
      <div className="row">
        <div className="error">
          <h2>4<span>0</span>4</h2>
          <h3>Ooops, Page Not Found</h3>
          <p>We Can't Seem to find the page you're looking for.</p>
          <form>
          <input type="text" name="email" placeholder="Enter your email address..." />
          <button type="submit" className="error-button"><i className="fa-solid fa-magnifying-glass"></i></button>
        </form>
        <a className="btn" href='/'><span>Back To Home</span></a>
        </div>
      </div>
    </div>
  </section>

  )
}

export default PageNotFound