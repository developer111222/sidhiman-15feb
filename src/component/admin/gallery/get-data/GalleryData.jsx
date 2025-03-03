import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getGalleries,deleteGallery, ResetClear } from "../../../../action/galleryAction";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ImageUrl from "../../../../utils/ImageUrl";



const GalleryData = () => {


  const navigate=useNavigate()
  const dispatch = useDispatch();

  const { loading, error, message, galleries, success, isdelete } = useSelector((state) => state.gallery);

  // State for search term and pagination
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [categoriesPerPage] = useState(10);

  const imageurl = ImageUrl();

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(ResetClear());
    }
    if (isdelete) {
      toast.success(message);
      dispatch(ResetClear());
    }
    dispatch(getGalleries());
  }, [error, dispatch, isdelete]);

  const handleDelete = (id) => {
    dispatch(deleteGallery(id));
  };

  const handleEdit=(id)=>{
    navigate(`/admin/update/gallery/${id}`);
    // window.location.reload();
    dispatch(ResetClear())
  }

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter categories based on search term
  const filteredCategories = (galleries || []).filter((category) => {
    const categoryName = category.category?.category; // Safely access category name
    return typeof categoryName === "string" && categoryName.toLowerCase().includes(searchTerm.toLowerCase());
  });
  
  
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
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>image</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>category</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Edit</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Delete</th>
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
  {Array.isArray(category.image) ? (
    category.image.map((img, index) => (
      <img 
        key={index} 
        src={`${imageurl}/${img}`}  
        alt={`Gallery ${index}`} 
        style={{ width: '100px', marginRight: '5px' }} 
      />
    ))
  ) : (
    <img 
      src={`${imageurl}/${category.image}`}  
      alt="Gallery" 
      style={{ width: '100px' }} 
    />
  )}
</td>


                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                {category.category?.category || "No Category"}
                </td>

                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                <button
                    onClick={() => handleEdit(category._id)}
                    style={{
                      backgroundColor: "green",
                      color: "white",
                      padding: "8px 16px",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    Edit
                  </button>
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

export default GalleryData;
