import Image from "next/image";
import React from "react";
import styles from "../styles/LoginDropdown.module.css";
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
                      <a href="index.html">
                        <Image
                          src="/whitelogo.png"
                          width={120}
                          height={69}
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="footer-tittle">
                      <div className="footer-pera">
                        <p>
                          The Internship Journey started as soon as you enroll
                          in any internship course
                        </p>
                      </div>
                    </div>
                    <div className="footer-social">
                      <a
                        href="#"
                        aria-label="Visit us on Twitter"
                        title="Twitter (External link)"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a
                        href="https://bit.ly/sai4ull"
                        aria-label="Visit us on Facebook"
                        title="Facebook (External link)"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a
                        href="#"
                        aria-label="Visit us on Pinterest"
                        title="Pinterest (External link)"
                      >
                        <i className="fab fa-pinterest-p"></i>
                      </a>
                      <a
                        href="https://www.instagram.com/grabtern.guide/"
                        aria-label="Visit us on Instagram"
                        title="Instagram (External link)"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a
                        href="https://www.linkedin.com/company/grabtern/"
                        aria-label="Visit us on Linkedin"
                        title="Linkedin (External link)"
                      >
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-5">
                <div className="single-footer-caption mb-50">
                  <div className="footer-tittle">
                    <h4>Services to Student</h4>
                    <ul>
                      <li>
                        <a href="#" className={styles.footLink}>
                          One to One Mentorship
                        </a>
                      </li>
                      <li>
                        <a href="#" className={styles.footLink}>
                          Networking
                        </a>
                      </li>
                      <li>
                        <a href="#" className={styles.footLink}>
                          Live Sessions
                        </a>
                      </li>
                      <li>
                        <a href="#" className={styles.footLink}>
                          Resources
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6">
                <div className="single-footer-caption mb-50">
                  <div className="footer-tittle">
                    <h4>Services to Mentors</h4>
                    <ul>
                      <li>
                        <a href="#" className={styles.footLink}>
                          Community Base
                        </a>
                      </li>
                      <li>
                        <a href="#" className={styles.footLink}>
                          Self Satisfaction
                        </a>
                      </li>
                      <li>
                        <a href="#" className={styles.footLink}>
                          Build Leadership skills
                        </a>
                      </li>
                      <li>
                        <a href="#" className={styles.footLink}>
                          Get paid
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                <div className="single-footer-caption mb-50">
                  <div className="footer-tittle">
                    <h4>Grabtern</h4>
                    <ul>
                      <li>
                        <a
                          href="/refundandcancellation"
                          className={styles.footLink}
                        >
                          Refund policy
                        </a>
                      </li>
                      <li>
                        <a
                          href="/termsandcondition"
                          className={styles.footLink}
                        >
                          Terms and Condition
                        </a>
                      </li>
                      <li>
                        <a href="/privacy" className={styles.footLink}>
                          Privacy Policy
                        </a>
                      </li>
                      <li>
                        <a href="/contact" className={styles.footLink}>
                          Contact Us
                        </a>
                      </li>
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
                    <p>
                      Copyright &copy;
                      <script>
                        document.write(new Date().getFullYear());
                      </script>{" "}
                      All rights reserved | Grabtern.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
