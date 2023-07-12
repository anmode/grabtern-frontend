import React from "react";
import { Button, IconCard } from "../UI";
import {FaUsers} from "react-icons/fa"
import {RiCoinsFill, RiTimeFill,} from "react-icons/ri"
export default function SessionCard({
  type,
  name,
  description,
  duration,
  price,
  handleBookSession,
}) {
  return (
    <IconCard 
      Icon = {FaUsers}
      heading = {name}
      body = {description}
      intent = "bg"
      size = "lg"
    > 
    {/* time and price details */}
      <div className="tw-flex tw-gap-4 tw-flex-wrap tw-my-4">
        <div className="tw-flex tw-items-center tw-gap-2">
          <RiTimeFill className="tw-text-2xl tw-text-primary-50"/> <p>{duration}</p>
        </div>
        <div className="tw-flex tw-items-center tw-gap-2">
          <RiCoinsFill className="tw-text-2xl tw-text-yellow-400" /> <p>{price}</p>
        </div>
      </div>
      {/* book session btn */}
      <Button 
        className="tw-mt-1"
        text = "Book Session"
        onClick={handleBookSession}
      />
    </IconCard> 
  );
}
