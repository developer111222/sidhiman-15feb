import {CREATE_BLOG_CATEGORY_REQUEST,CREATE_BLOG_CATEGORY_SUCCESS,CREATE_BLOG_CATEGORY_FAILURE,GETBLOG_CATEGORY_REQUEST,GETBLOG_CATEGORY_SUCCESS,GETBLOG_CATEGORY_FAILURE,DELETE_BLOG_CATEGORY_REQUEST,DELETE_BLOG_CATEGORY_SUCCESS,DELETE_BLOG_CATEGORY_FAIL,BLOG_CATEGORY_RESET_CLEAR} from '../constant/blogCategoryConstant';


const initialstate = {
    categories: [],
    loading: false,
    success: false,
    error: null,
    message: null
};

export const blogCategoryReducer = (state = initialstate, action) => {
    switch (action.type) {
        case CREATE_BLOG_CATEGORY_REQUEST:
        case GETBLOG_CATEGORY_REQUEST:
        case DELETE_BLOG_CATEGORY_REQUEST:
            return {
                ...state,
                loading: true
            };

        case CREATE_BLOG_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                message: action.payload.message
            };

        case GETBLOG_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                categories: action.payload.categories,
                message: action.payload.message
            };

        case DELETE_BLOG_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                isdelete: true,
                message: action.payload.messag
            };

        case CREATE_BLOG_CATEGORY_FAILURE:
        case GETBLOG_CATEGORY_FAILURE:
        case DELETE_BLOG_CATEGORY_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        case BLOG_CATEGORY_RESET_CLEAR:
            return {
                ...state,
                success: false,
                error: null,
                message: null,
                isdelete:null
            };

        default:
            return state;
    }
};
