import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import Select from "react-select";
import Input from "./basic/Input";
import { FaRegImage } from "react-icons/fa";
import axios from "axios";

const FormModal = ({
  modalTitle,
  formData,
  setFormData,
  inputs,
  tagsOptions,
  handleSubmit,
  validator,
  handleCancel,
}) => {
  const [imageLoading, setImageLoading] = useState(false);

  useEffect(() => {
    setFormData({ ...formData, imageAlt: formData.title });
  }, [formData.title]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const uploadToCloudinary = async (file) => {
    const url = `https://api.cloudinary.com/v1_1/grabtern-cloud/image/upload`;
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "image_preset");
      const res = await axios.post(url, formData);
      return res.data.secure_url;
    } catch (error) {
      console.log("Couldn't upload image to Cloudinary", error);
    }
  };

  const handleUploadImage = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImageLoading(true);
    const url = await uploadToCloudinary(file);
    setFormData({
      ...formData,
      image: url,
      imageAlt: formData.title,
    });
  };

  const handleTagsChange = (e) => {
    const tags = e.map((tag) => tag.value);
    setFormData({ ...formData, tags: tags });
  };

  return (
    <div className="tw-fixed tw-z-50 tw-bg-[rgba(0,0,0,0.5)] tw-top-0 tw-left-0 tw-w-full tw-h-full tw-flex tw-justify-center tw-items-center">
      <div className="tw-relative tw-bg-white tw-p-6 tw-w-[90%] sm:tw-w-[35rem] tw-rounded-sm tw-h-[calc(100vh-75px)] tw-overflow-y-auto">
        <div
          className="tw-absolute tw-right-3 tw-top-3 tw-p-1 hover:tw-bg-[#845ec2] hover:tw-text-white hover:tw-cursor-pointer tw-rounded"
          onClick={handleCancel}
        >
          <IoClose />
        </div>
        <header className="tw-mb-4">
          <h1 className="tw-font-semibold tw-text-xl md:tw-text-2xl">
            {modalTitle}
          </h1>
          <p className="tw-text-xs sm:tw-text-sm">
            Please provide us the following details
          </p>
        </header>
        <main className="tw-text-sm sm:tw-text-base">
          <form
            className="tw-flex tw-flex-col tw-justify-between tw-overflow-y-auto"
            onSubmit={handleSubmit}
          >
            <div className="tw-flex tw-flex-col tw-gap-6 sm:tw-grid  sm:tw-grid-cols-3 sm:tw-items-center">
              <div className="tw-col-span-3 tw-flex tw-items-center tw-gap-4">
                {formData.image === "" ? (
                  <div
                    className={`tw-w-24 tw-h-[3.75rem] tw-flex tw-justify-center tw-items-center tw-border tw-bg-gray-200 tw-text-gray-500 tw-rounded ${
                      imageLoading ? "tw-animate-pulse" : "tw-animate-none"
                    }`}
                  >
                    <FaRegImage className="tw-text-5xl" />
                  </div>
                ) : (
                  <img
                    src={formData.image}
                    alt={formData.imageAlt}
                    className={`tw-aspect-[16/10] tw-w-24 tw-rounded tw-object-cover ${
                      imageLoading ? "tw-animate-pulse" : "tw-animate-none"
                    }`}
                    name="image"
                    onLoad={() => setImageLoading(false)}
                  />
                )}
                <label
                  htmlFor="internshipImage"
                  className="tw-text-sm tw-border tw-transition-all tw-text-[#845ec2] tw-border-[#845ec2] hover:tw-bg-[#845ec2] hover:tw-text-white tw-rounded  hover:tw-cursor-pointer tw-mb-0 tw-p-1 tw-px-3"
                >
                  Upload
                </label>
                <input
                  type="file"
                  accept="image/*"
                  id="internshipImage"
                  className="tw-hidden"
                  name="internshipImage"
                  onChange={handleUploadImage}
                />
              </div>
              {inputs.map((input, index) => (
                <div
                  className="tw-relative tw-flex tw-flex-col"
                  style={{
                    gridColumn: input.column ? input.column : "span 1",
                  }}
                  key={index}
                >
                  <Input {...input} key={index} handleChange={handleChange} />
                </div>
              ))}
              <div className="tw-col-span-3">
                <label>Tags</label>
                <Select
                  options={tagsOptions}
                  isMulti
                  maxMenuHeight={160}
                  menuPlacement="top"
                  onChange={(e) => handleTagsChange(e)}
                  styles={{
                    dropdownIndicator: (base) => ({
                      ...base,
                      rotate: "-180deg",
                    }),
                    menu: (base) => ({
                      ...base,
                      border: "1px solid #845ec2",
                    }),
                    control: (base, state) => ({
                      ...base,
                      boxShadow: "none",
                      borderColor: state.isFocused
                        ? "#845ec2"
                        : base.borderColor,
                      "&:hover": {
                        borderColor: state.isFocused
                          ? "#845ec2"
                          : base.borderColor,
                      },
                    }),
                  }}
                  value={tagsOptions.filter((option) =>
                    formData.tags.includes(option.value),
                  )}
                />
                <div className="tw-relative">
                  {validator.current.message(
                    "tags",
                    tagsOptions.filter((option) =>
                      formData.tags.includes(option.value),
                    ),
                    "required",
                  )}
                </div>
              </div>
            </div>
            <div className="tw-flex tw-justify-end tw-items-center tw-gap-4  tw-mt-8">
              <button
                type="button"
                onClick={handleCancel}
                className="tw-text-gray-500 tw-p-1 tw-transition-all tw-px-3  tw-rounded hover:tw-underline hover:tw-text-[#845ec2]"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="tw-text-[#845ec2] tw-p-1 tw-transition-all tw-px-3 tw-border tw-rounded tw-border-[#845ec2] hover:tw-text-white hover:tw-bg-[#845ec2]"
              >
                Submit
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default FormModal;
