import React from 'react';
import {
    FaTh,
    FaUserAlt,
    FaCalender
  }from 'react-icons/Fa';
  import {AiFillHome} from 'react-icons/ai';
const sidebarData=()=>{
    const menuItem=[
        {
          title: "Home",
          icon: <AiFillHome />,
          path: "/",
        },
        {
          title: "Profile",
          icon: <FaUserAlt />,
          path: "/Profile",
        },
        {
          title: "My Sessions",
          icon: <FaTh />,
          path: "/Sessions",
        },
        {
          title: "Calender",
          icon: <FaCalender />,
          path: "/Calender",
        }
      ]
}