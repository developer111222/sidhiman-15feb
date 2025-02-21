import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGalleryByCategory, getGalleries } from '../../action/galleryAction';
import { getAllGalleryCategories } from '../../action/galleryCategoryAction';
import ImageUrl from '../../utils/ImageUrl';

function PhotoGallery() {
  const dispatch = useDispatch();
  const imageurl = ImageUrl();

  // State to track selected category
  const [selectedCategory, setSelectedCategory] = useState(null);
  // State to track selected image for popup
  const [selectedImage, setSelectedImage] = useState(null);

  // Fetch categories and gallery images from Redux store with default values
  const { galleryCategories = [] } = useSelector((state) => state.gallerycategory) || {};
  const { loading, error, gallery = [], galleries = [] } = useSelector((state) => state.gallery) || {};

  useEffect(() => {
    dispatch(getAllGalleryCategories()); // Fetch categories
    dispatch(getGalleries()); // Fetch all galleries on first load
  }, [dispatch]);

  const handleClick = (id) => {
    setSelectedCategory(id);
    dispatch(getGalleryByCategory(id));
  };

  const handleImageClick = (img) => {
    setSelectedImage(img);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  // Determine which images to show
  const imagesToShow = selectedCategory ? gallery : galleries;

  return (
    <>
      {/* Page Title Section */}
      <section className="page-title-area" style={{ backgroundImage: 'url(https://via.placeholder.com/1920x430)' }}>
        <div className="container">
          <div className="title-area-data">
            <h2>Gallery Photos</h2>
            <p>Organisations committed to ending poverty worldwide.</p>
          </div>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/">Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">Gallery Photos</li>
          </ol>
        </div>
      </section>

      {/* Category Filter Section */}
      <div className="container mt-4">
        <div className="d-flex gap-3 flex-wrap">
          <button 
            className={`btn ${!selectedCategory ? 'btn-primary' : 'btn-outline-primary'}`} 
            onClick={() => { setSelectedCategory(null); dispatch(getGalleries()); }}
          >
            All Galleries
          </button>
          {galleryCategories.length > 0 ? (
            galleryCategories.map((category) => (
              <button 
                key={category._id} 
                className={`btn ${selectedCategory === category.slug ? 'btn-primary' : 'btn-outline-primary'}`} 
                onClick={() => handleClick(category.slug)}
              >
                {category.category}
              </button>
            ))
          ) : (
            <p>No categories found.</p>
          )}
        </div>
      </div>

      {/* Gallery Section */}
      <div className="gap">
        <div className="p-60 container">
          <div className="row">
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p className="text-danger">{error}</p>
            ) : imagesToShow.length === 0 ? (
              <p>No images available.</p>
            ) : (
              imagesToShow.map((item, index) => (
                item.image && Array.isArray(item.image) ? ( 
                  item.image.map((img, i) => ( 
                    <div className="col-md-4" key={`${index}-${i}`}>
                      <div className="featured-imagebox featured-imagebox-gallery">
                        <div className="featured-link" onClick={() => handleImageClick(img)}>
                          <div className="featured-thumbnail">
                            <img
                              className="img-fluid w-100"
                              src={`${imageurl}/${img}`}
                              alt="gallery-img"
                              style={{ cursor: 'pointer' }}
                            />
                          </div>
                          <div className="featured-overlay"></div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p key={index}>No images available.</p>
                )
              ))
            )}
          </div>
        </div>
      </div>

      {/* Image Popup Modal */}
      {selectedImage && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ background: 'rgba(0, 0, 0, 0.5)' }}>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Image Preview</h5>
                <button type="button" className="btn-close" onClick={closeModal}></button>
              </div>
              <div className="modal-body text-center">
                <img 
                  src={`${imageurl}/${selectedImage}`} 
                  alt="Selected"
                  className="img-fluid"
                  style={{ maxHeight: '80vh' }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PhotoGallery;
