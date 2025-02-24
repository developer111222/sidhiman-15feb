import React, { useEffect, useState } from 'react';
import Sidebar from '../../dashboard/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { ResetClear, getSingleEvent, updateEvent } from '../../../../action/eventAction';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import EventForm from '../form/EventForm';

const UpdateEvent = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();
    const { loading, error, event, isevent, isupdate, message } = useSelector((state) => state.events);

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
        if (!isevent) {
            dispatch(getSingleEvent(id));
        }
    }, [dispatch, error, isevent, isupdate, id]);

    // Set initial form data only after the event is fetched
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

    // Update form data when event data is available
    useEffect(() => {
        // Check if event is an object and has data
        if (event && Object.keys(event).length > 0) {
            setFormData({
                title: event.title || '',
                content: event.content || '',
                image: event.image || '',
                location: event.location || '',
                startDate: event.startDate || '',
                endDate: event.endDate || '',
                openingTime: event.openingTime || '',
                closeTime: event.closeTime || ''
            });
        }
    }, [event]); // Effect will run whenever `event` changes

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
        console.log('Form Data Submitted:', formData);
        dispatch(updateEvent(id, formData));
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
                <h2>Update Event</h2>

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
