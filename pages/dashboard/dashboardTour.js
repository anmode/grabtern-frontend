import React, { useState, useEffect } from "react";
import { useTour } from "@reactour/tour";
import Image from "next/image";
import logo from "../../public/logo.png";
import { set } from "lodash";

function UserDashboardTour() {
  const desktopSteps = [
    {
      selector: "#homepage",
      content: (
        <div className="tw-flex tw-flex-col tw-items-center tw-justify-center">
          <div className="tw-flex tw-justify-center tw-items-center">
            <Image src={logo} width={60} height={60} />
          </div>
          <p>Welcome to the user dashboard</p>
          <div className="tw-flex tw-justify-center tw-items-center">
            <span className="tw-font-bold tw-text-xl">GrabTern</span>
          </div>
        </div>
      ),
    },
    {
      selector: "#sidebar",
      content: "This is the sidebar. You can navigate to different pages here.",
    },
    {
      selector: "#toggle",
      content: "Click on the toggle button to open or close the sidebar.",
    },
    {
      selector: "#profile",
      content: "This is your profile. You can edit your profile here.",
    },
    {
      selector: "#home",
      content: "This is the home page. You are currently at this page.",
    },
    {
      selector: "#bookings",
      content: "This is the bookings page. You can view your bookings here.",
    },
    {
      selector: "#notifications",
      content:
        "This is the notifications page. You can view your notifications here.",
    },
    {
      selector: "#logout",
      content: "Click here to logout.",
    },
    {
      selector: "#homepage",
      content: (
        <div className="tw-flex tw-flex-col tw-items-center tw-justify-center">
          <div className="tw-flex tw-justify-center tw-items-center">
            <Image src={logo} width={60} height={60} />
          </div>
          <p className="tw-text-black">Have a great time</p>
          <div className="tw-flex tw-justify-center tw-items-center">
            <span className="tw-font-bold tw-text-xl">GrabTern</span>
          </div>
        </div>
      ),
    },
  ];

  const mobileSteps = [
    {
      selector: "#homepage",
      content: (
        <div className="tw-flex tw-flex-col tw-items-center tw-justify-center">
          <div className="tw-flex tw-justify-center tw-items-center">
            <Image src={logo} width={60} height={60} />
          </div>
          <p>Welcome to the user dashboard</p>
          <div className="tw-flex tw-justify-center tw-items-center">
            <span className="tw-font-bold tw-text-xl">GrabTern</span>
          </div>
        </div>
      ),
    },
    {
      selector: "#mobileNav",
      content: "This is the navigation bar.",
    },
    {
      selector: "#mobileFindMentors",
      content: "You can find mentors here.",
    },
    {
      selector: "#mobileProfile",
      content: "This is your profile. You can edit your profile here.",
    },
    {
      selector: "#mobileHome",
      content: "This is the home page.",
    },
    {
      selector: "#mobileBookings",
      content: "This is the bookings page. You can view your bookings here.",
    },
    {
      selector: "#mobileMenu",
      content: "Click here to open the menu.",
    },
    {
      selector: "#notifications",
      content:
        "This is the notifications page. You can view your notifications here.",
    },
    {
      selector: "#logout",
      content: "Click here to logout.",
    },
    {
      selector: "#homepage",
      content: (
        <div className="tw-flex tw-flex-col tw-items-center tw-justify-center">
          <div className="tw-flex tw-justify-center tw-items-center">
            <Image src={logo} width={60} height={60} />
          </div>
          <p className="tw-text-black">Have a great time</p>
          <div className="tw-flex tw-justify-center tw-items-center">
            <span className="tw-font-bold tw-text-xl">GrabTern</span>
          </div>
        </div>
      ),
    },
  ];

  const { setIsOpen, setSteps, setCurrentStep } = useTour();
  useEffect(() => {
    setCurrentStep(0);
    const userTour = localStorage.getItem("userTour");
    if (userTour) return;
    setIsOpen(true);
    if (window.innerWidth > 768) {
      setSteps(desktopSteps);
    } else {
      setSteps(mobileSteps);
    }
    localStorage.setItem("userTour", "true");
  }, []);
}

function MentorDashboardTour() {
  const { setIsOpen, setSteps, setCurrentStep } = useTour();

  const desktopSteps = [
    {
      selector: "#mentorHome",
      content: (
        <div className="tw-flex tw-flex-col tw-items-center tw-justify-center">
          <div className="tw-flex tw-justify-center tw-items-center">
            <Image src={logo} width={60} height={60} />
          </div>
          <p className="tw-text-black">Welcome to the mentor dashboard</p>
          <div className="tw-flex tw-justify-center tw-items-center">
            <span className="tw-font-bold tw-text-xl">GrabTern</span>
          </div>
        </div>
      ),
    },
    {
      selector: "#mentorSidebar",
      content:
        "This is the sidebar. You can navigate to other pages from here.",
    },
    {
      selector: "#publishProfile",
      content: "You can publish or unpublish your profile from here.",
    },
    {
      selector: "#mentorSidebarToggle",
      content: "You can toggle the sidebar from here.",
    },
    {
      selector: "#mentorProfile",
      content: "This is your profile. You can edit your profile from here.",
    },
    {
      selector: "#mentorHomepage",
      content:
        "This is your homepage. You can view your bookings and sessions from here.",
    },
    {
      selector: "#mentorBookings",
      content: "This is your bookings. You can view your bookings from here.",
    },
    {
      selector: "#mentorSessions",
      content: "This is your sessions. You can view your sessions from here.",
    },
    {
      selector: "#mentorQueries",
      content: "This is your queries. You can view your queries from here.",
    },
    {
      selector: "#mentorCalendar",
      content: "This is your calendar. You can view your sessions from here.",
    },
    {
      selector: "#mentorServices",
      content: "This is your services. You can view your services from here.",
    },
    {
      selector: "#mentorPayments",
      content:
        "This is your payments. You can view and manage your payments from here.",
    },
    {
      selector: "#mentorWhatsNew",
      content:
        "This is your what's new. You can view your what's new from here.",
    },
    {
      selector: "#mentorReferral",
      content:
        "This is your referral. You can view your referrals from here, Refer and Earn.",
    },
    {
      selector: "#mentorRewards",
      content: "This is your rewards. You can view your rewards from here.",
    },
    {
      selector: "#mentorNotifications",
      content:
        "This is your notifications. You can view your notifications from here.",
    },
    {
      selector: "#mentorLogout",
      content: "This is your logout. You can logout from here.",
    },
    {
      selector: "#mentorHome",
      content: (
        <div className="tw-flex tw-flex-col tw-items-center tw-justify-center">
          <div className="tw-flex tw-justify-center tw-items-center">
            <Image src={logo} width={60} height={60} />
          </div>
          <p className="tw-text-black">Have a great time</p>
          <div className="tw-flex tw-justify-center tw-items-center">
            <span className="tw-font-bold tw-text-xl">GrabTern</span>
          </div>
        </div>
      ),
    },
  ];

  const mobileSteps = [
    {
      selector: "#mentorHome",
      content: (
        <div className="tw-flex tw-flex-col tw-items-center tw-justify-center">
          <div className="tw-flex tw-justify-center tw-items-center">
            <Image src={logo} width={60} height={60} />
          </div>
          <p className="tw-text-black">Welcome to the mentor dashboard</p>
          <div className="tw-flex tw-justify-center tw-items-center">
            <span className="tw-font-bold tw-text-xl">GrabTern</span>
          </div>
        </div>
      ),
    },
    {
      selector: "#mobileNavbarMentor",
      content: "This is the navigation bar.",
    },
    {
      selector: "#mobileMentorProfile",
      content: "This is your profile. You can edit your profile from here.",
    },
    {
      selector: "#mobileMentorHome",
      content: "This is your homepage.",
    },
    {
      selector: "#mobileMentorBookings",
      content: "This is your bookings. You can view your bookings from here.",
    },
    {
      selector: "#mobileMentorQueries",
      content: "This is your queries. You can view your queries from here.",
    },
    {
      selector: "#mobileMentorMenu",
      content: "Click here to open the menu.",
    },
    {
      selector: "#mentorNotifications",
      content:
        "This is your notifications. You can view your notifications from here.",
    },
    {
      selector: "#mentorLogout",
      content: "This is your logout. You can logout from here.",
    },
    {
      selector: "#mentorHome",
      content: (
        <div className="tw-flex tw-flex-col tw-items-center tw-justify-center">
          <div className="tw-flex tw-justify-center tw-items-center">
            <Image src={logo} width={60} height={60} />
          </div>
          <p className="tw-text-black">Have a great time</p>
          <div className="tw-flex tw-justify-center tw-items-center">
            <span className="tw-font-bold tw-text-xl">GrabTern</span>
          </div>
        </div>
      ),
    },
  ];

  useEffect(() => {
    setCurrentStep(0);
    const mentorTour = localStorage.getItem("mentorTour");
    if (mentorTour) return;
    setIsOpen(true);
    if (window.innerWidth > 768) {
      setSteps(desktopSteps);
    } else {
      setSteps(mobileSteps);
    }
    localStorage.setItem("mentorTour", true);
  }, []);
}

export { UserDashboardTour, MentorDashboardTour };
