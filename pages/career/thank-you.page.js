import React, { useState } from "react";
import { useRouter } from "next/router";
import Button from "../../components/UI/Button/Button";
import Loader from "../../components/UI/Loader";

const ThankYouPage = () => {
  const router = useRouter();
  const [loader, setLoader] = useState(false);

  const handleGoHome = () => {
    setLoader(true);
    router.push("/career");
  };

  return (
    <div className="tw-min-h-screen tw-flex tw-items-center tw-justify-center tw-bg-gray-100">
      <div className="tw-bg-white tw-p-8 tw-rounded-lg tw-shadow-lg tw-text-center tw-max-w-md">
        <h1 className="tw-font-sans tw-text-3xl tw-font-semibold tw-text-[#845ec2] tw-mb-4">
          Thank You!
        </h1>
        <p className="tw-font-sans tw-text-lg tw-text-gray-600 tw-mb-6">
          Your application has been successfully submitted. We will review it
          and get back to you soon.
        </p>
        {loader ? (
          <Loader width="20px" />
        ) : (
          <Button
            text="Browse all jobs"
            variant="Primary"
            onClick={handleGoHome}
            className="tw-w-full tw-font-sans "
          />
        )}
      </div>
    </div>
  );
};

export default ThankYouPage;
