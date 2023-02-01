import { useState } from "react";
import axios from "axios";
import { useRouter } from 'next/router'
import Link from 'next/link'

function Register() {
    const router = useRouter();
    if(localStorage.getItem("user_name") !== null || localStorage.getItem("token") !== null) {
        router.push("/")
    }
    const [data, setData] = useState({
		fullName: "",
		email: "",
		password: "",
        confirmPassword: "",
	});
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]:  input.value });
	};

	const handleSubmit = async (e) => {
        e.preventDefault();
        setError("")
        if(data.password !== data.confirmPassword) {
            return setError("Password do not match!")
        }
		try {
			const url = "http://localhost:9090/api/users/userRegister";
			const { data: res } = await axios.post(url, data);
			router.push("/login");
			console.log(res.message);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};
    return (
            <main className="login-body">
            <video autoPlay loop muted style={{  position: "fixed", right: 0, bottom: 0, minWidth: "100%", minHeight: "100%", }}>
                <source src='/assets/img/login-bg.mp4' type='video/mp4' />
            </video>

                <form className="form-default" action="login-bg.mp4" onSubmit={handleSubmit}>

                    <div className="login-form">
                        <div className="logo-login">
                            <a href="index.html"><img src="/assets/img/logo/loder.png" alt="" /></a>
                        </div>
                        <h2>Registration Here</h2>

                        <div className="form-input">
                            <label for="name">Full name</label>
                            <input type="text"placeholder="Full name" name="fullName" onChange={handleChange} value={data.fullName} />
                        </div>
                        <div className="form-input">
                            <label for="name">Email Address</label>
                            <input type="email" name="email" placeholder="Email Address" onChange={handleChange} value={data.email} />
                        </div>
                        <div className="form-input">
                            <label for="name">Password</label>
                            <input type="password" name="password" placeholder="Password" onChange={handleChange} value={data.password} />
                        </div>
                        <div className="form-input">
                            <label for="name">Confirm Password</label>
                            <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} value={data.confirmPassword} />
                        </div>
                        {error && <div style={{ color: "red" }}>{error}</div>}
                        <div className="form-input pt-30">
                            <input type="submit" name="submit" value="Registration" />
                        </div>
                        <Link href="/login" className="registration">login</Link>
                    </div>
                </form>
            </main>
    )
}

export default Register;