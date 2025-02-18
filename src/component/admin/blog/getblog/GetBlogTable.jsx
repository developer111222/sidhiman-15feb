  import React, { useState, useEffect } from 'react';
  import { useDispatch, useSelector } from 'react-redux';
  import { getallblog, ResetClear, deleteblog } from '../../../../action/blogAction';
  import { toast } from 'react-toastify';
  import { useNavigate } from 'react-router-dom';
  import Sidebar from '../../dashboard/Sidebar';
  import { FaSearch } from 'react-icons/fa';

  const GetBlogTable = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading, error, blogs, success, isdelete, message } = useSelector(state => state.allblogs);

    // States for search and pagination
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [blogsPerPage] = useState(15);

    useEffect(() => {
      if (error) {
        toast.error(error);
        dispatch(ResetClear());
      }
      if (isdelete) {
        toast.success(message);
        dispatch(ResetClear());
      }
      dispatch(getallblog());
    }, [error, dispatch, isdelete]);

    const handleDeleteBlog = (id) => {
      dispatch(deleteblog(id));
    };

    const handleEditBlog = (id) => {
      navigate(`/admin/update-blog/${id}`);
      window.location.reload();
    };

    // Handle search input change
    const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
    };

    // Filter blogs by title
    const filteredBlogs = blogs.filter((blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Pagination logic
    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

    const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };

    return (
      <>
        <section style={{ display: 'flex', width: '100%' }}>
          <Sidebar />
          <div style={{ marginLeft: '40px', padding: '20px', width: '100%' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
              <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>All Blogs</h2>

              {/* Search Bar */}
              <div style={{ marginBottom: '20px' }}>
                <input
                  type="text"
                  placeholder="Search by title"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '4px',
                    border: '1px solid #ccc',
                    width: '250px',
                  }}
                />
                <FaSearch style={{ marginLeft: '10px', verticalAlign: 'middle' }} />
              </div>

              <table
                style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  marginTop: '30px',
                  border: '1px solid #ccc',
                }}
              >
                <thead
                  style={{
                    backgroundColor: '#343a40',
                    color: 'white',
                  }}
                >
                  <tr>
                    <th style={{ padding: '10px', border: '1px solid #ccc' }}>Serial No</th>
                    <th style={{ padding: '10px', border: '1px solid #ccc' }}>Title</th>
                    <th style={{ padding: '10px', border: '1px solid #ccc' }}>Slug</th>
                    <th style={{ padding: '10px', border: '1px solid #ccc' }}>Category</th>
                    <th style={{ padding: '10px', border: '1px solid #ccc' }}>Meta-Title</th>
                    <th style={{ padding: '10px', border: '1px solid #ccc' }}>Meta-Description</th>
                    <th style={{ padding: '10px', border: '1px solid #ccc' }}>Meta-keywords</th>
                    <th style={{ padding: '10px', border: '1px solid #ccc' }}>Edit</th>
                    <th style={{ padding: '10px', border: '1px solid #ccc' }}>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {currentBlogs && currentBlogs.length > 0 ? (
                    currentBlogs.map((blog, index) => (
                      <tr key={blog._id}>
                        <td style={{ padding: '10px', border: '1px solid #ccc' }}>{index + 1}</td>
                        <td style={{ padding: '10px', border: '1px solid #ccc' }}>{blog.title}</td>
                        <td style={{ padding: '10px', border: '1px solid #ccc' }}>{blog.slug}</td>
                        <td style={{ padding: '10px', border: '1px solid #ccc' }}>{blog.category.category}</td>
                        <td style={{ padding: '10px', border: '1px solid #ccc' }}>{blog.metatitle}</td>
                        <td style={{ padding: '10px', border: '1px solid #ccc' }}>{blog.metadescription}</td>
                        <td style={{ padding: '10px', border: '1px solid #ccc' }}>{blog.metakeywords}</td>
                        <td style={{ padding: '10px', border: '1px solid #ccc' }}>
                          <button
                            style={{
                              backgroundColor: 'green',
                              color: 'white',
                              padding: '5px 15px',
                              border: 'none',
                              borderRadius: '4px',
                              cursor: 'pointer',
                            }}
                            onClick={() => handleEditBlog(blog.slug)}
                          >
                            Edit
                          </button>
                        </td>
                        <td style={{ padding: '10px', border: '1px solid #ccc' }}>
                          <button
                            onClick={() => handleDeleteBlog(blog._id)}
                            style={{
                              backgroundColor: 'red',
                              color: 'white',
                              padding: '5px 15px',
                              border: 'none',
                              borderRadius: '4px',
                              cursor: 'pointer',
                            }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="9"
                        style={{
                          padding: '10px',
                          textAlign: 'center',
                          border: '1px solid #ccc',
                          color: '#999',
                        }}
                      >
                        No blogs found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>

              {/* Pagination */}
              {filteredBlogs.length > blogsPerPage && (
                <div style={{ marginTop: '20px', textAlign: 'center' }}>
                  <button
                    disabled={currentPage === 1}
                    onClick={() => handlePageChange(currentPage - 1)}
                    style={{
                      padding: '8px 16px',
                      marginRight: '10px',
                      border: 'none',
                      backgroundColor: '#007bff',
                      color: 'white',
                      borderRadius: '4px',
                      cursor: 'pointer',
                    }}
                  >
                    Previous
                  </button>
                  <span>
                    Page {currentPage} of {totalPages}
                  </span>
                  <button
                    disabled={currentPage === totalPages}
                    onClick={() => handlePageChange(currentPage + 1)}
                    style={{
                      padding: '8px 16px',
                      marginLeft: '10px',
                      border: 'none',
                      backgroundColor: '#007bff',
                      color: 'white',
                      borderRadius: '4px',
                      cursor: 'pointer',
                    }}
                  >
                    Next
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
      </>
    );
  };

  export default GetBlogTable;
