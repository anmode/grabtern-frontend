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
<<<<<<< HEAD
                                        <a href="index.html"><img src="/assets/img/logo/whitelogo.png" height={100} width={150} alt="" /></a>
=======
                                        <a href="/"><img src="/assets/img/logo/logo.png" alt="" /></a>
>>>>>>> 34538de8211c08e66b44daa568b384483b7cd14c
                                    </div>
                                </div>
                                <div className="col-xl-10 col-lg-10">
                                    <div className="menu-wrapper d-flex align-items-center justify-content-end">
                                        <div className="main-menu d-none d-lg-block">
                                            <nav>
                                                <ul id="navigation">
<<<<<<< HEAD
                                                    <li className="active" ><a href="index.html">Home</a></li>
                                                    <li><a href="courses.html">Courses</a></li>
                                                    <li><a href="about.html">About</a></li>
                                                    {/* <li><a href="#">Blog</a>
                                                        <ul className="submenu">
                                                            <li><a href="blog.html">Blog</a></li>
                                                            <li><a href="blog_details.html">Blog Details</a></li>
                                                            <li><a href="elements.html">Element</a></li>
                                                        </ul>
                                                    </li> */}
                                                    <li><a href="contact.html">Contact</a></li>
                                                    {/* <li className="button-header margin-left "><a href="#" className="btn">Join</a></li>
                                                    <li className="button-header"><a href="login.html" className="btn btn3">Log in</a></li> */}
=======
                                                    <li className="active" ><a href="/">Home</a></li>
                                                    <li><a href="courses">Courses</a></li>
                                                    <li><a href="about">About</a></li>
                                                    <li><a href="contact">Contact</a></li>
>>>>>>> 34538de8211c08e66b44daa568b384483b7cd14c
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