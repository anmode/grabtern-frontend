import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/sidebar.module.css";

import { FaTh, FaUserAlt, FaCalendar } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";

const Sidebar = ({ setComponent }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    console.log("toggle clicked ", isSidebarOpen);

    setIsSidebarOpen(!isSidebarOpen);
  };

  const menuItem = [
    {
      title: "Home",
      icon: <AiFillHome />,
      path: "profile",
    },
    {
      title: "Profile",
      icon: <FaUserAlt />,
      path: "profile",
    },
    {
      title: "My Sessions",
      icon: <FaTh />,
      path: "sessions",
    },
    {
      title: "Calender",
      icon: <FaCalendar />,
      path: "calendar",
    },
  ];

  return (
    <>
      <div>
        <button
          type="button"
          className="tw-fixed tw-inline-flex md:tw-hidden sm:tw-block tw-items-center tw-p-2 tw-mt-2 tw-ml-3 tw-z-50 tw-text-sm tw-text-gray-500 tw-rounded-lg tw-sm:hidden tw-hover:bg-gray-100 tw-focus:outline-none tw-focus:ring-2 tw-focus:ring-gray-200"
          onClick={toggleSidebar}
        >
          <span className="tw-sr-only">Open sidebar</span>
          <svg
            className="tw-w-6 tw-h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              fill-rule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>

        <aside
          className={`tw-fixed tw-top-0 tw-left-0 tw-z-40 tw-w-64 tw-h-screen tw-transform tw-transition-transform tw-bg-gradient-to-t tw-to-blue-500 tw-via-purple-500 tw-from-pink-500 lg:tw-translate-x-0 ${
            isSidebarOpen ? "tw-translate-x-0" : "tw--translate-x-full"
          }`}
        >
          <div className="tw-h-full tw-px-3 tw-py-4 tw-overflow-y-auto">
            <ul className="tw-space-y-2 tw-font-medium tw-py-20">
              {menuItem.map((val, key) => (
                <li key={key} className="tw-group tw-cursor-pointer">
                  <div
                    className="tw-flex tw-items-center tw-px-2 tw-py-5 tw-text-gray-900 tw-rounded-lg "
                    onClick={() => setComponent(val.path)}
                  >
                    <span className="tw-ml-3">{val.icon}</span>
                    <span className="tw-ml-3">{val.title}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
};
export default Sidebar;

// <div className={styles.pageContainer}>
//   <div className={styles.Sidebar}>
//     <div className={styles.logo}>
//       <img
//         src="/_next/image?url=%2Fwhitelogo.png&amp;w=256&amp;q=75"
//         alt="grabtern logo"
//       />
//     </div>
//     <div className={styles.userProfile}>
//       <div
//         className={styles.userImage}
//         // onClick={handleLoginClick}
//         // className={styles.userName}
//       >
//         <img
//           style={{
//             width: "35px",
//             height: "auto",
//             borderRadius: "50%",
//           }}
//           src={
//             localStorage.getItem("user_picture") ||
//             localStorage.getItem("mentor_picture") ||
//             "assets/img/icon/no-profile-picture.png"
//           }
//           alt="not found"
//         />
//       </div>
//       {localStorage.username}
//     </div>
//     <ul className={styles.sidebarList}>
//       {menuItem.map((val, key) => {
//         <li
//           key={key}
//           id={window.location.pathname == val.link ? "active" : ""}
//           className="item"
//         >
//           <div className={styles.sidebarArea}>
//             <Link to={val.path}>
//               <span className={styles.logo}>{val.icon}</span>
//               <span className={styles.title}>{val.title}</span>
//             </Link>
//           </div>
//         </li>;
//       })}
//     </ul>
//     <div className={styles.logOut}>Log Out</div>
//   </div>
// </div>
