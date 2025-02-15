import React, { useEffect, useState } from 'react';
import Sidebar from '../../dashboard/Sidebar';
import BlogForm from '../blogform/BlogForm';
import { useDispatch, useSelector } from 'react-redux';
import { ResetClear, getsingleblog, updateblog } from '../../../../action/blogAction';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateBlog = () => {

    const navigate=useNavigate()
    const dispatch = useDispatch();
    const { id } = useParams();
    const { loading, error, blog,isblog, isupdate, message } = useSelector((state) => state.allblogs);


console.log(id,blog)
    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch(ResetClear());
        }
        if (isupdate) {
            toast.success(message);
            dispatch(ResetClear());
              navigate('/admin/get-blog');
        }
        if(!isblog){

            dispatch(getsingleblog(id));
        }
        
    }, [dispatch, error,isblog, isupdate, id]);

    // Set initial form data only after the blog is fetched
    const [formData, setFormData] = useState({
        metatitle: '',
        metadescription: '',
        metakeywords: '',
        title: '',
        content: '',
        image: '',
        category: ''
    });


    // Update form data when blog data is available
    useEffect(() => {
        if (blog) {
            setFormData({
                metatitle: blog.metatitle || '',
                metadescription: blog.metadescription || '',
                metakeywords: blog.metakeywords || '',
                title: blog.title || '',
                content: blog.content || '',
                image: blog.image || '', // Set existing image URL as default
                category: blog.category || ''
            });
        }
    }, [blog]);

    // Handle input change for text fields and image
    const handleChange = (e) => {
        const { name, value, files } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: name === 'image' ? files[0] : value // Handle image as file, other fields as value
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
    
        dispatch(updateblog(id, formData)); 
        // navigate('/admin/get-blog');
        // window.location.reload();
    };

    return (
        <section style={{ display: 'flex', width: '100%' }}>
            {/* Sidebar on the left */}
            <Sidebar />

            {/* Main content on the right */}
            <div style={{ marginLeft: 40, padding: '20px', width: '100%' }}>
                <h2>Update Blog</h2>

                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <BlogForm
                        handleChange={handleChange}
                        formData={formData}
                        handleSubmit={handleSubmit}
                    />
                )}
            </div>
        </section>
    );
};

export default UpdateBlog;
