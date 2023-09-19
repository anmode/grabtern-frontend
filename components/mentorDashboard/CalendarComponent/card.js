import React, { useState } from "react";
import { GrLocation } from "react-icons/gr";
import { BsLink } from "react-icons/bs";
import { AiOutlineCalendar } from "react-icons/ai";
import { Switch } from "../../UI";

const Card = ({ updateMeetLink }) => {
  const [toggle, setToggle] = useState(false);
  const [link, setLink] = useState(false);
  const [meetLink, setMeetLink] = useState("");

  const addMeet = () => {
    setLink((prevLink) => !prevLink);
  };

  return (
    <section className="tw-flex tw-flex-col">
      {/* timezone */}
      <div className="tw-flex tw-items-start tw-justify-between tw-pb-10 tw-w-full tw-flex-wrap tw-gap-6">
        <div className="tw-flex tw-flex-col tw-justify-start tw-items-start">
          <p className="tw-flex tw-items-center tw-justify-start tw-gap-2 tw-text-black tw-font-semibold tw-text-lg">
            <GrLocation className="" />
            Timezone
          </p>
          <p className="tw-pl-7 tw-text-base tw-font-normal">
            Required for timely communications
          </p>
        </div>
        <div className="">
          <select className="tw-rounded-md tw-border-1 tw-outline-none tw-border-black focus:tw-border-primary-200 focus:tw-border-2 tw-font-medium tw-text-base hover:tw-bg-gray-100 tw-py-3 tw-px-2 tw-w-[322px]">
            <option>(GMT-11:00) Midway Island, Samoa</option>
            <option>(GMT-10:00) Hawaii</option>
            <option>(GMT-8:00) Alaska</option>
            <option>(GMT-7:00) Dawson, Yukon</option>
            <option>(GMT-7:00) Arizona</option>
            <option>(GMT-7:00) Tijuana</option>
            <option>(GMT-7:00) Pacific Time</option>
            <option>(GMT-6:00) Mountain Time</option>
            <option>(GMT-6:00) Chihuahua, La Paz, Mazatlan</option>
            <option>(GMT-6:00) Saskatchewan</option>
            <option>(GMT-6:00) Mexico City</option>
            <option>(GMT-6:00) Central America</option>
            <option>(GMT-5:00) Central Time</option>
            <option>(GMT-5:00) Bagota, Lima, Quito</option>
            <option>(GMT-4:00) Eastern Time</option>
            <option>(GMT-4:00) Caracas, La Paz</option>
            <option>(GMT-4:00) Santiago</option>
            <option>(GMT-3:00) Brasilia</option>
            <option>(GMT-3:00) Montevideo</option>
            <option>(GMT-3:00) Tehran</option>
            <option>(GMT-5:30) Chennai, Kolkata, Mumbai, New Delhi</option>
            <option>(GMT-5:30) Sri Jayawardenepura</option>
            <option>(GMT-5:45) Kathmandu</option>
          </select>
        </div>
      </div>

      <hr className="tw-h-px tw-bg-gray-200  tw-border-1 tw-dark:bg-gray-700" />

      {/* meeting link */}
      <div className="tw-mt-8 tw-flex tw-items-start tw-justify-between tw-pb-10 tw-w-full tw-flex-wrap tw-gap-6">
        <div className="tw-flex tw-flex-col tw-justify-start tw-items-start">
          <p className="tw-flex tw-items-center tw-justify-start tw-gap-2 tw-text-black tw-font-semibold tw-text-lg">
            <BsLink />
            Personal meeting link
          </p>
          <p className="tw-pl-7 tw-text-base tw-font-normal">
            All your 1:1 meetings will be redirected to this URL
          </p>
        </div>
        <div className="">
          {link ? (
            <div className="tw-flex tw-flex-col tw-justify-center tw-items-start tw-gap-2">
              <div className="tw-flex tw-justify-center tw-gap-3">
                <input
                  type="url"
                  onChange={(e) => setMeetLink(e.target.value)}
                  value={meetLink}
                  placeholder="Please enter a valid link"
                  className="tw-rounded-md tw-font-medium focus:tw-border-primary-100 tw-px-2 tw-text-base tw-border-2"
                />
                <button
                  onClick={() => updateMeetLink(meetLink)}
                  className="hover:tw-bg-primary-200 tw-rounded-md tw-px-6 tw-py-3 tw-font-bold tw-text-normal tw-bg-primary-100 tw-text-center tw-text-white tw-duration-200 tw-ease-in-out tw-transition-all"
                >
                  Save
                </button>
              </div>
              <button
                onClick={addMeet}
                className="hover:tw-bg-gray-400 tw-rounded-md tw-px-6 tw-py-3 tw-text-normal tw-bg-gray-300 tw-text-center tw-text-black tw-font-semibold"
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              onClick={addMeet}
              className="hover:tw-bg-gray-100 tw-border-dashed tw-border-gray-700 tw-rounded-md tw-text-center tw-px-4 tw-py-3 tw-p-5 tw-text-sm tw-font-medium tw-border-2"
              disabled
            >
              + Add meeting link
            </button>
          )}
        </div>
      </div>

      <hr className="tw-h-px tw-bg-gray-200  tw-border-1 tw-dark:bg-gray-700" />

      {/* Booking Period */}
      <div className="tw-mt-8 tw-flex tw-items-start tw-justify-between tw-pb-10 tw-w-full tw-flex-wrap tw-gap-6">
        <div className="tw-flex tw-flex-col tw-justify-start tw-items-start">
          <p className="tw-flex tw-items-center tw-justify-start tw-gap-2 tw-text-black tw-font-semibold tw-text-lg">
            <AiOutlineCalendar />
            Booking Period
          </p>
          <p className="tw-pl-7 tw-text-base tw-font-normal">
            How far in the future can attendees book
          </p>
        </div>
        <div className="">
          <select
            className="tw-rounded-md tw-border-1 tw-outline-none tw-border-black focus:tw-border-primary-200 focus:tw-border-2 tw-font-medium tw-text-base hover:tw-bg-gray-100 tw-py-3 tw-px-2 tw-w-[322px]"
            disabled
          >
            <option>1 Week</option>
            <option>2 Weeks</option>
            <option>3 Weeks</option>
            <option>4 Weeks</option>
            <option>2 Months</option>
            <option>3 Months</option>
          </select>
        </div>
      </div>

      <hr className="tw-h-px tw-bg-gray-200  tw-border-1 tw-dark:bg-gray-700" />

      {/* Notice Period */}
      <div className="tw-mt-8 tw-flex tw-items-start tw-justify-between tw-pb-10 tw-w-full tw-flex-wrap tw-gap-6">
        <div className="tw-flex tw-flex-col tw-justify-start tw-items-start">
          <p className="tw-flex tw-items-center tw-justify-start tw-gap-2 tw-text-black tw-font-semibold tw-text-lg">
            <AiOutlineCalendar />
            Notice Period
          </p>
          <p className="tw-pl-7 tw-text-base tw-font-normal">
            Set the minimum amount of notice that is required
          </p>
        </div>
        <div className="tw-flex tw-gap-0">
          <input
            type="text"
            placeholder="Enter Value in Mins"
            className="tw-rounded-l-md tw-font-medium focus:tw-border-primary-100 tw-px-2 tw-text-base tw-border-2 tw-w-2/3"
            disabled
          />
          <select
            className="hover:tw-bg-gray-400 tw-rounded-r-md tw-outline-none focus:tw-border-primary-200 tw-border-2 tw-py-3 tw-px-0 tw-w-1/3 tw-text-normal tw-bg-gray-300 tw-text-center tw-text-black tw-font-semibold"
            disabled
          >
            <option>Minutes</option>
            <option>Hours</option>
            <option>Days</option>
            <option>Weeks</option>
          </select>
        </div>
      </div>

      <hr className="tw-h-px tw-bg-gray-200  tw-border-1 tw-dark:bg-gray-700" />

      {/* Google meet */}
      <div className="tw-mt-8 tw-flex tw-items-start tw-justify-between tw-pb-10 tw-w-full tw-flex-wrap tw-gap-6">
        <div className="tw-flex tw-flex-col tw-justify-start tw-items-start">
          <p className="tw-flex tw-items-center tw-justify-start tw-gap-2 tw-text-black tw-font-semibold tw-text-lg">
            <AiOutlineCalendar />
            Google meet
          </p>
          <p className="tw-pl-7 tw-text-base tw-font-normal">
            Use google meet for your 1:1 calls
          </p>
        </div>
        <div className="">
          <Switch checked={!toggle} onChange={() => setToggle(!toggle)} />
        </div>
      </div>

      <hr className="tw-h-px tw-bg-gray-200  tw-border-1 tw-dark:bg-gray-700" />

      {/* Calender event */}
      <div className="tw-mt-8 tw-flex tw-items-start tw-justify-between tw-pb-10 tw-w-full tw-flex-wrap tw-gap-6">
        <p className="tw-text-black tw-font-semibold tw-text-3xl">Calendars</p>
        <div className="">
          <button className="hover:tw-bg-primary-200 tw-rounded-md tw-px-6 tw-py-3 tw-font-bold tw-text-normal tw-bg-primary-100 tw-text-center tw-text-white tw-duration-200 tw-ease-in-out tw-transition-all">
            + Add calendar account
          </button>
        </div>
      </div>
    </section>
  );
};

export default Card;
