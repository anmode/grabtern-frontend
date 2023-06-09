import React from "react";

function TeamProfile({ imageSrc, imageAlt, profileName, profileDescription,profileLinkedIn,profileGithub,profileTwitter }) {
  return (
    <div className="single-cat text-center">
      <div className="cat-icon">
        <img
          style={{
            width: "200px",
            borderRadius: "50%",
            height: "200px",
            objectFit: "cover",
          }}
          src={imageSrc}
          alt={imageAlt}
        />
      </div>
      <div className="cat-cap">
        <h5>
          <a href="services.html">{profileName}</a>
        </h5>
        <div className="member-card__social">
          <a href={`${profileLinkedIn}`} target="_blank">
            <i class="member fab fa-linkedin"></i>
          </a>
          <a href={`${profileGithub}`} target="_blank">
            <i class="member fab fa-github"></i>
          </a>
          <a href={`${profileTwitter}`} target="_blank">
            <i class="member fab fa-twitter"></i>
          </a>
          
        </div>
        <p>{profileDescription}</p>
      </div>
    </div>
  );
}

export default TeamProfile;
