
import React, { useEffect, useState } from 'react'
import EventForm from './form/EventForm'
import Sidebar from '../dashboard/Sidebar';
import {useDispatch, useSelector} from 'react-redux';
import { toast } from 'react-toastify';
import {createEvent} from '../../../action/eventAction'

const Event = () => {

  const dispatch = useDispatch();
  const {loading,error,success,message}=useSelector(state=>state.events)


    const [formData, setFormData] = useState({
        title: '',
        content: '',
        image: '',
        location: '',
        startDate: '',
        endDate: '',
        openingTime: '',
        closeTime: ''
      });
    
      // Handle change for all inputs
      const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData((prev) => ({
          ...prev,
          [name]: name === 'image' ? files[0] : value,
        }));
      };
    
      // Handle form submission
      const handleSubmit = (e) => {
        e.preventDefault();
        // Log the form data to the console or send it to an API
        console.log('Form Data Submitted:', formData);
        dispatch(createEvent(formData))
        setFormData({
          title: '',
          content: '',
          image: '',
          location: '',
          startDate: '',
          endDate: '',
          openingTime: '',
          closeTime: ''
        });
      };

      useEffect(()=>{
        if(error){
          toast.error(error)
        }
        if(success){
          toast.success(message)
        }
      },[error,success,message,dispatch])



  return (
    <section style={{ display: 'flex', width: '100%' }}>
    {/* Sidebar on the left */}
    <Sidebar />

    {/* Main content on the right */}
    <div style={{ marginLeft:40, padding: '20px', width: '100%' }}>
      <h2 style={{textAlign:'center'}}>Create Events    </h2>
      <EventForm
        handleChange={handleChange}
        formData={formData}
        handleSubmit={handleSubmit}
        setFormData={setFormData}
      />
    </div>
  
  </section>
  )
}

export default Event