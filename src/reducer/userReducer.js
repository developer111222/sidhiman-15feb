import {
    SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE, PROFILE_REQUEST, PROFILE_SUCCESS, PROFILE_FAIL, RESET_CLEAR
} from '../constant/userConstanr';

const initialstate = {
    user: [],
    isAuthenticate: false,  loading: false
};

export const userReducer = (state = initialstate, action) => {

    switch (action.type) {

        case SIGNUP_REQUEST:
            case LOGIN_REQUEST:
            case LOGOUT_REQUEST:
            case PROFILE_REQUEST:
                return {
                    ...state,
                    loading: true,
                    isAuthenticated: false // Fixed typo
                };
        case SIGNUP_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticate: false, // Fix this typo
                message: action.payload.message,
            }

        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticate: false,
                success: true,
                message: action.payload.message,

            }
        case LOGOUT_FAILURE:
            return {
                ...state,
                loading: false,
                isAuthenticate: false,
                message: action.payload.message
            }
        case PROFILE_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticate: true,
                success:true,
                user: action.payload.data,
                message: action.payload.message

            }
            case LOGOUT_SUCCESS:
                return{
                    ...state,
                    loading: false,
                    logsuccess:true,
                    isAuthenticate: false, // Fix this typo
                    logmessage: action.payload.message,
                }
            case SIGNUP_FAILURE:
                case LOGIN_FAILURE:
                case LOGOUT_FAILURE:
                case PROFILE_FAIL:
                    return {
                        ...state,
                        loading: false,
                        isAuthenticated: false, // Fixed the typo
                        success: false,
                        error: action.payload
                    };
        case RESET_CLEAR:
            return {
                ...state,
                isAuthenticate: false,
                success: false,

                error: null,
                message: null
            };
        default:
            return state;
    }
}