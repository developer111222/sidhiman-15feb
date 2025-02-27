import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getblogbycategory } from "../../../action/blogAction";
import { toast } from "react-toastify";
import RecentPosts from "../recent-posts/RecentPosts";
import Category from "../category/Category";
import { NavLink, useParams } from "react-router-dom";
import ImageUrl from "../../../utils/ImageUrl";

const BlogByCategory = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { loading, categoryblogs, error } = useSelector((state) => state.allblogs);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 9;
  const imageurl = ImageUrl();

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
    if (id) {
      dispatch(getblogbycategory(id));
    }
  }, [dispatch, id, error]);

  // Ensure blogs is an array
  const blogs = Array.isArray(categoryblogs) ? categoryblogs : [];

  // Debugging: Log the blogs data to check its structure
  console.log("Blogs data:", categoryblogs);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <section
        className="page-title-area"
        style={{ backgroundImage: "url(https://via.placeholder.com/1920x430)" }}
      >
        <div className="container">
          <div className="title-area-data">
            <h2>Blogs By Category</h2>
            <p>Organisations committed to ending poverty worldwide.</p>
          </div>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/">Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">Our Blog</li>
            <li className="breadcrumb-item active" aria-current="page">Blog Details</li>
          </ol>
        </div>
      </section>

      <section className="gap">
        <div className="container">
          <div className="row">
            <div className="col-xl-8">
              <div className="row g-4">
                {loading ? (
                  <h3>Loading...</h3>
                ) : currentBlogs.length > 0 ? (
                  currentBlogs.map((blog) => (
                    <div key={blog._id} className="col-md-6">
                      <div className="card" style={{ borderRadius: "30px" }}>
                        <img
                          src={`${imageurl}/${blog.image}`}
                          className="card-img-top"
                          alt={blog.title}
                          style={{ height: "200px", objectFit: "cover", }}
                        />
                        <div className="card-body">
                          {/* Blog Category Section */}
                          <div className="d-flex justify-content-between align-items-center mb-2">
                            <p className="mb-0 text-muted small">Blog Category</p>
                            <p className="mb-0 text-muted small fw-bold">
                              {blog.category?.category || "Uncategorized"}
                            </p>
                          </div>

                          {/* Blog Title & Description */}
                          <h5 className="card-title">{blog.title}</h5>

                          {/* Text with max 2 lines and ellipsis if too long */}
                          <p className="card-text">{blog.metadescription}</p>

                          {/* Date & Read More Section */}
                          <div className="d-flex justify-content-between align-items-center mt-3">
                            <p className="mb-0 text-muted small">
                              📅 {new Date(blog.createdAt).toLocaleDateString()}
                            </p>
                            <NavLink
                              to={`/blog/${blog.slug}`}
                              className="text-danger small fw-bold"
                              style={{ textDecoration: "none" }}
                            >
                              Read More →
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <h4>No Blogs Found</h4>
                )}
              </div>

              {/* Pagination */}
              {blogs.length > blogsPerPage && (
                <nav>
                  <ul className="pagination justify-content-center mt-4">
                    {Array.from({ length: Math.ceil(blogs.length / blogsPerPage) }).map((_, index) => (
                      <li
                        key={index}
                        className={`page-item ${currentPage === index + 1 ? "active" : ""}`}
                      >
                        <button onClick={() => paginate(index + 1)} className="page-link">
                          {index + 1}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
              )}
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
  );
};

export default BlogByCategory;
