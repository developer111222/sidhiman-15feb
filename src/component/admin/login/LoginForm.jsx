// src/components/LoginForm.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {login,ResetClear} from '../../../action/userAction';
import { toast } from 'react-toastify';
import { NavLink, useNavigate } from 'react-router-dom';  


const LoginForm = () => {
  // Single state to hold both email and password values

                
const {loading,error,message,success,isAuthenticate}=useSelector(state=>state.user)

// console.log(error,message,success)
const dispatch=useDispatch();
const navigate=useNavigate();

  const [formData, setFormData] = useState({ email: '', password: '' });
//   const [error, setError] = useState('');

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,  // Copy the previous state
      [name]: value,  // Update the specific field (email or password)
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = formData;
 
    dispatch(login(email,password))
    setFormData({ email: '', password: '' });

  };


  useEffect(()=>{
    if(error){
      toast.error(error)
      dispatch(ResetClear());
    }
    if(success){
      toast.success(message)
      navigate('/admin')
    }
  },[dispatch,error,success])






  return (
    <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f4f4f4',
    }}
  >
    <div
      style={{
        width: '500px',
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: 'white',
        borderRadius: '8px',
        textAlign: 'center',
      }}
    >
      <h3 style={{ marginBottom: '20px' }}>Login</h3>
      {error && (
        <div
          style={{
            backgroundColor: '#f8d7da',
            color: '#721c24',
            padding: '10px',
            borderRadius: '5px',
            marginBottom: '20px',
          }}
        >
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px', display: 'flex', flexDirection: 'column' }}>
          <label
            htmlFor="email"
            style={{
              marginBottom: '5px',
              textAlign: 'left',  // This will make sure the label is aligned to the left
            }}
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              fontSize: '16px',
            }}
          />
        </div>
        <div style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column' }}>
          <label
            htmlFor="password"
            style={{
              marginBottom: '5px',
              textAlign: 'left',  // Ensures left alignment for password label
            }}
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              fontSize: '16px',
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: '#dc3545', // Red button background
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontSize: '16px',
            cursor: 'pointer',
          }}
        >
          Login
        </button>
      </form>
    </div>
  </div>
  );
};

export default LoginForm;
