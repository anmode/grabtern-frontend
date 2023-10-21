import { useEffect, useState } from "react";
import { support } from "../../public/assets";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import { MdSend } from "react-icons/md";
import { BiSolidImageAdd } from "react-icons/bi";
import logo from "../../public/logo.png";
import { useAuth } from "../../context/AuthContext";

const SupportChat = () => {

  const {
    isMentorLoggedIn,
    setIsMentorLoggedIn,
    isUserLoggedIn,
    setIsUserLoggedIn,
  } = useAuth();

  const userData = JSON.parse(localStorage.getItem("userData"));
  const mentorData = JSON.parse(localStorage.getItem("mentorData"));

  useEffect(() => {
    if (userData?.user_name) {
      setIsUserLoggedIn(true);
    }

    if (mentorData?.mentor_name) {
      setIsMentorLoggedIn(true);
    }
  }, [])

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [imageValue, setImageValue] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const toggleChat = () => {
    setIsOpen(true);
  };

  const handleImageChange = (e) => {
    e.preventDefault();
    const file = (e.target.files[0]);
    setImageValue(file);

    const reader = new FileReader();
    reader.onloadend = (e) => {
      setImagePreview(e.target.result);
    };
    reader.readAsDataURL(file);
  }

  const handleTextSubmit = (e) => {
    e.preventDefault();
    if (inputValue) {
      const newMessage = {
        text: inputValue,
        // sender: (userData?.user_name || mentorData?.mentor_name) ? "user" : "support",
        sender: "user",
        time: new Date(),
        image: imageValue
      };

      setMessages([...messages, newMessage]);
      setInputValue("");
      setImageValue(null);
      setImagePreview(null);
    }
  }

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
              <p className="tw-ml-2">{userData?.user_name || mentorData?.mentor_name}</p>
            </div>
            <AiOutlineClose
              onClick={() => setIsOpen(false)}
              className="tw-w-6 tw-h-6 tw-relative tw-text-red-500 hover:tw-text-red-600 tw-ease-in-out tw-transition-all tw-mr-3"
            />
          </div>
          <div>
            {messages.map((message, index) => (
              <div key={index} className={`tw-relative ${message.sender === "support" ? "tw-text-left tw-justify-start" : "tw-text-right tw-justify-end tw-items-end"}`}>
                {message.image && (
                  <Image src={URL.createObjectURL(message.image)} alt="Uploaded Image" width={100} height={100} />
                )}
                <div
                  className={`tw-bg-indigo-400 ${message.text && message.text.length > 20 ? "tw-w-[200px]" : "tw-w-[100px]"
                    } tw-rounded-md tw-p-2 tw-m-1 tw-text-white tw-text-sm tw-shadow-lg tw-opacity-80 hover:tw-opacity-100 ${isOpen ? "tw-opacity-100" : "tw-opacity-80"
                    }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>
          {/* <div>
            {messages.map((message, index) => (
              <div key={index}>
                {message.sender === ("user" || "mentor") ? (
                  <div
                    className={`tw-bg-indigo-400 ${message.text.length > 20 ? "tw-w-[200px]" : "tw-w-[100px]"
                      } tw-rounded-md tw-p-2 tw-m-1 tw-text-white tw-text-sm tw-ml-auto tw-break-words tw-shadow-lg tw-opacity-80 hover:tw-opacity-100 ${isOpen ? "tw-opacity-100" : "tw-opacity-80"
                      }`}
                  >
                    {
                      imagePreview && (
                        <Image src={imagePreview} alt="preview" width={50} height={50} className="tw-rounded-sm" />
                      )
                    }
                    {message.text}
                  </div>
                ) : (
                  <div
                    className={`tw-bg-indigo-500 ${message.text.length > 20 ? "tw-w-[200px]" : "tw-w-[100px]"
                      } tw-rounded-md tw-p-2 tw-m-1 tw-text-white tw-text-sm tw-ml-3 tw-break-words tw-shadow-lg tw-opacity-80 hover:tw-opacity-100 ${isOpen ? "tw-opacity-100" : "tw-opacity-80"
                      }`}
                  >
                    {message.text}
                  </div>
                )}
              </div>
            ))}
          </div> */}

          <form
            onSubmit={handleTextSubmit}
            className="tw-flex tw-flex-col tw-justify-between tw-items-center tw-m-2 tw-sticky tw-bottom-0 tw-bg-cyan-200 tw-z-40 tw-gap-2 tw-text-center"
          >
            {imagePreview && (
              <div className="tw-rounded-sm tw-flex tw-bg-cyan-500 tw-p-1 tw-w-full">
                <Image src={imagePreview} alt="Image Preview" width={100} height={100} />
              </div>
            )}
            <div className="tw-flex tw-justify-center tw-items-center tw-text-center">
              <label htmlFor="imageValue" className="tw-relative">
                <BiSolidImageAdd className="tw-w-6 tw-h-6 tw-text-indigo-400 hover:tw-text-indigo-500 tw-ease-in-out tw-transition-all tw-cursor-pointer tw-items-center tw-text-center" />
              </label>
              <input
                className="tw-hidden"
                id="imageValue" type="file"
                onChange={handleImageChange}
              />
              <input
                className="tw-w-full tw-p-1 tw-rounded-md tw-border tw-border-gray-300 tw-placeholder-gray-500 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-blue-400 focus:tw-border-transparent"
                type="text"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
              />
              {/* Only when mentor or user is logged in, can send the message */}
              {/* {
              isMentorLoggedIn || isUserLoggedIn ? (
                <button type="submit" className="tw-relative">
                  <MdSend className="tw-w-6 tw-h-6 tw-text-indigo-400" />
                </button>
              ) : (
                <Link className="tw-bg-indigo-400 tw-w-1/2 tw-text-sm tw-rounded-sm tw-font-semibold tw-text-white tw-p-1 hover:tw-bg-indigo-500 tw-ease-in-out" href="/">Sign In</Link>
              )
            } */}

              {/* can be changed later, until fully functional */}
              <button type="submit" className="tw-relative">
                <MdSend className="tw-w-6 tw-h-6 tw-text-indigo-400" />
              </button>
            </div>

          </form>
        </div>
      ) : (
        <button onClick={() => setIsOpen(true)}>
          <Image
            className={`tw-rounded-full tw-bg-[#845ec2] hover:tw-bg-[#845ec0] tw-p-2 tw-shadow-lg tw-opacity-80 hover:tw-opacity-100 ${isOpen ? "tw-opacity-100" : "tw-opacity-80"
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
