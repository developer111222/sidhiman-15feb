import {
    CREATE_FORM_REQUEST,CREATE_FORM_SUCCESS,CREATE_FORM_FAILURE,GETFORM_REQUEST,GETFORM_SUCCESS,GETFORM_FAILURE,DELETE_FORM_FAIL,DELETE_FORM_REQUEST,DELETE_FORM_SUCCESS,
    CONTACT_RESET_CLEAR
  } from '../constant/contactformConstant';
const initialstate = {
    forms: [],
    form: {},
    loading: false,
    success: false,
    error: null,
    message: null
};

export const contactformReducer = (state = initialstate, action) => {
    switch (action.type) {
        case CREATE_FORM_REQUEST:
        case GETFORM_REQUEST:
        case DELETE_FORM_REQUEST:
            return {
                ...state,
                loading: true
            };

        case CREATE_FORM_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                message: action.payload.message
            };

        case GETFORM_SUCCESS:
            return {
                ...state,
                loading: false,
                forms: action.payload.forms,
                message: action.payload.message
            };

        case DELETE_FORM_SUCCESS:
            return {
                ...state,
                loading: false,
                isdelete: true,
                message: action.payload.message
            };

        case CREATE_FORM_FAILURE:
        case GETFORM_FAILURE:
        case DELETE_FORM_FAIL:
            return {
                ...state,
                loading: false,
                success: false,
                error: action.payload
            };

        case CONTACT_RESET_CLEAR:
            return {
                ...state,
              
                success: false,
                isdelete: false,
                error: null,
                message: null
            };

        default:
            return state;
    }
}