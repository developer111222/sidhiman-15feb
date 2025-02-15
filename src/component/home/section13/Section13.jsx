import React from 'react'

const Section13 = () => {
  return (
    <section className="gap no-top">
    <div className="container">
      <div className="heading">
        <img alt="icon" src="assets/img/logo-icon.png" />
        <p>working on charity</p>
        <h2>Recent Articles</h2>
      </div>
      <div className="row">
        <div className="offset-xl-1 col-xl-10">
          <div className="article">
            <img alt="article-img" src="https://via.placeholder.com/520x370" />
            <div className="article-data">
              <h4>24<span>Mar, 2023</span></h4>
              <div>
                <h5>By NicDark   <span className="px-3">-</span>    1 Comments</h5>
                <a href="blog-details-1.html"><h3>The perfect way to end your campaign</h3></a>
                <h6>Duis sed odio sit amet nibh vulputa te rsus a amet mau accumsan ip suy veliu am nec tel</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="offset-xl-1 col-xl-10 mt-5">
          <div className="article two">
            <div className="article-data">
              <h4>24<span>Mar, 2023</span></h4>
              <div>
                <h5>By NicDark   <span className="px-3">-</span>    1 Comments</h5>
                <a href="blog-details-1.html"><h3>The perfect way to end your campaign</h3></a>
                <h6>Duis sed odio sit amet nibh vulputa te rsus a amet mau accumsan ip suy veliu am nec tel</h6>
              </div>
            </div>
            <img alt="article-img" src="https://via.placeholder.com/520x370" />
          </div>
          <div className="button-gap">
            <a href="#" className="btn mt-5"><span>New All Posts</span></a>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default Section13
