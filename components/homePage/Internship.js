import React from "react";
import { ImageCard } from "../UI";

function Internship({
  internshipImage,
  internshipImageAlt,
  internshipCategories,
  internshipTitle,
  internshipDescription,
  internshipRating,
  internshipPayed,
  internshipPrice,
  internshipLink,
}) {
  const description =
    internshipDescription?.length > 120
      ? `${internshipDescription.substring(0, 120)}…`
      : internshipDescription;

  return (
    <ImageCard
      className="tw-w-auto tw-h-full"
      image={internshipImage}
      imageAlt={internshipImageAlt}
      heading={internshipTitle}
      link={internshipLink}
      subheading="Grabtern"
      body={description}
    />
  );
}

export default Internship;
