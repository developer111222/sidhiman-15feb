import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { ResetClear, getAllGalleryCategories } from '../../../action/galleryCategoryAction';
import { createGallery } from '../../../action/galleryAction';
import Sidebar from '../dashboard/Sidebar';
import GalleryForm from './form/GalleryForm';
import GalleryData from './get-data/GalleryData';

const CreateGallery = () => {
  const dispatch = useDispatch();

  // Fetch categories from Redux store
  const { galleryCategories } = useSelector((state) => state.gallerycategory);
  const { loading, error, message, success } = useSelector((state) => state.gallery);

  // Single useState for form data
  const [formData, setFormData] = useState({
    image: [],
    category: '',
  });

  useEffect(() => {
    dispatch(getAllGalleryCategories()); // Fetch gallery categories on component mount

    if (error) {
      toast.error(error);
      dispatch(ResetClear());
    }
    if (success) {
      toast.success(message);
      dispatch(ResetClear());
    }
  }, [dispatch, error, success, message]);

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

    if (!formData.image || !formData.category) {
      toast.error('Both fields are required!');
      return;
    }

    dispatch(createGallery(formData));
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
        <GalleryData/>
      </div>
    </section>
  );
};

export default CreateGallery;
