import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getsingleblog, ResetClear } from "../../../action/blogAction";
import { toast } from "react-toastify";
import Comment from '../comment/Comment';
import RecentPosts from '../recent-posts/RecentPosts';
import Category from '../category/Category';
import DOMPurify from 'dompurify';
import ImageUrl from '../../../utils/ImageUrl';
import {Helmet} from 'react-helmet-async'

const BlogPage = () => {
    const { id } = useParams();  // ✅ Get the blog ID from URL
    const dispatch = useDispatch();
    const { loading, blog, error } = useSelector((state) => state.allblogs);

    const imageurl = ImageUrl();

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch(ResetClear())
        }
        if (id) {
            dispatch(getsingleblog(id));
            dispatch(ResetClear())
        }
        dispatch(ResetClear())
    }, [dispatch, error, id]);
    useEffect(() => {
        console.log("Helmet Debug:", blog?.title, blog?.metakeywords, blog?.metadescription);
    }, [blog]);
    


    return (
        <>
        {/* Add Meta Tags in the Head */}
        {blog && (
  <Helmet>
    <title>{blog && blog.metatitle}</title>
    <meta name="author" content={blog && blog.author && blog.author.username} />
    <meta name="keywords" content={blog && blog.metakeywords || ''} />
    <meta name="description" content={blog && blog.metadescription || ''} />
  </Helmet>
)}

            <section className="page-title-area" style={{ backgroundImage: 'url(https://via.placeholder.com/1920x430)' }}>
                <div className="container">
                    <div className="title-area-data">
                        <h2>Blog Details</h2>
                        <p>Organisations committed to ending poverty worldwide.</p>
                    </div>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Our Blog</li>
                        <li className="breadcrumb-item active" aria-current="page">Blog Details</li>
                    </ol>
                </div>
            </section>

            {/* Blog Details Section */}
            <section className="gap">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8">
                            <div className="blog-details-text hoverimg">
                                {loading ? (
                                    <p>Loading...</p>
                                ) : blog ? (
                                    <>
                                        {/* Blog Image */}
                                        <figure>
                                            <img alt={blog.title} className="w-100" src={`${imageurl}/${blog.image}`} />
                                        </figure>

                                        {/* Blog Date */}
                                        <div className="article">
                                            <h4>
                                                {new Date(blog.createdAt).toLocaleDateString()}
                                            </h4>
                                        </div>

                                        {/* Blog Title */}
                                        <h1>{blog.title}</h1>

                                        {/* Meta Info */}
                                        <div className="meta-info">
                                            <ul>
                                                <li className=""  >

                                                    <p style={{ background: 'red', color: 'white', paddingLeft: '8px' }}>Posted by {blog.author?.username || "Unknown"}</p>
                                                </li>
                                                <li><i className="fa-solid fa-eye"></i><h6>50K</h6></li>
                                                <li><i className="fa-solid fa-message"></i><h6>50K</h6></li>
                                            </ul>
                                        </div>

                                        {/* Blog Content */}
                                        <p className="pt-4" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(blog.content) }}></p>

                                        {/* Post Tags */}
                                        {/* <div className="post-tags">
                                            <h6>Post Tags:</h6>
                                            <ul>
                                                {blog.tags?.map((tag, index) => (
                                                    <li key={index}><a href="#">{tag}</a></li>
                                                ))}
                                            </ul>
                                        </div> */}
                                    </>
                                ) : (
                                    <p>Blog not found</p>
                                )}
                            </div>

                            {/* Comments Section */}
                            {/* <Comment /> */}
                        </div>

                        {/* Sidebar */}
                        <div className="col-xl-4">
                            <div className="sidebar">
                                <RecentPosts />
                                <Category />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogPage;
