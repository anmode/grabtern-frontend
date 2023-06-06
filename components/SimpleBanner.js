import React from "react";
import styles from '../styles/filter.module.css';
import { useState, useEffect } from "react";
import axios from "axios";

function SimpleBanner({ bannerTittle, siteName }) {
   const [nameList , setnameList] = useState([])
   const [search , setsearch ] = useState ("")


   useEffect(() =>{
     axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mentors/mentorLists`)
     .then((response) => {setnameList(response.data)})
   },[])

  return (
    <section className="slider-area slider-area2">
      <div className="slider-active">
        <div className="single-slider slider-height2">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-11 col-md-12">
                <div className="hero__caption hero__caption2">
                  <div className={styles.global_search}>
                    <input className={styles.search_bar} _ngcontent-d2c-frontend-c75="" type="text" autoComplete="off" placeholder="Search Mentors" onChange={(e) => setsearch(e.target.value
                      )} />
                      {nameList.filter((item) => {
                        if(search===""){
                          return item
                        }
                        else if(item.name.toLowerCase().includes(search.toLowerCase()) || (item.currentStatus.toLowerCase().includes(search.toLowerCase())) || (item.internAt.toLowerCase().includes(search.toLowerCase())))  {
                          return item
                        }
                      })
                      .map((item)=>{
                        return <h4>{item.name}</h4>
                      })}
                  </div>
                  <h1 data-animation="bounceIn" data-delay="0.2s">
                    {bannerTittle}
                  </h1>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#">{siteName}</a>
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SimpleBanner;
