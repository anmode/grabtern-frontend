import { useState } from "react";
import { support } from "../../public/assets";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import { MdSend } from "react-icons/md";
import logo from "../../public/logo.png";

const SupportChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const toggleChat = () => {
    setIsOpen(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessages([...messages, { text: inputValue, sender: "user" }]);
    setInputValue("");
  };

  return (
    <div className="tw-flex tw-z-[1000] tw-text-center tw-fixed tw-bottom-0 tw-right-0 tw-mr-8 tw-mb-32 tw-cursor-pointer">
      {isOpen ? (
        <div className="tw-w-[280px] tw-h-[380px] tw-flex tw-flex-col tw-bg-cyan-200 tw-shadow-lg tw-rounded-md tw-outline-black tw-overflow-y-scroll tw-overflow-x-hidden tw-justify-between">
          <div className="tw-flex tw-text-center tw-justify-between tw-w-full tw-items-center tw-top-0 tw-sticky tw-bg-cyan-200 tw-z-40">
            <div className="tw-flex tw-items-center tw-justify-center">
              <Image src={logo} alt="logo" width={55} height={55} />
              <h1 className="tw-text-md tw-font-bold tw-text-cyan-700">
                Support
              </h1>
            </div>
            <AiOutlineClose
              onClick={() => setIsOpen(false)}
              className="tw-w-6 tw-h-6 tw-relative tw-text-red-500 hover:tw-text-red-600 tw-ease-in-out tw-transition-all tw-mr-3"
            />
          </div>
          <div>
            {messages.map((message, index) => (
              <div key={index}>
                {message.sender === "user" ? (
                  <div
                    className={`tw-bg-indigo-400 ${
                      message.text.length > 20 ? "tw-w-[200px]" : "tw-w-[100px]"
                    } tw-rounded-md tw-p-2 tw-m-1 tw-text-white tw-text-sm tw-ml-auto tw-break-words tw-shadow-lg tw-opacity-80 hover:tw-opacity-100 ${
                      isOpen ? "tw-opacity-100" : "tw-opacity-80"
                    }`}
                  >
                    {message.text}
                  </div>
                ) : (
                  <div
                    className={`tw-bg-indigo-500 ${
                      message.text.length > 20 ? "tw-w-[200px]" : "tw-w-[100px]"
                    } tw-rounded-md tw-p-2 tw-m-1 tw-text-white tw-text-sm tw-ml-3 tw-break-words tw-shadow-lg tw-opacity-80 hover:tw-opacity-100 ${
                      isOpen ? "tw-opacity-100" : "tw-opacity-80"
                    }`}
                  >
                    {message.text}
                  </div>
                )}
              </div>
            ))}
          </div>
          <form
            onSubmit={handleSubmit}
            className="tw-flex tw-justify-between tw-items-center tw-m-2 tw-sticky tw-bottom-0 tw-bg-cyan-200 tw-z-40 tw-gap-2"
          >
            <input
              className="tw-w-full tw-p-1 tw-rounded-md tw-border tw-border-gray-300 tw-placeholder-gray-500 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-blue-400 focus:tw-border-transparent"
              type="text"
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
            />
            <button type="submit" className="tw-relative">
              <MdSend className="tw-w-6 tw-h-6 tw-text-indigo-400" />
            </button>
          </form>
        </div>
      ) : (
        <button onClick={() => setIsOpen(true)}>
          <Image
            className={`tw-rounded-full tw-bg-[#845ec2] hover:tw-bg-[#845ec0] tw-p-2 tw-shadow-lg tw-opacity-80 hover:tw-opacity-100 ${
              isOpen ? "tw-opacity-100" : "tw-opacity-80"
            }`}
            title="support"
            src={support}
            alt="support"
            width={50}
            height={50}
          />
        </button>
      )}
    </div>
  );
};

export default SupportChat;
