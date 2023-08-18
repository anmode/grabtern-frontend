import React from "react";
import clsx from "clsx";
import Image from "next/image";
import errorImage from "../../public/assets/img/RequestState/error.png";
import loadingImage from "../../public/assets/img/RequestState/loading.png";

function PreLoader({ loadingState, errorState }) {
  return (
    <div
      className={clsx(
        "tw-fixed tw-top-0 tw-z-10",
        "tw-w-full tw-h-screen",
        "tw-bg-base-200",
        "tw-text-center",
        "tw-flex tw-items-center tw-justify-center",
      )}
    >
      {/* loading card */}
      {loadingState.status && (
        <div
          className={clsx(
            "tw-bg-base-100 tw-rounded-md",
            "tw-p-6",
            "tw-shadow",
          )}
        >
          {/* image */}
          <Image
            src={loadingImage}
            width={250}
            height={250}
            className="tw-block tw-m-auto tw-mb-4"
          />
          {/* heading */}
          <h4
            className={clsx(
              "tw-font-heading tw-font-medium",
              "tw-text-[green]",
              "tw-text-4xl tw-leading-9 tw-mb-4",
            )}
          >
            Yoo!
          </h4>
          {/* subheading */}
          <p className="tw-text-md">
            {loadingState.message
              ? loadingState.message
              : "Look like you are on the right path"}
          </p>
          {/* loading button style div */}
          <div
            className={clsx(
              "tw-bg-[green] tw-shadow",
              "tw-px-6 tw-py-2 tw-mt-8 tw-mx-auto tw-rounded-full tw-w-fit",
              "tw-text-[white] tw-text-sm",
            )}
          >
            Loading...
          </div>
        </div>
      )}
      {/* error card */}
      {errorState.status && (
        <div
          className={clsx(
            "tw-bg-base-100 tw-rounded-md",
            "tw-p-6",
            "tw-shadow",
          )}
        >
          {/* image */}
          <Image
            src={errorImage}
            width={300}
            height={300}
            className="tw-block tw-m-auto tw-mb-5"
          />
          {/* heading */}
          <h4
            className={clsx(
              "tw-font-heading tw-font-medium",
              "tw-text-red-600",
              "tw-text-4xl tw-leading-9 tw-mb-4",
            )}
          >
            Oops!
          </h4>
          {/* subheading */}
          <p className="tw-text-md">
            {errorState.message
              ? errorState.message
              : "Something went wrong, on the way !"}
          </p>
          {/* reload button style link */}
          <a
            className={clsx(
              "tw-bg-red-600 tw-text-[white] tw-cursor-pointer tw-shadow-sm",
              "tw-px-6 tw-py-2 tw-mt-8 tw-mx-auto tw-rounded-full tw-w-fit",
              "tw-block tw-text-sm",
              "focus:tw-shadow-none hover:tw-scale-[0.99]",
            )}
            href=""
          >
            Reload
          </a>
        </div>
      )}
    </div>
  );
}

export default PreLoader;
