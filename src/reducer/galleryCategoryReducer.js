import {CREATE_GALLERY_CATEGORY_REQUEST,CREATE_GALLERY_CATEGORY_SUCCESS,CREATE_GALLERY_CATEGORY_FAILURE,GET_GALLERY_CATEGORY_REQUEST,GET_GALLERY_CATEGORY_SUCCESS,GET_GALLERY_CATEGORY_FAILURE,DELETE_GALLERY_CATEGORY_REQUEST,DELETE_GALLERY_CATEGORY_SUCCESS,DELETE_GALLERY_CATEGORY_FAIL,UPDATE_GALLERY_CATEGORY_REQUEST,UPDATE_GALLERY_CATEGORY_SUCCESS,UPDATE_GALLERY_CATEGORY_FAIL,RESET_CLEAR} from '../constant/galleryCategoryConstant';


export const galleryCategoryReducer = (state = { galleryCategories: [] }, action) => {
  switch (action.type) {
    case CREATE_GALLERY_CATEGORY_REQUEST:
    case GET_GALLERY_CATEGORY_REQUEST:
    case DELETE_GALLERY_CATEGORY_REQUEST:
      case UPDATE_GALLERY_CATEGORY_REQUEST:
      return {
        loading: true,
        ...state,
      };

    case CREATE_GALLERY_CATEGORY_SUCCESS:
      return {
        loading: false,
        success: true,
      
        message:action.payload.message
      };

    case GET_GALLERY_CATEGORY_SUCCESS:
      return {
        loading: false,
        galleryCategories: action.payload.categories,
      };
case UPDATE_GALLERY_CATEGORY_SUCCESS:

return{
  loading: false,
  isupdate: true,
  message: action.payload.message,  
}
    case DELETE_GALLERY_CATEGORY_SUCCESS:
      return {
        loading: false,
        isdelete: true,
        message: action.payload.message,
      };

    case CREATE_GALLERY_CATEGORY_FAILURE:
    case GET_GALLERY_CATEGORY_FAILURE:
    case DELETE_GALLERY_CATEGORY_FAIL:
      case UPDATE_GALLERY_CATEGORY_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case RESET_CLEAR:
      return {
        ...state,
        success: false,
        isdelete: false,
        error: null,
      };

    default:
      return state;
  }
};
