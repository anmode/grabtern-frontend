import React, { useLayoutEffect, useState } from 'react';

//import {useState} from 'react';
import styles from "../styles/cardStyle.module.css";
function Card(){
const[Dropdown,setDropdown]=React.useState(false);

const toggleDropdown=()=>{
    setDropdown(!Dropdown);
}

    return(
        <>
        <div className={styles.dropdown}>
            <div className={styles.dropdownBtn}> 
        <div  >Login</div>
        <span><i onClick={toggleDropdown} class="fa fa-sort-desc" aria-hidden="true"></i></span>
        </div>
        {Dropdown===true && (
        
        <div className={styles.dropdownContent}>
        
        <li className={styles.dropdownItem} > <a href="/login"> User</a></li>
        <li className={styles.dropdownItem}> <a href="/mentorLogin"> Mentor</a> </li>  
        </div>  
        )}
       
        </div>

</>   
    );
}
export default Card;