import React, { useState } from "react";
import { GrLocation } from "react-icons/gr";
import { BsLink } from "react-icons/bs";
import { AiOutlineCalendar } from "react-icons/ai";
import { LiaToggleOffSolid } from "react-icons/lia";
import { event } from "jquery";

const Card = () => {
  const [toggle, setToggleIcon] = useState(false);
  const [link, setLink] = useState(false);

  const addMeet = () => {
    setLink((prevLink) => !prevLink);
  };

  const toggleIcon = () => {
    setToggleIcon((prevToggle) => !prevToggle);
  };
  return (
    <>
      <div className="tw-flex tw-items-center tw-pb-4">
        <div className="tw-flex tw-flex-col-1 tw-px-2 tw-py-2">
          <span className="tw-pt-1">
            <GrLocation />
          </span>
          <div>
            <p className="tw-ml-3 tw-text-black tw-font-semibold tw-text-lg">
              Timezone
            </p>
            <p className="tw-ml-3 tw-text-base tw-font-normal">
              Required for timely communications
            </p>
          </div>
        </div>
        <div className="tw-ml-[10rem]">
          <select className="tw-rounded-lg tw-font-medium tw-text-base hover:tw-bg-gray-100 tw-p-2.5">
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
      <hr className="tw-h-px tw-bg-gray-200 tw-mr-[3rem] tw-border-0 tw-dark:bg-gray-700" />
      <div className="tw-flex tw-items-center tw-pb-4 tw-pt-5">
        <div className="tw-flex tw-flex-col-1 tw-px-2 tw-py-2">
          <span className="tw-pt-1">
            <BsLink />
          </span>
          <div>
            <p className="tw-ml-3 tw-text-black tw-font-semibold tw-text-lg">
              Personal meeting link
            </p>
            <p className="tw-ml-3 tw-text-base tw-font-normal">
              All your 1:1 meetings will be redirected to this URL
            </p>
          </div>
        </div>
        <div className="tw-ml-[4.5rem]">
          {link ? (
            <div>
              <input
                type="url"
                placeholder="Please enter a valid link"
                className="tw-rounded-lg tw-font-medium tw-text-base tw-border tw-p-2.5 tw-px-12"
              />
              <button className="hover:tw-bg-gray-700  tw-ml-[9rem] tw-rounded-full tw-px-7 tw-py-3 tw-font-bold tw-text-normal tw-bg-black tw-text-center tw-text-white ">
                Save
              </button>
              <button
                onClick={addMeet}
                className="hover:tw-bg-gray-300 tw-ml-[1rem] tw-rounded-full tw-px-5 tw-py-3  tw-text-normal tw-bg-gray-200 tw-text-center tw-text-black "
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              onClick={addMeet}
              className="hover:tw-bg-gray-100 tw-border-dashed tw-border-gray-700 tw-rounded-md tw-text-center tw-px-4 tw-py-3 tw-p-5 tw-text-sm tw-font-medium tw-border-2"
            >
              + Add meeting link
            </button>
          )}
        </div>
      </div>
      <hr className="tw-h-px tw-bg-gray-200 tw-mr-[3rem] tw-border-0 tw-dark:bg-gray-700" />
      <div className="tw-flex tw-items-center tw-pb-4 tw-pt-5">
        <div className="tw-flex tw-flex-col-1 tw-px-2 tw-py-2">
          <span className="tw-pt-1">
            <AiOutlineCalendar />
          </span>
          <div>
            <p className="tw-ml-3 tw-text-black tw-font-semibold tw-text-lg">
              Booking Period
            </p>
            <p className="tw-ml-3 tw-text-base tw-font-normal">
              How far in the future can attendees book
            </p>
          </div>
        </div>
        <div className="tw-ml-[8rem]">
          <select className="tw-rounded-lg tw-font-medium tw-text-base hover:tw-bg-gray-100 tw-p-2.5">
            <option>1 Week</option>
            <option>2 Weeks</option>
            <option>3 Weeks</option>
            <option>4 Weeks</option>
            <option>2 Months</option>
            <option>3 Months</option>
          </select>
        </div>
      </div>
      <hr className="tw-h-px tw-bg-gray-200 tw-mr-[3rem] tw-border-0 tw-dark:bg-gray-700" />
      <div className="tw-flex tw-items-center tw-pb-4 tw-pt-5">
        <div className="tw-flex tw-flex-col-1 tw-px-2 tw-py-2">
          <span className="tw-pt-1">
            <AiOutlineCalendar />
          </span>
          <div>
            <p className="tw-ml-3 tw-text-black tw-font-semibold tw-text-lg">
              Notice Period
            </p>
            <p className="tw-ml-3 tw-text-base tw-font-normal">
              Set the minimum amount of notice that is required
            </p>
          </div>
        </div>
        <div className="tw-ml-[3rem]">
          <input
            type="text"
            placeholder="Enter Value in Mins"
            className="hover:tw-border-black hover:tw-border-2 tw-text-base tw-bg-gray-50 tw-border tw-w-2/3 tw-rounded-l-lg tw-font-normal tw-text-base hover:tw-bg-gray-100 tw-p-2.5"
          />
          <select className="tw-rounded-r-lg tw-text-center tw-font-medium tw-w-1/3 tw-text-base hover:tw-bg-gray-100 tw-p-2.5">
            <option>Minutes</option>
            <option>Hours</option>
            <option>Days</option>
            <option>Weeks</option>
          </select>
        </div>
      </div>
      <hr className="tw-h-px tw-bg-gray-200 tw-mr-[3rem] tw-border-0 tw-dark:bg-gray-700" />
      <div className="tw-flex tw-items-center tw-pb-4 tw-pt-5">
        <div className="tw-flex tw-flex-col-1 tw-px-2 tw-py-2">
          <span className="tw-pt-1">
            <AiOutlineCalendar />
          </span>
          <div>
            <p className="tw-ml-3 tw-text-black tw-font-semibold tw-text-lg">
              Google meet
            </p>
            <p className="tw-ml-3 tw-text-base tw-font-normal">
              Use google meet for your 1:1 calls
            </p>
          </div>
        </div>
        <div className="tw-ml-[10rem]">
          {toggle ? (
            <img
              className="tw-ml-[2rem]"
              onClick={toggleIcon}
              src="/toggleOn.png"
              alt=""
            />
          ) : (
            <img
              className="tw-ml-[2rem]"
              onClick={toggleIcon}
              src="/toggleOff.png"
              alt=""
            />
          )}
        </div>
      </div>
      <hr className="tw-h-px tw-bg-gray-200 tw-mr-[3rem] tw-border-0 tw-dark:bg-gray-700" />
      <div className="tw-pt-5">
        <p className="tw-text-black tw-font-semibold tw-text-3xl">Calendars</p>
        <div className="tw-pt-2 tw-mb-10">
          <button className="hover:tw-border-4  hover:tw-border-gray-300 tw-rounded-md tw-bg-gray-200 tw-text-center tw-text-sm tw-font-medium tw-px-4 tw-py-2">
            + Add calendar account
          </button>
        </div>
      </div>
      <div className="tw-pb-10"></div>
    </>
  );
};

export default Card;
