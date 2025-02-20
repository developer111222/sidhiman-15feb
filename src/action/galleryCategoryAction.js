import {CREATE_GALLERY_CATEGORY_REQUEST,CREATE_GALLERY_CATEGORY_SUCCESS,CREATE_GALLERY_CATEGORY_FAILURE,GET_GALLERY_CATEGORY_REQUEST,GET_GALLERY_CATEGORY_SUCCESS,GET_GALLERY_CATEGORY_FAILURE,DELETE_GALLERY_CATEGORY_REQUEST,DELETE_GALLERY_CATEGORY_SUCCESS,DELETE_GALLERY_CATEGORY_FAIL,UPDATE_GALLERY_CATEGORY_REQUEST,UPDATE_GALLERY_CATEGORY_SUCCESS,UPDATE_GALLERY_CATEGORY_FAIL,RESET_CLEAR} from '../constant/galleryCategoryConstant';
import GetSiteUrl from '../utils/GetSiteUrl';
import axios from 'axios';


const url = GetSiteUrl();
// Create Gallery Category
export const createGalleryCategory = (formData) => async (dispatch) => {
 
  try {
    dispatch({ type: CREATE_GALLERY_CATEGORY_REQUEST });
 
 

    const config = { 
      headers: { "Content-Type": "application/json" },
      withCredentials: true // Include credentials for authenticated requests
    };
    
    const { data } = await axios.post(`${url}/api/crate-gallery-category`, {formData}, config);

    dispatch({
      type: CREATE_GALLERY_CATEGORY_SUCCESS,
      payload: data,
    });
  } catch (error) { console.log(error)
    dispatch({
      type: CREATE_GALLERY_CATEGORY_FAILURE,
      payload: error.response && error.response.data.message
      ? error.response.data.message
      : error.message
    });
  }
};

// Get All Gallery Categories
export const getAllGalleryCategories = () => async (dispatch) => {
  try {
    dispatch({ type: GET_GALLERY_CATEGORY_REQUEST });

    const { data } = await axios.get(`${url}/api/get-gallery-category`);

    dispatch({
      type: GET_GALLERY_CATEGORY_SUCCESS, 
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_GALLERY_CATEGORY_FAILURE,
      payload: error.response && error.response.data.message
      ? error.response.data.message
      : error.message
    });
  }
};


// Update Gallery Category
export const updateGalleryCategory = (id, category) => async (dispatch) => {
  // console.log("ID:", id); 
  // console.log("Category Data:", category); // Debugging

  try {
    dispatch({ type: UPDATE_GALLERY_CATEGORY_REQUEST });

    const config = { 
      headers: { "Content-Type": "application/json" },
      withCredentials: true // Include credentials for authenticated requests
    };

    const { data } = await axios.put(`${url}/api/update-gallery-category/${id}`, {category}, config);

    dispatch({
      type: UPDATE_GALLERY_CATEGORY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_GALLERY_CATEGORY_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    });
  }
};


// Delete Gallery Category
export const deleteGalleryCategory = (id) => async (dispatch) => {
  // console.log(id)
  try {
    dispatch({ type: DELETE_GALLERY_CATEGORY_REQUEST });

    const { data } = await axios.delete(`${url}/api/delete-gallery-category/${id}`,{ withCredentials: true});

    dispatch({
      type: DELETE_GALLERY_CATEGORY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_GALLERY_CATEGORY_FAIL,
      payload: error.response && error.response.data.message
      ? error.response.data.message
      : error.message
    });
  }
};

// Reset Clear
export const ResetClear = () => async (dispatch) => {
  dispatch({ type: RESET_CLEAR });
};

