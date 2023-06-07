import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import dynamic from "next/dynamic";
import style from "../styles/contact.module.css";

const Footer = dynamic(() => import("../components/Footer"));
const Header = dynamic(() => import("../components/Header"));
const SimpleBanner = dynamic(() => import("../components/SimpleBanner"));

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    const templateParams = {
      from_name: document.querySelector("#name").value,
      to_name: document.querySelector("#email").value,
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
          alert("Sent!");
          console.log(result.text);
        },
        (error) => {
          alert("Cannot send your message sorry!");
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <Header />
      <SimpleBanner bannerTittle="Contact us" siteName="Contact" />
      <main className={style.main}>
        <div className={style.mainbody}>
          <section className={style.csection}>
            <div className="container">
              <div className="d-none d-sm-block mb-5 pb-4"></div>
              <div className="row">
                <div className="col-12"></div>
                <div className={`col-lg-8 ${style.flexx}`}>
                  <div className={`${style.offsetlg} col-lg-3`}>
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
                    onSubmit={sendEmail}
                  >
                    <div className={`${style.cf} row`}>
                      <h2 className={style.ctitle}>Get in Touch</h2>

                      <div className="col-12">
                        <div className={style.fgroup}>
                          <textarea
                            className="form-control w-100"
                            name="message"
                            id="message"
                            cols={30}
                            rows={9}
                            onfocus="this.placeholder = ''"
                            onblur="this.placeholder = 'Enter Message'"
                            placeholder=" Enter Message"
                            // value={userMessage}
                            // onChange={(e) => setUserMessage(e.value)}
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className={style.fgroup}>
                          <input
                            className="form-control valid"
                            name="name"
                            id="name"
                            type="text"
                            onfocus="this.placeholder = ''"
                            onblur="this.placeholder = 'Enter your name'"
                            placeholder="Enter your name"
                            // value={userName}
                            // onChange={(e) => setUserName(e.value)}
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className={style.fgroup}>
                          <input
                            className="form-control valid"
                            name="email"
                            id="email"
                            type="email"
                            onfocus="this.placeholder = ''"
                            onblur="this.placeholder = 'Enter email address'"
                            placeholder="Email"
                            // value={userEmail}
                            // onChange={(e) => setUserEmail(e.value)}
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className={style.fgroup}>
                          <input
                            className="form-control"
                            name="subject"
                            id="subject"
                            type="text"
                            onfocus="this.placeholder = ''"
                            onblur="this.placeholder = 'Enter Subject'"
                            placeholder="Enter Subject"
                            // value={userSubject}
                            // onChange={(e) => setUserSubject(e.value)}
                          />
                        </div>
                      </div>
                      <div>
                        <button type="submit" className={style.boxedbtn}>
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
      </main>
      <Footer />
    </>
  );
}

const PASSWORD = "!@SayyidMuhammad878@!";

export default Contact;
