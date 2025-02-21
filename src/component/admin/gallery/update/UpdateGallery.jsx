import React, { useEffect, useState } from 'react'
import Sidebar from '../../dashboard/Sidebar'
import GalleryForm from '../form/GalleryForm'
import { useDispatch, useSelector } from 'react-redux';
import {updateGalleryAction,getSingleGallery,ResetClear} from '../../../../action/galleryAction'
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';


const UpdateGallery = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

  const {id}=useParams()

  const { galleryCategories } = useSelector((state) => state.gallerycategory);
    const { loading, error,gallery, message,isupdate, } = useSelector((state) => state.gallery);

   
  
    // Single useState for form data
    const [formData, setFormData] = useState({
      image: [],
      category: '',
    });
  
    useEffect(() => {
      
      if (error) {
        toast.error(error);
        dispatch(ResetClear());
      }
      if (isupdate) {
        toast.success(message);
        dispatch(ResetClear());
        navigate('/admin/create/gallery')
      }
      if(id){
        dispatch(getSingleGallery(id));
              }
    }, [dispatch, error, isupdate, message,id]);

    useEffect(() => {
        if (gallery) {
          setFormData({
            image: gallery.image || '', // Ensure image is not undefined
            category: gallery.category?.category._id || '', // Use optional chaining to avoid errors
          });
        }
    }, [gallery]);
    
  
    const handleChange = (event) => {
      const { name, type, value, files } = event.target;
    
      setFormData((prevData) => ({
        ...prevData,
        [name]: type === 'file' ? (files ? Array.from(files) : []) : value, 
      }));
    };
    

  
    // Handle form submission
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(formData); // Debugging log
  
      dispatch(updateGalleryAction(id,formData));
    };


  return (
    <section style={{ display: 'flex', width: '100%', padding: '20px' }}>
    {/* Sidebar Component */}
    <Sidebar />

    {/* Main Content */}
    <div style={{ marginLeft: '40px', padding: '20px', width: '100%' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>
          Create Gallery Category
        </h2>

        {/* Form */}
       <GalleryForm
       formData={formData}
       galleryCategories={galleryCategories}
       handleChange={handleChange}
       handleSubmit={handleSubmit}

       />
      </div>

    </div>
  </section>
  )
}

export default UpdateGallery