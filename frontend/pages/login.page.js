import {useState} from 'react'
import Link from 'next/link'
import axios from 'axios';
import { useRouter } from 'next/router'
function Login() {
	const router = useRouter();
    if(localStorage.getItem("user_name") !== null || localStorage.getItem("token") !== null) {
        router.push("/")
    }
    const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");
	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
        setError("")
		e.preventDefault();
		try {
			const url = "https://grabtern-api.up.railway.app/api/auth";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
            localStorage.setItem("user_name", res.fullName);
            router.push("/");
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
                <a href="index.html"><img src="assets/img/logo/loder.png" alt="" /></a>
            </div>
            <h2>Login Here</h2>
            <div className="form-input">
                <label for="name">Email</label>
                <input  type="email" name="email" placeholder="Email" onChange={handleChange} value={data.email} /> 
            </div>
            <div className="form-input">
                <label for="name">Password</label>
                <input type="password" name="password" placeholder="Password" onChange={handleChange} value={data.password} /> 
            </div>
            <div className="form-input pt-30">
                <input type="submit" name="submit" value="login" /> 
            </div>
            {error && <div style={{ color: "red" }}>{error}</div>}
            <Link href="#" className="forget">Forget Password</Link>
            <Link href="/register" className="registration">Registration</Link>
        </div>
    </form>
</main>
  )
}

export default Login