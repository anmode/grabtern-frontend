import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
import { useContext } from "react";
import LogContext from "../context/LogContext";

function Register() {
  const router = useRouter();
  if (
    localStorage.getItem("user_name") !== null ||
    localStorage.getItem("token") !== null
  ) {
    router.push("/");
  }
  const [data, setData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const {logpagestate , setlogpagestate} = useContext(LogContext);

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (data.password !== data.confirmPassword) {
      return setError("Password do not match!");
    }
    try {
      const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/users/userRegister`;
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


  const handleregister = () =>{
    if (logpagestate)
    {
      setlogpagestate(false)
    }
    else{
      setlogpagestate(true)
    }
  }
  return (
    <>
        <form
          className="form-default mx-5"
          action="login-bg.mp4"
          onSubmit={handleSubmit}
          style={{marginTop:"120px"}}
        >
          <div className="d-flex flex-column justify-content-start tw-border-[2px] tw-rounded-lg tw-border-black tw-py-[50px] tw-px-[90px]">
            <h2 className="text-left tw-text-black tw-text-5xl  tw-font-bold">Registration Here</h2>
            <p className=" tw-text-gray-500 tw-mb-5">Please fill the below fields</p>
            <div className="tw-flex tw-flex-col  tw-mb-10">
              <label for="name" className="tw-text-3xl tw-text-left tw-font-medium tw-mr-10">Full name</label>
              <input
                type="text"
                placeholder="Full name"
                name="fullName"
                onChange={handleChange}
                value={data.fullName}
                className="tw-border-[2px] tw-px-8 tw-py-3 tw-rounded-lg"
              />
            </div>
            <div className="tw-flex tw-flex-col  tw-mb-10">
              <label for="name" className="tw-text-3xl tw-text-left tw-font-medium tw-mr-10">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                onChange={handleChange}
                value={data.email}
                className="tw-border-[2px] tw-px-8 tw-py-3 tw-rounded-lg"
              />
            </div>
            <div className="tw-flex tw-flex-col  tw-mb-10">
              <label for="name" className="tw-text-3xl tw-text-left tw-font-medium tw-mr-10">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                value={data.password}
                className="tw-border-[2px] tw-px-8 tw-py-3 tw-rounded-lg"
              />
            </div>
            <div className="tw-flex tw-flex-col  tw-mb-10">
              <label for="name" className="tw-text-3xl tw-text-left tw-font-medium tw-mr-10">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                onChange={handleChange}
                value={data.confirmPassword}
                className="tw-border-[2px] tw-px-8 tw-py-3 tw-rounded-lg"
              />
            </div>
            {error && <div style={{ color: "red" }}>{error}</div>}
            <div >
              <input type="submit" name="submit" value="Registration" style={{
                background: "linear-gradient( to top, rgb(83, 116, 255) 0%, rgb(127, 102, 255) 40%, rgb(187, 85, 255) 95%, rgb(192, 84, 255) 100% )"
                  }} className="tw-px-10 tw-py-[10px] tw-rounded-lg tw-cursor-pointer"/>
            </div>
            <div className="link-div tw-font-medium tw-mt-10">
              Already have an account? 
              <button  className="tw-ml-0 md:tw-ml-2 hover:tw-text-gray-400" style={{textDecoration:"none"}} onClick={()=>handleregister()}>
                 Login              </button>
            </div>
          </div>
        </form>
    </>
  );
}

export default Register;
