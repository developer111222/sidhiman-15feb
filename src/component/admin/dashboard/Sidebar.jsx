import React from "react";
import { Drawer, List, ListItem, ListItemText, Divider, Collapse } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom"; // For Navigation
import { FaHome, FaBlog, FaUser, FaCog, FaSignOutAlt } from "react-icons/fa"; // Icons for navigation
import { useState } from "react"; // For handling the collapse of submenus
import { userprofile,userlogout} from '../../../action/userAction';
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";



const Sidebar = () => {

   // const { window } = props;  
   const dispatch = useDispatch();
const navigate=useNavigate()

   const { loading, error, user,logmessage,logsuccess,isAuthenticate } = useSelector(state => state.user);



  const [openUserMenu, setOpenUserMenu] = useState(false); // State for toggling the user profile menu

  // Toggle the user menu when clicked
  const handleUserMenuClick = () => {
    setOpenUserMenu(!openUserMenu);
  };

  React.useEffect(() => {
    if(!isAuthenticate){
    
      dispatch(userprofile());
    }
      }, [dispatch,isAuthenticate]);
    
      React.useEffect(() => {
        if (error) {
          toast.error(error);
        }
      }, [error]);
    
const handlelogout=()=>{
  dispatch(userlogout())
}

  return (
    <Drawer
    sx={{
      width: 240,
      flexShrink: 0,
      "& .MuiDrawer-paper": {
        width: 240,
        boxSizing: "border-box",
      },
    }}
    variant="permanent"
    anchor="left"
  >
    <List>
      {/* Main Navigation */}
      <NavLink
        to="/admin/create-blog"
        exact
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <ListItem button style={{ paddingLeft: 16, paddingRight: 16 }}>
          <FaHome style={{ marginRight: "10px" }} />
          <ListItemText primary="Blog" />
        </ListItem>
      </NavLink>
      <NavLink
        to="/admin/get-blog"
        exact
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <ListItem button style={{ paddingLeft: 16, paddingRight: 16 }}>
          <FaHome style={{ marginRight: "10px" }} />
          <ListItemText primary="All Blog" />
        </ListItem>
      </NavLink>

      <NavLink
        to="/admin/blog-category"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <ListItem button style={{ paddingLeft: 16, paddingRight: 16 }}>
          <FaBlog style={{ marginRight: "10px" }} />
          <ListItemText primary="Blog Category" />
        </ListItem>
      </NavLink>

      <NavLink
        to="/admin/create-events"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <ListItem button style={{ paddingLeft: 16, paddingRight: 16 }}>
          <FaCog style={{ marginRight: "10px" }} />
          <ListItemText primary="Create Events" />
        </ListItem>
      </NavLink>
      <NavLink
        to="/admin/all-events"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <ListItem button style={{ paddingLeft: 16, paddingRight: 16 }}>
          <FaCog style={{ marginRight: "10px" }} />
          <ListItemText primary="All Events" />
        </ListItem>
      </NavLink>

      {/* User Profile Section */}
      <ListItem
        button
        onClick={handleUserMenuClick}
        style={{ paddingLeft: 16, paddingRight: 16 }}
      >
        <FaUser style={{ marginRight: "10px" }} />
        <ListItemText primary={user.email} />
      </ListItem>
      {/* Submenu for Profile with Logout */}
      <Collapse in={openUserMenu} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          

        <NavLink
  to=""
  style={{ textDecoration: "none", color: "inherit" }}
>
  <ListItem
    button
    style={{ paddingLeft: 64 }}
    onClick={handlelogout}  // Trigger the logout function here
  >
    <FaSignOutAlt style={{ marginRight: "10px" }} />
    <ListItemText primary="Logout" />  {/* You can display "Logout" here */}
  </ListItem>
</NavLink>

        </List>
      </Collapse>
    </List>

    <Divider />
  </Drawer>
  );
};

export default Sidebar;
