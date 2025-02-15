import React from 'react'
import Comment from '../comment/Comment'
import RecentPosts from '../recent-posts/RecentPosts'
import Category from '../category/Category'

const BlogPage = () => {
  return (
    <>
      <section className="page-title-area" style={{ backgroundImage: 'url(https://via.placeholder.com/1920x430)' }}>
        <div className="container">
          <div className="title-area-data">
            <h2>Blog Details</h2>
            <p>Organisations committed to ending poverty worldwide.</p>
          </div>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">our blog</li>
            <li className="breadcrumb-item active" aria-current="page">Blog Details</li>
          </ol>
        </div>
      </section>

      <section className="gap">
        <div className="container">
          <div className="row">
            <div className="col-xl-8">
              <div className="blog-details-text hoverimg">
                <figure>
                  <img alt="img" className="w-100" src="https://via.placeholder.com/856x423" />
                </figure>
                <div className="article">
                  <h4>24<span>Mar, 2022</span></h4>
                </div>
                <h2>Chris Sibbald talks about taking the Global Leadership Lunch online</h2>
                <div className="meta-info">
                  <ul>
                    <li><img alt="img" src="https://via.placeholder.com/60x60" /><p>Posted by Thomas Smith</p></li>
                    <li><i className="fa-solid fa-eye"></i><h6>50K</h6></li>
                    <li><i className="fa-solid fa-message"></i><h6>50K</h6></li>
                  </ul>
                </div>
                <p className="pt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                  ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                  fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                  mollit anim id est laborum.<br /><br />
                  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eu 
                  fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                  mollit anim id est laborum.
                </p>
                <figure>
                  <img className="mt-4 w-100" alt="img" src="https://via.placeholder.com/856x423" />
                </figure>
                <div className="quote">
                  <i>
                    <svg fill="#000000" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
                      width="200px" height="200px" viewBox="0 0 91.674 91.674" xmlSpace="preserve">
                      <path d="M38.157,0.003c-8.398,0.373-15.895,3.722-21.68,9.685C1.141,25.498,1.436,55.3,1.52,58.596l0.001,31.078
                        c0,1.104,0.896,2,2,2h30.691c1.104,0,2-0.896,2-2V58.981c0-1.104-0.896-2-2-2H18.527c0.003-2.562,0.313-25.309,10.186-35.455
                        c2.672-2.747,5.836-4.214,9.674-4.485c1.048-0.074,1.859-0.945,1.859-1.995V2.002c0-0.546-0.223-1.068-0.617-1.445
                        C39.234,0.179,38.71-0.031,38.157,0.003z"/>
                      <path d="M89.553,0.556c-0.395-0.377-0.906-0.587-1.472-0.553C79.684,0.375,72.186,3.725,66.4,9.688
                        C51.065,25.498,51.359,55.3,51.443,58.596l0.001,31.078c0,1.104,0.896,2,2,2h30.69c1.104,0,2-0.896,2-2V58.981
                        c0-1.104-0.896-2-2-2H68.452c0.003-2.562,0.313-25.309,10.185-35.455c2.673-2.747,5.837-4.214,9.675-4.485
                        c1.048-0.074,1.858-0.945,1.858-1.995V2.002C90.17,1.457,89.947,0.935,89.553,0.556z"/>
                    </svg>
                  </i>
                  <h3>There is obviously a lot of uncertainty but that doesn’t have to be a scary thing, as the great Yogi Berra said,</h3>
                </div>
                <p className="pt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <ul className="team-list">
                  <li><i className="fa-regular fa-circle-check"></i>The crisis has brought businesses</li>
                  <li><i className="fa-regular fa-circle-check"></i>closer, as colleagues engage</li>
                  <li><i className="fa-regular fa-circle-check"></i>Pace of change unheard of pre-pandemic.</li>
                  <li><i className="fa-regular fa-circle-check"></i>Leadership in the new working environment</li>
                  <li><i className="fa-regular fa-circle-check"></i>Business represents, be willing to show vulnerability</li>
                </ul>
                <div className="row pb-md-5">
                  <div className="col-sm-6 hoverimg">
                    <figure>
                      <img alt="img" className="w-100" src="https://via.placeholder.com/416x288" />
                    </figure>
                  </div>
                  <div className="col-sm-6 hoverimg">
                    <figure>
                      <img alt="img" className="w-100" src="https://via.placeholder.com/416x288" />
                    </figure>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                  ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse culpa qui officia 
                  deserunt mollit anim id est laborum.
                </p>
                <div className="post-tags">
                  <h6>Post Tags:</h6>
                  <ul>
                    <li><a href="#">Welfair Project</a></li>
                    <li><a href="#">Kids</a></li>
                    <li><a href="#">Donation</a></li>
                    <li><a href="#">Fundraise</a></li>
                  </ul>
                </div>
              </div>
              {/* comment section */}
              <Comment />
            </div>

            {/* Sidebar */}
            <div className="col-xl-4">
              <div className="sidebar">
                <RecentPosts />
                <Category />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogPage
