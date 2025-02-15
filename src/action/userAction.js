
import {
SIGNUP_REQUEST,SIGNUP_SUCCESS,SIGNUP_FAILURE,LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAILURE,LOGOUT_REQUEST,LOGOUT_SUCCESS,LOGOUT_FAILURE,PROFILE_REQUEST,PROFILE_SUCCESS,PROFILE_FAIL,RESET_CLEAR
} from '../constant/userConstanr';
import GetSiteUrl from '../utils/GetSiteUrl';
import axios from 'axios';



const url=GetSiteUrl();



//----------------------------------user signup--------------------------

export const signup=(email,password)=>async(dispatch)=>{ console.log(email,password)
    try {
        dispatch({type:SIGNUP_REQUEST})

        const config= { headers: { 'Content-Type': 'application/json' } };

        const {data}=await axios.post(`${url}/api/user/signup`,{email,password},config);

        dispatch({type:SIGNUP_SUCCESS,payload:data})

    } catch (error) {
        dispatch({type:SIGNUP_FAILURE, 
            payload: error.response && error.response.data.message
                     ? error.response.data.message
                     : error.message,})
    }
}


//-----------------------------user login-------------------------

export const login=(email,password)=>async(dispatch)=>{

    try {
        dispatch({type:LOGIN_REQUEST})
        const config= { headers: { 'Content-Type': 'application/json' } };

        const {data}=await axios.post(`${url}/api/login`,{email,password},{
            withCredentials:true
        },config)
        dispatch({type:LOGIN_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:LOGIN_FAILURE,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        })

    }
}

//----------------------------user logout----------------------
export const userlogout=()=>async(dispatch)=>{
    try {
        dispatch({type:LOGOUT_REQUEST});

        const {data}=await axios.post(`${url}/api/logout`,{}, 
            { withCredentials: true }
        );
dispatch({type:LOGOUT_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:LOGOUT_FAILURE,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        })
    }
}


//---------------------------user profile--------------------

export const userprofile=()=>async(dispatch)=>{
    try {
        dispatch({type:PROFILE_REQUEST})


   const data=await axios.get(`${url}/api/profile`,{withCredentials:true})
        dispatch({type:PROFILE_SUCCESS,payload:data})
    } catch (error) {
  
        dispatch({type:PROFILE_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message               
            : error.message
        })
    }
}


//-------Reset clear---
export const ResetClear = () => async (dispatch) => {
    dispatch({ type: RESET_CLEAR });
};