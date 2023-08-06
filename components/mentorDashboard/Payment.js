import React, {useState,useEffect} from 'react'

const Payments = ({mentorDetail}) => {
  const initialFormData = {
    name: mentorDetail?.name || "", // Make sure to handle null/undefined case
    ifsccode: mentorDetail?.ifsccode || "",
    accountno: mentorDetail?.accountno || "",
    nameofbank: mentorDetail?.nameofbank || "",
    upiID: mentorDetail?.upiID || ""
  };

  const [formData,setFormData] = useState(initialFormData)

  const handleChange = (e)=>{
    setFormData({...formData,[e.target.name]: e.target.value})
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
  }
  return (
    <div>
      <div className="tw-border-2 tw-h-full tw-flex tw-justify-center lg:tw-ml-[23rem] profileRegForm tw-flex-col">
      <form className="md:tw-w-full md:tw-max-w-2xl md:tw-p-0 profileForm" onSubmit={handleSubmit}>
        <h2 className="tw-text-center tw-font-medium tw-text-5xl md:tw-ml-[20rem] tw-mt-5  tw-text-[#845ec2]">Payment</h2>
          <div class="tw-grid md:tw-grid-cols-2 md:tw-gap-6 md:tw-m-[1rem] tw-mb-6">
            <div class="tw-relative tw-z-0 tw-w-full tw-mb-6 tw-group md:tw-ml-20">
              <label class="tw-block tw-uppercase tw-tracking-wide tw-text-gray-700 tw-text-xs tw-font-bold tw-mb-2" for="account-holder-name">
                ACCOUNT HOLDER NAME
              </label>
              <input
                type="text"
                name="name"
                class="tw-appearance-none tw-block tw-w-full tw-border-solid tw-border-4 tw-border-[#dcdcdc] tw-rounded tw-py-3 tw-px-4 tw-mb-3"
                onChange={(e) => handleChange(e)}
                placeholder='e.g. Peter Parker'
                value={formData.name} />
            </div>
            <div class="tw-relative tw-z-0 tw-w-full tw-mb-6 tw-group md:tw-ml-20">
              <label class="tw-block tw-uppercase tw-tracking-wide tw-text-gray-700 tw-text-xs tw-font-bold tw-mb-2" for="ifsc-code">
                IFSC CODE 
              </label>
              <input
                class="tw-appearance-none tw-block tw-w-full tw-border-solid tw-border-4 tw-border-[#dcdcdc] tw-rounded tw-py-3 tw-px-4 tw-mb-3"
                type="text"
                name="ifsccode"
                onChange={(e) => handleChange(e)}
                placeholder='SBINXXXXXX'
                value={formData.ifsccode} />
            </div>
          </div>
          <div class="tw-grid md:tw-grid-cols-2 md:tw-gap-6 md:tw-m-[1rem] tw-mb-6">
            <div class="tw-relative tw-z-0 tw-w-full tw-mb-6 tw-group md:tw-ml-20">
              <label class="tw-block tw-uppercase tw-tracking-wide tw-text-gray-700 tw-text-xs tw-font-bold tw-mb-2" for="account-no">
                ACCOUNT NUMBER
              </label>
              <input
                type="text"
                name="accountno"
                class="tw-appearance-none tw-block tw-w-full tw-border-solid tw-border-4 tw-border-[#dcdcdc] tw-rounded tw-py-3 tw-px-4 tw-mb-3"
                onChange={(e) => handleChange(e)}
                placeholder='100XXX100'
                value={formData.accountno} />
            </div>
            <div class="tw-relative tw-z-0 tw-w-full tw-mb-6 tw-group md:tw-ml-20">
              <label class="tw-block tw-uppercase tw-tracking-wide tw-text-gray-700 tw-text-xs tw-font-bold tw-mb-2" for="name-of-bank">
                NAME OF BANK 
              </label>
              <input
                class="tw-appearance-none tw-block tw-w-full tw-border-solid tw-border-4 tw-border-[#dcdcdc] tw-rounded tw-py-3 tw-px-4 tw-mb-3"
                type="text"
                name="nameofbank"
                onChange={(e) => handleChange(e)}
                placeholder='e.g. HDFC Bank'
                value={formData.nameofbank} />
            </div>
          </div>
        </form>
        <hr className='tw-bg-black' />
        <div>
          <h2 className="tw-text-center tw-font-medium tw-text-2xl tw-mt-5 tw-text-[#845ec2]">UPI Payment</h2>
          <input
            class="tw-appearance-none tw-block tw-w-full tw-border-solid tw-border-4 tw-border-[#dcdcdc] tw-rounded tw-py-3 tw-px-4 tw-mb-3"
            type="text"
            name="upiID"
            onChange={(e) => handleChange(e)}
            placeholder='e.g. xyz@okicicibank'
            value={formData.upiID} 
          />
        </div>
      </div>
    </div>
  )
}

export default Payments

