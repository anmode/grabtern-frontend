import React from 'react'
import clsx from 'clsx'

function PreLoader({loadingState, errorState}) {
  return (
    <div className={clsx(
      "tw-fixed tw-top-0 tw-z-10",
      "tw-w-full tw-h-screen",
      "tw-bg-base-200",
      "tw-text-center",
      "tw-flex tw-items-center tw-justify-center",
    )}>
      {
          loadingState.status && (
              <div className={clsx(
                "tw-bg-base-100 tw-rounded-md",
                "tw-p-6",
                "tw-shadow",
              )}>
                <h4 className={clsx(
                  "tw-font-heading tw-font-medium",
                  "tw-text-[green]",
                  "tw-text-3xl tw-leading-9 tw-mb-4",
                )}>
                   Yoo!
                </h4>
                <p className="tw-text-md">
                  {loadingState.message ?  loadingState.message : "Look like you are on the right path" }
                </p>
                <div className={clsx(
                  "tw-bg-[green] tw-shadow",
                  "tw-px-6 tw-py-2 tw-mt-4 tw-mx-auto tw-rounded-full tw-w-fit",
                  "tw-text-[white]",
                )}>Loading...</div>
              </div>
              
          )
      }
      {
          errorState.status && (
            <div className={clsx(
              "tw-bg-base-100 tw-rounded-md",
              "tw-p-6",
              "tw-shadow",
            )}>
                <h4 className={clsx(
                  "tw-font-heading tw-font-medium",
                  "tw-text-[red]",
                  "tw-text-3xl tw-leading-9 tw-mb-4"
                )}>
                   Oops!
                </h4>
                <p className="tw-text-md">
                  {errorState.message ? errorState.message : "Something went wrong, on the way !"}
                </p>

                <a className={clsx(
                  "tw-bg-[red] tw-text-[white] tw-cursor-pointer tw-shadow-sm",
                  "tw-px-6 tw-py-2 tw-mt-4 tw-mx-auto tw-rounded-full tw-w-fit",
                  "tw-block",
                  "focus:tw-shadow-none hover:tw-scale-[0.99]",
                )}
                  href="" 
                >
                  Reload
                </a>
            </div>
          )
      }
    </div>
  )
}

export default PreLoader
