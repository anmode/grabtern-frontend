import React from 'react'

function Course({ courseImage, courseImageAlt, courseCategories, courseTitle, courseDescription, courseRating, coursePayed, coursePrice }) {
    return (
        <div className="properties pb-20" style={{ minWidth: "360px" }}>
            <div className="properties__card">
                <div className="properties__img overlay1">
                    <a href="#"><img src={courseImage} alt={courseImageAlt} /></a>
                </div>
                <div className="properties__caption">
                    <p>{courseCategories}</p>
                    <h3><a href="#">{courseTitle}</a></h3>
                    <p>{courseDescription}</p>
                    <div className="properties__footer d-flex justify-content-between align-items-center">
                        <div className="restaurant-name">
                            <div className="rating">
                                {Array(Math.floor(courseRating)).fill("").map((_, index) => (
                                    <i key={index} className="fas fa-star"></i>
                                ))}

                                {courseRating.toString().includes('.') ? (<i className="fas fa-star-half"></i>) : null}
                            </div>
                            <p><span>({courseRating})</span> based on {coursePayed}</p>
                        </div>
                        <div className="price">
                            <span>${coursePrice}</span>
                        </div>
                    </div>
                    <a href="#" className="border-btn border-btn2">Find out more</a>
                </div>

            </div>
        </div>
    )
}

export default Course