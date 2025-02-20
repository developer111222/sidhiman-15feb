import {
    CREATE_BLOG_REQUEST,CREATE_BLOG_SUCCESS,CREATE_BLOG_FAILURE,GETBLOG_REQUEST,GETBLOG_SUCCESS,GETBLOG_FAILURE,GET_SINGLE_BLOG_REQUEST,GET_SINGLE_BLOG_SUCCESS,GET_SINGLE_BLOG_FAILURE,UPDATE_BLOG_REQUEST,UPDATE_BLOG_SUCCESS,UPDATE_BLOG_FAIL,DELETE_BLOG_REQUEST,DELETE_BLOG_SUCCESS,DELETE_BLOG_FAIL,RESET_CLEAR,GET_BLOG_BY_CATEGORY_REQUEST,GET_BLOG_BY_CATEGORY_SUCCESS,GET_BLOG_BY_CATEGORY_FAILURE
} from '../constant/blogConstant';
import GetSiteUrl from '../utils/GetSiteUrl';
import axios from 'axios';



const url=GetSiteUrl();


// -----------------------------------CREATE BLOG-----------------------

export const
 createblog=(formdata)=>async(dispatch)=>{

// console.log(formdata)
    try {
        dispatch({type: CREATE_BLOG_REQUEST});

        const inputdata = new FormData();
        for (let key in formdata) {
          inputdata.append(key, formdata[key]);
        }

        const config = { headers: { "Content-Type": "multipart/form-data" } };

        const {data} = await axios.post(`${url}/api/create-blog`, inputdata, {
            withCredentials: true
        }, config);

        dispatch({type: CREATE_BLOG_SUCCESS, payload: data});

    } catch (error) {
        dispatch({
            type: CREATE_BLOG_FAILURE,
            payload: error.response && error.response.data.message 
                ? error.response.data.message
                : error.message
        });
    }


}

//-----------------------------------GET ALL BLOGS-----------------------
export const getallblog = () => async (dispatch) => {
    try {
        dispatch({ type: GETBLOG_REQUEST });

        const { data } = await axios.get(`${url}/api/blogs`, {
            withCredentials: true
        });

        dispatch({ type: GETBLOG_SUCCESS, payload: data });

    } catch (error) {
        dispatch({
            type: GETBLOG_FAILURE,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        });
    }
}

//-----------------------------------GET SINGLE BLOG-----------------------
export const getsingleblog = (id) => async (dispatch) => {
    try {
        dispatch({ type: GET_SINGLE_BLOG_REQUEST });

        const { data } = await axios.get(`${url}/api/single-blog/${id}`, {
            withCredentials: true
        });
    

        dispatch({ type: GET_SINGLE_BLOG_SUCCESS, payload: data });

    } catch (error) {
        dispatch({
            type: GET_SINGLE_BLOG_FAILURE,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        });
    }
}

//------------------GET BLOG BY CXATEGORY------------------------------

export const getblogbycategory = (id) => async (dispatch) => {
    try {
        dispatch({ type: GET_BLOG_BY_CATEGORY_REQUEST });

        const { data } = await axios.get(`${url}/api/blog-by-category/${id}`, {
          
        });

        dispatch({ type: GET_BLOG_BY_CATEGORY_SUCCESS, payload: data });

    } catch (error) {
        dispatch({
            type: GET_BLOG_BY_CATEGORY_FAILURE,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        });
    }
}






//-----------------------------------UPDATE BLOG-----------------------
export const updateblog = (id, formData) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_BLOG_REQUEST });

        const inputdata = new FormData();
        for (let key in formData) {
          inputdata.append(key, formData[key]);
        }

        const config = { headers: { "Content-Type": "multipart/form-data" } };

        const { data } = await axios.patch(`${url}/api/update-blog/${id}`, inputdata, {
            withCredentials: true
        }, config);

        dispatch({ type: UPDATE_BLOG_SUCCESS, payload: data });

    } catch (error) {
        dispatch({
            type: UPDATE_BLOG_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        });
    }
}

//-----------------------------------DELETE BLOG-----------------------
export const deleteblog = (id) => async (dispatch) => { console.log(id,"id")
    try {
        dispatch({ type: DELETE_BLOG_REQUEST });

        const { data } = await axios.delete(`${url}/api/delete-blog/${id}`, {
            withCredentials: true
        });

        dispatch({ type: DELETE_BLOG_SUCCESS, payload: data });

    } catch (error) {
        dispatch({
            type: DELETE_BLOG_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        });
    }
}


//-------Reset clear---
export const ResetClear = () => async (dispatch) => {
    dispatch({ type: RESET_CLEAR });
};