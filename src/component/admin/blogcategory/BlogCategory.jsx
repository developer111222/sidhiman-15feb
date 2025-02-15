import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { toast } from 'react-toastify';
import {createblogcategory,ResetClear} from '../../../action/blogCategoryAction';
import CategoryTable from './CategoryTable';
import Sidebar from '../dashboard/Sidebar';


const BlogCategory = () => {


const dispatch=useDispatch();

const {loading,error,message,categories,success}=useSelector(state=>state.blogcategory)


    const [category, setCategory] = useState("");

    const handleChange = (e) => {
      setCategory(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(createblogcategory(category))
      setCategory(""); // Reset input after submission
    };

useEffect(()=>{
  if(error){
    toast.error(error);
    dispatch(ResetClear())
  }
  if(success){
    toast.success(message)
    dispatch(ResetClear())
  }
},[error,success,message,dispatch])


  return (
    <section style={{ display: 'flex', width: '100%', padding: '20px' }}>
    {/* Sidebar Component */}
    <Sidebar />
    
    {/* Main Content */}
    <div style={{ marginLeft: '40px', padding: '20px', width: '100%' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>
          Create Blog Category
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
          <div style={{ marginBottom: '15px' }}>
            <label
              style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '5px', display: 'block' }}
            >
              Category
            </label>
            <input
              type="text"
              name="category"
              value={category}
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
      </div>
    <CategoryTable />
    </div>

    {/* Category Table */}
  </section>
  )
}

export default BlogCategory