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
    <div className="tw-flex tw-justify-center tw-items-center tw-pt-20 tw-pl-[200px] max-[990px]:tw-pl-[150px] max-[715px]:tw-pl-[100px] tw-flex-wrap max-[512px]:tw-p-0 max-[512px]:tw-m-0">
      <div className="tw-w-[800px] flex tw-flex-wrap max-[990px]:tw-w-[500px] max-[715px]:tw-w-[400px]">
        <div className="tw-p-4 tw-bg-white tw-shadow-xl max-[512px]:tw-w-screen max-[512px]:tw-h-screen max-[512px]:tw-overflow-y-auto max-[512px]:tw-p-10">
          <form
            className="mentorFormEdit max-[512px]:tw-justify-center max-[512px]:tw-items-center max-[512px]:tw-flex max-[512px]:tw-flex-col"
            onSubmit={handleSubmit}
          >
            <h2 className="tw-text-center tw-font-medium tw-text-5xl tw-mt-5  tw-text-[#845ec2]">Payment</h2>
          <div class="tw-grid md:tw-grid-cols-2 md:tw-gap-6 tw-mb-6">
            <div class="tw-relative tw-z-0 tw-w-full tw-mb-6 tw-group">
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
            <div class="tw-relative tw-z-0 tw-w-full tw-mb-6 tw-group">
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
            <div class="tw-relative tw-z-0 tw-w-full tw-mb-6 tw-group">
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
            <div class="tw-relative tw-z-0 tw-w-full tw-mb-6 tw-group">
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
          <hr
              style={{
                margin: "10px 0",
                borderColor: "grey",
                gridColumn: "1/3",
              }}
          />
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
    </div>
  )
}

export default Payments