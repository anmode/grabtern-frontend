import Image from "next/image";
import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="font-sans bg-white dark:bg-[#cbd5e1]">
        <div className="flex justify-center md:justify-center">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="grid gap-12 px-8 py-6 lg:py-8 md:grid-cols-4 grid-cols-1">
            <div className="footer-logo text-center">
              <a href="index.html">
                <Image
                  src='/GrabternLogo.svg'
                  width={140}
                  height={90}
                  alt=""
                  className="sm: mx-60 md:mx-0"
                />
              </a>
              <div className='md:py-4'>
                <p class="text-neutral-600 dark:text-neutral-500 mb-7 md:mb-0 text-2xl md:text-left ">The internship started as soon as you enroll in any internship course</p>
              </div>
            </div>
            <div>
                <h1 className="font-medium tracking-widest text-3xl mb-5 text-violet-500 dark:text-muted-100 uppercase">Services to Student</h1>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-4">
                        <a href="#" className="text-2xl text-neutral-600 dark:text-neutral-500 hover:text-violet-500 dark:hover:text-violet-500 transition-colors duration-300">One to One Mentorship</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="text-2xl text-neutral-600 dark:text-neutral-500 hover:text-violet-500 dark:hover:text-violet-500 transition-colors duration-300">Networking</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="text-2xl text-neutral-600 dark:text-neutral-500 hover:text-violet-500 dark:hover:text-violet-500 transition-colors duration-300">Live Sessions</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="text-2xl text-neutral-600 dark:text-neutral-500 hover:text-violet-500 dark:hover:text-violet-500 transition-colors duration-300">Resources</a>
                    </li>
                </ul>
            </div>
            <div>
                <h1 className="font-medium tracking-widest text-3xl mb-5 text-violet-500 dark:text-muted-100 uppercase">Services to Mentors</h1>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-4">
                        <a href="#" className="text-2xl text-neutral-600 dark:text-neutral-500 hover:text-violet-500 dark:hover:text-violet-500 transition-colors duration-300">Community Base</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="text-2xl text-neutral-600 dark:text-neutral-500 hover:text-violet-500 dark:hover:text-violet-500 transition-colors duration-300">Self Satisfaction</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="text-2xl text-neutral-600 dark:text-neutral-500 hover:text-violet-500 dark:hover:text-violet-500 transition-colors duration-300">Build Leadership skills</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="text-2xl text-neutral-600 dark:text-neutral-500 hover:text-violet-500 dark:hover:text-violet-500 transition-colors duration-300">Get Paid</a>
                    </li>
                </ul>
            </div>
            <div>
                <h1 className="font-medium tracking-widest text-3xl mb-5 text-violet-500 dark:text-muted-100 uppercase">Grabtern</h1>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-4">
                        <a href="/refundandcancellation" className="text-2xl text-neutral-600 dark:text-neutral-500 hover:text-violet-500 dark:hover:text-violet-500 transition-colors duration-300">Refund Policy</a>
                    </li>
                    <li className="mb-4">
                        <a href="/termsandcondition" className="text-2xl text-neutral-600 dark:text-neutral-500 hover:text-violet-500 dark:hover:text-violet-500 transition-colors duration-300">Terms and Condition</a>
                    </li>
                    <li className="mb-4">
                        <a href="/privacy" className="text-2xl text-neutral-600 dark:text-neutral-500 hover:text-violet-500 dark:hover:text-violet-500 transition-colors duration-300">Privacy Policy</a>
                    </li>
                    <li className="mb-4">
                        <a href="/contact" className="text-2xl text-neutral-600 dark:text-neutral-500 hover:text-violet-500 dark:hover:text-violet-500 transition-colors duration-300">Contact Us</a>
                    </li>
                </ul>
            </div>
        </div>
        <hr />
            <div class="border-t border-muted-200 dark:border-muted-800 py-2">
              <div class="w-full max-w-7xl mx-auto">
                <div class="px-5 py-8 flex flex-col md:flex-row mx-auto items-center">
                  <div class="w-full ltablet:w-auto lg:w-auto flex flex-col md:flex-row items-center justify-center md:justify-start gap-y-2">
                    <div class="relative w-full sm:w-80 md:w-80 sm:mr-4 md:mr-16">
                      <input type="text" class="w-full h-12 bg-muted-100 dark:bg-muted-700 bg-opacity-50 rounded-lg border border-muted-300 dark:border-muted-600 md:text-md lg:text-sm text-muted-700 py-1 px-3 leading-8 tw-accessibility transition-colors duration-300 ease-in-out" placeholder="Email Address"></input>
                    </div> 
                    <button type="button" class="focus:outline-none text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-violet-300 rounded-lg w-full md:w-auto h-12 inline-flex items-center justify-center px-3 text-md sm:text-lg">Subscribe</button>
                  </div>
                  <span class="flex space-x-6 ltablet:ml-auto lg:ml-auto md:mt-0 mt-6 w-full lg:justify-center md:justify-center md:w-auto">
                    <a href="https://bit.ly/sai4ull" className="text-neutral-500 hover:text-violet-500 dark:hover:text-violet-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                      </svg>
                    </a>
                    <a href="https://www.instagram.com/grabtern.guide/" className="text-neutral-500 hover:text-violet-500 dark:hover:text-violet-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-neutral-500 hover:text-violet-500 dark:hover:text-violet-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                      </svg>
                    </a>
                    <a href="https://github.com/anmode/grabtern-frontend" className="text-neutral-500 hover:text-violet-500 dark:hover:text-violet-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-neutral-500 hover:text-violet-500 dark:hover:text-violet-500" aria-label="Visit us on Discord" title="Discord (External link)">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-discord" viewBox="0 0 16 16">
                        <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/>
                      </svg>
                    </a>
                  </span>
                </div>
            </div>
          </div>
          <div class="bg-slate-100 py-3">
            <div class="w-full max-w-7xl mx-auto">
              <div class="py-1 px-1 flex flex-wrap flex-col md:justify-center sm:flex-row sm:justify-center">
                  <p className="text-gray-500 dark:text-gray-500 font-bold md:ml-5 text-center">Copyright &copy; {currentYear} All rights reserved | Grabtern.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
