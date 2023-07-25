import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/layout/Header";
import Head from "next/head";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ButtonUI from "../../components/UI/Button/Button";
import Image from "next/image";
import ForgotLogo from "../../public/Grabtern2.png";
import Logo from "../../public/assets/img/favicon1.ico";

function ForgotPassword() {
  const router = useRouter();
  const { entity } = router.query; // 'entity' will contain the entity type ('user' or 'mentor')
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const url = new URL(window.location.href);
      const entityTypeFromUrl = url.searchParams.get("entityType");
      const backendUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/forgotPassword?entityType=${entityTypeFromUrl}`;
      const { data } = await axios.post(backendUrl, { email: email });
      setIsLoading(false);
      toast.success(
        "Please check your email for instructions to reset your password.",
      );
      setTimeout(() => {
        router.push("/");
      }, 5000);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        toast.error(error.response.data.message);
        setIsLoading(false);
      }
    }
  };

  return (
    <>
      <Head>
        <title>GrabTern | Forgot Password</title>
      </Head>
      {/* <Header navbarBackground={true} /> */}
      <main className="tw-flex tw-justify-center tw-items-center">
        <form>
        <div className="tw-flex  tw-items-center tw-mb-10">
        <Image
          className="tw-px-3 tw-py-4"
          src={Logo}
          alt="icon"
          width={50}
          height={50}
        />
        <div className="tw-font-inter tw-font-bold tw-text-3xl ">GrabTern</div>
      </div>
          <div className="">
            <div className="tw-pb-5 tw-font-inter tw-font-semibold tw-text-5xl tw-leading-relaxed">Forgot your <br/>password?</div>
            <div className="tw-pb-5 tw-font-inter tw-font-medium tw-text-base">
              To reset your password, please enter the email address of your
              <br/>GrabTern account.
            </div>
            <div className="">
              <label htmlFor="email" className=" tw-font-inter tw-font-medium tw-text-base">Email</label>
              <br/>
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                value={email}
                className="tw-rounded-md tw-border-2 tw-border-base-300 tw-px-3 tw-py-2 tw-pr-20"
              />
            </div>
            <div
              className="form-input tw-pt-6 tw-pb-4"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <ButtonUI text="Reset Password" onClick={handleSubmit} />
            </div>
            {isLoading && (
              <img
                style={{
                  width: "50px",
                  height: "50px",
                  border: "none",
                }}
                src="/assets/img/gif/Spinner.gif"
                alt="loading..."
              />
            )}
          </div>
          <ToastContainer />
          <hr />
          <div className="tw-pt-5 tw-font-inter tw-font-bold tw-text-xl tw-text-[#4E9F3D]"><a href="#">Contact Us</a></div>
        </form>
        <div className="logout-login">
          <div className="image-container">
            <Image src={ForgotLogo} width={600} height={600} />
          </div>
        </div>
      </main>

      <style jsx>{`
        /* CSS for hiding the image on small screens */
        @media (max-width: 1450px) {
          .image-container {
            display: none;
          }
        }
      `}</style>
    </>
  );
}

export default ForgotPassword;
