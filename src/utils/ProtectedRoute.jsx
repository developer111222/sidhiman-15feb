import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userprofile } from "../action/userAction";

const ProtectedRoute = ({ component: Component, requireAdmin = false }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, user, isAuthenticate } = useSelector(state => state.user);

  useEffect(() => {
    if (!isAuthenticate) {
      dispatch(userprofile());
    }
  }, [isAuthenticate, dispatch]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!loading) {
        if (!isAuthenticate) navigate('/login');
        else if (requireAdmin && user?.role !== "admin") navigate("/");
      }
    }, 2000); // 10 seconds delay

    return () => clearTimeout(timeout); // Cleanup timeout on unmount
  }, [loading, isAuthenticate, user, navigate, requireAdmin]);

  return isAuthenticate && (!requireAdmin || user?.role === "admin") ? <Component /> : null;
};

export default ProtectedRoute;
