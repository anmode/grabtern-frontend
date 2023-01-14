import React from 'react'

function Footer() {
    return (
        <footer>
            <div className="footer-wrappper footer-bg">
                <div className="footer-area footer-padding">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-xl-4 col-lg-5 col-md-4 col-sm-6">
                                <div className="single-footer-caption mb-50">
                                    <div className="single-footer-caption mb-30">
                                        <div className="footer-logo mb-25">
                                            <a href="index.html"><img src="/whitelogo.png" style={{ width: "120px" }} alt="" /></a>
                                        </div>
                                        <div className="footer-tittle">
                                            <div className="footer-pera">
                                                <p>The Internship Journey started as soon as you enroll in any internship course</p>
                                            </div>
                                        </div>
                                        <div className="footer-social">
                                            <a href="#"><i className="fab fa-twitter"></i></a>
                                            <a href="https://bit.ly/sai4ull"><i className="fab fa-facebook-f"></i></a>
                                            <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-5">
                                <div className="single-footer-caption mb-50">
                                    <div className="footer-tittle">
                                        <h4>Services to Student</h4>
                                        <ul>
                                            <li><a href="#">One to One Mentorship</a></li>
                                            <li><a href="#">Networking</a></li>
                                            <li><a href="#">Live Sessions</a></li>
                                            <li><a href="#">Resources</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6">
                                <div className="single-footer-caption mb-50">
                                    <div className="footer-tittle">
                                        <h4>Services to Mentors</h4>
                                        <ul>
                                            <li><a href="#">Community Base</a></li>
                                            <li><a href="#">Self Satisfaction</a></li>
                                            <li><a href="#">Build Leadership skills</a></li>
                                            <li><a href="#">Get paid</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                                <div className="single-footer-caption mb-50">
                                    <div className="footer-tittle">
                                        <h4>Grabtern</h4>
                                        <ul>
                                            <li><a href="#">Home</a></li>
                                            <li><a href="#">Internship</a></li>
                                            <li><a href="https://www.linkedin.com/company/grabtern/">Linkedin</a></li>
                                            <li><a href="https://discord.gg/HdASBpTR">Discord</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom-area">
                    <div className="container">
                        <div className="footer-border">
                            <div className="row d-flex align-items-center">
                                <div className="col-xl-12 ">
                                    <div className="footer-copy-right text-center">
                                        <p>Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | Grabtern.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer