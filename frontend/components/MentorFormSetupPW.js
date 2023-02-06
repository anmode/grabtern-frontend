import React, { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

function MentorFormSetupPW({ mentorPWCode }) {
  const router = useRouter();
    const [formData, setFormData] = useState({
        newPassword: '',
        newConfirmPassword: ''
    });
    const [error, setError] = useState("")

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmitNewPW = async (e) => {
        e.preventDefault();
        if (formData.newPassword !== formData.newConfirmPassword) {
            return alert("Please write match confirm password!");
        }
        try {
            const url = `http://localhost:8080/api/mentors/verify/setupPW/${mentorPWCode}`;
            console.log(url)
            const { data: res } = await axios.post(url, formData);
            console.log(res.status)
                router.push("/")
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message);
            }
        }
    }
    return (
        <div className='mentorFormRegisration'>
            <div className='container'>
                <h1>Setup new Password</h1><br />
                <form className='mentorForm' onSubmit={handleSubmitNewPW}>
                    <div>
                        <label for="newPW">New Password</label>
                        <input type="password" name="newPW" className="mentorFormInput" onChange={(e) => handleChange(e)} placeholder="e.g. newPassword123!@" required />
                    </div>
                    <div>
                        <label for="newCPW">New Confirm Password</label>
                        <input type="password" name="newCPW" className="mentorFormInput" onChange={(e) => handleChange(e)} placeholder="e.g. newPassword123!@" required />
                    </div>
                    <button type='submit' className='mentorFormButotn'>Submit</button>
                    {error && <div style={{ color: "red", gridColumn: "1/3" }}>{error}</div>}
                </form>
            </div>
        </div>
    )
}

export default MentorFormSetupPW