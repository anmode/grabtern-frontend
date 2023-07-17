import React from "react";
import { Button, IconCard } from "../UI";
import { FaUsers, FaVideo, FaMessage } from "react-icons/fa";
import { RiCoinsFill, RiTimeFill } from "react-icons/ri";
export default function SessionCard({
  type,
  name,
  description,
  duration,
  price,
  handleBookSession,
}) {
  let Icon = FaVideo;
  switch (type) {
    case "group Call":
      Icon = FaUsers;
      break;
    case "text":
      Icon = FaMessage;
      break;
    default:
      Icon = FaVideo;
      break;
  }
  return (
    <IconCard
      className="tw-flex tw-flex-col"
      Icon={Icon}
      heading={name}
      body={description}
      intent="bg"
      size="lg"
    >
      <div className="tw-mt-auto">
        {/* time and price details */}
        <div className="tw-flex tw-gap-4 tw-flex-wrap tw-my-4">
          <div className="tw-flex tw-items-center tw-gap-2">
            <RiTimeFill className="tw-text-2xl tw-text-primary-50" />{" "}
            <p>{duration} Minutes</p>
          </div>
          <div className="tw-flex tw-items-center tw-gap-2">
            <RiCoinsFill className="tw-text-2xl tw-text-yellow-400" />{" "}
            <p>Rs. {price}</p>
          </div>
        </div>
        {/* book session btn */}
        <Button
          className="tw-mt-1"
          text="Book Session"
          onClick={handleBookSession}
        />
      </div>
    </IconCard>
  );
}
