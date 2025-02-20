import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getallblogcategory,ResetClear } from "../../../action/blogCategoryAction";
import {getblogbycategory} from '../../../action/blogAction';
import { toast } from "react-toastify";
import { NavLink } from 'react-router-dom';

const Category = () => {

    const dispatch=useDispatch();

    const {loading,error,categories,message}=useSelector(state=>state.blogcategory);
    const {blogerror,blogs,blogmessage}=useSelector(state=>state.allblogs);



    useEffect(()=>{
        if(error){
            toast.error(error);
            dispatch(ResetClear())
        }
        dispatch(getallblogcategory())
    },[dispatch,error])


  return (
    <div className="posts">
                    <h3>Categories</h3>
                    <ul className="categories">
                        {categories && categories.map((category) => (
                            <li key={category._id}>
                                <NavLink to={`/blog/category/${category.slug}`} onClick={() => dispatch(getblogbycategory(category.slug))}>
                                    {category.category}<span>{category.blogCount || 0}</span>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
  )
}

export default Category
