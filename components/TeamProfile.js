import React from 'react'

function TeamProfile({imageSrc, imageAlt, profileName, profileDescription}) {
  return (
    <div className="single-cat text-center">
    <div className="cat-icon">
        <img src={imageSrc} alt={imageAlt} />
    </div>
    <div className="cat-cap">
        <h5><a href="services.html">{profileName}</a></h5>
        <p>{profileDescription}</p>
    </div>
</div>
  )
}

export default TeamProfile