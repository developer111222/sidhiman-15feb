
import {
    CREATE_FORM_REQUEST,CREATE_FORM_SUCCESS,CREATE_FORM_FAILURE,GETFORM_REQUEST,GETFORM_SUCCESS,GETFORM_FAILURE,DELETE_FORM_FAIL,DELETE_FORM_REQUEST,DELETE_FORM_SUCCESS,
    CONTACT_RESET_CLEAR
  } from '../constant/contactformConstant';
  
  import GetSiteUrl from '../utils/GetSiteUrl';
  import axios from 'axios';
  
  
  
  const url = GetSiteUrl();



//-----------------------------CREATE FORM--------------------
export const createForm = (formData) => async (dispatch) => {
  try {
    console.log(formData)
    dispatch({ type: CREATE_FORM_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    
    };

    const { data } = await axios.post(`${url}/api/create-form`, formData, config);

    dispatch({ type: CREATE_FORM_SUCCESS, payload: data });

  } catch (error) {
    dispatch({
      type: CREATE_FORM_FAILURE, 
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    });
  }
};

//-----------------------------GET ALL FORMS--------------------
export const getForms = () => async (dispatch) => {
  try {
    dispatch({ type: GETFORM_REQUEST });

    const { data } = await axios.get(`${url}/api/get-all-forms`, {
      withCredentials: true
    });

    dispatch({ type: GETFORM_SUCCESS, payload: data });

  } catch (error) {
    dispatch({
      type: GETFORM_FAILURE,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    });
  }
};

//-----------------------------DELETE FORM--------------------
export const deleteForm = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_FORM_REQUEST });

    const { data } = await axios.delete(`${url}/api/delete-form/${id}`, {
      withCredentials: true
    });

    dispatch({ type: DELETE_FORM_SUCCESS, payload: data });

  } catch (error) {
    dispatch({
      type: DELETE_FORM_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    });
  }
};

//-------Reset clear---
export const ResetClear = () => async (dispatch) => {
  dispatch({ type: CONTACT_RESET_CLEAR });
};