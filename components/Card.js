import React, { useLayoutEffect, useState } from 'react';

//import {useState} from 'react';
//import styles from "../styles/cardStyle.module.css";

function Card(props){
const[Dropdown,setDropdown]=React.useState(false);

const toggleDropdown=()=>{
    setDropdown(!Dropdown);
}

    return(
        <>
        <div className="dropdown">
            <div className="dropdownBtn"> 
        <div  >Login</div>
        <span><i onClick={toggleDropdown} class="fa fa-sort-desc" aria-hidden="true"></i></span>
        </div>
        {Dropdown===true && (
        
        <div className="dropdownContent">
        
        <li className="dropdownItem" > <a href="/login">{props.option1}</a></li>
        <li className="dropdownItem"> <a href="/mentorLogin">{props.option2}</a> </li>  
        </div>  
        )}
       
        </div>

</>   
    );
}
export default Card;