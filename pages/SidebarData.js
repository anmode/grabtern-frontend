import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';

export const SidebarData=[
    {
        title:"Home",
        icon:<HomeIcon/>,
        path:"/"
    }, 
    {
        title:"Profile",
        icon:<PersonIcon/>,
        path:"/Profile"
    },
    {
        title:"My Sessions",
        icon:<GroupAddIcon/>,
        path:"/Sessions"
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
]
export default SidebarData;