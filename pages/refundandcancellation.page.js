import React from "react";
import dynamic from "next/dynamic";
import Header from "../components/Header";
const Footer = dynamic(() => import("../components/Footer"));
function scrap() {
  return (
    <>
      <Header navbarBackground={true} />
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n  [data-custom-class='body'], [data-custom-class='body'] * {\n          background: transparent !important;\n        }\n[data-custom-class='title'], [data-custom-class='title'] * {\n          font-family: Arial !important;\nfont-size: 26px !important;\ncolor: #000000 !important;\n        }\n[data-custom-class='subtitle'], [data-custom-class='subtitle'] * {\n          font-family: Arial !important;\ncolor: #595959 !important;\nfont-size: 14px !important;\n        }\n[data-custom-class='heading_1'], [data-custom-class='heading_1'] * {\n          font-family: Arial !important;\nfont-size: 19px !important;\ncolor: #000000 !important;\n        }\n[data-custom-class='heading_2'], [data-custom-class='heading_2'] * {\n          font-family: Arial !important;\nfont-size: 17px !important;\ncolor: #000000 !important;\n        }\n[data-custom-class='body_text'], [data-custom-class='body_text'] * {\n          color: #595959 !important;\nfont-size: 14px !important;\nfont-family: Arial !important;\n        }\n[data-custom-class='link'], [data-custom-class='link'] * {\n          color: #3030F1 !important;\nfont-size: 14px !important;\nfont-family: Arial !important;\nword-break: break-word !important;\n        }\n",
        }}
      />
      <div data-custom-class="body">
        <div>
          <div
            align="center"
            className="MsoNormal"
            style={{ textAlign: "center", lineHeight: "115%" }}
          >
            <a name="_2cipo4yr3w5d" />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div
              align="center"
              className="MsoNormal ret_pol"
              style={{ textAlign: "center", lineHeight: "150%" }}
            >
              <strong>
                <span style={{ fontSize: 36 }}>
                  <span>RETURN POLICY</span>
                </span>
              </strong>
            </div>
            {/* <div
              align="center"
              className="MsoNormal"
              style={{ textAlign: "left", lineHeight: "150%" }}
            >
              <br />
            </div>
            <div
              align="center"
              className="MsoNormal"
              style={{ textAlign: "left", lineHeight: "150%" }}
            >
              <span style={{ fontSize: 15 }}>
                <span style={{ color: "rgb(89, 89, 89)" }}>
                  <strong>
                    <span data-custom-class="subtitle">
                      Last updated{" "}
                      <bdt className="question">April 24, 2023</bdt>
                    </span>
                  </strong>
                </span>
              </span>
            </div> */}
            <div
              align="center"
              className="MsoNormal"
              style={{ textAlign: "center", lineHeight: "150%" }}
            >
              <br />
            </div>
          </div>
          <div
            className="MsoNormal ret_pol2"
            // data-custom-class="body_text"
            style={{ lineHeight: "1.5" }}
          >
            <span
              style={{
                fontSize: 18,
                lineHeight: "115%",
                // fontFamily: "Arial",
                // color: "rgb(89, 89, 89)",
              }}
            >
              <bdt className="block-component" />
              Thank you for your booking the session. However, if you are not
              completely satisfied with session for any reason, you may need to
              cancel it for{" "}
              <bdt
                className="block-container if"
                data-type="if"
                id="03b751bb-5eee-5230-df87-d0707fec3124"
              >
                <bdt data-type="conditional-block">
                  <bdt
                    className="block-component"
                    data-record-question-key="policy_type"
                    data-type="statement"
                  />
                  <bdt data-type="body">a full refund only</bdt>
                </bdt>
                <bdt data-type="conditional-block">
                  <bdt
                    className="block-component"
                    data-record-question-key="policy_type"
                    data-type="statement"
                  />
                </bdt>
                . Please see below for more information on our return policy.
              </bdt>
            </span>
          </div>
        </div>
        <div style={{ lineHeight: "1.1" }}>
          <br />
        </div>
        <div>
          <div
            className="MsoNormal"
            style={{ lineHeight: "1.5", textAlign: "center" }}
          >
            <br />
          </div>
          <div className="MsoNormal refund" style={{ lineHeight: "1.5" }}>
            <a name="_qxq7t4ufn5pr" />
            <strong>
              <span
                style={{
                  lineHeight: "115%",
                  fontSize: 29,
                }}
              >
                REFUNDS
              </span>
            </strong>
          </div>
          <div className="MsoNormal" style={{ lineHeight: "115%" }}>
            <a name="_kcap2nw8xg2p" />
          </div>
          <div className="MsoNormal" style={{ lineHeight: "1.5" }}>
            <br />
          </div>
          <div className="MsoNormal ret_pol2" style={{ lineHeight: "1.5" }}>
            <span
              style={{
                fontSize: 18,

                lineHeight: "115%",
              }}
            >
              After receiving cancellation of the session , we will process your{" "}
              <bdt
                className="block-container if"
                data-type="if"
                id="4c11860e-4346-687b-5cb3-3727f319e194"
              >
                <bdt data-type="conditional-block">
                  <bdt
                    className="block-component"
                    data-record-question-key="policy_type"
                    data-type="statement"
                  />
                  <bdt data-type="body">cancel request</bdt>
                </bdt>
                <bdt className="statement-end-if-in-editor" data-type="close" />
              </bdt>
              . Please allow at least{" "}
              <bdt
                className="block-container question question-in-editor"
                data-id="ab10b1ab-f4a1-256f-29ae-65257d891371"
                data-type="question"
              >
                two (2)
              </bdt>{" "}
              days from the receipt of your of your{" "}
              <bdt
                className="block-container if"
                data-type="if"
                id="4c11860e-4346-687b-5cb3-3727f319e194"
                style={{ fontSize: "18px" }}
              >
                <bdt data-type="conditional-block">
                  <bdt
                    className="block-component"
                    data-record-question-key="policy_type"
                    data-type="statement"
                  />
                  <bdt data-type="body">booking session payment reciept</bdt>
                </bdt>
                <bdt className="statement-end-if-in-editor" data-type="close" />
              </bdt>
              .
              <bdt
                className="block-container if"
                data-type="if"
                id="16f989a0-873e-9d7c-70f2-1c4b9cc7ecc4"
              >
                <bdt data-type="conditional-block">
                  <bdt
                    className="block-component"
                    data-record-question-key="policy_type"
                    data-type="statement"
                  />
                  <bdt data-type="body">
                    &nbsp;Refunds may take 1-2 billing cycles to appear on your
                    credit card statement, depending on your credit card
                    company.
                  </bdt>
                </bdt>
                <bdt className="statement-end-if-in-editor" data-type="close" />
              </bdt>
              <bdt
                className="block-container if"
                data-type="if"
                id="b49c01dc-6b19-275b-5996-06e6aeaaf917"
              >
                <bdt data-type="conditional-block">
                  <bdt
                    className="block-component"
                    data-record-question-key="customer_notification_option"
                    data-type="statement"
                  />
                  <bdt data-type="body">
                    &nbsp;We will notify you by email when your return has been
                    processed.
                  </bdt>
                </bdt>
              </bdt>
              <bdt
                className="block-container if"
                data-type="if"
                id="b49c01dc-6b19-275b-5996-06e6aeaaf917"
              >
                <bdt className="statement-end-if-in-editor" data-type="close" />
              </bdt>
            </span>
          </div>
          <div style={{ lineHeight: "1.5" }}>
            <br />
          </div>
          <div className="MsoNormal questions" style={{ lineHeight: "1.5" }}>
            <span style={{ fontSize: 29 }}>
              <strong>QUESTIONS</strong>
            </span>
          </div>
          <div style={{ lineHeight: "1.5" }}>
            <br />
          </div>
          <div
            className="MsoNormal ret_pol2"
            style={{ lineHeight: "1.5", marginBottom: "30px" }}
          >
            <span style={{ fontSize: 18 }}>
              If you have any questions concerning our return policy, please
              contact us at: contact.grabtern@gmail.com
            </span>
          </div>

          <div data-custom-class="body_text" style={{ lineHeight: "1.1" }}>
            {/* <br /> */}
          </div>
          <div className="MsoNormal ret_pol2" style={{ lineHeight: "1.5" }}>
            <span style={{ fontSize: 18 }}>
              <bdt className="block-component" />
            </span>
          </div>
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n      ul {\n        list-style-type: square;\n      }\n      ul > li > ul {\n        list-style-type: circle;\n      }\n      ul > li > ul > li > ul {\n        list-style-type: square;\n      }\n      ol li {\n        font-family: Arial ;\n      }\n    ",
            }}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
export default scrap;
