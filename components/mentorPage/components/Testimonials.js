import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  BsChevronCompactLeft,
  BsChevronCompactRight,
  BsStarFill,
} from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Testimonials = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    if (currentIndex === 0) return setCurrentIndex(data.length - 1);
    setCurrentIndex((currentIndex - 1) % data.length);
  };

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % data.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % data.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="tw-group tw-max-w-[1300px] tw-flex tw-flex-col tw-w-full tw-h-full tw-relative tw-px-4 tw-items-center tw-justify-center">
      <div className="tw-flex tw-w-[200px] tw-h-[100px] tw-justify-center tw-items-center  tw-transition-all tw-duration-200 tw-ease-in-out">
        <Image
          src={data[currentIndex].testimonialUserImage}
          alt={data[currentIndex].testimonialUserName}
          width={100}
          height={100}
          className="tw-rounded-full tw-object-cover tw-object-center"
        />
      </div>
      {/* left arraow */}
      <div className=" tw-hidden max-[640px]:tw-block group-hover:tw-block tw-absolute tw-top-[35%] max-[637px]:tw-top-[87%] -tw-mx-10 -tw-translate-x-0 tw-translate-y-[50%] tw-left-5 tw-text-2xl tw-rounded-full tw-p-2 tw-bg-[#00C9A7]/10 tw-cursor-pointer hover:tw-bg-gray-200 tw-transition-all tw-duration-200 tw-ease-in-out tw-text-primary-100">
        <BsChevronCompactLeft size={30} onClick={prevSlide} />
      </div>

      {/* right arrow */}
      <div className="hover:tw-bg-gray-200 tw-transition-all tw-duration-200 tw-ease-in-out tw-hidden max-[640px]:tw-block group-hover:tw-block tw-absolute tw-top-[35%] max-[637px]:tw-top-[87%] -tw-mx-10 tw-translate-x-0 tw-translate-y-[50%] tw-right-5 tw-text-2xl tw-rounded-full tw-p-2 tw-bg-[#00C9A7]/10 tw-cursor-pointer tw-text-primary-100">
        <BsChevronCompactRight size={30} onClick={nextSlide} />
      </div>
      <div>
        <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-text-center tw-mt-5">
          <h1 className="tw-text-2xl tw-font-bold max-[637px]:tw-text-xl tw-text-gray-800">
            {data[currentIndex].testimonialUserName}
          </h1>
          <h2 className="tw-text-lg max-[637px]:tw-text-sm tw-text-gray-500">
            {data[currentIndex].testimonialUserHeadline}
          </h2>
          <div className="tw-flex tw-items-center tw-justify-center tw-mt-5">
            {[...Array(5)].map((star, i) => {
              const ratingValue = i + 1;
              return (
                <label key={i}>
                  <input
                    type="radio"
                    name="rating"
                    value={ratingValue}
                    className="tw-hidden"
                  />
                  <BsStarFill className="tw-cursor-pointer tw-text-yellow-400 tw-text-xl max-[637px]:tw-text-sm tw-mx-1" />
                </label>
              );
            })}
          </div>
          <p className="tw-text-gray-600 tw-mt-5 tw-max-w-[990px] max-[637px]:tw-text-xs">
            {data[currentIndex].testimonialDescription}
          </p>
        </div>
      </div>
      <div className="tw-flex tw-justify-center tw-items-center tw-mt-5">
        {data.map((testimonial, index) => {
          return (
            <RxDotFilled
              key={index}
              size={30}
              className={`tw-cursor-pointer tw-mx-2 ${
                index === currentIndex ? "tw-text-gray-600" : "tw-text-gray-400"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
