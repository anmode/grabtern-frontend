import React, {useState,useEffect} from 'react'

const Payments = ({mentorDetail}) => {
  const initialFormData = {
    name: mentorDetail?.name || "", // Make sure to handle null/undefined case
    ifsccode: mentorDetail?.ifsccode || "",
    accountno: mentorDetail?.accountno || "",
    nameofbank: mentorDetail?.nameofbank || "",
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
      <div className="tw-border-2  md:tw-ml-[25rem] tw-h-full tw-flex tw-flex-col tw-justify-center profileRegForm">
        <form className="md:tw-w-full md:tw-max-w-2xl md:tw-p-0 profileForm" onSubmit={handleSubmit}>
        <h2 className="tw-text-center tw-font-medium tw-text-5xl tw-mt-5 tw-text-[#845ec2]">Payment</h2>
          <div class="tw-grid md:tw-grid-cols-2 md:tw-gap-6 md:tw-m-[1rem] tw-mb-6">
            <div class="tw-relative tw-z-0 tw-w-full tw-mb-6 tw-group">
              <label class="tw-block tw-uppercase tw-tracking-wide tw-text-gray-700 tw-text-xs tw-font-bold tw-mb-2" for="grid-first-name">
                ACCOUNT HOLDER NAME
              </label>
              <input
                type="text"
                name="name"
                class="tw-appearance-none tw-block tw-w-full tw-bg-gray-200 tw-text-gray-700 tw-border tw-border-[#845ec2] tw-rounded tw-py-3 tw-px-4 tw-mb-3 tw-leading-tight focus:tw-outline-none focus:tw-bg-white"
                onChange={(e) => handleChange(e)}
                placeholder={mentorDetail?.name}
                value={formData.name} />
            </div>
            <div class="tw-relative tw-z-0 tw-w-full tw-mb-6 tw-group">
              <label class="tw-block tw-uppercase tw-tracking-wide tw-text-gray-700 tw-text-xs tw-font-bold tw-mb-2" for="grid-first-name">
                IFSC CODE 
              </label>
              <input
                class="tw-appearance-none tw-block tw-w-full tw-bg-gray-200 tw-text-gray-700 tw-border tw-border-[#845ec2] tw-rounded tw-py-3 tw-px-4 tw-mb-3 tw-leading-tight focus:tw-outline-none focus:tw-bg-white"
                type="text"
                name="ifsccode"
                onChange={(e) => handleChange(e)}
                placeholder={mentorDetail?.ifsccode}
                value={formData.ifsccode} />
            </div>
          </div>
          <div class="tw-grid md:tw-grid-cols-2 md:tw-gap-6 md:tw-m-[1rem] tw-mb-6">
            <div class="tw-relative tw-z-0 tw-w-full tw-mb-6 tw-group">
              <label class="tw-block tw-uppercase tw-tracking-wide tw-text-gray-700 tw-text-xs tw-font-bold tw-mb-2" for="grid-first-name">
                ACCOUNT HOLDER NAME
              </label>
              <input
                type="text"
                name="name"
                class="tw-appearance-none tw-block tw-w-full tw-bg-gray-200 tw-text-gray-700 tw-border tw-border-[#845ec2] tw-rounded tw-py-3 tw-px-4 tw-mb-3 tw-leading-tight focus:tw-outline-none focus:tw-bg-white"
                onChange={(e) => handleChange(e)}
                placeholder={mentorDetail?.name}
                value={formData.name} />
            </div>
            <div class="tw-relative tw-z-0 tw-w-full tw-mb-6 tw-group">
              <label class="tw-block tw-uppercase tw-tracking-wide tw-text-gray-700 tw-text-xs tw-font-bold tw-mb-2" for="grid-first-name">
                IFSC CODE 
              </label>
              <input
                class="tw-appearance-none tw-block tw-w-full tw-bg-gray-200 tw-text-gray-700 tw-border tw-border-[#845ec2] tw-rounded tw-py-3 tw-px-4 tw-mb-3 tw-leading-tight focus:tw-outline-none focus:tw-bg-white"
                type="text"
                name="ifsccode"
                onChange={(e) => handleChange(e)}
                placeholder={mentorDetail?.ifsccode}
                value={formData.ifsccode} />
            </div>
          </div>
        </form>
        <hr className='tw-bg-black' />
        <div>
          <h2 className="tw-text-center tw-font-medium tw-text-2xl tw-mt-5 tw-text-[#845ec2]">UPI Payment</h2>
        </div>
      </div>
    </div>
  )
}

export default Payments
