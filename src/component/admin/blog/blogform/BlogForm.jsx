import React, { useEffect } from "react";
import { getallblogcategory, ResetClear } from '../../../../action/blogCategoryAction';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Editor from "../../jodit-editor/Editor";



const BlogForm = (
    { handleChange, handleSubmit, formData,setFormData }
) => {
    const dispatch = useDispatch();
    const { loading, error, message, categories, success, isdelete } = useSelector(state => state.blogcategory);


    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch(ResetClear())
        }
        dispatch(getallblogcategory())
    }, [error, dispatch,])


    return (
        <div style={{ marginTop: '20px', padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <form
        onSubmit={handleSubmit}
        style={{
          border: '1px solid #ccc',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', marginBottom: '8px' }}>Meta Title</label>
          <input
            type="text"
            name="metatitle"
            value={formData.metatitle}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              fontSize: '16px',
            }}
          />
        </div>

        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', marginBottom: '8px' }}>Meta Description</label>
          <textarea
            name="metadescription"
            value={formData.metadescription}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              fontSize: '16px',
              height: '100px',
            }}
          ></textarea>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', marginBottom: '8px' }}>Meta Keywords</label>
          <input
            type="text"
            name="metakeywords"
            value={formData.metakeywords}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              fontSize: '16px',
            }}
          />
        </div>

        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', marginBottom: '8px' }}>Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              fontSize: '16px',
            }}
            required
          />
        </div>

        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', marginBottom: '8px' }}>Content</label>
          {/* <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              fontSize: '16px',
              height: '150px',
            }}
            required
          ></textarea> */}
<Editor formData={formData} setFormData={setFormData} 
 />

        </div>

        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', marginBottom: '8px' }}>Image</label>
          <input
            type="file"
            name="image"
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }}
            accept="image/*"
          />
        </div>

        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', marginBottom: '8px' }}>Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              fontSize: '16px',
            }}
          >
            <option value="">Select Category</option>
            {categories && categories.length > 0 ? (
              categories.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.category}
                </option>
              ))
            ) : (
              <option disabled>No categories available</option>
            )}
          </select>
        </div>

        <button
          type="submit"
          style={{
            backgroundColor: 'red',
            color: '#fff',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '4px',
            fontSize: '16px',
            cursor: 'pointer',
          }}
        >
          Submit
        </button>
      </form>
    </div>
    );
};

export default BlogForm;
