import React from 'react'

function Course({ courseImage, courseImageAlt, courseCategories, courseTitle, courseDescription, courseRating, coursePayed, coursePrice }) {
    const description = courseDescription.length > 120
        ? `${courseDescription.substring(0, 120)}…`
        : courseDescription
    return (
        <div className="properties pb-20 item" style={{ minHeight: "469px !important" }}>
            <div className="properties__card">
                <div className="properties__img overlay1">
                    <a href="#"><img src={courseImage} alt={courseImageAlt} /></a>
                </div>
                <div className="properties__caption">
                    <div className='courseInfo'>
                        <p>{courseCategories}</p>
                    <h3><a href="#">{courseTitle}</a></h3>
                    <p>{description}</p>
                    </div>
                   

                </div>
            </div>
        </div>
    )
}

export default Course