
import {
  CREATE_GALLERY_REQUEST,CREATE_GALLERY_SUCCESS,CREATE_GALLERY_FAILURE,GET_GALLERY_REQUEST,GET_GALLERY_SUCCESS,GET_GALLERY_FAILURE,GET_SINGLE_GALLERY_REQUEST,GET_SINGLE_GALLERY_SUCCESS,GET_SINGLE_GALLERY_FAILURE,UPDATE_GALLERY_REQUEST,UPDATE_GALLERY_SUCCESS,UPDATE_GALLERY_FAIL,DELETE_GALLERY_REQUEST,DELETE_GALLERY_SUCCESS,DELETE_GALLERY_FAIL,
  GALLERY_RESET_CLEAR,GET_GALLERY_BY_CATEGORY_REQUEST,GET_GALLERY_BY_CATEGORY_SUCCESS,GET_GALLERY_BY_CATEGORY_FAILURE  } from '../constant/galleryConstant';
  
  import GetSiteUrl from '../utils/GetSiteUrl';
  import axios from 'axios';


  const url = GetSiteUrl();
  
// Create gallery action
export const createGallery = (formData) => async (dispatch) => {

const {image,category}=formData

  try {
    dispatch({ type: CREATE_GALLERY_REQUEST });

    const formData = new FormData();
    formData.append('category', category);
    
    // Add images to FormData
    image.forEach((image, index) => {
      formData.append('image', image);  // Note: 'images' must match backend field name
    });

    const config = { headers: { "Content-Type": "multipart/form-data" },  withCredentials: true  };
    const { data } = await axios.post(`${url}/api/create-gallery`, formData, config);

    dispatch({
      type: CREATE_GALLERY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_GALLERY_FAILURE,
      payload: error.response && error.response.data.message
      ? error.response.data.message
      : error.message
    });
  }
};

// Get all galleries
export const getGalleries = () => async (dispatch) => {
  try {
    dispatch({ type: GET_GALLERY_REQUEST });

    const { data } = await axios.get(`${url}/api/get-gallery`);
 

    dispatch({
      type: GET_GALLERY_SUCCESS, 
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_GALLERY_FAILURE,
      payload: error.response && error.response.data.message
      ? error.response.data.message
      : error.message
    });
  }
};

//Get single gallery
export const getSingleGallery = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_SINGLE_GALLERY_REQUEST });

    const { data } = await axios.get(`${url}/api/get-single-gallery/${id}`,{
      withCredentials: true
    });


    dispatch({
      type: GET_SINGLE_GALLERY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_SINGLE_GALLERY_FAILURE, 
      payload: error.response.data.message,
    });
  }
};


//------------------------GET GALLERY BY CATEGORY----------------------------------------

export const getGalleryByCategory = (id) => async (dispatch) => { console.log(id)
  try {
    dispatch({ type: GET_GALLERY_BY_CATEGORY_REQUEST });

    const { data } = await axios.get(`${url}/api/get-gallery-by-category/${id}`);
console.log(data)
    dispatch({
      type: GET_GALLERY_BY_CATEGORY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_GALLERY_BY_CATEGORY_FAILURE,
      payload: error.response && error.response.data.message
       ? error.response.data.message
        : error.message
    });
  }
};



//Update gallery
export const updateGalleryAction = (id, formData) => async (dispatch) => {

  const {image,category}=formData
  console.log(category)
  try {
    dispatch({ type: UPDATE_GALLERY_REQUEST });

    const formData = new FormData();
    formData.append('category', category);
    
    // Add images to FormData
    image.forEach((image, index) => {
      formData.append('image', image);  // Note: 'images' must match backend field name
    });

    const config = { headers: { "Content-Type": "multipart/form-data" }, withCredentials: true };
    const { data } = await axios.patch(`${url}/api/update-gallery/${id}`, formData, config);

    dispatch({
      type: UPDATE_GALLERY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_GALLERY_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete gallery
export const deleteGallery = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_GALLERY_REQUEST });

    const { data } = await axios.delete(`${url}/api/delete-gallery/${id}`,{
      withCredentials: true
    });

    dispatch({
      type: DELETE_GALLERY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_GALLERY_FAIL,
      payload: error.response && error.response.data.message
      ? error.response.data.message
      : error.message
    });
  }
};

// Clear errors and messages
export const ResetClear = () => async (dispatch) => {
    dispatch({ type: GALLERY_RESET_CLEAR });
  };
