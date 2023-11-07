import React, { useState, useEffect } from "react";
import { AiOutlineFieldNumber } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { BiSolidBank } from "react-icons/bi";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { MdNumbers } from "react-icons/md";
import Form from "./PaymentComponent/Form";
import { Button } from "../UI";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import Loader from "../UI/Loader";

const Payments = ({ setLoadingState, setErrorState }) => {
  // const [formData, setFormData] = useState(initialFormData);
  const [account, setAccount] = useState();
  const [loader, setLoader] = useState(false);
  const [editForm, setEditForm] = useState(false);
  const [addForm, setAddForm] = useState(false);
  const router = useRouter();

  // getting account details from backend
  const getDetails = async () => {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mentors/getAccountDetails/`;
    try {
      setLoadingState({ status: true });
      setErrorState({ status: false });
      const response = await axios.get(url, { withCredentials: true });
      const data = await response.data;
      setAccount(data);
      setLoadingState({ status: false });
    } catch (error) {
      setLoadingState({ status: false });
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setErrorState({ status: true, message: error.response.data.message });
      } else {
        setErrorState({ status: true });
      }
    }
  };

  //getting data on load
  useEffect(() => {
    getDetails();
  }, []);

  // edit details function
  const editDetails = async (formData) => {
    setLoader(true);
    if (
      !formData.name ||
      !formData.accountNo ||
      !formData.ifscCode ||
      !formData.nameOfBank
    ) {
      toast.error("Please fill all the details");
      setLoader(false);
      return;
    }
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mentors/updateAccountDetails/`;
    try {
      const response = await axios.put(
        url,
        { ...formData },
        { withCredentials: true },
      );
      const data = await response.data;
      setAccount(data);
      setEditForm(false);
      setLoader(false);
      toast.success("Changes Saved Successfully");
    } catch (error) {
      setLoader(false);
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Some Error occur, please try again later");
      }
    }
  };

  // add details function
  const addDetails = async (formData) => {
    setLoader(true);
    if (
      !formData.name ||
      !formData.accountNo ||
      !formData.ifscCode ||
      !formData.nameOfBank
    ) {
      toast.error("Please fill all the details");
      setLoader(false);
      return;
    }
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/mentors/addAccountDetails/`;
    try {
      const response = await axios.post(
        url,
        { ...formData },
        { withCredentials: true },
      );
      const data = await response.data;
      setAccount(data);
      setAddForm(false);
      setLoader(false);
      toast.success("Account added sucessfully");
    } catch (error) {
      setLoader(false);
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Some Error occur, please try again later");
      }
    }
  };

  return (
    <div className="tw-w-full">
      {!account ? (
        <div className="tw-py-4 tw-w-full">
          {" "}
          {addForm ? (
            //  add account form
            <Form
              account={account}
              closeForm={() => {
                setAddForm(false);
              }}
              buttonText="Add Account"
              handleSubmit={addDetails}
            />
          ) : (
            // add account card
            <div className="tw-flex tw-w-full tw-justify-center tw-items-center tw-p-4">
              <div className="tw-w-full flex tw-flex-wrap">
                <div className="tw-p-4 tw-bg-white tw-flex tw-flex-col tw-gap-4">
                  <h2 className="tw-text-center tw-font-medium tw-text-3xl tw-mt-5 tw-text-[#845ec2] max-[512px]:tw-items-center tw-flex">
                    Add Your Account
                  </h2>
                  <p className="tw-my-5">
                    It seems like you have not added your account yet!
                  </p>
                  {!loader ? (
                    <Button
                      text="Add Account"
                      onClick={() => {
                        setAddForm(true);
                      }}
                    />
                  ) : (
                    <Loader width="20px" />
                  )}
                </div>
              </div>
            </div>
          )}{" "}
        </div>
      ) : (
        <>
          {editForm ? (
            // edit details form
            <Form
              account={account}
              closeForm={() => {
                setEditForm(false);
              }}
              buttonText="Save Changes"
              handleSubmit={editDetails}
              Loading={loader}
            />
          ) : (
            <div className="tw-flex tw-justify-center tw-items-center tw-p-4">
              {/* payments card */}
              <div className="tw-flex tw-flex-wrap tw-w-full">
                <div className="tw-p-4 tw-bg-white tw-w-full">
                  <div className="tw-flex tw-justify-between tw-items-center">
                    <h2 className="tw-text-center tw-font-medium tw-text-5xl tw-mt-5  tw-text-[#845ec2]">
                      Payment
                    </h2>
                    <button
                      className="tw-bg-black tw-text-center tw-text-white tw-rounded-md tw-px-4 tw-py-2 hover:tw-bg-gray-700 tw-font-semibold tw-text-base"
                      onClick={() => setEditForm(true)}
                    >
                      Edit
                    </button>
                  </div>
                  <hr
                    style={{
                      margin: "10px 0",
                      borderColor: "grey",
                      gridColumn: "1/3",
                    }}
                  />
                  <div className="tw-flex tw-items-center">
                    <div className="tw-flex tw-flex-col tw-justify-center tw-items-start tw-gap-5">
                      <h2 className="tw-text-center tw-font-medium tw-text-3xl tw-mt-5 tw-text-[#845ec2] max-[512px]:tw-items-center tw-flex">
                        Bank Details
                      </h2>
                      {/* name */}
                      <div className="tw-flex tw-justify-center tw-items-center tw-text-center tw-gap-4 ">
                        <div className="tw-flex tw-justify-center tw-items-center tw-gap-5 max-[512px]:tw-gap-2">
                          <BsFillPersonFill className="tw-text-2xl max-[512px]:tw-text-xl" />
                          <h2 className="tw-font-semibold tw-text-xl max-[512px]:tw-text-sm">
                            Name :
                          </h2>
                        </div>
                        <span className="tw-text-primary-100 tw-font-medium tw-text-lg max-[512px]:tw-text-sm">
                          {account?.name || "Unavailable"}
                        </span>
                      </div>
                      {/* ifsc */}
                      <div className="tw-flex tw-justify-center tw-items-center tw-text-center tw-gap-4 ">
                        <div className="tw-flex tw-justify-center tw-items-center tw-gap-5  max-[512px]:tw-gap-2">
                          <MdNumbers className="tw-text-2xl max-[512px]:tw-text-xl tw-text-yellow-700" />
                          <h2 className="tw-font-semibold tw-text-xl max-[512px]:tw-text-sm">
                            IFSC Code :
                          </h2>
                        </div>
                        <span className="tw-text-primary-100 tw-font-medium tw-text-lg max-[512px]:tw-text-sm">
                          {account?.ifscCode || "Unavailable"}
                        </span>
                      </div>
                      {/* account no */}
                      <div className="tw-flex tw-justify-center tw-items-center tw-text-center tw-gap-4 ">
                        <div className="tw-flex tw-justify-center tw-items-center tw-gap-5  max-[512px]:tw-gap-2">
                          <AiOutlineFieldNumber className="tw-text-2xl max-[512px]:tw-text-xl" />
                          <h2 className="tw-font-semibold tw-text-xl max-[512px]:tw-text-sm">
                            Account No :
                          </h2>
                        </div>
                        <span className="tw-text-primary-100 tw-font-medium tw-text-lg max-[512px]:tw-text-sm">
                          {account?.accountNo || "Unavailable"}
                        </span>
                      </div>
                      {/* bank name */}
                      <div className="tw-flex tw-justify-center tw-items-center tw-text-center tw-gap-4 ">
                        <div className="tw-flex tw-justify-center tw-items-center tw-gap-5  max-[512px]:tw-gap-2">
                          <BiSolidBank className="tw-text-2xl max-[512px]:tw-text-xl tw-text-slate-700" />
                          <h2 className="tw-font-semibold tw-text-xl max-[512px]:tw-text-sm">
                            Bank :
                          </h2>
                        </div>
                        <span className="tw-text-primary-100 tw-font-medium tw-text-lg max-[512px]:tw-text-sm">
                          {account?.nameOfBank || "Unavailable"}
                        </span>
                      </div>
                      {/* upi ID */}
                      <div className="tw-flex tw-justify-center tw-items-center tw-text-center tw-gap-4 ">
                        <div className="tw-flex tw-justify-center tw-items-center tw-gap-5  max-[512px]:tw-gap-2">
                          <FaRegMoneyBillAlt className="tw-text-2xl max-[512px]:tw-text-xl tw-text-[#00C9A7]" />
                          <h2 className="tw-font-semibold tw-text-xl max-[512px]:tw-text-sm">
                            UPI ID :
                          </h2>
                        </div>
                        <span className="tw-text-primary-100 tw-font-medium tw-text-lg max-[512px]:tw-text-sm">
                          {account?.upiID || "Unavailable"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}{" "}
        </>
      )}
    </div>
  );
};

export default Payments;
