import React, { useEffect, useState } from 'react'

function Header() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };
  
      handleScroll();
  
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
  
    }, []);
    return (
            <div className="header-area header-transparent">
                <div className="main-header ">
                    <div className={`header-bottom  header-sticky ${scrollY > 400 ? "sticky-bar": ""}`} style={{ transition: "all 0.5s ease-in" }}>
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="col-xl-2 col-lg-2">
                                    <div className="logo">
                                        <a href="/"><img src="/assets/img/logo/logo.png" alt="" /></a>
                                    </div>
                                </div>
                                <div className="col-xl-10 col-lg-10">
                                    <div className="menu-wrapper d-flex align-items-center justify-content-end">
                                        <div className="main-menu d-none d-lg-block">
                                            <nav>
                                                <ul id="navigation">
                                                    <li className="active" ><a href="/">Home</a></li>
                                                    <li><a href="courses">Courses</a></li>
                                                    <li><a href="about">About</a></li>
                                                    <li><a href="contact">Contact</a></li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="mobile_menu d-block d-lg-none"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Header