import React, { useState, useEffect } from "react";
import { BsXLg, BsClipboard } from "react-icons/bs";
import {
  FaTwitter,
  FaFacebook,
  FaWhatsapp,
  FaLinkedin,
  FaEnvelope,
  FaTelegram,
  FaDiscord,
} from "react-icons/fa";

export default function SharePageModal({ handleClose, username }) {
  const shareLink = `${process.env.NEXT_PUBLIC_FRONTEND_URL}/${username}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareLink);
    alert("Copied to clipboard!");
  };

  const handleShareTwitter = () => {
    const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      shareLink,
    )}`;
    window.open(url, "_blank");
  };

  const handleShareFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      shareLink,
    )}`;
    window.open(url, "_blank");
  };

  const handleShareWhatsApp = () => {
    const text = `Hey, I found this awesome mentor page: `;
    const url = `whatsapp://send?text=${encodeURIComponent(
      text,
    )}${encodeURIComponent(shareLink)}`;
    window.open(url, "_blank");
  };

  const handleShareLinkedIn = () => {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      shareLink,
    )}`;
    window.open(url, "_blank");
  };

  const handleShareEmail = () => {
    const subject = "Check out this mentor page!";
    const body = `Hey, I found this awesome mentor page: ${shareLink}`;
    const url = `mailto:?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    window.open(url);
  };

  const handleShareTelegram = () => {
    const text = `Hey, I found this awesome mentor page:`;
    const url = `https://t.me/share/url?url=${encodeURIComponent(
      shareLink,
    )}&text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  const handleShareDiscord = () => {
    const text = `Hey, I found this awesome mentor page:`;
    const url = `https://discord.com/channels/@me?url=${encodeURIComponent(
      shareLink,
    )}`;
    window.open(url, "_blank");
  };

  const [containerWidth, setContainerWidth] = useState("448px");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setContainerWidth("90%");
      } else {
        setContainerWidth("448px");
      }
    };

    handleResize(); // Call the function once to set the initial width
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* Share mentor page modal */}
      <div className="tw-flex tw-flex-row tw-items-center tw-justify-center tw-fixed tw-top-0 tw-left-0 tw-bg-black/25 tw-w-full tw-h-full tw-z-[999]">
        {/* Modal Container */}
        <div
          className="tw-flex tw-flex-col tw-items-stretch tw-justify-start tw-bg-white tw-rounded-[36px] tw-p-[30px] tw-gap-4"
          style={{ width: containerWidth }}
        >
          {/* Modal Heading */}
          <div className="tw-flex tw-flex-row tw-items-center tw-justify-between">
            <h1 className="tw-text-[28px] tw-font-semibold tw-text-[#4338CA]">
              Share Page
            </h1>
            <button
              className="tw-text-[28px] tw-text-[#4338CA] hover:tw-bg-[#4338CA]/25 active:tw-bg-[#4338CA]/50 tw-p-4 tw-rounded-full tw-transition-all"
              onClick={handleClose}
            >
              <BsXLg />
            </button>
          </div>
          {/* Modal Content */}
          <div className="tw-font-medium">
            Here is the link of the mentor page that you can share with your
            friends:
          </div>
          {/* Social media icons */}
          <div className="tw-flex tw-mt-2 tw-space-x-7 sm:tw-ml-5 md:tw-ml-7 lg:tw-ml-8">
            <button
              className="tw-text-[24px] tw-text-blue-500 hover:tw-text-blue-600"
              onClick={handleShareTwitter}
            >
              <FaTwitter />
            </button>
            <button
              className="tw-text-[24px] tw-text-blue-800 hover:tw-text-blue-900"
              onClick={handleShareFacebook}
            >
              <FaFacebook />
            </button>
            <button
              className="tw-text-[24px] tw-text-green-500 hover:tw-text-green-600"
              onClick={handleShareWhatsApp}
            >
              <FaWhatsapp />
            </button>
            <button
              className="tw-text-[24px] tw-text-blue-700 hover:tw-text-blue-800"
              onClick={handleShareLinkedIn}
            >
              <FaLinkedin />
            </button>
            <button
              className="tw-text-[24px] tw-text-red-600 hover:tw-text-red-700"
              onClick={handleShareEmail}
            >
              <FaEnvelope />
            </button>
            <button
              className="tw-text-[24px] tw-text-blue-400 hover:tw-text-blue-500"
              onClick={handleShareTelegram}
            >
              <FaTelegram />
            </button>
            <button
              className="tw-text-[24px] tw-text-blue-600 hover:tw-text-blue-400"
              onClick={handleShareDiscord}
            >
              <FaDiscord />
            </button>
          </div>
          {/* Modal Link with copy link button */}
          <div className="tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-justify-between tw-bg-gray-100 tw-pl-6 tw-pr-0 tw-py-0 tw-rounded-2xl">
            {/* Modal Link */}
            <div className="tw-font-mono">{shareLink}</div>
            {/* Copy link button */}
            <button
              className="tw-text-[18px] tw-text-gray-800 hover:tw-bg-gray-300 active:tw-bg-gray-300 tw-p-4 tw-rounded-lg  tw-transition-all"
              onClick={handleCopyLink}
            >
              <BsClipboard />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
