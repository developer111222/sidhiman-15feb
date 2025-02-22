import {CREATE_BLOG_CATEGORY_REQUEST,CREATE_BLOG_CATEGORY_SUCCESS,CREATE_BLOG_CATEGORY_FAILURE,GETBLOG_CATEGORY_REQUEST,GETBLOG_CATEGORY_SUCCESS,GETBLOG_CATEGORY_FAILURE,DELETE_BLOG_CATEGORY_REQUEST,DELETE_BLOG_CATEGORY_SUCCESS,DELETE_BLOG_CATEGORY_FAIL,BLOG_CATEGORY_RESET_CLEAR} from '../constant/blogCategoryConstant';
import GetSiteUrl from '../utils/GetSiteUrl';
import axios from 'axios';



const url=GetSiteUrl();


//-----------------------------CREATE BLOG CATEGORY--------------------

export const createblogcategory = (category) => async (dispatch) => { console.log(category)
    try {
        dispatch({ type: CREATE_BLOG_CATEGORY_REQUEST });

        const { data } = await axios.post(`${url}/api/create-category`, {category}, {
            withCredentials: true
        });

        dispatch({ type: CREATE_BLOG_CATEGORY_SUCCESS, payload: data });

    } catch (error) {
        dispatch({
            type: CREATE_BLOG_CATEGORY_FAILURE,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        });
    }
}

//-----------------------------GET ALL BLOG CATEGORIES--------------------
export const getallblogcategory = () => async (dispatch) => {
    try {
        dispatch({ type: GETBLOG_CATEGORY_REQUEST });

        const { data } = await axios.get(`${url}/api/get-all-category`, {
            withCredentials: true
        });
        
        dispatch({ type: GETBLOG_CATEGORY_SUCCESS, payload: data });

    } catch (error) {
        dispatch({
            type: GETBLOG_CATEGORY_FAILURE,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        });
    }
}

//-----------------------------DELETE BLOG CATEGORY--------------------
export const deleteblogcategory = (id) => async (dispatch) => { console.log(id)
    try {
        dispatch({ type: DELETE_BLOG_CATEGORY_REQUEST });

        const { data } = await axios.delete(`${url}/api/delete-category/${id}`, {
            withCredentials: true
        });
console.log(data)
        dispatch({ type: DELETE_BLOG_CATEGORY_SUCCESS, payload: data });

    } catch (error) {
        dispatch({
            type: DELETE_BLOG_CATEGORY_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        });
    }
}



export const ResetClear = () => async (dispatch) => {
    dispatch({ type: BLOG_CATEGORY_RESET_CLEAR });
};