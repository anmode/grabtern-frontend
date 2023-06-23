import React from "react";
import {Image,Card,Text,Link} from "@nextui-org/react"


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

  const handleInternshipLinkClick = (e) => {
    e.preventDefault();
    window.open(internshipLink, "_blank");
  };
  return (

    <div
      className="properties pb-20 item"
      style={{ minHeight: "469px !important" }}
    >
      <div className="properties__card">
        <div>
          <a href="#" onClick={handleInternshipLinkClick}>
            <img
            className="properties__img"
            src={internshipImage}
            onClick={handleInternshipLinkClick}
            alt={internshipImageAlt}
            />
          </a>
        </div>
        <div className="properties__info">
          <div className="courseInfo">
            <p>{internshipCategories}</p>
            <h3>
              <a href={internshipLink} className="properties__link" onClick={handleInternshipLinkClick}>
                {internshipTitle}
              </a>
            </h3>
            <p className="properties__Description">{internshipDescription}</p>
          </div>
        </div>
      </div>
    </div>
    // <div >
    // <Card
    //   onClick={handleInternshipLinkClick}
    //   className="properties__card"
    // >
    //   <Card.Footer>
    //       <img
    //         className="properties__img"
    //         src={internshipImage}
    //         onClick={handleInternshipLinkClick}
    //         alt={internshipImageAlt}
    //       />
    //   </Card.Footer>
    //   <Card.Body className="properties__info">
    //     <Text  
    //       fontSize="16px" 
    //       color="#6e7697"
    //       margin-bottom="2px"
    //     >
    //     {internshipCategories}
    //     </Text>
    //     <Link href={internshipLink}  className="properties__link">{internshipTitle}</Link>
    //     <Text p className="properties__Description">
    //       {internshipDescription}
    //     </Text>
    //   </Card.Body>
    // </Card>
    // </div>
  );
}

export default Internship;
