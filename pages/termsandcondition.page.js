import React from "react";
import dynamic from "next/dynamic";
import Header from "../components/Header";
import ScrollToTop from "../components/ScrollToTop";
function scrap() {
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
            TERMS AND CONDITIONS
          </div>
          <div className="tnc" id="tncheading2">
            AGREEMENT TO OUR LEGAL TERMS
          </div>
          <div className="maincontent" style={{ display: "inline-block" }}>
            {" "}
            We are Grabtern, doing business as Grabtern (
            <b>"Company," "we," "us," "our"</b>), a company registered in India
            at Kishanpur tirah, Aligarh, Aligarh, Uttar Pradesh 202002. We
            operate the website https://www.grabtern.com/ (the "<b>Site</b>"),
            as well as any other related products and services that refer or
            link to these legal terms (the "<b>Legal Terms</b>") (collectively,
            the "<b>Services</b>"). In our platform, we connect former Mentors
            to student seeking for mentorship and mentor charge for providing
            mentorship and we take 11% of that. Alright, to clarify, there is no
            fixed price for the bookSession. Each mentor can set the price as
            per their own wish. However, we have set a minimum price of Rs. 51
            for each session. You can contact us by phone at 9368086395, email
            at contact.grabtern@gmail.com, or by mail to Naval Nagar hathras,
            Hathras, Uttar pradesh 204101, India. These Legal Terms constitute a
            legally binding agreement made between you, whether personally or on
            behalf of an entity ("<b>you</b>"), and Grabtern, concerning your
            access to and use of the Services. You agree that by accessing the
            Services, you have read, understood, and agreed to be bound by all
            of these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL
            TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND
            YOU MUST DISCONTINUE USE IMMEDIATELY. We will provide you with prior
            notice of any scheduled changes to the Services you are using. The
            modified Legal Terms will become effective upon posting or notifying
            you by contact.grabtern@gmail.com, as stated in the email message.
            By continuing to use the Services after the effective date of any
            changes, you agree to be bound by the modified terms. The Services
            are intended for users who are at least 13 years of age. All users
            who are minors in the jurisdiction in which they reside (generally
            under the age of 18) must have the permission of, and be directly
            supervised by, their parent or guardian to use the Services. If you
            are a minor, you must have your parent or guardian read and agree to
            these Legal Terms prior to you using the Services.
            <br></br>
            <br></br>
            We recommend that you print a copy of these Legal Terms for your
            records.
          </div>
          <div className="tableofcontents">
            <div className="tnc" id="toc">
              <h1>TABLE OF CONTENTS</h1>
            </div>
            <div style={{ paddingRight: 10, paddingTop: 10 }}>
              <div>
                <a href="#1">1. OUR SERVICES</a>
              </div>
              <div>
                <a href="#2">2. INTELLECTUAL PROPERTY RIGHTS</a>
              </div>
              <div>
                <a href="#3">3. USER REPRESENTATIONS</a>
              </div>
              <div>
                <a href="#4">4. USER REGISTRATION</a>
              </div>
              <div>
                <a href="#5">5. PROHIBITED ACTIVITIES</a>
              </div>
              <div>
                <a href="#6">6. USER GENERATED CONTRIBUTIONS</a>
              </div>
              <div>
                <a href="#7">7. CONTRIBUTION LICENSE</a>
              </div>
              <div>
                <a href="#8">8. SOCIAL MEDIA</a>
              </div>
              <div>
                <a href="#9">9. SERVICES MANAGEMENT</a>
              </div>
              <div>
                <a href="#10">10. PRIVACY POLICY</a>
              </div>
              <div>
                <a href="#11">11. COPYRIGHT INFRINGEMENTS</a>
              </div>
              <div>
                <a href="#12">12. TERM AND TERMINATION</a>
              </div>
              <div>
                <a href="#13">13. MODIFICATIONS AND INTERRUPTIONS</a>
              </div>
              <div>
                <a href="#14">14. GOVERNING LAW</a>
              </div>
              <div>
                <a href="#15">15. DISPUTE RESOLUTION</a>
              </div>
              <div>
                <a href="#16">16. CORRECTIONS</a>
              </div>
              <div>
                <a href="#17">17. DISCLAIMER</a>
              </div>
              <div>
                <a href="#18">18. LIMITATIONS OF LIABILITY</a>
              </div>
              <div>
                <a href="#19">19. INDEMNIFICATION</a>
              </div>
              <div>
                <a href="#20">20. USER DATA</a>
              </div>
              <div>
                <a href="#21" id="1">
                  21. ELECTRONIC COMMUNICATIONS, <br></br>TRANSACTIONS, AND
                  SIGNATURES
                </a>
              </div>
              <div>
                <a href="#22">22. MISCELLANEOUS</a>
              </div>
              <div>
                <a href="#23">23. CONTACT US</a>
              </div>
            </div>
          </div>
        </div>
        <div className="terms-and-cond" id="2" style={{ marginTop: 45 }}>
          <div className="terms-and-cond-sub">
            <div className="tnc-sub-head">1. OUR SERVICES</div>
            The information provided when using the Services is not intended for
            distribution to or use by any person or entity in any jurisdiction
            or country where such distribution or use would be contrary to law
            or regulation or which would subject us to any registration
            requirement within such jurisdiction or country. Accordingly, those
            persons who choose to access the Services from other locations do so
            on their own initiative and are solely responsible for compliance
            with local laws, if and to the extent local laws are applicable.
          </div>
          <div className="terms-and-cond-sub">
            <div className="tnc-sub-head">2. INTELLECTUAL PROPERTY RIGHTS</div>
            <strong>Our intellectual property</strong>
            <br></br>
            We are the owner or the licensee of all intellectual property rights
            in our Services, including all source code, databases,
            functionality, software, website designs, audio, video, text,
            photographs, and graphics in the Services (collectively, the
            "Content"), as well as the trademarks, service marks, and logos
            contained therein (the "Marks"). Our Content and Marks are protected
            by copyright and trademark laws (and various other intellectual
            property rights and unfair competition laws) and treaties in the
            United States and around the world. The Content and Marks are
            provided in or through the Services "AS IS" for your personal,
            non-commercial use or internal business purpose only.<br></br>
            <strong>Your use of our Services</strong>
            <br></br>
            Subject to your compliance with these Legal Terms, including the
            "PROHIBITED ACTIVITIES" section below, we grant you a non-exclusive,
            non-transferable, revocable license to: access the Services; and
            download or print a copy of any portion of the Content to which you
            have properly gained access. solely for your personal,
            non-commercial use or internal business purpose. Except as set out
            in this section or elsewhere in our Legal Terms, no part of the
            Services and no Content or Marks may be copied, reproduced,
            aggregated, republished, uploaded, posted, publicly displayed,
            encoded, translated, transmitted, distributed, sold, licensed, or
            otherwise exploited for any commercial purpose whatsoever, without
            our express prior written permission. If you wish to make any use of
            the Services, Content, or Marks other than as set out in this
            section or elsewhere in our Legal Terms, please address your request
            to: contact.grabtern@gmail.com. If we ever grant you the permission
            to post, reproduce, or publicly display any part of our Services or
            Content, you must identify us as the owners or licensors of the
            Services, Content, or Marks and ensure that any copyright or
            proprietary notice appears or is visible on posting, reproducing, or
            displaying our Content. We reserve all rights not expressly granted
            to you in and to the Services, Content, and Marks. Any breach of
            these Intellectual Property Rights will constitute a material breach
            of our Legal Terms and your right to use our Services will terminate
            immediately.
            <br></br>
            <strong>Your submissions and contributions</strong>
            <br></br>
            Please review this section and the "PROHIBITED ACTIVITIES" section
            carefully prior to using our Services to understand the (a) rights
            you give us and (b) obligations you have when you post or upload any
            content through the Services.
            <br></br>
            <strong>Submissions: </strong>By directly sending us any question,
            comment, suggestion, idea, feedback, or other information about the
            Services ("Submissions"), you agree to assign to us all intellectual
            property rights in such Submission. You agree that we shall own this
            Submission and be entitled to its unrestricted use and dissemination
            for any lawful purpose, commercial or otherwise, without
            acknowledgment or compensation to you.
            <br></br>
            <strong>Contributions: </strong>The Services may invite you to chat,
            contribute to, or participate in blogs, message boards, online
            forums, and other functionality during which you may create, submit,
            post, display, transmit, publish, distribute, or broadcast content
            and materials to us or through the Services, including but not
            limited to text, writings, video, audio, photographs, music,
            graphics, comments, reviews, rating suggestions, personal
            information, or other material ("Contributions"). Any Submission
            that is publicly posted shall also be treated as a Contribution. You
            understand that Contributions may be viewable by other users of the
            Services.
            <br></br>
            <strong>
              When you post Contributions, you grant us a license (including use
              of your name, trademarks, and logos):{" "}
            </strong>
            By posting any Contributions, you grant us an unrestricted,
            unlimited, irrevocable, perpetual, non-exclusive, transferable,
            royalty-free, fully-paid, worldwide right, and license to: use,
            copy, reproduce, distribute, sell, resell, publish, broadcast,
            retitle, store, publicly perform, publicly display, reformat,
            translate, excerpt (in whole or in part), and exploit your
            Contributions (including, without limitation, your image, name, and
            voice) for any purpose, commercial, advertising, or otherwise, to
            prepare derivative works of, or incorporate into other works, your
            Contributions, and to sublicense the licenses granted in this
            section. Our use and distribution may occur in any media formats and
            through any media channels. This license includes our use of your
            name, company name, and franchise name, as applicable, and any of
            the trademarks, service marks, trade names, logos, and personal and
            commercial images you provide.
            <br></br>
            <strong>You are responsible for what you post or upload: </strong>By
            sending us Submissions and/or posting Contributions through any part
            of the Services or making Contributions accessible through the
            Services by linking your account through the Services to any of your
            social networking accounts, you: confirm that you have read and
            agree with our "PROHIBITED ACTIVITIES" and will not post, send,
            publish, upload, or transmit through the Services any Submission nor
            post any Contribution that is illegal, harassing, hateful, harmful,
            defamatory, obscene, bullying, abusive, discriminatory, threatening
            to any person or group, sexually explicit, false, inaccurate,
            deceitful, or misleading; to the extent permissible by applicable
            law, waive any and all moral rights to any such Submission and/or
            Contribution; warrant that any such Submission and/or Contributions
            are original to you or that you have the necessary rights and
            licenses to submit such Submissions and/or Contributions and that
            you have full authority to grant us the above-mentioned rights in
            relation to your Submissions and/or Contributions; and warrant and
            represent that your Submissions and/or Contributions do not
            constitute confidential information. You are solely responsible for
            your Submissions and/or Contributions and you expressly agree to
            reimburse us for any and all losses that we may suffer because of
            your breach of (a) this section, (b) any third party’s intellectual
            property rights, or (c) applicable law.
            <br id="3"></br>
            <strong>We may remove or edit your Content: </strong>Although we
            have no obligation to monitor any Contributions, we shall have the
            right to remove or edit any Contributions at any time without notice
            if in our reasonable opinion we consider such Contributions harmful
            or in breach of these Legal Terms. If we remove or edit any such
            Contributions, we may also suspend or disable your account and
            report you to the authorities.
            <br></br>
            <strong>Copyright infringement</strong>
            We respect the intellectual property rights of others. If you
            believe that any material available on or through the Services
            infringes upon any copyright you own or control, please immediately
            refer to the "COPYRIGHT INFRINGEMENTS" section below.
          </div>
          <div className="terms-and-cond-sub" id="4">
            <div className="tnc-sub-head">3. USER REPRESENTATIONS</div>
            By using the Services, you represent and warrant that: (1) all
            registration information you submit will be true, accurate, current,
            and complete; (2) you will maintain the accuracy of such information
            and promptly update such registration information as necessary; (3)
            you have the legal capacity and you agree to comply with these Legal
            Terms; (4) you are not under the age of 13; (5) you are not a minor
            in the jurisdiction in which you reside, or if a minor, you have
            received parental permission to use the Services; (6) you will not
            access the Services through automated or non-human means, whether
            through a bot, script or otherwise; (7) you will not use the
            Services for any illegal or unauthorized purpose; and (8) your use
            of the Services will not violate any applicable law or regulation.
            If you provide any information that is untrue, inaccurate, not
            current, or incomplete, we have the right to suspend or terminate
            your account and refuse any and all current or future use of the
            Services (or any portion thereof).
          </div>
          <div className="terms-and-cond-sub">
            <div className="tnc-sub-head" id="5">
              4. USER REGISTRATION
            </div>
            You may be required to register to use the Services. You agree to
            keep your password confidential and will be responsible for all use
            of your account and password. We reserve the right to remove,
            reclaim, or change a username you select if we determine, in our
            sole discretion, that such username is inappropriate, obscene, or
            otherwise objectionable.
          </div>
          <div className="terms-and-cond-sub">
            <div className="tnc-sub-head">5. PROHIBITED ACTIVITIES</div>
            You may not access or use the Services for any purpose other than
            that for which we make the Services available. The Services may not
            be used in connection with any commercial endeavors except those
            that are specifically endorsed or approved by us.
            <br></br>
            As a user of the Services, you agree not to:<br></br>
            1. Systematically retrieve data or other content from the Services
            to create or compile, directly or indirectly, a collection,
            compilation, database, or directory without written permission from
            us.
            <br></br>2. Trick, defraud, or mislead us and other users,
            especially in any attempt to learn sensitive account information
            such as user passwords.
            <br></br>3. Circumvent, disable, or otherwise interfere with
            security-related features of the Services, including features that
            prevent or restrict the use or copying of any Content or enforce
            limitations on the use of the Services and/or the Content contained
            therein.
            <br></br>4. Disparage, tarnish, or otherwise harm, in our opinion,
            us and/or the Services.
            <br></br>5. Use any information obtained from the Services in order
            to harass, abuse, or harm another person.
            <br></br>6. Make improper use of our support services or submit
            false reports of abuse or misconduct.
            <br></br>7. Use the Services in a manner inconsistent with any
            applicable laws or regulations.
            <br></br>8. Engage in unauthorized framing of or linking to the
            Services.
            <br></br>9. Upload or transmit (or attempt to upload or to transmit)
            viruses, Trojan horses, or other material, including excessive use
            of capital letters and spamming (continuous posting of repetitive
            text), that interferes with any party’s uninterrupted use and
            enjoyment of the Services or modifies, impairs, disrupts, alters, or
            interferes with the use, features, functions, operation, or
            maintenance of the Services.
            <br></br>10. Engage in any automated use of the system, such as
            using scripts to send comments or messages, or using any data
            mining, robots, or similar data gathering and extraction tools.
            <br></br>11. Delete the copyright or other proprietary rights notice
            from any Content.
            <br></br>12. Attempt to impersonate another user or person or use
            the username of another user.
            <br></br>13. Upload or transmit (or attempt to upload or to
            transmit) any material that acts as a passive or active information
            collection or transmission mechanism, including without limitation,
            clear graphics interchange formats ("gifs"), 1×1 pixels, web bugs,
            cookies, or other similar devices (sometimes referred to as
            "spyware" or "passive collection mechanisms" or "pcms").
            <br></br>14. Interfere with, disrupt, or create an undue burden on
            the Services or the networks or services connected to the Services.
            <br></br>15. Harass, annoy, intimidate, or threaten any of our
            employees or agents engaged in providing any portion of the Services
            to you.
            <br></br>16. Attempt to bypass any measures of the Services designed
            to prevent or restrict access to the Services, or any portion of the
            Services.
            <br></br>17. Copy or adapt the Services' software, including but not
            limited to Flash, PHP, HTML, JavaScript, or other code.
            <br></br>18. Except as permitted by applicable law, decipher,
            decompile, disassemble, or reverse engineer any of the software
            comprising or in any way making up a part of the Services.
            <br></br>19. Except as may be the result of standard search engine
            or Internet browser usage, use, launch, develop, or distribute any
            automated system, including without limitation, any spider, robot,
            cheat utility, scraper, or offline reader that accesses the
            Services, or use or launch any unauthorized script or other
            software.
            <br id="6"></br>20. Use a buying agent or purchasing agent to make
            purchases on the Services.
            <br></br>21. Make any unauthorized use of the Services, including
            collecting usernames and/or email addresses of users by electronic
            or other means for the purpose of sending unsolicited email, or
            creating user accounts by automated means or under false pretenses.
            <br></br>22. Use the Services as part of any effort to compete with
            us or otherwise use the Services and/or the Content for any
            revenue-generating endeavor or commercial enterprise.
            <br></br>23. Use the Services to advertise or offer to sell goods
            and services.
            <br></br>24. Sell or otherwise transfer your profile.
            <br></br>25. Do not connect directly to Mentee, If you are on
            Grabtern. Mediator should be grabtern
            <br></br>26. We will transfer all aggregated money to Mentors
            account at month end.
            <br></br>27. User/Mentee will have to pay first to book mentors
            session
          </div>
          <div className="terms-and-cond-sub">
            <div className="tnc-sub-head">6. USER GENERATED CONTRIBUTIONS</div>
            The Services may invite you to chat, contribute to, or participate
            in blogs, message boards, online forums, and other functionality,
            and may provide you with the opportunity to create, submit, post,
            display, transmit, perform, publish, distribute, or broadcast
            content and materials to us or on the Services, including but not
            limited to text, writings, video, audio, photographs, graphics,
            comments, suggestions, or personal information or other material
            (collectively, "Contributions"). Contributions may be viewable by
            other users of the Services and through third-party websites. As
            such, any Contributions you transmit may be treated as
            non-confidential and non-proprietary. When you create or make
            available any Contributions, you thereby represent and warrant that:
            <br></br>
            1. The creation, distribution, transmission, public display, or
            performance, and the accessing, downloading, or copying of your
            Contributions do not and will not infringe the proprietary rights,
            including but not limited to the copyright, patent, trademark, trade
            secret, or moral rights of any third party.
            <br></br>2. You are the creator and owner of or have the necessary
            licenses, rights, consents, releases, and permissions to use and to
            authorize us, the Services, and other users of the Services to use
            your Contributions in any manner contemplated by the Services and
            these Legal Terms.
            <br></br>3. You have the written consent, release, and/or permission
            of each and every identifiable individual person in your
            Contributions to use the name or likeness of each and every such
            identifiable individual person to enable inclusion and use of your
            Contributions in any manner contemplated by the Services and these
            Legal Terms.
            <br></br>4. Your Contributions are not false, inaccurate, or
            misleading.
            <br></br>5. Your Contributions are not unsolicited or unauthorized
            advertising, promotional materials, pyramid schemes, chain letters,
            spam, mass mailings, or other forms of solicitation.
            <br></br>6. Your Contributions are not obscene, lewd, lascivious,
            filthy, violent, harassing, libelous, slanderous, or otherwise
            objectionable (as determined by us).
            <br></br>7. Your Contributions do not ridicule, mock, disparage,
            intimidate, or abuse anyone.
            <br id="7"></br>8. Your Contributions are not used to harass or
            threaten (in the legal sense of those terms) any other person and to
            promote violence against a specific person or class of people.
            <br></br>9. Your Contributions do not violate any applicable law,
            regulation, or rule.
            <br></br>10. Your Contributions do not violate the privacy or
            publicity rights of any third party.
            <br></br>11. Your Contributions do not violate any applicable law
            concerning child pornography, or otherwise intended to protect the
            health or well-being of minors.
            <br></br>12. Your Contributions do not include any offensive
            comments that are connected to race, national origin, gender, sexual
            preference, or physical handicap.
            <br></br>13. Your Contributions do not otherwise violate, or link to
            material that violates, any provision of these Legal Terms, or any
            applicable law or regulation.
            <br></br>14. Any use of the Services in violation of the foregoing
            violates these Legal Terms and may result in, among other things,
            termination or suspension of your rights to use the Services.
          </div>
          <div className="terms-and-cond-sub">
            <div className="tnc-sub-head">7. CONTRIBUTION LICENSE</div>
            By posting your Contributions to any part of the Services or making
            Contributions accessible to the Services by linking your account
            from the Services to any of your social networking accounts, you
            automatically grant, and you represent and warrant that you have the
            right to grant, to us an unrestricted, unlimited, irrevocable,
            perpetual, non-exclusive, transferable, royalty-free, fully-paid,
            worldwide right, and license to host, use, copy, reproduce,
            disclose, sell, resell, publish, broadcast, retitle, archive, store,
            cache, publicly perform, publicly display, reformat, translate,
            transmit, excerpt (in whole or in part), and distribute such
            Contributions (including, without limitation, your image and voice)
            for any purpose, commercial, advertising, or otherwise, and to
            prepare derivative works of, or incorporate into other works, such
            Contributions, and grant and authorize sublicenses of the foregoing.
            The use and distribution may occur in any media formats and through
            any media channels.
            <br></br>
            This license will apply to any form, media, or technology now known
            or hereafter developed, and includes our use of your name, company
            name, and franchise name, as applicable, and any of the trademarks,
            service marks, trade names, logos, and personal and commercial
            images you provide. You waive all moral rights in your
            Contributions, and you warrant that moral rights have not otherwise
            been asserted in your Contributions.
            <br id="8"></br>
            We do not assert any ownership over your Contributions. You retain
            full ownership of all of your Contributions and any intellectual
            property rights or other proprietary rights associated with your
            Contributions. We are not liable for any statements or
            representations in your Contributions provided by you in any area on
            the Services. You are solely responsible for your Contributions to
            the Services and you expressly agree to exonerate us from any and
            all responsibility and to refrain from any legal action against us
            regarding your Contributions.
            <br></br>
            We have the right, in our sole and absolute discretion, (1) to edit,
            redact, or otherwise change any Contributions; (2) to re-categorize
            any Contributions to place them in more appropriate locations on the
            Services; and (3) to pre-screen or delete any Contributions at any
            time and for any reason, without notice. We have no obligation to
            monitor your Contributions.
          </div>
          <div className="terms-and-cond-sub">
            <div className="tnc-sub-head">8. SOCIAL MEDIA</div>
            As part of the functionality of the Services, you may link your
            account with online accounts you have with third-party service
            providers (each such account, a "Third-Party Account") by either:
            (1) providing your Third-Party Account login information through the
            Services; or (2) allowing us to access your Third-Party Account, as
            is permitted under the applicable terms and conditions that govern
            your use of each Third-Party Account. You represent and warrant that
            you are entitled to disclose your Third-Party Account login
            information to us and/or grant us access to your Third-Party
            Account, without breach by you of any of the terms and conditions
            that govern your use of the applicable Third-Party Account, and
            without obligating us to pay any fees or making us subject to any
            usage limitations imposed by the third-party service provider of the
            Third-Party Account. By granting us access to any Third-Party
            Accounts, you understand that (1) we may access, make available, and
            store (if applicable) any content that you have provided to and
            stored in your Third-Party Account (the "Social Network Content") so
            that it is available on and through the Services via your account,
            including without limitation any friend lists and (2) we may submit
            to and receive from your Third-Party Account additional i nformation
            to the extent you are notified when you link your account with the
            Third-Party Account. Depending on the Third-Party Accounts you
            choose and subject to the privacy settings that you have set in such
            Third-Party Accounts, personally identifiable information that you
            post to your Third-Party Accounts may be available on and through
            your account on the Services. Please note that if a Third-Party
            Account or associated service becomes unavailable or our access to
            such Third-Party Account is terminated by the third-party service
            provider, then Social Network Content may no longer be available on
            and through the Services. You will have the ability to disable the
            connection between your account on the Services and your Third-Party
            Accounts at any time.<br id="9"></br> PLEASE NOTE THAT YOUR
            RELATIONSHIP WITH THE THIRD-PARTY SERVICE PROVIDERS ASSOCIATED WITH
            YOUR THIRD-PARTY ACCOUNTS IS GOVERNED SOLELY BY YOUR AGREEMENT(S)
            WITH SUCH THIRD-PARTY SERVICE PROVIDERS. We make no effort to review
            any Social Network Content for any purpose, including but not
            limited to, for accuracy, legality, or non-infringement, and we are
            not responsible for any Social Network Content. You acknowledge and
            agree that we may access your email address book associated with a
            Third-Party Account and your contacts list stored on your mobile
            device or tablet computer solely for purposes of identifying and
            informing you of those contacts who have also registered to use the
            Services. You can deactivate the connection between the Services and
            your Third-Party Account by contacting us using the contact
            information below or through your account settings (if applicable).
            We will attempt to delete any information stored on our servers that
            was obtained through such Third-Party Account, except the username
            and profile picture that become associated with your account.
          </div>
          <div className="terms-and-cond-sub">
            <div className="tnc-sub-head" id="10">
              9. SERVICES MANAGEMENT
            </div>
            <div align="center" style={{ textAlign: "left" }}>
              <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
                <br />
              </div>
              <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
                <bdt
                  className="block-container if"
                  data-type="if"
                  style={{ textAlign: "left" }}
                >
                  <bdt data-type="conditional-block">
                    <bdt data-type="body">
                      <span
                        style={{
                          fontSize: "11pt",
                          lineHeight: "16.8667px",
                          color: "rgb(89, 89, 89)",
                        }}
                      >
                        <bdt className="else-block" />
                      </span>
                    </bdt>
                  </bdt>
                </bdt>
              </div>
              <div
                className="MsoNormal"
                data-custom-class="body_text"
                style={{ lineHeight: "1.5" }}
              >
                <bdt
                  className="block-container if"
                  data-type="if"
                  style={{ textAlign: "left" }}
                >
                  <bdt data-type="conditional-block">
                    <bdt
                      className="block-component"
                      data-record-question-key="review_option"
                      data-type="statement"
                    />
                  </bdt>
                </bdt>
              </div>
              <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
                <bdt
                  className="block-container if"
                  data-type="if"
                  style={{ textAlign: "left" }}
                >
                  <bdt data-type="conditional-block">
                    <bdt
                      className="block-component"
                      data-record-question-key="mobile_app_option"
                      data-type="statement"
                    />
                  </bdt>
                </bdt>
              </div>
              <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
                <bdt
                  className="block-container if"
                  data-type="if"
                  style={{ textAlign: "left" }}
                >
                  <bdt data-type="conditional-block">
                    <bdt
                      className="block-component"
                      data-record-question-key="socialnetwork_link_option"
                      data-type="statement"
                    />
                  </bdt>
                </bdt>
              </div>
              <div
                className="MsoNormal"
                data-custom-class="heading_1"
                id="socialmedia"
                style={{ lineHeight: "1.5" }}
              >
                <strong>
                  <span style={{ lineHeight: "24.5333px", fontSize: 19 }}>
                    <strong>
                      <span
                        style={{
                          lineHeight: "115%",
                          fontFamily: "Arial",
                          fontSize: 19,
                        }}
                      >
                        <strong>
                          <span
                            style={{
                              lineHeight: "115%",
                              fontFamily: "Arial",
                              fontSize: 19,
                            }}
                          >
                            8.
                          </span>
                        </strong>
                      </span>
                    </strong>
                    &nbsp;
                  </span>
                  SOCIAL MEDIA
                </strong>
              </div>
              <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
                <br />
                <bdt
                  className="block-container if"
                  data-type="if"
                  style={{ textAlign: "left" }}
                >
                  <bdt data-type="conditional-block">
                    <bdt data-type="body">
                      <div
                        className="MsoNormal"
                        data-custom-class="body_text"
                        style={{ lineHeight: "1.5" }}
                      >
                        <span
                          style={{
                            fontSize: "11pt",
                            lineHeight: "16.8667px",
                            color: "rgb(89, 89, 89)",
                          }}
                        >
                          As part of the functionality of the Services, you may
                          link your account with online accounts you have with
                          third-party service providers (each such account, a{" "}
                          <bdt className="block-component" />
                          "Third-Party Account"
                          <bdt className="statement-end-if-in-editor" />) by
                          either: (1) providing your Third-Party Account login
                          information through the Services; or (2) allowing us
                          to access your{" "}
                          <span style={{ fontSize: "14.6667px" }}>
                            Third-Party
                          </span>{" "}
                          Account, as is permitted under the applicable terms
                          and conditions that govern your use of each{" "}
                          <span style={{ fontSize: "14.6667px" }}>
                            Third-Party
                          </span>{" "}
                          Account. You represent and warrant that you are
                          entitled to disclose your{" "}
                          <span style={{ fontSize: "14.6667px" }}>
                            Third-Party
                          </span>{" "}
                          Account login information to us and/or grant us access
                          to your{" "}
                          <span style={{ fontSize: "14.6667px" }}>
                            Third-Party
                          </span>{" "}
                          Account, without breach by you of any of the terms and
                          conditions that govern your use of the applicable{" "}
                          <span style={{ fontSize: "14.6667px" }}>
                            Third-Party
                          </span>{" "}
                          Account, and without obligating us to pay any fees or
                          making us subject to any usage limitations imposed by
                          the third-party service provider of the{" "}
                          <span style={{ fontSize: "14.6667px" }}>
                            Third-Party
                          </span>{" "}
                          Account. By granting us access to any{" "}
                          <span style={{ fontSize: "14.6667px" }}>
                            Third-Party
                          </span>{" "}
                          Accounts, you understand that (1) we may access, make
                          available, and store (if applicable) any content that
                          you have provided to and stored in your{" "}
                          <span style={{ fontSize: "14.6667px" }}>
                            Third-Party
                          </span>{" "}
                          Account (the <bdt className="block-component" />
                          "Social Network Content"
                          <bdt className="statement-end-if-in-editor" />) so
                          that it is available on and through the Services via
                          your account, including without limitation any friend
                          lists and (2) we may submit to and receive from your{" "}
                          <span style={{ fontSize: "14.6667px" }}>
                            Third-Party
                          </span>{" "}
                          Account additional information to the extent you are
                          notified when you link your account with the{" "}
                          <span style={{ fontSize: "14.6667px" }}>
                            Third-Party
                          </span>{" "}
                          Account. Depending on the{" "}
                          <span style={{ fontSize: "14.6667px" }}>
                            Third-Party
                          </span>{" "}
                          Accounts you choose and subject to the privacy
                          settings that you have set in such{" "}
                          <span style={{ fontSize: "14.6667px" }}>
                            Third-Party
                          </span>{" "}
                          Accounts, personally identifiable information that you
                          post to your{" "}
                          <span style={{ fontSize: "14.6667px" }}>
                            Third-Party
                          </span>{" "}
                          Accounts may be available on and through your account
                          on the Services. Please note that if a{" "}
                          <span style={{ fontSize: "14.6667px" }}>
                            Third-Party
                          </span>{" "}
                          Account or associated service becomes unavailable or
                          our access to such{" "}
                          <span style={{ fontSize: "14.6667px" }}>
                            Third-Party
                          </span>{" "}
                          Account is terminated by the third-party service
                          provider, then Social Network Content may no longer be
                          available on and through the Services. You will have
                          the ability to disable the connection between your
                          account on the Services and your{" "}
                          <span style={{ fontSize: "14.6667px" }}>
                            Third-Party
                          </span>{" "}
                          Accounts at any time. PLEASE NOTE THAT YOUR
                          RELATIONSHIP WITH THE THIRD-PARTY SERVICE PROVIDERS
                          ASSOCIATED WITH YOUR THIRD-PARTY ACCOUNTS IS GOVERNED
                          SOLELY BY YOUR AGREEMENT(S) WITH SUCH THIRD-PARTY
                          SERVICE PROVIDERS. We make no effort to review any
                          Social Network Content for any purpose, including but
                          not limited to, for accuracy, legality, or
                          non-infringement, and we are not responsible for any
                          Social Network Content. You acknowledge and agree that
                          we may access your email address book associated with
                          a{" "}
                          <span style={{ fontSize: "14.6667px" }}>
                            Third-Party
                          </span>{" "}
                          Account and your contacts list stored on your mobile
                          device or tablet computer solely for purposes of
                          identifying and informing you of those contacts who
                          have also registered to use the Services. You can
                          deactivate the connection between the Services and
                          your{" "}
                          <span style={{ fontSize: "14.6667px" }}>
                            Third-Party
                          </span>{" "}
                          Account by contacting us using the contact information
                          below or through your account settings (if
                          applicable). We will attempt to delete any information
                          stored on our servers that was obtained through such{" "}
                          <span style={{ fontSize: "14.6667px" }}>
                            Third-Party
                          </span>{" "}
                          Account, except the username and profile picture that
                          become associated with your account.
                        </span>
                      </div>
                    </bdt>
                  </bdt>
                </bdt>
              </div>
              <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
                <br />
              </div>
              <div className="MsoNormal" style={{ lineHeight: "1.1" }}>
                <bdt
                  className="block-container if"
                  data-type="if"
                  style={{ textAlign: "left" }}
                >
                  <bdt data-type="conditional-block">
                    <bdt data-type="body">
                      <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
                        <span
                          style={{
                            fontSize: "11pt",
                            lineHeight: "16.8667px",
                            color: "rgb(89, 89, 89)",
                          }}
                        />
                      </div>
                    </bdt>
                  </bdt>
                </bdt>
              </div>
              <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
                <bdt
                  className="block-container if"
                  data-type="if"
                  style={{ textAlign: "left" }}
                >
                  <bdt data-type="conditional-block">
                    <bdt
                      className="block-component"
                      data-record-question-key="3rd_party_option"
                      data-type="statement"
                    />
                  </bdt>
                </bdt>
              </div>
              <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
                <bdt
                  className="block-container if"
                  data-type="if"
                  style={{ textAlign: "left" }}
                >
                  <bdt data-type="conditional-block">
                    <bdt
                      className="block-component"
                      data-record-question-key="advertiser_option"
                      data-type="statement"
                    />
                  </bdt>
                </bdt>
              </div>
              <div
                className="MsoNormal"
                data-custom-class="heading_1"
                id="sitemanage"
                style={{ lineHeight: "1.5" }}
              >
                <strong>
                  <span style={{ lineHeight: "24.5333px", fontSize: 19 }}>
                    <strong>
                      <span style={{ lineHeight: "24.5333px", fontSize: 19 }}>
                        <strong>
                          <span
                            style={{
                              lineHeight: "115%",
                              fontFamily: "Arial",
                              fontSize: 19,
                            }}
                          >
                            <strong>
                              <span
                                style={{
                                  lineHeight: "115%",
                                  fontFamily: "Arial",
                                  fontSize: 19,
                                }}
                              >
                                9.
                              </span>
                            </strong>
                          </span>
                        </strong>
                      </span>
                      &nbsp;
                    </strong>
                    SERVICES MANAGEMENT
                  </span>
                </strong>
              </div>
              <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
                <br />
              </div>
              <div
                className="MsoNormal"
                data-custom-class="body_text"
                style={{ lineHeight: "1.5" }}
              >
                We reserve the right, but not the obligation, to: (1) monitor
                the Services for violations of these Legal Terms; (2) take
                appropriate legal action against anyone who, in our sole
                discretion, violates the law or these Legal Terms, including
                without limitation, reporting such user to law enforcement
                authorities; (3) in our sole discretion and without limitation,
                refuse, restrict access to, limit the availability of, or
                disable (to the extent technologically feasible) any of your
                Contributions or any portion thereof; (4) in our sole discretion
                and without limitation, notice, or liability, to remove from the
                Services or otherwise disable all files and content that are
                excessive in size or are in any way burdensome to our systems;
                and (5) otherwise manage the Services in a manner designed to
                protect our rights and property and to facilitate the proper
                functioning of the Services.
              </div>
              <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
                <br />
              </div>
              <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
                <bdt
                  className="block-container if"
                  data-type="if"
                  style={{ textAlign: "left" }}
                >
                  <bdt data-type="conditional-block">
                    <bdt
                      className="block-component"
                      data-record-question-key="privacy_policy_option"
                      data-type="statement"
                    />
                  </bdt>
                </bdt>
              </div>
              <div
                className="MsoNormal"
                data-custom-class="heading_1"
                id="ppyes"
                style={{ lineHeight: "1.5" }}
              >
                <strong>
                  <span style={{ lineHeight: "24.5333px", fontSize: 19 }}>
                    <strong>
                      <span
                        style={{
                          lineHeight: "115%",
                          fontFamily: "Arial",
                          fontSize: 19,
                        }}
                      >
                        <strong>
                          <span
                            style={{
                              lineHeight: "115%",
                              fontFamily: "Arial",
                              fontSize: 19,
                            }}
                          >
                            10.
                          </span>
                        </strong>
                      </span>
                    </strong>
                    &nbsp;
                  </span>
                  PRIVACY POLICY
                </strong>
              </div>
              <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
                <br />
              </div>
              <div
                className="MsoNormal"
                data-custom-class="body_text"
                style={{ lineHeight: "1.5" }}
              >
                <span
                  style={{
                    fontSize: "11pt",
                    lineHeight: "16.8667px",
                    color: "rgb(89, 89, 89)",
                  }}
                >
                  We care about data privacy and security. Please review our
                  Privacy Policy:
                  <strong>
                    &nbsp;
                    <bdt
                      className="block-container question question-in-editor"
                      data-id="d10c7fd7-0685-12ac-c717-cbc45ff916d1"
                      data-type="question"
                    >
                      <a
                        href="https://www.grabtern.com/privacy"
                        target="_blank"
                        data-custom-class="link"
                      >
                        https://www.grabtern.com/privacy
                      </a>
                    </bdt>
                  </strong>
                  . By using the Services, you agree to be bound by our Privacy
                  Policy, which is incorporated into these Legal Terms. Please
                  be advised the Services are hosted in{" "}
                  <bdt className="block-component" />
                  <bdt className="question">India</bdt>
                  <bdt className="statement-end-if-in-editor" />
                  <bdt className="block-component" />. If you access the
                  Services from any other region of the world with laws or other
                  requirements governing personal data collection, use, or
                  disclosure that differ from applicable laws in{" "}
                  <span
                    style={{
                      fontSize: "11pt",
                      lineHeight: "16.8667px",
                      color: "rgb(89, 89, 89)",
                    }}
                  >
                    <bdt className="block-component" />
                    <bdt className="question">India</bdt>
                    <bdt className="statement-end-if-in-editor" />
                  </span>
                  <bdt className="block-component" />, then through your
                  continued use of the Services, you are transferring your data
                  to{" "}
                  <span
                    style={{
                      fontSize: "11pt",
                      lineHeight: "16.8667px",
                      color: "rgb(89, 89, 89)",
                    }}
                  >
                    <bdt className="block-component" />
                    <bdt className="question">India</bdt>
                    <bdt className="statement-end-if-in-editor" />
                  </span>
                  <bdt className="block-component" />, and you expressly consent
                  to have your data transferred to and processed in{" "}
                  <span
                    style={{
                      fontSize: "11pt",
                      lineHeight: "16.8667px",
                      color: "rgb(89, 89, 89)",
                    }}
                  >
                    <bdt className="block-component" />
                    <bdt className="question">India</bdt>
                    <bdt className="statement-end-if-in-editor" />
                  </span>
                  <bdt className="block-component" />.
                  <bdt className="block-component" />
                </span>
              </div>
              <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
                <br />
              </div>
              <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
                <bdt
                  className="block-container if"
                  data-type="if"
                  style={{ textAlign: "left" }}
                >
                  <bdt
                    className="statement-end-if-in-editor"
                    data-type="close"
                  />
                </bdt>
                <bdt className="block-container if" data-type="if">
                  <bdt data-type="conditional-block">
                    <bdt
                      className="block-component"
                      data-record-question-key="privacy_policy_followup"
                      data-type="statement"
                      style={{ fontSize: "14.6667px" }}
                    />
                  </bdt>
                </bdt>
              </div>
              <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
                <bdt
                  className="block-container if"
                  data-type="if"
                  style={{ textAlign: "left" }}
                >
                  <bdt data-type="conditional-block">
                    <bdt
                      className="block-component"
                      data-record-question-key="copyright_agent_option"
                      data-type="statement"
                    >
                      <bdt className="block-component" />
                    </bdt>
                  </bdt>
                </bdt>
              </div>
              <div
                className="MsoNormal"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <bdt className="block-component" />
                <bdt className="block-component" />
              </div>
              <div
                className="MsoNormal"
                data-custom-class="heading_1"
                id="copyrightno"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <strong>
                  <span style={{ fontSize: 19 }}>
                    <strong>
                      <span style={{ lineHeight: "24.5333px", fontSize: 19 }}>
                        <strong>
                          <span
                            style={{
                              lineHeight: "115%",
                              fontFamily: "Arial",
                              fontSize: 19,
                            }}
                          >
                            <strong>
                              <span
                                style={{
                                  lineHeight: "115%",
                                  fontFamily: "Arial",
                                  fontSize: 19,
                                }}
                              >
                                11.
                              </span>
                            </strong>
                          </span>
                        </strong>
                      </span>
                      &nbsp;
                    </strong>
                    COPYRIGHT INFRINGEMENTS
                  </span>
                </strong>
              </div>
              <div
                className="MsoNormal"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <br />
              </div>
              <div
                className="MsoNormal"
                data-custom-class="body_text"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <span
                  style={{
                    fontSize: "11pt",
                    lineHeight: "16.8667px",
                    color: "rgb(89, 89, 89)",
                  }}
                >
                  We respect the intellectual property rights of others. If you
                  believe that any material available on or through the Services
                  infringes upon any copyright you own or control, please
                  immediately notify us using the contact information provided
                  below (a <bdt className="block-component" />
                  "Notification"
                  <bdt className="statement-end-if-in-editor" />
                  ). A copy of your Notification will be sent to the person who
                  posted or stored the material addressed in the Notification.
                  Please be advised that pursuant to applicable law you may be
                  held liable for damages if you make material
                  misrepresentations in a Notification. Thus, if you are not
                  sure that material located on or linked to by the Services
                  infringes your copyright, you should consider first contacting
                  an attorney.
                </span>
              </div>
              <div
                className="MsoNormal"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <br />
              </div>
              <div
                className="MsoNormal"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <bdt className="statement-end-if-in-editor" />
                <bdt className="statement-end-if-in-editor" />
              </div>
              <div
                className="MsoNormal"
                data-custom-class="heading_1"
                id="terms"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <strong>
                  <span style={{ lineHeight: "24.5333px", fontSize: 19 }}>
                    <strong>
                      <span style={{ lineHeight: "24.5333px", fontSize: 19 }}>
                        <strong>
                          <span
                            style={{
                              lineHeight: "115%",
                              fontFamily: "Arial",
                              fontSize: 19,
                            }}
                          >
                            <strong>
                              <span
                                style={{
                                  lineHeight: "115%",
                                  fontFamily: "Arial",
                                  fontSize: 19,
                                }}
                              >
                                12.
                              </span>
                            </strong>
                          </span>
                        </strong>
                      </span>
                      &nbsp;
                    </strong>
                    TERM AND TERMINATION
                  </span>
                </strong>
              </div>
              <div
                className="MsoNormal"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <br />
              </div>
              <div
                className="MsoNormal"
                data-custom-class="body_text"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <span
                  style={{
                    fontSize: "11pt",
                    lineHeight: "16.8667px",
                    color: "rgb(89, 89, 89)",
                  }}
                >
                  These Legal Terms shall remain in full force and effect while
                  you use the Services. WITHOUT LIMITING ANY OTHER PROVISION OF
                  THESE LEGAL TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE
                  DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND
                  USE OF THE SERVICES (INCLUDING BLOCKING CERTAIN IP ADDRESSES),
                  TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING
                  WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY,
                  OR COVENANT CONTAINED IN THESE LEGAL TERMS OR OF ANY
                  APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR
                  PARTICIPATION IN THE SERVICES OR DELETE{" "}
                  <bdt
                    className="block-container if"
                    data-type="if"
                    id="a6e121c2-36b4-5066-bf9f-a0a33512e768"
                  >
                    <bdt data-type="conditional-block">
                      <bdt
                        className="block-component"
                        data-record-question-key="user_account_option"
                        data-type="statement"
                      />
                      <bdt data-type="body">YOUR ACCOUNT AND&nbsp;</bdt>
                    </bdt>
                    <bdt
                      className="statement-end-if-in-editor"
                      data-type="close"
                    />
                  </bdt>
                  ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME,
                  WITHOUT WARNING, IN OUR SOLE DISCRETION.
                </span>
              </div>
              <div
                className="MsoNormal"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <br />
              </div>
              <div
                className="MsoNormal"
                data-custom-class="body_text"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <span
                  style={{
                    fontSize: "11pt",
                    lineHeight: "16.8667px",
                    color: "rgb(89, 89, 89)",
                  }}
                >
                  If we terminate or suspend your account for any reason, you
                  are prohibited from registering and creating a new account
                  under your name, a fake or borrowed name, or the name of any
                  third party, even if you may be acting on behalf of the third
                  party. In addition to terminating or suspending your account,
                  we reserve the right to take appropriate legal action,
                  including without limitation pursuing civil, criminal, and
                  injunctive redress.
                </span>
              </div>
              <div
                className="MsoNormal"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <br />
              </div>
              <div
                className="MsoNormal"
                data-custom-class="heading_1"
                id="modifications"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <strong>
                  <span style={{ lineHeight: "24.5333px", fontSize: 19 }}>
                    <strong>
                      <span style={{ lineHeight: "24.5333px", fontSize: 19 }}>
                        <strong>
                          <span
                            style={{
                              lineHeight: "115%",
                              fontFamily: "Arial",
                              fontSize: 19,
                            }}
                          >
                            <strong>
                              <span
                                style={{
                                  lineHeight: "115%",
                                  fontFamily: "Arial",
                                  fontSize: 19,
                                }}
                              >
                                13.
                              </span>
                            </strong>
                          </span>
                        </strong>
                      </span>
                      &nbsp;
                    </strong>
                    MODIFICATIONS AND INTERRUPTIONS
                  </span>
                </strong>
              </div>
              <div
                className="MsoNormal"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <br />
              </div>
              <div
                className="MsoNormal"
                data-custom-class="body_text"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <span
                  style={{
                    fontSize: "11pt",
                    lineHeight: "16.8667px",
                    color: "rgb(89, 89, 89)",
                  }}
                >
                  We reserve the right to change, modify, or remove the contents
                  of the Services at any time or for any reason at our sole
                  discretion without notice. However, we have no obligation to
                  update any information on our Services.
                  <bdt className="block-component" /> We will not be liable to
                  you or any third party for any modification, price change,
                  suspension, or discontinuance of the Services.
                </span>
              </div>
              <div
                className="MsoNormal"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <br />
              </div>
              <div
                className="MsoNormal"
                data-custom-class="body_text"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <span
                  style={{
                    fontSize: "11pt",
                    lineHeight: "16.8667px",
                    color: "rgb(89, 89, 89)",
                  }}
                >
                  We cannot guarantee the Services will be available at all
                  times. We may experience hardware, software, or other problems
                  or need to perform maintenance related to the Services,
                  resulting in interruptions, delays, or errors. We reserve the
                  right to change, revise, update, suspend, discontinue, or
                  otherwise modify the Services at any time or for any reason
                  without notice to you. You agree that we have no liability
                  whatsoever for any loss, damage, or inconvenience caused by
                  your inability to access or use the Services during any
                  downtime or discontinuance of the Services. Nothing in these
                  Legal Terms will be construed to obligate us to maintain and
                  support the Services or to supply any corrections, updates, or
                  releases in connection therewith.
                </span>
              </div>
              <div
                className="MsoNormal"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <br />
              </div>
              <div
                className="MsoNormal"
                data-custom-class="heading_1"
                id="law"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <strong>
                  <span style={{ lineHeight: "24.5333px", fontSize: 19 }}>
                    <strong>
                      <span style={{ lineHeight: "24.5333px", fontSize: 19 }}>
                        <strong>
                          <span
                            style={{
                              lineHeight: "115%",
                              fontFamily: "Arial",
                              fontSize: 19,
                            }}
                          >
                            <strong>
                              <span
                                style={{
                                  lineHeight: "115%",
                                  fontFamily: "Arial",
                                  fontSize: 19,
                                }}
                              >
                                14.
                              </span>
                            </strong>
                          </span>
                        </strong>
                      </span>
                      &nbsp;
                    </strong>
                    GOVERNING LAW
                  </span>
                </strong>
              </div>
              <div
                className="MsoNormal"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <br />
              </div>
              <div
                className="MsoNormal"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <span
                  style={{
                    fontSize: "11pt",
                    lineHeight: "16.8667px",
                    color: "rgb(89, 89, 89)",
                  }}
                >
                  <bdt className="block-component" />
                </span>
              </div>
              <div
                className="MsoNormal"
                data-custom-class="body_text"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <span
                  style={{
                    fontSize: "11pt",
                    lineHeight: "16.8667px",
                    color: "rgb(89, 89, 89)",
                  }}
                >
                  These Legal Terms shall be governed by and defined following
                  the laws of <bdt className="block-component" />
                  <bdt className="question">India</bdt>
                  <span
                    style={{
                      fontSize: "11pt",
                      lineHeight: "16.8667px",
                      color: "rgb(89, 89, 89)",
                    }}
                  >
                    <bdt className="statement-end-if-in-editor" />
                  </span>
                  . <bdt className="question">Grabtern</bdt> and yourself
                  irrevocably consent that the courts of{" "}
                  <span
                    style={{
                      fontSize: "11pt",
                      lineHeight: "16.8667px",
                      color: "rgb(89, 89, 89)",
                    }}
                  >
                    <bdt className="block-component" />
                    <bdt className="question">India</bdt>
                    <span
                      style={{
                        fontSize: "11pt",
                        lineHeight: "16.8667px",
                        color: "rgb(89, 89, 89)",
                      }}
                    >
                      <bdt className="statement-end-if-in-editor" />
                    </span>
                  </span>{" "}
                  shall have exclusive jurisdiction to resolve any dispute which
                  may arise in connection with these Legal Terms.
                  <bdt className="statement-end-if-in-editor" />
                </span>
              </div>
              <div
                className="MsoNormal"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <br />
              </div>
              <div
                className="MsoNormal"
                data-custom-class="heading_1"
                id="disputes"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <strong>
                  <span style={{ lineHeight: "24.5333px", fontSize: 19 }}>
                    <strong>
                      <span style={{ lineHeight: "24.5333px", fontSize: 19 }}>
                        <strong>
                          <span
                            style={{
                              lineHeight: "115%",
                              fontFamily: "Arial",
                              fontSize: 19,
                            }}
                          >
                            <strong>
                              <span
                                style={{
                                  lineHeight: "115%",
                                  fontFamily: "Arial",
                                  fontSize: 19,
                                }}
                              >
                                15.
                              </span>
                            </strong>
                          </span>
                        </strong>
                      </span>
                      &nbsp;
                    </strong>
                    DISPUTE RESOLUTION
                  </span>
                </strong>
              </div>
              <div
                className="MsoNormal"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <br />
              </div>
              <div
                className="MsoNormal"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <bdt className="block-component" />
              </div>
              <div
                className="MsoNormal"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <bdt className="block-component" />
              </div>
              <div
                className="MsoNormal"
                data-custom-class="heading_2"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <strong>Informal Negotiations</strong>
              </div>
              <div
                className="MsoNormal"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <br />
              </div>
              <div
                className="MsoNormal"
                data-custom-class="body_text"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <span style={{ fontSize: 15 }}>
                  To expedite resolution and control the cost of any dispute,
                  controversy, or claim related to these Legal Terms (each a{" "}
                  <bdt className="block-component" />
                  "Dispute" and collectively, the "Disputes"
                  <bdt className="statement-end-if-in-editor" />) brought by
                  either you or us (individually, a{" "}
                  <bdt className="block-component" />
                  "Party" and collectively, the "Parties"
                  <bdt className="statement-end-if-in-editor" />
                  ), the Parties agree to first attempt to negotiate any Dispute
                  (except those Disputes expressly provided below) informally
                  for at least <bdt className="question">eleven (11)</bdt> days
                  before initiating arbitration. Such informal negotiations
                  commence upon written notice from one Party to the other
                  Party.
                </span>
              </div>
              <div
                className="MsoNormal"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <br />
              </div>
              <div
                className="MsoNormal"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <bdt className="statement-end-if-in-editor" />
              </div>
              <div
                className="MsoNormal"
                data-custom-class="heading_2"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <strong>Binding Arbitration</strong>
              </div>
              <div
                className="MsoNormal"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <br />
              </div>
              <div
                className="MsoNormal"
                data-custom-class="body_text"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <bdt className="block-component">
                  <span style={{ fontSize: 15 }} />
                </bdt>
              </div>
              <div
                className="MsoNormal"
                data-custom-class="body_text"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                Any dispute arising out of or in connection with these Legal
                Terms, including any question regarding its existence, validity,
                or termination, shall be referred to and finally resolved by the
                International Commercial Arbitration Court under the European
                Arbitration Chamber (Belgium, Brussels, Avenue Louise, 146)
                according to the Rules of this ICAC, which, as a result of
                referring to it, is considered as the part of this clause. The
                number of arbitrators shall be{" "}
                <bdt className="question">two (2)</bdt>. The seat, or legal
                place, or arbitration shall be{" "}
                <bdt className="block-component" />
                <bdt className="question">Aligarh</bdt>,{" "}
                <bdt className="block-component" />
                <bdt className="question">India</bdt>
                <bdt className="statement-end-if-in-editor" />
                <bdt className="else-block" />. The language of the proceedings
                shall be <bdt className="question">English</bdt>. The governing
                law of these Legal Terms shall be substantive law of{" "}
                <bdt className="block-component" />
                <bdt className="block-component" />
                <bdt className="question">India</bdt>
                <bdt className="statement-end-if-in-editor">
                  <bdt className="statement-end-if-in-editor" />
                </bdt>
                .
                <bdt className="statement-end-if-in-editor">
                  <bdt className="statement-end-if-in-editor" />
                </bdt>
              </div>
              <div
                className="MsoNormal"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <br />
              </div>
              <div
                className="MsoNormal"
                data-custom-class="heading_2"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <strong>Restrictions</strong>
              </div>
              <div
                className="MsoNormal"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <br />
              </div>
              <div
                className="MsoNormal"
                data-custom-class="body_text"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                The Parties agree that any arbitration shall be limited to the
                Dispute between the Parties individually. To the full extent
                permitted by law, (a) no arbitration shall be joined with any
                other proceeding; (b) there is no right or authority for any
                Dispute to be arbitrated on a class-action basis or to{" "}
                <bdt className="block-component" />
                utilize
                <bdt className="statement-end-if-in-editor" /> class action
                procedures; and (c) there is no right or authority for any
                Dispute to be brought in a purported representative capacity on
                behalf of the general public or any other persons.
              </div>
              <div
                className="MsoNormal"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <br />
              </div>
              <div
                className="MsoNormal"
                data-custom-class="heading_2"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <bdt className="block-component" />
                <strong>
                  Exceptions to Informal Negotiations and Arbitration
                </strong>
                <bdt className="statement-end-if-in-editor" />
              </div>
              <div
                className="MsoNormal"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <br />
              </div>
              <div
                className="MsoNormal"
                data-custom-class="body_text"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <bdt className="block-component" />
                The Parties agree that the following Disputes are not subject to
                the above provisions concerning informal negotiations binding
                arbitration: (a) any Disputes seeking to enforce or protect, or
                concerning the validity of, any of the intellectual property
                rights of a Party; (b) any Dispute related to, or arising from,
                allegations of theft, piracy, invasion of privacy, or{" "}
                <bdt className="block-component" />
                unauthorized
                <bdt className="statement-end-if-in-editor" /> use; and (c) any
                claim for injunctive relief. If this provision is found to be
                illegal or unenforceable, then neither Party will elect to
                arbitrate any Dispute falling within that portion of this
                provision found to be illegal or unenforceable and such Dispute
                shall be decided by a court of competent jurisdiction within the
                courts listed for jurisdiction above, and the Parties agree to
                submit to the personal jurisdiction of that court.
                <bdt className="statement-end-if-in-editor" />
              </div>
              <div
                className="MsoNormal"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <bdt className="statement-end-if-in-editor">
                  <bdt className="statement-end-if-in-editor" />
                </bdt>
              </div>
              <div
                className="MsoNormal"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <br />
              </div>
              <div
                className="MsoNormal"
                data-custom-class="heading_1"
                id="corrections"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <strong>
                  <span style={{ fontSize: 19 }}>
                    <strong>
                      <span style={{ lineHeight: "24.5333px", fontSize: 19 }}>
                        <strong>
                          <span
                            style={{
                              lineHeight: "115%",
                              fontFamily: "Arial",
                              fontSize: 19,
                            }}
                          >
                            <strong>
                              <span
                                style={{
                                  lineHeight: "115%",
                                  fontFamily: "Arial",
                                  fontSize: 19,
                                }}
                              >
                                16.
                              </span>
                            </strong>
                          </span>
                        </strong>
                      </span>
                      &nbsp;
                    </strong>
                    CORRECTIONS
                  </span>
                </strong>
              </div>
              <div
                className="MsoNormal"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <br />
              </div>
              <div
                className="MsoNormal"
                data-custom-class="body_text"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                There may be information on the Services that contains
                typographical errors, inaccuracies, or omissions, including
                descriptions, pricing, availability, and various other
                information. We reserve the right to correct any errors,
                inaccuracies, or omissions and to change or update the
                information on the Services at any time, without prior notice.
              </div>
              <div
                className="MsoNormal"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <br />
              </div>
              <div
                className="MsoNormal"
                data-custom-class="heading_1"
                id="disclaimer"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <span style={{ fontSize: 19, color: "rgb(0, 0, 0)" }}>
                  <strong>
                    <span style={{ lineHeight: "24.5333px", fontSize: 19 }}>
                      <strong>
                        <span
                          style={{
                            lineHeight: "115%",
                            fontFamily: "Arial",
                            fontSize: 19,
                          }}
                        >
                          <strong>
                            <span
                              style={{
                                lineHeight: "115%",
                                fontFamily: "Arial",
                                fontSize: 19,
                              }}
                            >
                              17.
                            </span>
                          </strong>
                        </span>
                      </strong>
                    </span>{" "}
                    DISCLAIMER
                  </strong>
                </span>
              </div>
              <div
                className="MsoNormal"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <br />
              </div>
              <div
                className="MsoNormal"
                data-custom-class="body_text"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <span
                  style={{
                    fontSize: "11.0pt",
                    lineHeight: "115%",
                    fontFamily: "Arial",
                    color: "#595959",
                    msoThemecolor: "text1",
                    msoThemetint: 166,
                  }}
                >
                  THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS.
                  YOU AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE
                  RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL
                  WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE
                  SERVICES AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION,
                  THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
                  PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO
                  WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR
                  COMPLETENESS OF THE SERVICES' CONTENT OR THE CONTENT OF ANY
                  WEBSITES OR MOBILE APPLICATIONS LINKED TO THE SERVICES AND WE
                  WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS,
                  MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2)
                  PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER,
                  RESULTING FROM YOUR ACCESS TO AND USE OF THE SERVICES, (3) ANY{" "}
                  <bdt className="block-component" />
                  UNAUTHORIZED
                  <bdt className="statement-end-if-in-editor" /> ACCESS TO OR
                  USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL
                  INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (4)
                  ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE
                  SERVICES, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE
                  WHICH MAY BE TRANSMITTED TO OR THROUGH THE SERVICES BY ANY
                  THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT
                  AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED
                  AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR
                  OTHERWISE MADE AVAILABLE VIA THE SERVICES. WE DO NOT WARRANT,
                  ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT
                  OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE
                  SERVICES, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE
                  APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND
                  WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR
                  MONITORING ANY TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY
                  PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE PURCHASE OF A
                  PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT,
                  YOU SHOULD USE YOUR BEST <bdt className="block-component" />
                  JUDGMENT
                  <bdt className="statement-end-if-in-editor" /> AND EXERCISE
                  CAUTION WHERE APPROPRIATE.
                </span>
              </div>
              <div
                className="MsoNormal"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <br />
              </div>
              <div
                className="MsoNormal"
                data-custom-class="heading_1"
                id="liability"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <strong>
                  <span
                    style={{
                      lineHeight: "115%",
                      fontFamily: "Arial",
                      fontSize: 19,
                    }}
                  >
                    <strong>
                      <span style={{ lineHeight: "24.5333px", fontSize: 19 }}>
                        <strong>
                          <span
                            style={{
                              lineHeight: "115%",
                              fontFamily: "Arial",
                              fontSize: 19,
                            }}
                          >
                            <strong>
                              <span
                                style={{
                                  lineHeight: "115%",
                                  fontFamily: "Arial",
                                  fontSize: 19,
                                }}
                              >
                                18.
                              </span>
                            </strong>
                          </span>
                        </strong>
                      </span>
                      &nbsp;
                    </strong>
                    LIMITATIONS OF LIABILITY
                  </span>
                </strong>
              </div>
              <div
                className="MsoNormal"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <br />
              </div>
              <div
                className="MsoNormal"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <span
                  style={{
                    fontSize: "11.0pt",
                    lineHeight: "115%",
                    fontFamily: "Arial",
                    color: "#595959",
                    msoThemecolor: "text1",
                    msoThemetint: 166,
                  }}
                >
                  <span data-custom-class="body_text">
                    IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS
                    BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT,
                    INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR
                    PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS
                    OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE
                    SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF
                    SUCH DAMAGES.
                  </span>{" "}
                  <bdt
                    className="block-container if"
                    data-type="if"
                    id="3c3071ce-c603-4812-b8ca-ac40b91b9943"
                  >
                    <span data-custom-class="body_text">
                      <bdt data-type="conditional-block">
                        <bdt
                          className="block-component"
                          data-record-question-key="limitations_liability_option"
                          data-type="statement"
                        />
                      </bdt>
                    </span>
                  </bdt>
                </span>
              </div>
              <div
                className="MsoNormal"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <br />
              </div>
              <div
                className="MsoNormal"
                data-custom-class="heading_1"
                id="indemnification"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <strong>
                  <span
                    style={{
                      lineHeight: "115%",
                      fontFamily: "Arial",
                      fontSize: 19,
                    }}
                  >
                    <strong>
                      <span style={{ lineHeight: "24.5333px", fontSize: 19 }}>
                        <strong>
                          <span
                            style={{
                              lineHeight: "115%",
                              fontFamily: "Arial",
                              fontSize: 19,
                            }}
                          >
                            <strong>
                              <span
                                style={{
                                  lineHeight: "115%",
                                  fontFamily: "Arial",
                                  fontSize: 19,
                                }}
                              >
                                19.
                              </span>
                            </strong>
                          </span>
                        </strong>
                      </span>
                      &nbsp;
                    </strong>
                    INDEMNIFICATION
                  </span>
                </strong>
              </div>
              <div
                className="MsoNormal"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <br />
              </div>
              <div
                className="MsoNormal"
                data-custom-class="body_text"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <span
                  style={{
                    fontSize: "11.0pt",
                    lineHeight: "115%",
                    fontFamily: "Arial",
                    color: "#595959",
                    msoThemecolor: "text1",
                    msoThemetint: 166,
                  }}
                >
                  You agree to defend, indemnify, and hold us harmless,
                  including our subsidiaries, affiliates, and all of our
                  respective officers, agents, partners, and employees, from and
                  against any loss, damage, liability, claim, or demand,
                  including reasonable attorneys’ fees and expenses, made by any
                  third party due to or arising out of:{" "}
                  <bdt
                    className="block-container if"
                    data-type="if"
                    id="475fffa5-05ca-def8-ac88-f426b238903c"
                  >
                    <bdt data-type="conditional-block">
                      <bdt
                        className="block-component"
                        data-record-question-key="user_post_content_option"
                        data-type="statement"
                      />
                      <bdt data-type="body">(1) your Contributions;&nbsp;</bdt>
                    </bdt>
                    <bdt
                      className="statement-end-if-in-editor"
                      data-type="close"
                    />
                  </bdt>
                  (<span style={{ fontSize: "14.6667px" }}>2</span>) use of the
                  Services; (<span style={{ fontSize: "14.6667px" }}>3</span>)
                  breach of these Legal Terms; (
                  <span style={{ fontSize: "14.6667px" }}>4</span>) any breach
                  of your representations and warranties set forth in these
                  Legal Terms; (<span style={{ fontSize: "14.6667px" }}>5</span>
                  ) your violation of the rights of a third party, including but
                  not limited to intellectual property rights; or (
                  <span style={{ fontSize: "14.6667px" }}>6</span>) any overt
                  harmful act toward any other user of the Services with whom
                  you connected via the Services. Notwithstanding the foregoing,
                  we reserve the right, at your expense, to assume the exclusive{" "}
                  <bdt className="block-component" />
                  defense
                  <bdt className="statement-end-if-in-editor" /> and control of
                  any matter for which you are required to indemnify us, and you
                  agree to cooperate, at your expense, with our{" "}
                  <bdt className="block-component" />
                  defense
                  <bdt className="statement-end-if-in-editor" /> of such claims.
                  We will use reasonable efforts to notify you of any such
                  claim, action, or proceeding which is subject to this
                  indemnification upon becoming aware of it.
                </span>
              </div>
              <div
                className="MsoNormal"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <br />
              </div>
              <div
                className="MsoNormal"
                data-custom-class="heading_1"
                id="userdata"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <strong>
                  <span
                    style={{
                      lineHeight: "115%",
                      fontFamily: "Arial",
                      fontSize: 19,
                    }}
                  >
                    <strong>
                      <span style={{ lineHeight: "24.5333px", fontSize: 19 }}>
                        <strong>
                          <span
                            style={{
                              lineHeight: "115%",
                              fontFamily: "Arial",
                              fontSize: 19,
                            }}
                          >
                            <strong>
                              <span
                                style={{
                                  lineHeight: "115%",
                                  fontFamily: "Arial",
                                  fontSize: 19,
                                }}
                              >
                                20.
                              </span>
                            </strong>
                          </span>
                        </strong>
                      </span>
                      &nbsp;
                    </strong>
                    USER DATA
                  </span>
                </strong>
              </div>
              <div
                className="MsoNormal"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <br />
              </div>
              <div
                className="MsoNormal"
                data-custom-class="body_text"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <span
                  style={{
                    fontSize: "11.0pt",
                    lineHeight: "115%",
                    fontFamily: "Arial",
                    color: "#595959",
                    msoThemecolor: "text1",
                    msoThemetint: 166,
                  }}
                >
                  We will maintain certain data that you transmit to the
                  Services for the purpose of managing the performance of the
                  Services, as well as data relating to your use of the
                  Services. Although we perform regular routine backups of data,
                  you are solely responsible for all data that you transmit or
                  that relates to any activity you have undertaken using the
                  Services. You agree that we shall have no liability to you for
                  any loss or corruption of any such data, and you hereby waive
                  any right of action against us arising from any such loss or
                  corruption of such data.
                </span>
              </div>
              <div
                className="MsoNormal"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <br />
              </div>
              <div
                className="MsoNormal"
                data-custom-class="heading_1"
                id="electronic"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <strong>
                  <span
                    style={{
                      lineHeight: "115%",
                      fontFamily: "Arial",
                      fontSize: 19,
                    }}
                  >
                    <strong>
                      <span style={{ lineHeight: "24.5333px", fontSize: 19 }}>
                        <strong>
                          <span
                            style={{
                              lineHeight: "115%",
                              fontFamily: "Arial",
                              fontSize: 19,
                            }}
                          >
                            <strong>
                              <span
                                style={{
                                  lineHeight: "115%",
                                  fontFamily: "Arial",
                                  fontSize: 19,
                                }}
                              >
                                21.
                              </span>
                            </strong>
                          </span>
                        </strong>
                      </span>
                      &nbsp;
                    </strong>
                    ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES
                  </span>
                </strong>
              </div>
              <div
                className="MsoNormal"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <br />
              </div>
              <div
                className="MsoNormal"
                data-custom-class="body_text"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <span
                  style={{
                    fontSize: "11.0pt",
                    lineHeight: "115%",
                    fontFamily: "Arial",
                    color: "#595959",
                    msoThemecolor: "text1",
                    msoThemetint: 166,
                  }}
                >
                  Visiting the Services, sending us emails, and completing
                  online forms constitute electronic communications. You consent
                  to receive electronic communications, and you agree that all
                  agreements, notices, disclosures, and other communications we
                  provide to you electronically, via email and on the Services,
                  satisfy any legal requirement that such communication be in
                  writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES,
                  CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC
                  DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS
                  INITIATED OR COMPLETED BY US OR VIA THE SERVICES. You hereby
                  waive any rights or requirements under any statutes,
                  regulations, rules, ordinances, or other laws in any
                  jurisdiction which require an original signature or delivery
                  or retention of non-electronic records, or to payments or the
                  granting of credits by any means other than electronic means.
                </span>
              </div>
              <div
                className="MsoNormal"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <br />
              </div>
              <div
                className="MsoNormal"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <bdt className="block-component" />
              </div>
              <div
                className="MsoNormal"
                data-custom-class="heading_1"
                id="misc"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <strong>
                  <span
                    style={{
                      lineHeight: "115%",
                      fontFamily: "Arial",
                      fontSize: 19,
                    }}
                  >
                    <strong>
                      <span style={{ lineHeight: "24.5333px", fontSize: 19 }}>
                        <strong>
                          <span
                            style={{
                              lineHeight: "115%",
                              fontFamily: "Arial",
                              fontSize: 19,
                            }}
                          >
                            <strong>
                              <span
                                style={{
                                  lineHeight: "115%",
                                  fontFamily: "Arial",
                                  fontSize: 19,
                                }}
                              >
                                22.
                              </span>
                            </strong>
                          </span>
                        </strong>
                      </span>
                      &nbsp;
                    </strong>
                    MISCELLANEOUS
                  </span>
                </strong>
              </div>
              <div
                className="MsoNormal"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <br />
              </div>
              <div
                className="MsoNormal"
                data-custom-class="body_text"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <span
                  style={{
                    fontSize: "11.0pt",
                    lineHeight: "115%",
                    fontFamily: "Arial",
                    color: "#595959",
                    msoThemecolor: "text1",
                    msoThemetint: 166,
                  }}
                >
                  These Legal Terms and any policies or operating rules posted
                  by us on the Services or in respect to the Services constitute
                  the entire agreement and understanding between you and us. Our
                  failure to exercise or enforce any right or provision of these
                  Legal Terms shall not operate as a waiver of such right or
                  provision. These Legal Terms operate to the fullest extent
                  permissible by law. We may assign any or all of our rights and
                  obligations to others at any time. We shall not be responsible
                  or liable for any loss, damage, delay, or failure to act
                  caused by any cause beyond our reasonable control. If any
                  provision or part of a provision of these Legal Terms is
                  determined to be unlawful, void, or unenforceable, that
                  provision or part of the provision is deemed severable from
                  these Legal Terms and does not affect the validity and
                  enforceability of any remaining provisions. There is no joint
                  venture, partnership, employment or agency relationship
                  created between you and us as a result of these Legal Terms or
                  use of the Services. You agree that these Legal Terms will not
                  be construed against us by virtue of having drafted them. You
                  hereby waive any and all <bdt className="block-component" />
                  defenses
                  <bdt className="statement-end-if-in-editor" /> you may have
                  based on the electronic form of these Legal Terms and the lack
                  of signing by the parties hereto to execute these Legal Terms.
                </span>
              </div>
              <div
                className="MsoNormal"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <bdt className="block-component">
                  <span style={{ fontSize: 15 }} />
                </bdt>
              </div>
              <div
                className="MsoNormal"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <br />
              </div>
              <div
                className="MsoNormal"
                data-custom-class="heading_1"
                id="contact"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <strong>
                  <span style={{ lineHeight: "115%", fontFamily: "Arial" }}>
                    <span style={{ fontSize: 19 }}>
                      <strong>
                        <span style={{ lineHeight: "24.5333px", fontSize: 19 }}>
                          <strong>
                            <span
                              style={{
                                lineHeight: "115%",
                                fontFamily: "Arial",
                                fontSize: 19,
                              }}
                            >
                              <strong>
                                <span
                                  style={{
                                    lineHeight: "115%",
                                    fontFamily: "Arial",
                                    fontSize: 19,
                                  }}
                                >
                                  23.
                                </span>
                              </strong>
                            </span>
                          </strong>
                        </span>
                        &nbsp;
                      </strong>
                      CONTACT US
                    </span>
                  </span>
                </strong>
              </div>
              <div
                className="MsoNormal"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <br />
              </div>
              <div
                className="MsoNormal"
                data-custom-class="body_text"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <span
                  style={{
                    fontSize: "11.0pt",
                    lineHeight: "115%",
                    fontFamily: "Arial",
                    color: "#595959",
                    msoThemecolor: "text1",
                    msoThemetint: 166,
                  }}
                >
                  In order to resolve a complaint regarding the Services or to
                  receive further information regarding use of the Services,
                  please contact us at:
                </span>
              </div>
              <div
                className="MsoNormal"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <br />
              </div>
              <div
                className="MsoNormal"
                data-custom-class="body_text"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <span style={{ fontSize: 15 }}>
                  <span style={{ color: "rgb(89, 89, 89)" }}>
                    <bdt className="question">
                      <strong>Grabtern</strong>
                    </bdt>
                    <strong>
                      <bdt className="block-component" />
                    </strong>
                  </span>
                </span>
              </div>
              <div
                className="MsoNormal"
                data-custom-class="body_text"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <span style={{ fontSize: 15 }}>
                  <span
                    style={{
                      lineHeight: "115%",
                      fontFamily: "Arial",
                      color: "rgb(89, 89, 89)",
                    }}
                  >
                    <bdt className="question">
                      <strong>
                        <bdt className="question">Naval Nagar hathras</bdt>
                      </strong>
                    </bdt>
                    <span
                      style={{
                        lineHeight: "115%",
                        fontFamily: "Arial",
                        color: "rgb(89, 89, 89)",
                      }}
                    >
                      <bdt className="statement-end-if-in-editor" />
                    </span>
                    <bdt className="block-component" />
                  </span>
                </span>
              </div>
              <div
                className="MsoNormal"
                data-custom-class="body_text"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <span style={{ fontSize: 15 }}>
                  <strong>
                    <span style={{ color: "rgb(89, 89, 89)" }}>
                      <bdt className="question">Hathras</bdt>
                      <bdt className="block-component" />,{" "}
                      <bdt className="question">Uttar pradesh</bdt>
                      <bdt className="statement-end-if-in-editor" />
                      <bdt className="block-component" />{" "}
                      <bdt className="question">204101</bdt>
                      <bdt className="statement-end-if-in-editor" />
                    </span>
                  </strong>
                  <strong>
                    <span style={{ color: "rgb(89, 89, 89)" }}>
                      <bdt className="block-component" />
                    </span>
                    <bdt className="block-component" />
                  </strong>
                </span>
              </div>
              <div
                className="MsoNormal"
                data-custom-class="body_text"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <bdt className="block-component">
                  <strong />
                </bdt>
                <strong>
                  <bdt className="question">India</bdt>
                </strong>
                <bdt className="statement-end-if-in-editor" />
                <bdt className="statement-end-if-in-editor" />
                <bdt className="statement-end-if-in-editor">
                  <strong />
                </bdt>
              </div>
              <div
                className="MsoNormal"
                data-custom-class="body_text"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <strong>
                  <span
                    style={{
                      fontSize: "11.0pt",
                      lineHeight: "115%",
                      fontFamily: "Arial",
                      color: "#595959",
                      msoThemecolor: "text1",
                      msoThemetint: 166,
                    }}
                  >
                    <strong>
                      <bdt className="block-component" />
                      Phone: <bdt className="question">9368086395</bdt>
                      <bdt className="statement-end-if-in-editor" />
                    </strong>
                  </span>
                </strong>
              </div>
              <div
                className="MsoNormal"
                data-custom-class="body_text"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <strong>
                  <span
                    style={{
                      fontSize: "11.0pt",
                      lineHeight: "115%",
                      fontFamily: "Arial",
                      color: "#595959",
                      msoThemecolor: "text1",
                      msoThemetint: 166,
                    }}
                  >
                    <strong>
                      <bdt className="block-component" />
                    </strong>
                  </span>
                </strong>
              </div>
              <div
                className="MsoNormal"
                data-custom-class="body_text"
                style={{ lineHeight: "1.5", textAlign: "left" }}
              >
                <strong>
                  <span
                    style={{
                      fontSize: "11.0pt",
                      lineHeight: "115%",
                      fontFamily: "Arial",
                      color: "#595959",
                      msoThemecolor: "text1",
                      msoThemetint: 166,
                    }}
                  >
                    <strong>
                      <bdt className="question">contact.grabtern@gmail.com</bdt>
                    </strong>
                  </span>
                </strong>
              </div>
            </div>
          </div>
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n      ul {\n        list-style-type: square;\n      }\n      ul > li > ul {\n        list-style-type: circle;\n      }\n      ul > li > ul > li > ul {\n        list-style-type: square;\n      }\n      ol li {\n        font-family: Arial ;\n      }\n    ",
            }}
          />
        </div>
        <div
          style={{
            color: "#595959",
            fontSize: 14,
            fontFamily: "Arial",
            paddingTop: 16,
          }}
        ></div>
      </div>
      <ScrollToTop/>
    </>
  );
}

export default scrap;
