import {
    CREATE_GALLERY_REQUEST,CREATE_GALLERY_SUCCESS,CREATE_GALLERY_FAILURE,GET_GALLERY_REQUEST,GET_GALLERY_SUCCESS,GET_GALLERY_FAILURE,GET_SINGLE_GALLERY_REQUEST,GET_SINGLE_GALLERY_SUCCESS,GET_SINGLE_GALLERY_FAILURE,UPDATE_GALLERY_REQUEST,UPDATE_GALLERY_SUCCESS,UPDATE_GALLERY_FAIL,DELETE_GALLERY_REQUEST,DELETE_GALLERY_SUCCESS,DELETE_GALLERY_FAIL,
      RESET_CLEAR, GET_GALLERY_BY_CATEGORY_REQUEST,GET_GALLERY_BY_CATEGORY_SUCCESS,GET_GALLERY_BY_CATEGORY_FAILURE
    } from '../constant/galleryConstant';


export const galleryReducer = (state = { galleries: [] }, action) => {
  switch (action.type) {
    case CREATE_GALLERY_REQUEST:
    case GET_GALLERY_REQUEST:
    case GET_SINGLE_GALLERY_REQUEST:
    case UPDATE_GALLERY_REQUEST:
    case DELETE_GALLERY_REQUEST:
      case GET_GALLERY_BY_CATEGORY_REQUEST:
      return {
        loading: true,
      };

    case CREATE_GALLERY_SUCCESS:
      return {
        loading: false,
        success: true,
        gallery: action.payload,
        message:action.payload.message
      };

    case GET_GALLERY_SUCCESS:
      return {
        loading: false,
        galleries: action.payload.data,
      };

    case GET_SINGLE_GALLERY_SUCCESS:
      return {
        loading: false,
        gallery: action.payload,
      };

      case GET_GALLERY_BY_CATEGORY_SUCCESS:
        return {
          loading: false,
          gallery: action.payload.galleries,
        };
    case UPDATE_GALLERY_SUCCESS:
      return {
        loading: false,
        isupdate: true,
        gallery: action.payload,
        message: action.payload.message,  
      };

    case DELETE_GALLERY_SUCCESS:
      return {
        loading: false,
        success: true,
        message: action.payload.message,
      };

    case CREATE_GALLERY_FAILURE:
    case GET_GALLERY_FAILURE:
    case GET_SINGLE_GALLERY_FAILURE:
    case UPDATE_GALLERY_FAIL:
    case DELETE_GALLERY_FAIL:
      case GET_GALLERY_BY_CATEGORY_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };

    case RESET_CLEAR:
      return {
        ...state,
        success: false,
        error: null,
        message:null,
        isupdate:null

      };

    default:
      return state;
  }
};