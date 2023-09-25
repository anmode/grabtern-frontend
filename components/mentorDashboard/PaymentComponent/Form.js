import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import Loader from "../../UI/Loader";

function Form({ account, closeForm, buttonText, handleSubmit, Loading }) {
  // initial form state
  const initialFormData = {
    name: account?.name || "", // Make sure to handle null/undefined case
    ifscCode: account?.ifscCode || "",
    accountNo: account?.accountNo || "",
    nameOfBank: account?.nameOfBank || "",
    upiID: account?.upiID || "",
  };
  // form state
  const [formData, setFormData] = useState(initialFormData);

  // handle change
  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // submit function
  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(formData);
  };

  return (
    <div className="tw-flex tw-justify-center tw-items-center md:tw-p-16 tw-p-8 tw-w-full">
      <div className="tw-flex tw-flex-wrap tw-w-full">
        <div className="tw-p-4 tw-bg-white tw-shadow-xl tw-w-full">
          <AiFillCloseCircle
            onClick={closeForm}
            title="cancel"
            className="tw-font-semibold tw-text-4xl tw-text-black tw-cursor-pointer"
          />
          <form
            className="mentorFormEdit max-[512px]:tw-justify-center max-[512px]:tw-items-center max-[512px]:tw-flex max-[512px]:tw-flex-col tw-flex tw-flex-col"
            onSubmit={onSubmit}
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
                  value={formData?.name}
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
                  name="ifscCode"
                  onChange={(e) => handleChange(e)}
                  placeholder="SBINXXXXXX"
                  value={formData?.ifscCode}
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
                  name="accountNo"
                  class="tw-appearance-none tw-block tw-w-full tw-border-solid tw-border-4 tw-border-[#dcdcdc] tw-rounded tw-py-3 tw-px-4 tw-mb-3"
                  onChange={(e) => handleChange(e)}
                  placeholder="100XXX100"
                  value={formData?.accountNo}
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
                  name="nameOfBank"
                  onChange={(e) => handleChange(e)}
                  placeholder="e.g. HDFC Bank"
                  value={formData?.nameOfBank}
                />
              </div>
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
                  value={formData?.upiID}
                />
              </div>
              <div className="tw-flex tw-justify-center tw-items-center max-[512px]:tw-pb-20 max-[512px]:tw-pt-0 tw-pt-6">
                {Loading ? (
                  <Loader width="20px" />
                ) : (
                  <button
                    type="submit"
                    className="tw-text-white tw-font-semibold tw-bg-primary-100 hover:tw-bg-primary-200 tw-px-6 tw-py-3 tw-rounded-md tw-duration-200 tw-ease-in-out tw-transition-all"
                  >
                    {buttonText}
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
