import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllEvents, ResetClear, deleteEvent } from '../../../../action/eventAction';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../dashboard/Sidebar';
import { FaSearch } from 'react-icons/fa';

const EventTable = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading, error, events, success, isdelete, message } = useSelector(state => state.events);

    // States for search and pagination
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [eventsPerPage] = useState(15);

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch(ResetClear());
        }
        if (isdelete) {
            toast.success(message);
            dispatch(ResetClear());
        }
        dispatch(getAllEvents());
    }, [error, dispatch, isdelete]);

    const handleDeleteBlog = (id) => {
        dispatch(deleteEvent(id));
    };

    const handleEditBlog = (id) => {
        navigate(`/admin/update-event/${id}`);
        window.location.reload();
    };

    // Handle search input change
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // Filter events by title
    const filteredevents = events.filter((blog) =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Pagination logic
    const indexOfLastEvents = currentPage * eventsPerPage;
    const indexOfFirstBlog = indexOfLastEvents - eventsPerPage;
    const currentevents = filteredevents.slice(indexOfFirstBlog, indexOfLastEvents);

    const totalPages = Math.ceil(filteredevents.length / eventsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            <section style={{ display: 'flex', width: '100%' }}>
                <Sidebar />
                <div style={{ marginLeft: '40px', padding: '20px', width: '100%' }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>All events</h2>
                      

                        {/* Search Bar */}
                        <div style={{ marginBottom: '20px' }}>
                            <input
                                type="text"
                                placeholder="Search by title"
                                value={searchTerm}
                                onChange={handleSearchChange}
                                style={{
                                    padding: '8px 16px',
                                    borderRadius: '4px',
                                    border: '1px solid #ccc',
                                    width: '250px',
                                }}
                            />
                            <FaSearch style={{ marginLeft: '10px', verticalAlign: 'middle' }} />
                        </div>

                        <table
                            style={{
                                width: '100%',
                                borderCollapse: 'collapse',
                                marginTop: '30px',
                                border: '1px solid #ccc',
                            }}
                        >
                            <thead
                                style={{
                                    backgroundColor: '#343a40',
                                    color: 'white',
                                }}
                            >
                                <tr>
                                    <th style={{ padding: '10px', border: '1px solid #ccc' }}>Serial No</th>
                                    <th style={{ padding: '10px', border: '1px solid #ccc' }}>Title</th>
                                    <th style={{ padding: '10px', border: '1px solid #ccc' }}>Slug</th>

                                    <th style={{ padding: '10px', border: '1px solid #ccc' }}>Location</th>
                                    <th style={{ padding: '10px', border: '1px solid #ccc' }}>Start Date</th>
                                    <th style={{ padding: '10px', border: '1px solid #ccc' }}>End Date</th>
                                    <th style={{ padding: '10px', border: '1px solid #ccc' }}>Opening Time</th>
                                    <th style={{ padding: '10px', border: '1px solid #ccc' }}>Close Time</th>
                                    <th style={{ padding: '10px', border: '1px solid #ccc' }}>Edit</th>
                                    <th style={{ padding: '10px', border: '1px solid #ccc' }}>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentevents && currentevents.length > 0 ? (
                                    currentevents.map((event, index) => (
                                        <tr key={event._id}>
                                            <td style={{ padding: '10px', border: '1px solid #ccc' }}>{index + 1}</td>
                                            <td style={{ padding: '10px', border: '1px solid #ccc' }}>{event.title}</td>
                                            <td style={{ padding: '10px', border: '1px solid #ccc' }}>{event.slug}</td>
                                            <td style={{ padding: '10px', border: '1px solid #ccc' }}>{event.location}</td>
                                            <td style={{ padding: '10px', border: '1px solid #ccc' }}>
                                                {new Date(event.startDate).toLocaleDateString('en-GB')}
                                            </td>
                                            <td style={{ padding: '10px', border: '1px solid #ccc' }}>
                                                {new Date(event.endDate).toLocaleDateString('en-GB')}
                                            </td>
                                            <td style={{ padding: '10px', border: '1px solid #ccc' }}>{event.openingTime}</td>
                                            <td style={{ padding: '10px', border: '1px solid #ccc' }}>{event.closeTime}</td>

                                            <td style={{ padding: '10px', border: '1px solid #ccc' }}>
                                                <button
                                                    style={{
                                                        backgroundColor: 'green',
                                                        color: 'white',
                                                        padding: '5px 15px',
                                                        border: 'none',
                                                        borderRadius: '4px',
                                                        cursor: 'pointer',
                                                    }}
                                                    onClick={() => handleEditBlog(event.slug)}
                                                >
                                                    Edit
                                                </button>
                                            </td>
                                            <td style={{ padding: '10px', border: '1px solid #ccc' }}>
                                                <button
                                                    onClick={() => handleDeleteBlog(event._id)}
                                                    style={{
                                                        backgroundColor: 'red',
                                                        color: 'white',
                                                        padding: '5px 15px',
                                                        border: 'none',
                                                        borderRadius: '4px',
                                                        cursor: 'pointer',
                                                    }}
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td
                                            colSpan="9"
                                            style={{
                                                padding: '10px',
                                                textAlign: 'center',
                                                border: '1px solid #ccc',
                                                color: '#999',
                                            }}
                                        >
                                            No events found
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>

                        {/* Pagination */}
                        {filteredevents.length > eventsPerPage && (
                            <div style={{ marginTop: '20px', textAlign: 'center' }}>
                                <button
                                    disabled={currentPage === 1}
                                    onClick={() => handlePageChange(currentPage - 1)}
                                    style={{
                                        padding: '8px 16px',
                                        marginRight: '10px',
                                        border: 'none',
                                        backgroundColor: '#007bff',
                                        color: 'white',
                                        borderRadius: '4px',
                                        cursor: 'pointer',
                                    }}
                                >
                                    Previous
                                </button>
                                <span>
                                    Page {currentPage} of {totalPages}
                                </span>
                                <button
                                    disabled={currentPage === totalPages}
                                    onClick={() => handlePageChange(currentPage + 1)}
                                    style={{
                                        padding: '8px 16px',
                                        marginLeft: '10px',
                                        border: 'none',
                                        backgroundColor: '#007bff',
                                        color: 'white',
                                        borderRadius: '4px',
                                        cursor: 'pointer',
                                    }}
                                >
                                    Next
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default EventTable;
