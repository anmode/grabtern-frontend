import React, { useEffect } from 'react'
import MentorFormSetupPW from '../../components/MentorFormSetupPW'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useRouter } from 'next/router'
import axios from 'axios'
function Index() {
  const router = useRouter();
  const { mentorPWCode } = router.query;

  useEffect(() => {
    const checkIfThePWCodeIsValid = async () => {
      if(mentorPWCode !== undefined) {
        console.log(mentorPWCode)
        const url = `http://localhost:8080/api/mentors/verify/checkPW/${mentorPWCode}`;
        const {data:res} = await axios.get(url);
        console.log(res.status)
        if(res.status == "BAD") {
          router.push("/")
        }
      }
    }

    checkIfThePWCodeIsValid();
  })

  return (
    <>
      <Header navbarBackground={true} />
      <main>
        <MentorFormSetupPW mentorPWCode={mentorPWCode} />
      </main>
      <Footer />
    </>
  )
}

export default Index