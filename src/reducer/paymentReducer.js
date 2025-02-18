import {CREATE_PAYMENT_REQUEST,CREATE_PAYMENT_SUCCESS,CREATE_PAYMENT_FAILURE,VERIFY_PAYMENT_REQUEST,VERIFY_PAYMENT_SUCCESS,VERIFY_PAYMENT_FAILURE,GET_PAYMENT_REQUEST,GET_PAYMENT_SUCCESS,GET_PAYMENT_FAILURE,RESET_CLEAR} from '../constant/paymentConstant';

const initialState = {
  loading: false,
  error: null,
  order: null,
  paymentVerification: null,
  payments: []
};

export const paymentReducer = (state = initialState, action) => {
  switch (action.type) {
    // Create Payment
    case CREATE_PAYMENT_REQUEST:
    case VERIFY_PAYMENT_REQUEST:
    case GET_PAYMENT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };

    case CREATE_PAYMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        order: action.payload,
        message: action.payload.message
      };

    case VERIFY_PAYMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        paymentVerification: action.payload,
        message: action.payload.message
      };

    case GET_PAYMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        payments: action.payload.payments,
        message: action.payload.message
      };

    case CREATE_PAYMENT_FAILURE:
    case VERIFY_PAYMENT_FAILURE:
    case GET_PAYMENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        success: false
      };

    case RESET_CLEAR:
      return {
        ...state,
        success: false,
        error: null,
        message: null
      };

    default:
      return state;
  }
};
