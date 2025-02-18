import { useEffect, useState }
  from 'react'
import BlogForm from './blogform/BlogForm';
import {useDispatch, useSelector} from 'react-redux';
import {createblog,ResetClear} from '../../../action/blogAction';

import { toast } from 'react-toastify';
import GetBlogTable from './getblog/GetBlogTable';
import Sidebar from '../dashboard/Sidebar';


const CreateBlog = () => {

  const dispatch = useDispatch();
  const {loading,error,blogs,success,message}=useSelector(state=>state.allblogs)



  const [formData, setFormData] = useState({
    metatitle: "",
    metadescription: "",
    metakeywords: "",
    title: "",
    content: "",

    image: "",
    category: ""
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "image" ? files[0] : value,
    }));
  };


  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    dispatch(createblog(formData))
   setFormData({
    metatitle: "",
    metadescription: "",
    metakeywords: "",
    title: "",
    content: "",

    image: "",
    category: ""
   })
  };

useEffect(()=>{
  if(error){
    toast.error(error)
    dispatch(ResetClear())
  }
  if(success){
    toast.success(message)
    dispatch(ResetClear())
  } 
},[dispatch,error,success])


  return (
    <section style={{ display: 'flex', width: '100%' }}>
    {/* Sidebar on the left */}
    <Sidebar />

    {/* Main content on the right */}
    <div style={{ marginLeft:40, padding: '20px', width: '100%' }}>
      <h2 style={{textAlign:'center'}}>Create Blog</h2>
      <BlogForm
        handleChange={handleChange}
        formData={formData}
        handleSubmit={handleSubmit}
        setFormData={setFormData}
      />
    </div>
  
  </section>
  )
}

export default CreateBlog