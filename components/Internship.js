import React from "react";
import Image from "next/image";
import {Card,Link, CardMedia, CardContent, CardActions, Button, CardActionArea, Typography} from '@mui/material'


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
    
    <Card
      onClick={handleInternshipLinkClick}
      className="properties__card"
    >
      <CardActionArea>
          <CardMedia
            className="properties__img"
            component="img"
            image={internshipImage}
            onClick={handleInternshipLinkClick}
            alt={internshipImageAlt}
          />
      </CardActionArea>
      <CardContent className="properties__info">
        <Typography   
          fontSize="16px" 
          color="#6e7697"
        >
        {internshipCategories}
        </Typography>
      <CardActions>
        <Link href={internshipLink}  className="properties__link">{internshipTitle}</Link>
      </CardActions>
        <div>
        <Typography 
          variant="p"  
          fontSize="1.5rem" 
          color="#6e7697"
        >{internshipDescription}
        </Typography>
        </div>
      </CardContent>
    </Card>
  );
}

export default Internship;
