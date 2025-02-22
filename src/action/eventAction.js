
import {
  CREATE_EVENTS_REQUEST,
  CREATE_EVENTS_SUCCESS,
  CREATE_EVENTS_FAILURE,
  GETEVENTS_REQUEST,
  GETEVENTS_SUCCESS,
  GETEVENTS_FAILURE,
  GET_SINGLE_EVENTS_REQUEST,
  GET_SINGLE_EVENTS_SUCCESS,
  GET_SINGLE_EVENTS_FAILURE,
  UPDATE_EVENTS_REQUEST,
  UPDATE_EVENTS_SUCCESS,
  UPDATE_EVENTS_FAIL,
  DELETE_EVENTS_REQUEST,
  DELETE_EVENTS_SUCCESS,
  DELETE_EVENTS_FAIL,
  EVENT_RESET_CLEAR
} from '../constant/eventConstant';

import GetSiteUrl from '../utils/GetSiteUrl';
import axios from 'axios';



const url = GetSiteUrl();

//-----------------------------CREATE EVENT--------------------
export const createEvent = (eventData) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_EVENTS_REQUEST });

    const inputdata = new FormData();
    for (let key in eventData) {
      inputdata.append(key, eventData[key]);
    }

    const config = { headers: { "Content-Type": "multipart/form-data" } };

    const { data } = await axios.post(`${url}/api/create-event`, inputdata, {
      withCredentials: true
    }, config);

    dispatch({ type: CREATE_EVENTS_SUCCESS, payload: data });

  } catch (error) {
    dispatch({
      type: CREATE_EVENTS_FAILURE,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    });
  }
}

//-----------------------------GET ALL EVENTS--------------------
export const getAllEvents = () => async (dispatch) => {
  try {
    dispatch({ type: GETEVENTS_REQUEST });

    const { data } = await axios.get(`${url}/api/get-event`, {
      withCredentials: true
    });

    dispatch({ type: GETEVENTS_SUCCESS, payload: data });

  } catch (error) {
    dispatch({
      type: GETEVENTS_FAILURE,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    });
  }
}

//-----------------------------GET SINGLE EVENT--------------------
export const getSingleEvent = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_SINGLE_EVENTS_REQUEST });

    const { data } = await axios.get(`${url}/api/get-single-event/${id}`, {
      withCredentials: true
    });

    dispatch({ type: GET_SINGLE_EVENTS_SUCCESS, payload: data });

  } catch (error) {
    dispatch({
      type: GET_SINGLE_EVENTS_FAILURE,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    });
  }
}

//-----------------------------UPDATE EVENT--------------------
export const updateEvent = (id, eventData) => async (dispatch) => {
  try {
    console.log(id, eventData);

    dispatch({ type: UPDATE_EVENTS_REQUEST });

    const inputdata = new FormData();
    for (let key in eventData) {
      inputdata.append(key, eventData[key]);
    }

    const config = {
      headers: { "Content-Type": "multipart/form-data" },
      withCredentials: true,
    };

    // Updated axios call
    const { data } = await axios.patch(`${url}/api/update-event/${id}`, inputdata, config);

    dispatch({ type: UPDATE_EVENTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: UPDATE_EVENTS_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};


//-----------------------------DELETE EVENT--------------------
export const deleteEvent = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_EVENTS_REQUEST });

    const { data } = await axios.delete(`${url}/api/delete-event/${id}`, {
      withCredentials: true
    });

    dispatch({ type: DELETE_EVENTS_SUCCESS, payload: data });

  } catch (error) {
    dispatch({
      type: DELETE_EVENTS_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    });
  }
}


//-------Reset clear---
export const ResetClear = () => async (dispatch) => {
  dispatch({ type: EVENT_RESET_CLEAR });
};