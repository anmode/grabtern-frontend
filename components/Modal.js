import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import Link from "next/link";

function Modal(modalOpen) {
  const [isModalOpen, setIsModalOpen] = useState(modalOpen);
  const [isPublished, setIsPublished] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const Publish = async () => {
    setIsLoading(true);
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mentors/publishProfile`;
    try {
      await axios.put(url, {}, { withCredentials: true });
      setIsPublished(true);
      setIsLoading(false);
      toast.success("You Profile published successfully");
    } catch (error) {
      setIsLoading(false);
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An error occurred while publishing your profile.");
      }
    }
  };

  const UnPublish = async () => {
    setIsLoading(true);
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mentors/unpublishProfile`;
    try {
      await axios.put(url, {}, { withCredentials: true });
      setIsPublished(false);
      setIsLoading(false);
      toast.success("You Profile is unpublished now");
    } catch (error) {
      setIsLoading(false);
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An error occurred while unpublishing your profile.");
      }
    }
  };

  const getIsPublished = async () => {
    setIsLoading(true);
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mentors/getIsProfilePublished`;
    try {
      const response = await axios.get(url, { withCredentials: true });
      setIsPublished(response.data.isProfilePublished);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An error occurred while getting your profile status.");
      }
    }
  };

  // getting state of profile on load
  useEffect(() => {
    console.log(isModalOpen.isModalOpen);
    localStorage.setItem("isMentorModalHadOppenedBefore", "true");
    getIsPublished();
  }, []);
  return (
    isModalOpen.isModalOpen === true && (
      <div className="modal-overlay">
        <div className="modal-content">
          <div className="modal-header">
            <h2>Welcome to our dashboard</h2>
            <span className="close-button" onClick={() => closeModal()}>
              &times;
            </span>
          </div>
          <ul className="modal-buttons">
            <li>
              <button
                onClick={() => {
                  if (!isLoading) {
                    isPublished ? UnPublish() : Publish();
                  }
                }}
              >
                {isPublished ? "Unpublish profile" : "Publish profile"}
              </button>
            </li>
            <li>
              <Link
                href="/dashboard/mentor?tab=profile"
                onClick={() => setIsModalOpen(false)}
              >
                <button>Edit Profile</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    )
  );
}

export default Modal;
