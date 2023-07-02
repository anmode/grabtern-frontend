
import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/sidebar.module.css";

import {
  FaTh,
  FaUserAlt,
  FaCalender
}from 'react-icons/Fa';
import {AiFillHome} from 'react-icons/ai';
const Sidebar=()=> {
  const menuItem=[
    {
      title: "Home",
      icon: <AiFillHome />,
      path: "/"
    },
    {
      title: "Profile",
      icon: <FaUserAlt />,
      path: "/Profile"
    },
    {
      title: "My Sessions",
      icon: <FaTh />,
      path: "/Sessions"
    },
    {
      title: "Calender",
      icon: <FaCalender />,
      path: "/Calender"
    }
  ]
  return (
    <div className={styles.pageContainer}>
      <div className={styles.Sidebar}>
        <div className={styles.logo}>
          <img
            src="/_next/image?url=%2Fwhitelogo.png&amp;w=256&amp;q=75"
            alt="grabtern logo"
          />
        </div>
        <div className={styles.userProfile}>
          <div
            className={styles.userImage}
            // onClick={handleLoginClick}
            // className={styles.userName}
          >
            <img
              style={{
                width: "35px",
                height: "auto",
                borderRadius: "50%",
              }}
              src={
                localStorage.getItem("user_picture") ||
                localStorage.getItem("mentor_picture") ||
                "assets/img/icon/no-profile-picture.png"
              }
              alt="not found"
            />
          </div>
        {localStorage.username}
        </div>
        <ul className={styles.sidebarList}>
          {menuItem.map((val, key) => {
          
                <li
                  key={key}
                  id={window.location.pathname == val.link ? "active" : ""}
                  className="item"
                >
                  <div className={styles.sidebarArea}>
                    <Link to={val.path}>
                      <span id={styles.icon}>{val.icon}</span>
                      <span id={styles.title}>{val.title}</span>
                    </Link>
                  </div>
                </li>
          
          })}
        </ul>
        <div className={styles.logOut}>Log Out</div>
      </div>
    </div>
  );
}
export default Sidebar;