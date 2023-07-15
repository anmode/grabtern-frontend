import React from "react";
import { ProfileCard } from "../UI";

function TeamProfile({ imageSrc, imageAlt, profileName, profileDescription }) {
  return (
    <ProfileCard
      image={imageSrc}
      imageAlt={imageAlt}
      heading={profileName}
      body={profileDescription}
      direction="col"
      size="lg"
      rounded="lg"
      align="center"
    />
    // <div className="single-cat text-center">
    //   <div className="cat-icon">
    //     <Image
    //       src={imageSrc}
    //       alt={imageAlt}
    //       style={{
    //         width: "200px",
    //         borderRadius: "50%",
    //         height: "200px",
    //         objectFit: "cover",
    //       }}
    //       width={200}
    //       height={200}
    //     />
    //   </div>
    //   <div className="cat-cap">
    //     <h5>
    //       <a href="services.html">{profileName}</a>
    //     </h5>
    //     <p>{profileDescription}</p>
    //   </div>
    // </div>
  );
}

export default TeamProfile;
