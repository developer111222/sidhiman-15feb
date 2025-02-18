import {CREATE_PAYMENT_REQUEST,CREATE_PAYMENT_SUCCESS,CREATE_PAYMENT_FAILURE,VERIFY_PAYMENT_REQUEST,VERIFY_PAYMENT_SUCCESS,VERIFY_PAYMENT_FAILURE,GET_PAYMENT_REQUEST,GET_PAYMENT_SUCCESS,GET_PAYMENT_FAILURE, RESET_CLEAR} from '../constant/paymentConstant';
import GetSiteUrl from '../utils/GetSiteUrl';
import axios from 'axios';



const url=GetSiteUrl();


// Create payment order
export const createPaymentOrder = (formData) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_PAYMENT_REQUEST });

    const response = await axios.post(`${url}/api/create-order`, formData);
    const { order } = response.data;

    dispatch({
      type: CREATE_PAYMENT_SUCCESS,
      payload: order
    });

    return order;

  } catch (error) {
    dispatch({
      type: CREATE_PAYMENT_FAILURE,
      payload: error.response && error.response.data.message
      ? error.response.data.message
      : error.message
    });
  }
};

// Verify payment
export const verifyPayment = (paymentData) => async (dispatch) => {
  try {
    dispatch({ type: VERIFY_PAYMENT_REQUEST });

    const response = await axios.post(`${url}/api/verify-payment`, {
      orderId: paymentData.orderId,
      paymentId: paymentData.paymentId, 
      signature: paymentData.signature
    });

    dispatch({
      type: VERIFY_PAYMENT_SUCCESS,
      payload: response.data
    });

    return response.data;

  } catch (error) {
    dispatch({
      type: VERIFY_PAYMENT_FAILURE, 
      payload: error.response && error.response.data.message
      ? error.response.data.message
      : error.message
    });
  }
};

// Get payment details
export const getPaymentDetails = () => async (dispatch) => {
  try {
    dispatch({ type: GET_PAYMENT_REQUEST });

    const response = await axios.get(`${url}/api/payments`);

    dispatch({
      type: GET_PAYMENT_SUCCESS,
      payload: response.data
    });

  } catch (error) {
    dispatch({
      type: GET_PAYMENT_FAILURE,
      payload: error.response && error.response.data.message
      ? error.response.data.message
      : error.message
    });
  }
};


//-------Reset clear---
export const ResetClear = () => async (dispatch) => {
    dispatch({ type: RESET_CLEAR });
  };