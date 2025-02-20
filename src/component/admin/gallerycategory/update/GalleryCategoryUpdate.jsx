import React, { useEffect, useState } from 'react'
import Sidebar from '../../dashboard/Sidebar'
import { useDispatch, useSelector } from 'react-redux';
import {updateGalleryCategory,ResetClear} from '../../../../action/galleryCategoryAction'
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';

const GalleryCategoryUpdate = () => {

const {id}=useParams()
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const {loading,error,message,isupdate,success}=useSelector(state=>state.gallerycategory)
    
    
        const [category, setCategory] = useState("");
    
        const handleChange = (e) => {
          setCategory(e.target.value);
        };
      
        const handleSubmit = (e) => {
          e.preventDefault();
          dispatch(updateGalleryCategory(id,category))
          setCategory(""); // Reset input after submission
        };
    
    useEffect(()=>{
      if(error){
        toast.error(error);
        dispatch(ResetClear())
      }
      if(isupdate){
        toast.success(message)
        dispatch(ResetClear())
        navigate('/admin/create-gallery')

      }
    },[error,isupdate,message,dispatch])











  return (<section style={{ display: 'flex', width: '100%', padding: '20px' }}>
    {/* Sidebar Component */}
    <Sidebar />
    
    {/* Main Content */}
    <div style={{ marginLeft: '40px', padding: '20px', width: '100%' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>
          Create Gallery Category
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

    </div>

    {/* Category Table */}
  </section>    
  )
}

export default GalleryCategoryUpdate