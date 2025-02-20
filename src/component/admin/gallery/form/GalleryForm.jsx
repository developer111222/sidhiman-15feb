import React from 'react'

const GalleryForm = ({handleSubmit,handleChange,formData,galleryCategories}) => {
  return (
    <form onSubmit={handleSubmit} style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
    {/* File Upload */}
    <div style={{ marginBottom: '15px' }}>
      <label style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '5px', display: 'block' }}>
        Upload Gallery
      </label>
      <input
        type="file"
        name="image"
        onChange={handleChange}
        style={{
          width: '80%',
          padding: '10px',
          fontSize: '16px',
          border: '1px solid #ccc',
          borderRadius: '4px',
        }}
        required
      />
    </div>

    {/* Category Dropdown */}
    <div style={{ marginBottom: '15px' }}>
      <label style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '5px', display: 'block' }}>
        Select Category
      </label>
      <select
        name="category"
        value={formData.category}
        onChange={handleChange}
        style={{
          width: '80%',
          padding: '10px',
          fontSize: '16px',
          border: '1px solid #ccc',
          borderRadius: '4px',
        }}
        required
      >
        <option value="">Choose a category</option>
        {galleryCategories && galleryCategories.length > 0 ? (
          galleryCategories.map((cat) => (
            <option key={cat._id} value={cat._id}>
              {cat.category}
            </option>
          ))
        ) : (
          <option disabled>No categories found</option>
        )}
      </select>
    </div>

    {/* Submit Button */}
    <button
      type="submit"
      style={{
        backgroundColor: 'red',
        color: 'white',
        padding: '10px 20px',
        fontSize: '16px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
      }}
    >
      Add Category
    </button>
  </form>
  )
}

export default GalleryForm