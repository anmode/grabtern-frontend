import React, { useState, useEffect } from "react";
import { AiFillCloseCircle, AiOutlineFieldNumber } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { BiSolidBank } from "react-icons/bi";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { MdNumbers } from "react-icons/md";

const Payments = ({ mentorDetail }) => {
  const initialFormData = {
    name: mentorDetail?.name || "", // Make sure to handle null/undefined case
    ifsccode: mentorDetail?.ifsccode || "",
    accountno: mentorDetail?.accountno || "",
    nameofbank: mentorDetail?.nameofbank || "",
    upiID: mentorDetail?.upiID || "",
    amountToBePaid: mentorDetail?.amountToBePaid || "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [editForm, setEditForm] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent Form from Refreshing
  };
  return (
    <>
      {editForm ? (
        <div className="tw-flex tw-justify-center tw-items-center tw-pt-20 tw-pl-[200px] max-[990px]:tw-pl-[150px] max-[715px]:tw-pl-[100px] tw-flex-wrap max-[512px]:tw-p-0 max-[512px]:tw-m-0 tw-pb-10">
          <div className="tw-w-[800px] flex tw-flex-wrap max-[990px]:tw-w-[500px] max-[715px]:tw-w-[400px]">
            <div className="tw-p-4 tw-bg-white tw-shadow-xl max-[512px]:tw-w-screen max-[512px]:tw-h-screen max-[512px]:tw-overflow-y-auto max-[512px]:tw-p-10">
              <AiFillCloseCircle
                onClick={() => setEditForm(false)}
                title="cancel"
                className="tw-font-semibold tw-text-4xl tw-text-black tw-cursor-pointer"
              />
              <form
                className="mentorFormEdit max-[512px]:tw-justify-center max-[512px]:tw-items-center max-[512px]:tw-flex max-[512px]:tw-flex-col tw-flex tw-flex-col"
                onSubmit={handleSubmit}
              >
                <h2 className="tw-flex tw-items-center tw-justify-center tw-text-center tw-font-medium tw-text-5xl tw-mt-5 tw-text-[#845ec2]">
                  Payment
                </h2>
                <div class="tw-grid md:tw-grid-cols-2 md:tw-gap-6 tw-mb-6">
                  <div class="tw-relative tw-z-0 tw-w-full tw-mb-6 tw-group">
                    <label
                      class="tw-block tw-uppercase tw-tracking-wide tw-text-gray-700 tw-text-xs tw-font-bold tw-mb-2"
                      for="account-holder-name"
                    >
                      ACCOUNT HOLDER NAME
                    </label>
                    <input
                      type="text"
                      name="name"
                      class="tw-appearance-none tw-block tw-w-full tw-border-solid tw-border-4 tw-border-[#dcdcdc] tw-rounded tw-py-3 tw-px-4 tw-mb-3"
                      onChange={(e) => handleChange(e)}
                      placeholder="e.g. Peter Parker"
                      value={formData.name}
                    />
                  </div>
                  <div class="tw-relative tw-z-0 tw-w-full tw-mb-6 tw-group">
                    <label
                      class="tw-block tw-uppercase tw-tracking-wide tw-text-gray-700 tw-text-xs tw-font-bold tw-mb-2"
                      for="ifsc-code"
                    >
                      IFSC CODE
                    </label>
                    <input
                      class="tw-appearance-none tw-block tw-w-full tw-border-solid tw-border-4 tw-border-[#dcdcdc] tw-rounded tw-py-3 tw-px-4 tw-mb-3"
                      type="text"
                      name="ifsccode"
                      onChange={(e) => handleChange(e)}
                      placeholder="SBINXXXXXX"
                      value={formData.ifsccode}
                    />
                  </div>
                  <div class="tw-relative tw-z-0 tw-w-full tw-mb-6 tw-group">
                    <label
                      class="tw-block tw-uppercase tw-tracking-wide tw-text-gray-700 tw-text-xs tw-font-bold tw-mb-2"
                      for="account-no"
                    >
                      ACCOUNT NUMBER
                    </label>
                    <input
                      type="text"
                      name="accountno"
                      class="tw-appearance-none tw-block tw-w-full tw-border-solid tw-border-4 tw-border-[#dcdcdc] tw-rounded tw-py-3 tw-px-4 tw-mb-3"
                      onChange={(e) => handleChange(e)}
                      placeholder="100XXX100"
                      value={formData.accountno}
                    />
                  </div>
                  <div class="tw-relative tw-z-0 tw-w-full tw-mb-6 tw-group">
                    <label
                      class="tw-block tw-uppercase tw-tracking-wide tw-text-gray-700 tw-text-xs tw-font-bold tw-mb-2"
                      for="name-of-bank"
                    >
                      NAME OF BANK
                    </label>
                    <input
                      class="tw-appearance-none tw-block tw-w-full tw-border-solid tw-border-4 tw-border-[#dcdcdc] tw-rounded tw-py-3 tw-px-4 tw-mb-3"
                      type="text"
                      name="nameofbank"
                      onChange={(e) => handleChange(e)}
                      placeholder="e.g. HDFC Bank"
                      value={formData.nameofbank}
                    />
                  </div>
                  <div class="tw-relative tw-z-0 tw-w-full tw-mb-6 tw-group">
                    <label
                      class="tw-block tw-uppercase tw-tracking-wide tw-text-gray-700 tw-text-xs tw-font-bold tw-mb-2"
                      for="amountToBePaid"
                    >
                      AMOUNT TO BE PAID
                    </label>
                    <input
                      class="tw-appearance-none tw-block tw-w-full tw-border-solid tw-border-4 tw-border-[#dcdcdc] tw-rounded tw-py-3 tw-px-4 tw-mb-3"
                      type="text"
                      name="amountToBePaid"
                      onChange={(e) => handleChange(e)}
                      placeholder="e.g. $100"
                      value={formData.amountToBePaid}
                    />
                  </div>
                </div>
              </form>
              <hr
                style={{
                  margin: "10px 0",
                  borderColor: "grey",
                  gridColumn: "1/3",
                }}
              />
              <div className="UPIDiv">
                <h2 className="tw-text-center tw-font-medium tw-text-2xl tw-mt-5 tw-text-[#845ec2]">
                  UPI Payment
                </h2>
                <input
                  class="tw-appearance-none tw-block tw-w-full tw-border-solid tw-border-4 tw-border-[#dcdcdc] tw-rounded tw-py-3 tw-px-4"
                  type="text"
                  name="upiID"
                  onChange={(e) => handleChange(e)}
                  placeholder="e.g. xyz@okicicibank"
                  value={formData.upiID}
                />
              </div>
              <div className="tw-flex tw-justify-center tw-items-center max-[512px]:tw-pb-20 max-[512px]:tw-pt-0 tw-pt-6">
                <button
                  type="submit"
                  onClick={(e) => {
                    handleChange(e);
                    setEditForm(false);
                  }}
                  className="tw-text-white tw-font-semibold tw-bg-primary-100 hover:tw-bg-primary-200 tw-px-6 tw-py-3 tw-rounded-md tw-duration-200 tw-ease-in-out tw-transition-all"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="tw-flex tw-justify-center tw-items-center tw-pt-20 tw-pl-[200px] max-[990px]:tw-pl-[150px] max-[715px]:tw-pl-[100px] tw-flex-wrap max-[512px]:tw-p-0 max-[512px]:tw-m-0">
          {/* payments card */}
          <div className="tw-w-[800px] flex tw-flex-wrap max-[990px]:tw-w-[500px] max-[715px]:tw-w-[400px]">
            <div className="tw-p-4 tw-bg-white  max-[512px]:tw-flex max-[512px]:tw-flex-col max-[512px]:tw-justify-start max-[512px]:tw-items-center tw-shadow-xl max-[512px]:tw-w-screen max-[512px]:tw-h-screen max-[512px]:tw-overflow-y-auto max-[512px]:tw-p-10">
              <div className="tw-flex tw-justify-between tw-items-center">
                <h2 className="tw-text-center tw-font-medium tw-text-5xl tw-mt-5  tw-text-[#845ec2]">
                  Payment
                </h2>
                <button
                  className="tw-bg-black tw-text-center tw-text-white tw-rounded-md tw-px-4 tw-py-2 hover:tw-bg-gray-700 tw-font-semibold tw-text-base max-[512px]:tw-hidden"
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
              <div className="tw-flex tw-flex-col tw-justify-start tw-items-start max-[512px]:tw-justify-center max-[512px]:tw-items-center">
                <div className="tw-flex tw-flex-col tw-justify-center tw-items-start tw-gap-5 tw-flex-wrap max-[512px]:tw-gap-12 ">
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
                      {formData?.name || "Unavailable"}
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
                      {formData?.ifsccode || "Unavailable"}
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
                      {formData?.accountno || "Unavailable"}
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
                      {formData?.nameofbank || "Unavailable"}
                    </span>
                  </div>
                  {/* Amount to be paid */}
                  <div className="tw-flex tw-justify-center tw-items-center tw-text-center tw-gap-4 ">
                    <div className="tw-flex tw-justify-center tw-items-center tw-gap-5  max-[512px]:tw-gap-2">
                      <FaRegMoneyBillAlt className="tw-text-2xl max-[512px]:tw-text-xl tw-text-[#00C9A7]" />
                      <h2 className="tw-font-semibold tw-text-xl max-[512px]:tw-text-sm">
                        Amout To Be Paid :
                      </h2>
                    </div>
                    <span className="tw-text-primary-100 tw-font-medium tw-text-lg max-[512px]:tw-text-sm">
                      {formData?.amountToBePaid || "Unavailable"}
                    </span>
                  </div>
                </div>
                <div className="tw-flex tw-items-center tw-justify-center tw-pt-7 min-[513px]:tw-hidden">
                  <button
                    className="tw-bg-black tw-text-center tw-text-white tw-rounded-md tw-px-4 tw-py-2 hover:tw-bg-gray-700 tw-font-semibold tw-text-base min-[513px]:tw-hidden"
                    onClick={() => setEditForm(true)}
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Payments;
