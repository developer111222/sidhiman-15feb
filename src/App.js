import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useParams, } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from './utils/ProtectedRoute';

import Header from './component/header/Header';
import Home from './component/home/Home';
import Footer from './component/footer/Footer';
import About from './component/about/About';
import CauseDetails from './component/cause-details/CauseDetails';
import TeamDetails from './component/team-details/TeamDetails';
import EventDetails from './component/event-details/EventDetails';
import DonationPage from './component/donation-page/DonationPage';
import PhotoGallery from './component/photo-gallery/PhotoGallery';
import BlogPage from './component/blog/single blog/BlogPage';
import Contact from './component/contact/Contact';
import Education from './component/why-education/Education';
import WomenEmpowernment from './component/women-empowerment/WomenEmpowernment';
import HealthCare from './component/why-healthcare/HealthCare';
import SocialJustice from './component/Social Justice and Advocacy/SocialJustice';
import RuralDevelopment from './component/rural-development/RuralDevelopment';
import PageNotFound from './component/404 page/PageNotFound';
import ScrollToTop from './component/scrolltop/ScrollTop';
import DashboardLayoutAccount from './component/admin/dashboard/Dashboard';
import LoginForm from './component/admin/login/LoginForm';
import Sidebar  from './component/admin/dashboard/Sidebar.jsx'

import { userprofile} from './action/userAction.js';
import { useSelector } from 'react-redux';
import CreateBlog from './component/admin/blog/CreateBlog.jsx';
import BlogCategory from './component/admin/blogcategory/BlogCategory.jsx';
import UpdateBlog from './component/admin/blog/update/UpdateBlog.jsx';
import GetBlogTable from './component/admin/blog/getblog/GetBlogTable.jsx';
import Event from './component/admin/event/Event.jsx';
import EventTable from './component/admin/event/get/EventTable.jsx';
import UpdateEvent from './component/admin/event/update/UpdateEvent.jsx';
import TestDonation from './component/donation-page/TestDonation.jsx';
import AllPayment from './component/admin/payment/AllPayment.jsx';
import ContactFormInfo from './component/admin/contactform/ContactFormInfo.jsx';



function App() {

  const { loading, error, user,logmessage,logsuccess,isAuthenticate } = useSelector(state => state.user);

  const isAdmin = user && user.role === 'admin';


  return (
    <div className="App">
      <Router>
<ScrollToTop/>
      
{!isAdmin && <Header />}
       {/* Define routes for different pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cause-details" element={<CauseDetails />} />
          <Route path="/team-details" element={<TeamDetails />} />
          <Route path="/event-details" element={<EventDetails />} />
          <Route path="/donation" element={<DonationPage />} />
          <Route path="/gallery" element={<PhotoGallery />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/why-education" element={<Education />} />
          <Route path="/healthcare" element={<HealthCare />} />
          <Route path="/women-empowerment" element={<WomenEmpowernment />} />
          <Route path="/social-justice-and-advocacy" element={<SocialJustice />} />
          <Route path="/rural-development" element={<RuralDevelopment />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/try" element={<TestDonation />} />
         
          <Route path="*" element={<PageNotFound />} />

        


          {/* //-------------------admin-------------------------- */}
         
         
          <Route path="/admin" element={<ProtectedRoute component={Sidebar} requireAdmin={true} />} />
          <Route path="/admin/create-blog" element={<ProtectedRoute component={CreateBlog} requireAdmin={true} />} />
          <Route path="/admin/get-blog" element={<ProtectedRoute component={GetBlogTable} requireAdmin={true} />} />
          <Route path="/admin/update-blog/:id" element={<ProtectedRoute component={UpdateBlog} requireAdmin={true} />} />
          <Route path="/admin/blog-category" element={<ProtectedRoute component={BlogCategory} requireAdmin={true} />} />
          <Route path="/admin/create-events" element={<ProtectedRoute component={Event} requireAdmin={true} />} />
          <Route path="/admin/all-events" element={<ProtectedRoute component={EventTable} requireAdmin={true} />} />
          <Route path="/admin/update-event/:id" element={<ProtectedRoute component={UpdateEvent} requireAdmin={true} />} />
          <Route path="/admin/all-payment" element={<ProtectedRoute component={AllPayment} requireAdmin={true} />} />
          <Route path="/admin/contact-form" element={<ProtectedRoute component={ContactFormInfo} requireAdmin={true} />} />


        </Routes>

        {/* Footer is now inside the Router */}

        {!isAdmin && <Footer />}
        
      </Router>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />


    </div>
  );
}

export default App;