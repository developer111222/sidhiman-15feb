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
    DELETE_EVENTS_FAIL,EVENT_RESET_CLEAR
  } from '../constant/eventConstant';

const initialstate = {
    events: [],
    event: {},
    loading: false,
    success: false,
    error: null,
    message: null
};

export const eventReducer = (state = initialstate, action) => {
    switch (action.type) {
        case CREATE_EVENTS_REQUEST:
        case GETEVENTS_REQUEST:
        case GET_SINGLE_EVENTS_REQUEST:
        case UPDATE_EVENTS_REQUEST:
        case DELETE_EVENTS_REQUEST:
            return {
                ...state,
                loading: true
            };

        case CREATE_EVENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                message: action.payload.message
            };

        case GETEVENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                events: action.payload,
                message: action.payload.message
            };

        case GET_SINGLE_EVENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                event: action.payload,
                isevent: true,
                message: action.payload.message
            };

        case UPDATE_EVENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                isupdate: true,
                message: action.payload.message
            };

        case DELETE_EVENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                isdelete: true,
                message: action.payload.message
            };

        case CREATE_EVENTS_FAILURE:
        case GETEVENTS_FAILURE:
        case GET_SINGLE_EVENTS_FAILURE:
        case UPDATE_EVENTS_FAIL:
        case DELETE_EVENTS_FAIL:
            return {
                ...state,
                loading: false,
                success: false,
                error: action.payload
            };

        case EVENT_RESET_CLEAR:
            return {
                ...state,
                isAuthenticate: false,
                success: false,
                isdelete: false,
                error: null,
                message: null
            };

        default:
            return state;
    }
}