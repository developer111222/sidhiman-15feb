import React, { useEffect, useState } from 'react';
import Sidebar from '../../dashboard/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { ResetClear, getSingleEvent, updateEvent } from '../../../../action/eventAction';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import EventForm from '../form/EventForm';

const UpdateEvent = () => {

    const navigate=useNavigate()
    const dispatch = useDispatch();
    const { id } = useParams();
    const { loading, error, event,isevent, isupdate, message } = useSelector((state) => state.events);

    
    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch(ResetClear());
        }
        if (isupdate) {
            toast.success(message);
            dispatch(ResetClear());
            navigate('/admin/all-events');
        }
        if(!isevent){
            
            dispatch(getSingleEvent(id));
        }
        
    }, [dispatch, error,isevent, isupdate, id]);
    
   
    // Set initial form data only after the blog is fetched
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


    // Update form data when blog data is available
    useEffect(() => {
        // Check if event is an array and has at least one element
        if (Array.isArray(event) && event.length > 0) {
            const eventData = event[0];  // Extract the first item from the array
            
            setFormData({
                title: eventData.title || '',
                content: eventData.content || '',
                image: eventData.image || '',
                location: eventData.location || '',
                startDate: eventData.startDate || '',
                endDate: eventData.endDate || '',
                openingTime: eventData.openingTime || '',
                closeTime: eventData.closeTime || ''
            });
        }
    }, [event]);  // Effect will run whenever `event` changes
    
    
    
    
    

    // Handle input change for text fields and image
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
        dispatch(updateEvent(id,formData))
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

    return (
        <section style={{ display: 'flex', width: '100%' }}>
            {/* Sidebar on the left */}
            <Sidebar />

            {/* Main content on the right */}
            <div style={{ marginLeft: 40, padding: '20px', width: '100%' }}>
                <h2>Update Events</h2>

                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <EventForm
        handleChange={handleChange}
        formData={formData}
        handleSubmit={handleSubmit}
        setFormData={setFormData}
      />
                )}
            </div>
        </section>
    );
};

export default UpdateEvent;
