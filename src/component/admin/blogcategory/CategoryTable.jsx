import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getallblogcategory, deleteblogcategory, ResetClear } from "../../../action/blogCategoryAction";
import { FaSearch } from "react-icons/fa";

const CategoryTable = () => {
  const dispatch = useDispatch();

  const { loading, error, message, categories, success, isdelete } = useSelector((state) => state.blogcategory);

  // State for search term and pagination
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [categoriesPerPage] = useState(10);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(ResetClear());
    }
    if (isdelete) {
      toast.success(message);
      dispatch(ResetClear());
    }
    dispatch(getallblogcategory());
  }, [error, dispatch, isdelete]);

  const handleDelete = (id) => {
    dispatch(deleteblogcategory(id));
  };

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter categories based on search term
  const filteredCategories = categories.filter((category) =>
    category.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const indexOfLastCategory = currentPage * categoriesPerPage;
  const indexOfFirstCategory = indexOfLastCategory - categoriesPerPage;
  const currentCategories = filteredCategories.slice(indexOfFirstCategory, indexOfLastCategory);

  const totalPages = Math.ceil(filteredCategories.length / categoriesPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div style={{ marginTop: "20px", padding: "10px" }}>
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search by category"
          value={searchTerm}
          onChange={handleSearchChange}
          style={{
            padding: "8px 16px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            width: "250px",
          }}
        />
        <FaSearch style={{ marginLeft: "10px", verticalAlign: "middle" }} />
      </div>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          border: "1px solid #ddd",
          marginTop: "20px",
        }}
      >
        <thead
          style={{
            backgroundColor: "#343a40",
            color: "white",
            textAlign: "left",
            fontWeight: "bold",
          }}
        >
          <tr>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Serial No</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Category</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Slug</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentCategories && currentCategories.length > 0 ? (
            currentCategories.map((category, index) => (
              <tr key={category._id}>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  {index + 1}
                </td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  {category.category}
                </td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  {category.slug}
                </td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  <button
                    onClick={() => handleDelete(category._id)}
                    style={{
                      backgroundColor: "#dc3545",
                      color: "white",
                      padding: "8px 16px",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
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
                colSpan="4"
                style={{
                  padding: "10px",
                  textAlign: "center",
                  border: "1px solid #ddd",
                }}
              >
                No categories found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination */}
      {filteredCategories.length > categoriesPerPage && (
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <button
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
            style={{
              padding: "8px 16px",
              marginRight: "10px",
              border: "none",
              backgroundColor: "#007bff",
              color: "white",
              borderRadius: "4px",
              cursor: "pointer",
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
              padding: "8px 16px",
              marginLeft: "10px",
              border: "none",
              backgroundColor: "#007bff",
              color: "white",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default CategoryTable;
