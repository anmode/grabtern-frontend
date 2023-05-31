import React from "react";
import dynamic from "next/dynamic";
import Header from "../components/Header";
const Footer = dynamic(() => import("../components/Footer"));
function privacy() {
  return (
    <>
      <Header navbarBackground={true} />
      <div className="TNCcontainer">
        <div className="front">
          <div
            className="tnc"
            id="tncheading"
            style={{ textAlign: "center", fontSize: 45, lineHeight: "1.5" }}
          >
            PRIVACY POLICY
          </div>
          <div className="maincontent" style={{ display: "inline-block" }}>
            {" "}
            This privacy notice for Grabtern ("
            <b>Company," "we," "us," or "our"</b>), describes how and why we
            might collect, store, use, and/or share ("<b>Process</b>") your
            information when you use our services ("<b>Services</b>"), such as
            when you: Visit our website at{" "}
            <a href="https://www.grabtern.com">https://www.grabtern.com</a>, or
            any website of ours that links to this privacy notice Engage with us
            in other related ways, including any sales, marketing, or events.
            <b></b>
            <b>Questions or concerns?</b> Reading this privacy notice will help
            you understand your privacy rights and choices. If you do not agree
            with our policies and practices, please do not use our Services. If
            you still have any questions or concerns, please contact us at
            contact.grabtern@gmail.com.
            <br></br>
            <br></br>
            <div className="tnc" id="toc">
              <h1>SUMMARY OF KEY POINTS</h1>
            </div>
            This summary provides key points from our privacy notice, but you
            can find out more details about any of these topics by clicking the
            link following each key point or by using our{" "}
            <a href="#toc">table of contents</a> below to find the section you
            are looking for.<br></br>
            What personal information do we process? When you visit, use, or
            navigate our Services, we may process personal information depending
            on how you interact with Grabtern and the Services, the choices you
            make, and the products and features you use.{" "}
            <a href="#1">
              Learn more about personal information you disclose to us.
            </a>
            <br></br>
            Do we process any sensitive personal information? We do not process
            sensitive personal information.
            <br></br>
            Do we receive any information from third parties? We do not receive
            any information from third parties.
            <br></br>
            How do we process your information? We process your information to
            provide, improve, and administer our Services, communicate with you,
            for security and fraud prevention, and to comply with law. We may
            also process your information for other purposes with your consent.
            We process your information only when we have a valid legal reason
            to do so.{" "}
            <a href="#2">Learn more about how we process your information.</a>
            <br></br>
            In what situations and with which parties do we share personal
            information? We may share information in specific situations and
            with specific third parties.{" "}
            <a href="#3">
              Learn more about when and with whom we share your personal
              information.
            </a>
            <br></br>
            How do we keep your information safe? We have organizational and
            technical processes and procedures in place to protect your personal
            information. However, no electronic transmission over the internet
            or information storage technology can be guaranteed to be 100%
            secure, so we cannot promise or guarantee that hackers,
            cybercriminals, or other unauthorized third parties will not be able
            to defeat our security and improperly collect, access, steal, or
            modify your information.{" "}
            <a href="#8">Learn more about how we keep your information safe.</a>
            <br></br>
            What are your rights? Depending on where you are located
            geographically, the applicable privacy law may mean you have certain
            rights regarding your personal information.{" "}
            <a href="#8">Learn more about your privacy rights.</a>
            <br id="1"></br>
            How do you exercise your rights? The easiest way to exercise your
            rights is by submitting a{" "}
            <a href="https://app.termly.io/notify/c64101d9-760d-43fe-89df-0884d72c12d9">
              data subject access request
            </a>
            , or by contacting us. We will consider and act upon any request in
            accordance with applicable data protection laws.
            <br></br>
            Want to learn more about what Grabtern does with any information we
            collect?{" "}
            <a href="#tncheading">Review the privacy notice in full.</a>
          </div>
          <div className="tableofcontents">
            <div className="tnc" id="toc">
              <h1>TABLE OF CONTENTS</h1>
            </div>
            <div style={{ paddingRight: 10, paddingTop: 10 }}>
              <div>
                <a href="#1">1. WHAT INFORMATION DO WE COLLECT?</a>
              </div>
              <div>
                <a href="#2">2. HOW DO WE PROCESS YOUR INFORMATION?</a>
              </div>
              <div>
                <a href="#3">
                  3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
                </a>
              </div>
              <div>
                <a href="#4">
                  4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
                </a>
              </div>
              <div>
                <a href="#5">5. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</a>
              </div>
              <div>
                <a href="#6">6. HOW LONG DO WE KEEP YOUR INFORMATION?</a>
              </div>
              <div>
                <a href="#7">7. HOW DO WE KEEP YOUR INFORMATION SAFE?</a>
              </div>
              <div>
                <a href="#8">8. WHAT ARE YOUR PRIVACY RIGHTS?</a>
              </div>
              <div>
                <a href="#9">9. CONTROLS FOR DO-NOT-TRACK FEATURES</a>
              </div>
              <div>
                <a href="#10">
                  10. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
                </a>
              </div>
              <div>
                <a href="#11">11. DO WE MAKE UPDATES TO THIS NOTICE?</a>
              </div>
              <div>
                <a href="#12">12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a>
              </div>
              <div>
                <a href="#13">
                  13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT
                  FROM YOU?
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="terms-and-cond" style={{ marginTop: 45 }}>
          <div className="terms-and-cond-sub">
            <div className="tnc-sub-head">
              1. WHAT INFORMATION DO WE COLLECT?
            </div>
            Personal information you disclose to us
            <br></br>
            <b>In Short: </b> We collect personal information that you provide
            to us. We collect personal information that you voluntarily provide
            to us when you register on the Services, express an interest in
            obtaining information about us or our products and Services, when
            you participate in activities on the Services, or otherwise when you
            contact us.
            <b>Personal Information Provided by You: </b> The personal
            information that we collect depends on the context of your
            interactions with us and the Services, the choices you make, and the
            products and features you use. The personal information we collect
            may include the following:<br></br>
            1. Phone numbers<br></br>
            2. Job titles<br></br>
            3. Mailing addresses<br></br>
            4. Email addresses<br></br>
            5. Usernames<br></br>
            6. Passwords<br></br>
            7. Contact or authentication data<br></br>
            8. Contact preferences<br></br>
            9. Billing addresses<br></br>
            10. Upi address if mentor<br></br>
            <b>Sensitive Information: </b> We do not process sensitive
            information.
            <br id="2"></br>
            <b>Social Media Login Data: </b> We may provide you with the option
            to register with us using your existing social media account
            details, like your Facebook, Twitter, or other social media account.
            If you choose to register in this way, we will collect the
            information described in the section called "
            <a href="#5">HOW DO WE HANDLE YOUR SOCIAL LOGINS?</a>" below.
            <br></br>
            All personal information that you provide to us must be true,
            complete, and accurate, and you must notify us of any changes to
            such personal information.
          </div>
          <div className="terms-and-cond-sub">
            <div className="tnc-sub-head">
              2. HOW DO WE PROCESS YOUR INFORMATION?
            </div>
            <b>In Short:</b> We process your information to provide, improve,
            and administer our Services, communicate with you, for security and
            fraud prevention, and to comply with law. We may also process your
            information for other purposes with your consent.
            <br></br>
            <b>
              We process your personal information for a variety of reasons,
              depending on how you interact with our Services, including:
            </b>
            <br></br>
            <b>
              To facilitate account creation and authentication and otherwise
              manage user accounts.
            </b>{" "}
            We may process your information so you can create and log in to your
            account, as well as keep your account in working order.
            <br></br>
            <b>To send administrative information to you.</b> We may process
            your information to send you details about our products and
            services, changes to our terms and policies, and other similar
            information.
            <br id="3"></br>
            <b>To enable user-to-user communications.</b> We may process your
            information if you choose to use any of our offerings that allow for
            communication with another user.
            <br></br>
            <b>To request feedback.</b> We may process your information when
            necessary to request feedback and to contact you about your use of
            our Services.
            <br></br>
            <b>To send you marketing and promotional communications.</b> We may
            process the personal information you send to us for our marketing
            purposes, if this is in accordance with your marketing preferences.
            You can opt out of our marketing emails at any time. For more
            information, see "<a href="#8">WHAT ARE YOUR PRIVACY RIGHTS?</a>"
            below.
            <br></br>
            <b>To post testimonials.</b> We post testimonials on our Services
            that may contain personal information.
            <br id="4"></br>
            <b>
              To evaluate and improve our Services, products, marketing, and
              your experience.
            </b>{" "}
            We may process your information when we believe it is necessary to
            identify usage trends, determine the effectiveness of our
            promotional campaigns, and to evaluate and improve our Services,
            products, marketing, and your experience.
          </div>
          <div className="terms-and-cond-sub">
            <div className="tnc-sub-head">
              3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
            </div>
            <b>In Short: </b>We may share information in specific situations
            described in this section and/or with the following third parties.
            <br id="5"></br>
            We may need to share your personal information in the following
            situations:<br></br>
            <b>Business Transfers. </b>We may share or transfer your information
            in connection with, or during negotiations of, any merger, sale of
            company assets, financing, or acquisition of all or a portion of our
            business to another company.
          </div>
          <div className="terms-and-cond-sub">
            <div className="tnc-sub-head">
              4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
            </div>
            <b>In Short: </b>We may use cookies and other tracking technologies
            to collect and store your information.
            <br></br>
            We may use cookies and similar tracking technologies (like web
            beacons and pixels) to access or store information. Specific
            information about how we use such technologies and how you can
            refuse certain cookies is set out in our Cookie Notice.
          </div>
          <div className="terms-and-cond-sub">
            <div className="tnc-sub-head">
              5. HOW DO WE HANDLE YOUR SOCIAL LOGINS?
            </div>
            <b>In Short: </b>If you choose to register or log in to our Services
            using a social media account, we may have access to certain
            information about you.
            <br id="6"></br>
            Our Services offer you the ability to register and log in using your
            third-party social media account details (like your Facebook or
            Twitter logins). Where you choose to do this, we will receive
            certain profile information about you from your social media
            provider. The profile information we receive may vary depending on
            the social media provider concerned, but will often include your
            name, email address, friends list, and profile picture, as well as
            other information you choose to make public on such a social media
            platform.
            <br></br>
            We will use the information we receive only for the purposes that
            are described in this privacy notice or that are otherwise made
            clear to you on the relevant Services. Please note that we do not
            control, and are not responsible for, other uses of your personal
            information by your third-party social media provider. We recommend
            that you review their privacy notice to understand how they collect,
            use, and share your personal information, and how you can set your
            privacy preferences on their sites and apps.
          </div>
          <div className="terms-and-cond-sub">
            <div className="tnc-sub-head">
              6. HOW LONG DO WE KEEP YOUR INFORMATION?
            </div>
            <b id="7">In Short: </b>We keep your information for as long as
            necessary to fulfill the purposes outlined in this privacy notice
            unless otherwise required by law.
            <br></br>
            We will only keep your personal information for as long as it is
            necessary for the purposes set out in this privacy notice, unless a
            longer retention period is required or permitted by law (such as
            tax, accounting, or other legal requirements). No purpose in this
            notice will require us keeping your personal information for longer
            than the period of time in which users have an account with us.
            <br></br>
            When we have no ongoing legitimate business need to process your
            personal information, we will either delete or anonymize such
            information, or, if this is not possible (for example, because your
            personal information has been stored in backup archives), then we
            will securely store your personal information and isolate it from
            any further processing until deletion is possible.
          </div>
          <div className="terms-and-cond-sub">
            <div className="tnc-sub-head">
              7. HOW DO WE KEEP YOUR INFORMATION SAFE?
            </div>
            <b id="8">In Short: </b>We aim to protect your personal information
            through a system of organizational and technical security measures.
            <br></br>
            We have implemented appropriate and reasonable technical and
            organizational security measures designed to protect the security of
            any personal information we process. However, despite our safeguards
            and efforts to secure your information, no electronic transmission
            over the Internet or information storage technology can be
            guaranteed to be 100% secure, so we cannot promise or guarantee that
            hackers, cybercriminals, or other unauthorized third parties will
            not be able to defeat our security and improperly collect, access,
            steal, or modify your information. Although we will do our best to
            protect your personal information, transmission of personal
            information to and from our Services is at your own risk. You should
            only access the Services within a secure environment.
          </div>
          <div className="terms-and-cond-sub">
            <div className="tnc-sub-head">8. WHAT ARE YOUR PRIVACY RIGHTS?</div>
            <b>In Short: </b>You may review, change, or terminate your account
            at any time.
            <br></br>
            If you are located in the EEA or UK and you believe we are
            unlawfully processing your personal information, you also have the
            right to complain to your Member State data protection authority or
            UK data protection authority.
            <br></br>
            If you are located in Switzerland, you may contact the{" "}
            <a href="https://www.edoeb.admin.ch/edoeb/en/home.html">
              Federal Data Protection and Information Commissioner.
            </a>
            <br></br>
            <b>Withdrawing your consent: </b>If we are relying on your consent
            to process your personal information, which may be express and/or
            implied consent depending on the applicable law, you have the right
            to withdraw your consent at any time. You can withdraw your consent
            at any time by contacting us by using the contact details provided
            in the section "
            <a href="#12">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a>" below.
            <br></br>
            However, please note that this will not affect the lawfulness of the
            processing before its withdrawal nor, when applicable law allows,
            will it affect the processing of your personal information conducted
            in reliance on lawful processing grounds other than consent.
            <br></br>
            <b>Account Information</b>
            <br></br>
            <br></br>If you would at any time like to review or change the
            information in your account or terminate your account, you can:
            <br></br>1. Log in to your account settings and update your user
            account.
            <br></br>2. Contact us using the contact information provided.
            <br id="9"></br>3. Upon your request to terminate your account, we
            will deactivate or delete your account and information from our
            active databases. However, we may retain some information in our
            files to prevent fraud, troubleshoot problems, assist with any
            investigations, enforce our legal terms and/or comply with
            applicable legal requirements.
            <br></br>
            Cookies and similar technologies: Most Web browsers are set to
            accept cookies by default. If you prefer, you can usually choose to
            set your browser to remove cookies and to reject cookies. If you
            choose to remove cookies or reject cookies, this could affect
            certain features or services of our Services. You may also{" "}
            <a href="https://optout.aboutads.info/?c=2&lang=EN">
              opt out of interest-based advertising
            </a>{" "}
            by advertisers on our Services.
            <br id="10"></br>
            If you have questions or comments about your privacy rights, you may
            email us at contact.grabtern@gmail.com.
          </div>
          <div className="terms-and-cond-sub">
            <div className="tnc-sub-head">
              9. CONTROLS FOR DO-NOT-TRACK FEATURES
            </div>
            Most web browsers and some mobile operating systems and mobile
            applications include a Do-Not-Track ("DNT") feature or setting you
            can activate to signal your privacy preference not to have data
            about your online browsing activities monitored and collected. At
            this stage no uniform technology standard for recognizing and
            implementing DNT signals has been finalized. As such, we do not
            currently respond to DNT browser signals or any other mechanism that
            automatically communicates your choice not to be tracked online. If
            a standard for online tracking is adopted that we must follow in the
            future, we will inform you about that practice in a revised version
            of this privacy notice.
          </div>
          <div className="terms-and-cond-sub">
            <div className="tnc-sub-head">
              10. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
            </div>
            <b>In Short: </b>Yes, if you are a resident of California, you are
            granted specific rights regarding access to your personal
            information.
            <br id="11"></br>
            California Civil Code Section 1798.83, also known as the "Shine The
            Light" law, permits our users who are California residents to
            request and obtain from us, once a year and free of charge,
            information about categories of personal information (if any) we
            disclosed to third parties for direct marketing purposes and the
            names and addresses of all third parties with which we shared
            personal information in the immediately preceding calendar year. If
            you are a California resident and would like to make such a request,
            please submit your request in writing to us using the contact
            information provided below.
            <br></br>
            If you are under 18 years of age, reside in California, and have a
            registered account with Services, you have the right to request
            removal of unwanted data that you publicly post on the Services. To
            request removal of such data, please contact us using the contact
            information provided below and include the email address associated
            with your account and a statement that you reside in California. We
            will make sure the data is not publicly displayed on the Services,
            but please be aware that the data may not be completely or
            comprehensively removed from all our systems (e.g., backups, etc.).
          </div>
          <div className="terms-and-cond-sub">
            <div className="tnc-sub-head" id="12">
              11. DO WE MAKE UPDATES TO THIS NOTICE?
            </div>
            <b>In Short: </b>Yes, we will update this notice as necessary to
            stay compliant with relevant laws. We may update this privacy notice
            from time to time. The updated version will be indicated by an
            updated "Revised" date and the updated version will be effective as
            soon as it is accessible. If we make material changes to this
            privacy notice, we may notify you either by prominently posting a
            notice of such changes or by directly sending you a notification. We
            encourage you to review this privacy notice frequently to be
            informed of how we are protecting your information.
          </div>
          <div className="terms-and-cond-sub" id="13">
            <div className="tnc-sub-head">
              12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
            </div>
            If you have questions or comments about this notice, you may email
            us at contact.grabtern@gmail.com or by post to:<br></br>
            Grabtern<br></br>
            Naval Nagar hathras<br></br>
            Hathras, Uttar pradesh 204101<br></br>
            India<br></br>
          </div>
          <div className="terms-and-cond-sub">
            <div className="tnc-sub-head">
              13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM
              YOU?
            </div>
            Based on the applicable laws of your country, you may have the right
            to request access to the personal information we collect from you,
            change that information, or delete it. To request to review, update,
            or delete your personal information, please fill out and submit a{" "}
            <a href="https://app.termly.io/notify/c64101d9-760d-43fe-89df-0884d72c12d9">
              data subject access request
            </a>
            .<br></br>This privacy policy was created using Termly's Privacy
            Policy Generator.
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default privacy;
