import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getallblog } from "../../../action/blogAction";
import { toast } from "react-toastify";
import { NavLink } from 'react-router-dom';

const RecentPosts = () => {
    const dispatch = useDispatch();
    const { loading, blogs, error } = useSelector((state) => state.allblogs);

    const imageurl = 'http://localhost:5000/upload';

    useEffect(() => {
        if (error) {
            toast.error(error);
        }
        dispatch(getallblog());
    }, [dispatch, error]);

    // Get only the latest 3 blogs
    const recentBlogs = blogs?.slice(0, 3);

    return (
        <div className="posts recent-posts">
            <h3>Recent Posts</h3>
            <ul>
                {loading ? (
                    <p>Loading...</p>
                ) : recentBlogs?.length > 0 ? (
                    recentBlogs.map((blog) => (
                        <li key={blog._id}>
                            <img 
                                alt={blog.title} 
                                src={`${imageurl}/${blog.image}`} 
                                style={{ width: "100px", height: "90px", objectFit: "cover" }} 
                            />
                            <div>
                                <a href="#" className="post-date">
                                    {new Date(blog.createdAt).toLocaleDateString()}
                                </a>
                                <h6>
                                <NavLink
    to={`/blog/${blog.slug}`}
    className="text-danger small fw-bold"
    style={{ textDecoration: "none" }}
>
    Read More →
</NavLink>
                                </h6>
                            </div>
                        </li>
                    ))
                ) : (
                    <p>No Recent Posts</p>
                )}
            </ul>
        </div>
    );
};

export default RecentPosts;
