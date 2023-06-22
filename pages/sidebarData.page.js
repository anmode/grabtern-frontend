import React from "react";
import {
    FaTh,
    FaUserAlt,
    FaCalender
}from 'react-icons/Fa';
import {AiFillHome} from 'react-icons/ai'
export const SidebarData = [
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
  // {
  //     title:"Internships",
  //     icon:<AssuredWorkloadIcon/>,
  //     path:""
  // },
  // {
  //     title:"Be a mentor",
  //     icon:<CheckCircleOutlineIcon/>,
  //     path:""
  // }
];
export default SidebarData;