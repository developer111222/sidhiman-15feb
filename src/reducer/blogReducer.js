import {
    CREATE_BLOG_REQUEST,CREATE_BLOG_SUCCESS,CREATE_BLOG_FAILURE,GETBLOG_REQUEST,GETBLOG_SUCCESS,GETBLOG_FAILURE,GET_SINGLE_BLOG_REQUEST,GET_SINGLE_BLOG_SUCCESS,GET_SINGLE_BLOG_FAILURE,UPDATE_BLOG_REQUEST,UPDATE_BLOG_SUCCESS,UPDATE_BLOG_FAIL,DELETE_BLOG_REQUEST,DELETE_BLOG_SUCCESS,DELETE_BLOG_FAIL,BLOG_RESET_CLEAR,GET_BLOG_BY_CATEGORY_REQUEST,GET_BLOG_BY_CATEGORY_SUCCESS,GET_BLOG_BY_CATEGORY_FAILURE
} from '../constant/blogConstant';



const initialstate = {
    blogs: [],
    blog: {},
    loading: false,
    success: false,
    error: null,
    message: null
};

export const blogReducer = (state = initialstate, action) => {
    switch (action.type) {
        case CREATE_BLOG_REQUEST:
        case GETBLOG_REQUEST:
        case GET_SINGLE_BLOG_REQUEST:
        case UPDATE_BLOG_REQUEST:
        case DELETE_BLOG_REQUEST:
            case GET_BLOG_BY_CATEGORY_REQUEST:
                       return {
                ...state,
                loading: true
            };

        case CREATE_BLOG_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                message: action.payload.message
            };

        case GETBLOG_SUCCESS:
            return {
                ...state,
                loading: false,
                blogs: action.payload,
                message: action.payload.message
            };

        case GET_SINGLE_BLOG_SUCCESS:
            return {
                ...state,
                loading: false,
                blog: action.payload,
             isblog:true,
                message: action.payload.message
            };
            case GET_BLOG_BY_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                categoryblogs: action.payload.blogs,
                message: action.payload.message
            };

        case UPDATE_BLOG_SUCCESS:
            return {
                ...state,
                loading: false,
                isupdate: true,
                message: action.payload.message
            };

        case DELETE_BLOG_SUCCESS:
            return {
                ...state,
                loading: false,
                isdelete: true,
                message: action.payload.message
            };

        case CREATE_BLOG_FAILURE:
        case GETBLOG_FAILURE:
        case GET_SINGLE_BLOG_FAILURE:
        case UPDATE_BLOG_FAIL:
        case DELETE_BLOG_FAIL:
            case GET_BLOG_BY_CATEGORY_FAILURE:
            return {
                ...state,
                loading: false,
                success: false,
                error: action.payload
            };
            case BLOG_RESET_CLEAR:
                return {
                    ...state,
                    isAuthenticate: false,
                    success: false,
    isdelete:false,
                    error: null,
                    message: null
                };

        default:
            return state;
    }
}
