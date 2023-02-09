import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../components/Header';
import SimpleBanner from '../components/SimpleBanner';

function Mentors() {
    const [mentorsData, setMentorsData] = useState([]);
    const [mentorContactValue, setMentorContactValue] = useState({})
    const [mentorShowIndex, setMentorShowIndex] = useState();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mentors/mentorLists`;
                const { data } = await axios.get(url);
                setMentorsData(data.filter(mentor => mentor.verified === true && mentor.token === "mentorIsVerified"));
                console.log(mentorsData)
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
                            {mentorsData.map((mentor, index) => (
                                <div key={mentor._id} className="mentorCard">
                                    <img src={mentor.mentorImg} alt='exampleMentorPhoto' />
                                    <h2 className='mentorName'>{mentor.name}</h2>
                                    <div className='contactLinks'>
                                        <i class="fas fa-envelope" onClick={() => {setMentorContactValue(`emailformentorindex${index}`)}}></i>
                                        <i class="fas fa-phone" onClick={() => {setMentorContactValue(`mobileformentorindex${index}`)}}></i>
                                        <i class="fab fa-linkedin" onClick={() => {setMentorContactValue(`sociallinkedinformentorindex${index}`)}}></i>
                                        <i class="fab fa-twitter" onClick={() => {setMentorContactValue(`socialtwitterformentorindex${index}`)}}></i>
                                    </div>
                                    <h3 style={{ marginTop: "10px" }}>{mentorContactValue === `emailformentorindex${index}` ? mentorsData[index].email : mentorContactValue === `mobileformentorindex${index}` ? mentorsData[index].mobile : mentorContactValue === `sociallinkedinformentorindex${index}` ? mentorsData[index].social.linkedin : mentorContactValue === `socialtwitterformentorindex${index}` ? mentorsData[index].social.twitter : null}</h3>
                                    <h3>Intern at: {mentor.internAt}</h3>
                                    <h3>{mentor.currentStatus}</h3>
                                    <p>{mentor.description?.length > 120
        ? `${mentor.description.substring(0, 120)}…`
        : mentor.description}</p>
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