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
      return {
        ...state,
        loading: true,
        error: null
      };
    case CREATE_PAYMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        order: action.payload
      };
    case CREATE_PAYMENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    // Verify Payment  
    case VERIFY_PAYMENT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case VERIFY_PAYMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        paymentVerification: action.payload
      };
    case VERIFY_PAYMENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    // Get Payments
    case GET_PAYMENT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case GET_PAYMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        payments: action.payload
      };
    case GET_PAYMENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case RESET_CLEAR:
      return initialState;

    default:
      return state;
  }
};
