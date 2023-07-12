import React from "react";
import "../styles/banner.module.css";

function Banner({ isMentorLoggedIn }) {
  return (

    <>
      <div className="mt-100  min-h-screen w-full overflow-hidden bg-muted-100 dark:bg-muted-1000 ">
        <div className="min-h-screen w-full max-w-7xl mx-auto flex items-center px-4">
          <div id="boxxMain" className="w-full grid grid-cols-12">

            <div className="col-span-12 ltablet:col-span-5 lg:col-span-5">
              <div className="h-full ptablet:max-w-lg ptablet:mx-auto flex items-center mb-8 ltablet:mb-0 lg:mb-0">
                <div className=" text-center ltablet:text-left lg:text-left font-sans space-y-4">
                  <h1 className="font-medium text-4xl ptablet:text-5xl lg:text-5xl text-muted-800 dark:text-white">Grab your Intern with GrabTern</h1>
                  <p className="text-lg text-muted-500 dark:text-muted-400">
                    Book a meeting with a past intern to receive one-on-one
                    mentoring and enhance your chances of landing your ideal
                    intern.
                  </p>
                  <div className="w-full flex items-center justify-center ltablet:justify-start lg:justify-start gap-2">
                    <a href="/home" className="relative font-sans font-normal inline-flex items-center justify-center leading-5 no-underline space-x-1 text-white bg-primary-600 h-12 px-5 py-3 text-sm rounded-xl hover:bg-primary-700 hover:shadow-xl hover:shadow-primary-600/20 tw-accessibility transition-all duration-300 min-w-[130px]">
                      Find Mentor
                    </a>
                    <a href="/home" className="relative font-sans font-normal inline-flex items-center justify-center gap-x-1 rounded-xl leading-5 no-underline text-slate-700 bg-white border dark:text-white dark:bg-slate-700 dark:border-slate-600 h-12 px-5 py-3 text-sm hover:enabled:bg-slate-50 dark:hover:enabled:bg-slate-600 active:enabled:bg-slate-200 dark:active:enabled:bg-slate-700 tw-accessibility transition-all duration-300 min-w-[130px]">
                      Be a Mentor
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative col-span-12 ltablet:col-span-7 lg:col-span-7">
              <img src="https://doctor-ruby.vercel.app/img/illustrations/hero.svg" className="block dark:hidden w-full ltablet:max-w-[540px] max-w-[620px] mx-auto"></img>
              <div className="absolute top-6 left-0 h-14 w-14 hidden md:flex items-center justify-center rounded-full text-2xl bg-white dark:bg-muted-800 shadow-xl shadow-muted-300/30 dark:shadow-muted-900/50">
                📈
              </div>
              <div className="absolute top-24 left-24 h-10 w-10 hidden md:flex items-center justify-center rounded-full text-2xl bg-white dark:bg-muted-800 shadow-xl shadow-muted-300/30 dark:shadow-muted-900/50">
                🚀
              </div>
              <div className="absolute -bottom-10 right-0 h-16 w-16 hidden md:flex items-center justify-center rounded-full text-4xl bg-white dark:bg-muted-800 shadow-xl shadow-muted-300/30 dark:shadow-muted-900/50">
                🎓
              </div>
              <div className="absolute -top-12 left-1/3 h-16 w-16 hidden ptablet:hidden md:flex items-center justify-center rounded-full text-4xl bg-white dark:bg-muted-800 shadow-xl shadow-muted-300/30 dark:shadow-muted-900/50">
                💡
              </div>
              <div className="hidden md:block ptablet:scale-90 ltablet:scale-90 absolute -bottom-12 left-8 bg-white dark:bg-muted-800 border border-muted-200 dark:border-muted-700 rounded-xl p-5 shadow-xl shadow-muted-400/10 dark:shadow-muted-800/10">
                <div className="flex justify-between mb-4">
                  <h3 className="font-heading font-medium text-muted-800 dark:text-muted-100">
                    Mentors
                  </h3>
                  <span className="font-sans text-sm text-muted-400">4 New</span>
                </div>
                <div className="flex justify-between items-center gap-4">
                  <img className="object-cover w-12 h-12 mask mask-blob" src="https://media.cssninja.io/shuriken/avatars/2.svg" alt="Avatar" width="48" height="48" />
                  <img className="object-cover w-12 h-12 mask mask-blob" src="https://media.cssninja.io/shuriken/avatars/4.svg" alt="Avatar" width="48" height="48"></img>
                  <img className="object-cover w-12 h-12 mask mask-blob" src="https://media.cssninja.io/shuriken/avatars/3.svg" alt="Avatar" width="48" height="48"></img>
                  <img class="object-cover w-12 h-12 mask mask-blob" src="https://media.cssninja.io/shuriken/avatars/6.svg" alt="Avatar" width="48" height="48"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Banner;
