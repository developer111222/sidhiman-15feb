import React from 'react'

const Comment = () => {
  return (
 <>
 <div className="comment">
  <h3>02 Comments</h3>
  <ul>
    <li className="single-comment">
      <img alt="img" src="https://via.placeholder.com/120x120" />
      <a href="#">reply</a>
      <div className="ps-md-4">
        <div className="d-flex align-items-center">
          <h4>Valkor Smith</h4>
          <span>January 7, 2023 at 12:21 am</span>
        </div>
        <p>Integer sollicitudin ligula non enim sodales, non lacinia Sewid commodo are risus in euismod varius nullam feugiat ultrices.</p>
      </div>
    </li>
    <li className="single-comment children">
      <img alt="img" src="https://via.placeholder.com/120x120" />
      <a href="#">reply</a>
      <div className="ps-md-4">
        <div className="d-flex align-items-center">
          <h4>Willimes Dom</h4>
          <span>January 7, 2023 at 12:21 am</span>
        </div>
        <p>Integer sollicitudin ligula non enim sodales, non lacinia Sewid commodo are risus in euismod varius nullam feugiat ultrices.</p>
      </div>
    </li>
  </ul>
</div>

<div className="comment">
  <h3>Leave a Comment</h3>
  <form className="leave-comment">
    <div className="row">
      <div className="col-lg-6">
        <input type="text" name="name" placeholder="Full Name" />
      </div>
      <div className="col-lg-6">
        <input type="text" name="Email" placeholder="Email Id" />
      </div>
    </div>
    <input type="text" name="Subject" placeholder="Subject" />
    <textarea placeholder="Your Message"></textarea>
    <button className="btn">
      <span>Post Comment</span>
    </button>
  </form>
</div>

 </>
  )
}

export default Comment
