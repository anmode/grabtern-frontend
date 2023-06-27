import React, { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs, { send } from "@emailjs/browser";
import dynamic from "next/dynamic";
import style from "../styles/contact.module.css";
import Head from "next/head";
import * as yup from "yup";
import { useFormik } from "formik";
import { error } from "jquery";

const Footer = dynamic(() => import("../components/Footer"));
const Header = dynamic(() => import("../components/Header"));
const SimpleBanner = dynamic(() => import("../components/SimpleBanner"));

function Contact() {
  const form = useRef(null);
  //create a schema for a form
  const validForm = yup.object().shape({
    name: yup.string().required("Please enter your name!"),
    email: yup
      .string()
      .email("Please enter a valid Email!")
      .required("Please enter a email"),
    message: yup.string().required("Please enter a message!"),
    subject: yup.string().required("Please enter a subject!"),
  });

  //check value of forms
  const { values, touched, errors, action, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      message: "",
      name: "",
      email: "",
      subject: "",
    },

    validationSchema: validForm,
  });

  function showToast(message) {
    // console.log("called");
    toast(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      type: "error",
    });
  }

  //console.log(errors);
  //send mail after validation
  const sendEmail = async (e) => {
    e.preventDefault();

    handleSubmit;
    console.log(errors);

    //console.log("mail called");
    if (values.message === '') { showToast("Please enter a message!"); }
    else if (values.name === '') { showToast("Please enter a name!"); }
    else if (values.email === '') { showToast("Please enter a email!"); }
    else if (values.subject === '') { showToast("Please enter a subject!") }

    else {
      const templateParams = {
        //  name: values.name,
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        message: document.querySelector("#message").value,
        subject: document.querySelector("#subject").value,
      };

      console.log(templateParams);
      emailjs
        .send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_KEY,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_CONTACT_US_KEY,
          templateParams,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        )
        .then(
          (result) => {
            toast('Contact form sent successfully !', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              type: "success"
            });
            console.log(result.text);
          },
          (error) => {
            toast('Contact form sent successfully !', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              type: "error",
            });
            console.log(error.text);
          },

          values.message = '',
          values.name = '',
          values.email = '',
          values.subject = '',
          handleChange,

        );



    }

  };

  return (
    <>
      <Head>
        <title>GrabTern | Contact Us</title>
      </Head>
      <Header />
      <SimpleBanner bannerTittle="Contact us" siteName="Contact" />
      <main className={style.main}>
        <div className={style.mainbody}>
          <div id="both">
          <section className={style.csection}>
            <div className="container">
              <div className="d-none d-sm-block mb-5 pb-4"></div>
              <div className="row">
                <div className="col-12"></div>
                <div className={`col-lg-8 ${style.flexx}`}>
                  <div className={`${style.offsetlg} col-lg-3 bg-slate-100`}>
                    <div className={`${style.contactinfo} media`}>
                      <div className={style.media_head}>
                        <h3>Contact Information</h3>
                      </div>
                    </div>
                    <div class={style.centerr}>
                      <div className={`${style.contactinfo} media`}>
                        <span className={style.contactinfo__icon}>
                          <i className="ti-home" />
                        </span>
                        <div className={style.media_body}>
                          <h3>Kishanpur</h3>
                          <p>Aligarh, Uttar Pradesh</p>
                        </div>
                      </div>
                      <div className={`${style.contactinfo} media`}>
                        <span className={style.contactinfo__icon}>
                          <i className="ti-tablet" />
                        </span>
                        <div className={style.media_body}>
                          <h3>9368086395</h3>
                          <p>Mon to Fri 9am to 6pm</p>
                        </div>
                      </div>
                      <div className={`${style.contactinfo} media`}>
                        <span className={style.contactinfo__icon}>
                          <i className="ti-email" />
                        </span>
                        <div className={style.media_body}>
                          <h3>contact.grabtern@gmail.com</h3>
                          <p>Send us your query anytime!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <form
                    className="form-contact contact_form"
                    id="contactForm"
                    ref={form}
                    method="post"
                  >
                    <ToastContainer limit={1} />
                    <div className={`${style.cf} row`}>
                      <h2 className={style.ctitle}>Get in Touch</h2>
                      <div className="col-12">
                        <div className={style.fgroup}>
                          <textarea
                            className={'form-control w-100'}
                            name="message"
                            id="message"
                            cols={30}
                            rows={5}
                            onfocus="this.placeholder = ''"
                            onblur="this.placeholder = 'Enter Message'"
                            placeholder=" Enter Message"
                            required
                            value={values.message}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            style={{
                              padding: '10px',
                              fontSize: '16px',
                              borderRadius: '5px',
                              border: '2px solid #e5e7eb',
                              outline: 'none',
                              resize: 'vertical',
                            }}
                          // value={userMessage}
                          // onChange={(e) => setUserMessage(e.value)}
                          />
                        </div>
                      </div>
                      {
                        //(errors.message!=='')?showToast(errors.message):errors.message=''
                      }
                      <div className="col-sm-6">
                        <div className={style.fgroup}>
                          <input
                            className={"form-control valid"}
                            name="name"
                            id="name"
                            type="text"
                            onfocus="this.placeholder = ''"
                            onblur="this.placeholder = 'Enter your name'"
                            placeholder="Enter your name"
                            required
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            style={{
                              padding: '10px',
                              fontSize: '16px',
                              borderRadius: '5px',
                              border: '2px solid #e5e7eb',
                              outline: 'none',


                            }}
                          // onChange={(e) => setUserName(e.value)}
                          />
                        </div>
                      </div>

                      { //(errors.name!=='')?showToast(errors.name):errors.name=''

                      }
                      <div className="col-sm-6">
                        <div className={style.fgroup}>
                          <input
                            className={"form-control valid"}
                            name="email"
                            id="email"
                            type="email"
                            onfocus="this.placeholder = ''"
                            onblur="this.placeholder = 'Enter email address'"
                            placeholder="Email"
                            required
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            style={{
                              padding: '10px',
                              fontSize: '16px',
                              borderRadius: '5px',
                              border: '2px solid #e5e7eb',
                              outline: 'none',


                            }}
                          // value={userEmail}
                          // onChange={(e) => setUserEmail(e.value)}
                          />
                        </div>

                      </div>
                      {
                        //(errors.email!=='')?showToast(errors.email):errors.email=''
                      }
                      <div className="col-12">
                        <div className={style.fgroup}>
                          <input
                            className={"form-control valid"}
                            name="subject"
                            id="subject"
                            type="text"
                            onfocus="this.placeholder = ''"
                            onblur="this.placeholder = 'Enter Subject'"
                            placeholder="Enter Subject"
                            required
                            value={values.subject}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            style={{
                              padding: '10px',
                              fontSize: '16px',
                              borderRadius: '5px',
                              border: '2px solid #e5e7eb',
                              outline: 'none',


                            }}

                          // value={userSubject}
                          // onChange={(e) => setUserSubject(e.value)}
                          />
                        </div>

                      </div>
                      {
                        //(errors.subject!=='')?showToast(errors.subject):errors.subject=''
                      }
                      <div>
                        <button type="button"
                          class="md:tw-w-auto tw-h-16 tw-text-white tw-bg-[#845ec2] tw-border-0 tw-py-2 tw-px-6 focus:tw-outline-none hover:tw-bg-[#6b21a8] tw-rounded-lg tw-font-semibold"
                          onClick={sendEmail}
                          style={{
                            padding: '5px 15px',
                            width: '100px',
                            marginLeft: "17px"
                          }}

                          onMouseEnter={(e) => (e.target.style.color = 'whitesmoke')}
                          onMouseLeave={(e) => (e.target.style.color = '#fff')}>
                          Send
                        </button>

                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

const PASSWORD = "!@SayyidMuhammad878@!";

export default Contact;
