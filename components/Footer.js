import Image from "next/image";
import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="tw-font-sans tw-bg-white tw-dark:bg-[#cbd5e1]">
        <div className="tw-flex tw-justify-center tw-md:justify-center">
        <div className="tw-mx-auto tw-w-full tw-max-w-screen-xl">
          <div className="tw-grid tw-gap-12 tw-px-7 tw-py-6 tw-lg:py-8 md:tw-grid-cols-4 md:tw-divide-x-2 tw-grid-cols-1 tw-text-center">
            <div className="tw-footer-logo tw-text-center">
              <div className="tw-flex tw-justify-center">
                <a href="index.html">
                  <Image
                    src='/GrabternLogo.svg'
                    width={140}
                    height={90}
                    alt=""
                    className="tw-sm:mx-60 tw-md:mx-0"
                  />
                </a>
              </div>
              <div className='tw-md:py-4'>
                <p className="tw-text-neutral-600 tw-dark:text-neutral-500 tw-mb-7 tw-md:mb-0 tw-md:text-2xl tw-md:text-left tw-sm:text-3xl tw-md:ml-2">The internship started as soon as you enroll in any internship course</p>
              </div>
            </div>
            <div>
                <h1 className="tw-font-bold tw-tracking-widest tw-text-3xl tw-mb-5 tw-text-black dark:tw-text-muted-100 tw-uppercase">Services to Student</h1>
                <ul className="tw-text-gray-500 dark:tw-text-gray-400 tw-font-medium">
                    <li className="tw-mb-4">
                        <a href="#" className="tw-text-2xl tw-text-neutral-600 dark:tw-text-neutral-500 hover:tw-text-violet-500 dark:tw-hover:text-violet-500 tw-transition-colors duration-300">One to One Mentorship</a>
                    </li>
                    <li className="tw-mb-4">
                        <a href="#" className="tw-text-2xl tw-text-neutral-600 dark:tw-text-neutral-500 hover:tw-text-violet-500 dark:tw-hover:text-violet-500 tw-transition-colors duration-300">Networking</a>
                    </li>
                    <li className="tw-mb-4">
                        <a href="#" className="tw-text-2xl tw-text-neutral-600 dark:tw-text-neutral-500 hover:tw-text-violet-500 dark:tw-hover:text-violet-500 tw-transition-colors duration-300">Live Sessions</a>
                    </li>
                    <li className="tw-mb-4">
                        <a href="#" className="tw-text-2xl tw-text-neutral-600 dark:tw-text-neutral-500 hover:tw-text-violet-500 dark:tw-hover:text-violet-500 tw-transition-colors duration-300">Resources</a>
                    </li>
                </ul>
            </div>
            <div>
                <h1 className="tw-font-bold tw-tracking-widest tw-text-3xl tw-mb-5 tw-text-black dark:tw-text-muted-100 tw-uppercase">Services to Mentors</h1>
                <ul className="tw-text-gray-500 dark:tw-text-gray-400 tw-font-medium">
                    <li className="tw-mb-4">
                        <a href="#" className="tw-text-2xl tw-text-neutral-600 dark:tw-text-neutral-500 hover:tw-text-violet-500 dark:tw-hover:text-violet-500 tw-transition-colors tw-duration-300">Community Base</a>
                    </li>
                    <li className="tw-mb-4">
                        <a href="#" className="tw-text-2xl tw-text-neutral-600 dark:tw-text-neutral-500 hover:tw-text-violet-500 dark:tw-hover:text-violet-500 tw-transition-colors tw-duration-300">Self Satisfaction</a>
                    </li>
                    <li className="tw-mb-4">
                        <a href="#" className="tw-text-2xl tw-text-neutral-600 dark:tw-text-neutral-500 hover:tw-text-violet-500 dark:tw-hover:text-violet-500 tw-transition-colors tw-duration-300">Build Leadership skills</a>
                    </li>
                    <li className="tw-mb-4">
                        <a href="#" className="tw-text-2xl tw-text-neutral-600 dark:tw-text-neutral-500 hover:tw-text-violet-500 dark:tw-hover:text-violet-500 tw-transition-colors tw-duration-300">Get Paid</a>
                    </li>
                </ul>
            </div>
            <div>
                <h1 className="tw-font-bold tw-tracking-widest tw-text-3xl tw-mb-5 tw-text-black dark:tw-text-muted-100 tw-uppercase">Grabtern</h1>
                <ul className="tw-text-gray-500 dark:tw-text-gray-400 tw-font-medium">
                    <li className="tw-mb-4">
                        <a href="/refundandcancellation" className="tw-text-2xl tw-text-neutral-600 dark:tw-text-neutral-500 hover:tw-text-violet-500 dark:hover:tw-text-violet-500 tw-transition-colors tw-duration-300">Refund Policy</a>
                    </li>
                    <li className="tw-mb-4">
                        <a href="/termsandcondition" className="tw-text-2xl tw-text-neutral-600 dark:tw-text-neutral-500 hover:tw-text-violet-500 dark:hover:tw-text-violet-500 tw-transition-colors tw-duration-300">Terms and Condition</a>
                    </li>
                    <li className="tw-mb-4">
                        <a href="/privacy" className="tw-text-2xl tw-text-neutral-600 dark:tw-text-neutral-500 hover:tw-text-violet-500 dark:hover:tw-text-violet-500 tw-transition-colors tw-duration-300">Privacy Policy</a>
                    </li>
                    <li className="tw-mb-4">
                        <a href="/contact" className="tw-text-2xl tw-text-neutral-600 dark:tw-text-neutral-500 hover:tw-text-violet-500 dark:hover:tw-text-violet-500 tw-transition-colors tw-duration-300">Contact Us</a>
                    </li>
                </ul>
            </div>
        </div>
        <hr />
            <div className="tw-border-t-2 tw-border-muted-200 dark:tw-border-muted-800 tw-py-2">
              <div className="tw-w-full tw-max-w-7xl tw-mx-auto">
                <div className="tw-px-5 tw-py-8 tw-flex tw-flex-col md:tw-flex-row tw-mx-auto tw-items-center">
                  <div className="tw-w-full ltablet:tw-w-auto lg:tw-w-auto tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-justify-center md:tw-justify-start tw-gap-y-2">
                    <div className="tw-flex sm:tw-w-80 md:tw-w-80 sm:tw-mr-4 md:tw-mr-16">
                      <input type="text" className="tw-mr-3 tw-w-96 tw-h-16 tw-bg-[#cbd5e1] tw-bg-opacity-50 tw-rounded-lg tw-border tw-border-muted-300 dark:tw-border-muted-600 md:tw-text-md lg:tw-text-md tw-text-muted-700 tw-py-1 tw-px-3 tw-leading-8 tw-accessibility tw-transition-colors tw-duration-300 tw-ease-in-out" placeholder="Email Address"></input>
                      <button className="md:tw-w-auto tw-h-16 tw-text-white tw-bg-[#845ec2] tw-border-0 tw-py-2 tw-px-6 focus:tw-outline-none hover:tw-bg-[#6b21a8] tw-rounded-lg tw-font-semibold">Subscribe</button>
                    </div> 
                  </div>
                  <span className="tw-flex tw-space-x-6 tw-justify-center sm:tw-ml-auto md:tw-mt-0 tw-mt-6 tw-w-full lg:tw-justify-center md:tw-justify-center md:tw-w-auto">
                    <a href="https://bit.ly/sai4ull" className="tw-text-neutral-500 hover:tw-text-violet-500 dark:hover:tw-text-violet-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                      </svg>
                    </a>
                    <a href="https://www.instagram.com/grabtern.guide/" className="tw-text-neutral-500 hover:tw-text-violet-500 dark:hover:tw-text-violet-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                      </svg>
                    </a>
                    <a href="#" className="tw-text-neutral-500 hover:tw-text-violet-500 dark:hover:tw-text-violet-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                      </svg>
                    </a>
                    <a href="https://github.com/anmode/grabtern-frontend" className="tw-text-neutral-500 hover:tw-text-violet-500 dark:hover:tw-text-violet-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                      </svg>
                    </a>
                    <a href="#" className="tw-text-neutral-500 hover:tw-text-violet-500 dark:hover:tw-text-violet-500" aria-label="Visit us on Discord" title="Discord (External link)">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-discord" viewBox="0 0 16 16">
                        <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/>
                      </svg>
                    </a>
                  </span>
                </div>
            </div>
          </div>
          <div className="tw-bg-slate-100 tw-py-3">
            <div className="tw-w-full tw-max-w-7xl tw-mx-auto">
              <div className="tw-py-1 tw-px-1 tw-flex tw-flex-wrap tw-flex-col md:tw-justify-center sm:tw-flex-row sm:tw-justify-center">
                  <p className="tw-text-gray-500 dark:tw-text-gray-500 tw-font-bold md:tw-ml-5 tw-text-center">Copyright &copy; {currentYear} All rights reserved | Grabtern.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;


