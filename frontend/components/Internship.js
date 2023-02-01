import React from 'react'

function Internship({ internshipImage, internshipImageAlt, internshipCategories, internshipTitle, internshipDescription, internshipRating, internshipPayed, internshipPrice }) {
    const description = internshipDescription?.length > 120
        ? `${internshipDescription.substring(0, 120)}…`
        : internshipDescription
    return (
        <div className="properties pb-20 item" style={{ minHeight: "469px !important" }}>
            <div className="properties__card">
                <div className="properties__img overlay1">
                    <a href="#"><img src={internshipImage} alt={internshipImageAlt} /></a>
                </div>
                <div className="properties__caption">
                    <div className='courseInfo'>
                        <p>{internshipCategories}</p>
                        <h3><a href="#">{internshipTitle}</a></h3>
                        <p>{description}</p>
                    </div>
            

                </div>
            </div>
        </div>
    )
}

export default Internship