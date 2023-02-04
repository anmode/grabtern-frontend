import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../components/Header';
import SimpleBanner from '../components/SimpleBanner';

function Mentors() {
    const [mentorsData, setMentorsData] = useState([]);
    const [mentorContactValue, setMentorContactValue] = useState()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = "http://localhost:8080/api/mentors/mentorLists";
                const { data } = await axios.get(url);
                setMentorsData(data);
                console.log(data)
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    })

    return (
        <>
            <Header />
            <SimpleBanner bannerTittle="Find Mentors" siteName="mentors" />
            <main>

                <section className="findMentors">
                    <div className='container'>
                        <h1>Find All mentors here's</h1>
                        {mentorsData.length === 0 ? (<p>There is not mentor right now...</p>) : (<div className='mentorLists'>
                            {mentorsData.map(mentor => (
                                <div key={mentor._id} className="mentorCard">
                                    <img src='/exampleMentorPhoto.jpg' alt='exampleMentorPhoto' />
                                    <h2 className='mentorName'>{mentor.name}</h2>
                                    <div className='contactLinks'>
                                        <i class="fas fa-envelope" onClick={() => setMentorContactValue(mentor.email)}></i>
                                        <i class="fas fa-phone" onClick={() => setMentorContactValue(mentor.mobile)}></i>
                                        <i class="fab fa-linkedin" onClick={() => setMentorContactValue(mentor.social.linkedin)}></i>
                                        <i class="fab fa-twitter" onClick={() => setMentorContactValue(mentor.social.twitter)}></i>
                                    </div>
                                    <h3 style={{ marginTop: "10px" }}>{mentorContactValue}</h3>
                                    <h3>Intern at: {mentor.internAt}</h3>
                                    <h3>{mentor.currentStatus}</h3>
                                    <p>{mentor.description}</p>
                                    <h3>Price for each intern: {mentor.sessionPrice}</h3>
                                </div>
                            ))}
                        </div>)}
                    </div>
                </section>
            </main>
        </>
    )
}

export default Mentors