import React from 'react'

function Header() {
    return (
        <header>
            <div className="header-area header-transparent">
                <div className="main-header ">
                    <div className="header-bottom  header-sticky">
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="col-xl-2 col-lg-2">
                                    <div className="logo">
                                        <a href="index.html"><img src="/assets/img/logo/logo.png" alt="" /></a>
                                    </div>
                                </div>
                                <div className="col-xl-10 col-lg-10">
                                    <div className="menu-wrapper d-flex align-items-center justify-content-end">
                                        <div className="main-menu d-none d-lg-block">
                                            <nav>
                                                <ul id="navigation">
                                                    <li className="active" ><a href="index.html">Home</a></li>
                                                    <li><a href="courses.html">Courses</a></li>
                                                    <li><a href="about.html">About</a></li>
                                                    <li><a href="#">Blog</a>
                                                        <ul className="submenu">
                                                            <li><a href="blog.html">Blog</a></li>
                                                            <li><a href="blog_details.html">Blog Details</a></li>
                                                            <li><a href="elements.html">Element</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="contact.html">Contact</a></li>
                                                    <li className="button-header margin-left "><a href="#" className="btn">Join</a></li>
                                                    <li className="button-header"><a href="login.html" className="btn btn3">Log in</a></li>
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
        </header>
    )
}

export default Header