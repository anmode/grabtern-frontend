import Image from "next/image";
import React from "react";
import styles from "../styles/LoginDropdown.module.css";
import style from "../styles/footer.module.css";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-purple-50">
        <div className="row justify-content-between">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="grid grid-cols-2 gap-12 px-8 py-6 lg:py-8 md:grid-cols-4">
            <div className="footer-logo mb-25">
              <a href="index.html">
                <Image
                  src="data:image/png;base64,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"
                  width={120}
                  height={69}
                  alt=""
                />
              </a>
              <div className='py-7 lg:py-8'>
                <p class="text-gray-500 dark:text-gray-400">The internship started as soon as you enroll in any internship course</p>
              </div>
            </div>
            <div>
                <h2 className="mb-4 text-lg font-semibold text-gray-600 uppercase">Services to Student</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-4">
                        <a href="#" className="hover:underline dark:hover:text-purple-400">One to One Mentorship</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:underline dark:hover:text-purple-400">Networking</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:underline dark:hover:text-purple-400">Live Sessions</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:underline dark:hover:text-purple-400">Resources</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 className="mb-4 text-lg font-semibold text-gray-600 uppercase">Services to Mentors</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-4">
                        <a href="#" className="hover:underline dark:hover:text-purple-400">Community Base</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:underline dark:hover:text-purple-400">Self Satisfaction</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:underline dark:hover:text-purple-400">Build Leadership skills</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:underline dark:hover:text-purple-400">Get Paid</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 className="mb-4 text-lg font-semibold text-gray-600 uppercase">Grabtern</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-4">
                        <a href="/refundandcancellation" className="hover:underline dark:hover:text-purple-400">Refund Policy</a>
                    </li>
                    <li className="mb-4">
                        <a href="/termsandcondition" className="hover:underline dark:hover:text-purple-400">Terms and Condition</a>
                    </li>
                    <li className="mb-4">
                        <a href="/privacy" className="hover:underline dark:hover:text-purple-400">Privacy Policy</a>
                    </li>
                    <li className="mb-4">
                        <a href="/contact" className="hover:underline dark:hover:text-purple-400">Contact Us</a>
                    </li>
                </ul>
            </div>
        </div>
        <hr />
        <div className="px-4 py-6 bg-gray-100 md:flex md:items-center md:justify-around">
          <div className="flex justify-start">
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:border-blue-500 w-72" placeholder="Email Address" required/>
            <button type="button" class="focus:outline-none text-white bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:ring-violet-300 font-medium rounded-lg text-sm px-8 py-2.5 mb-2 right-0 dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-900">Subscribe</button>
          </div>
            <div className="flex space-x-6 sm:justify-center md:mt-0">
                <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-purple-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-purple-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-purple-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-purple-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-purple-400" aria-label="Visit us on Discord" title="Discord (External link)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-discord" viewBox="0 0 16 16">
                    <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/>
                  </svg>
                </a>
            </div>
          </div>
          <div className={style.footer_bottom_area}>
              <div className='md:bg-zinc-200'>
                <p className="text-gray-500 dark:text-gray-500 text-center">Copyright &copy; {currentYear} All rights reserved | Grabtern.com</p>
              </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
