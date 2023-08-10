import clsx from "clsx";

function Switch({ checked, onChange }) {
  // function for toggling button
  const toggle = () => {
    onChange();
  };

  return (
    <div
      className={clsx(
        "tw-p-1 tw-cursor-pointer tw-w-[50px] tw-rounded-full",
        checked && ["tw-bg-primary-100"],
        !checked && ["tw-bg-primary-10"],
      )}
      onClick={toggle}
    >
      <div
        className={clsx(
          "tw-w-[20px] tw-h-[20px] tw-bg-base-100 tw-rounded-full",
          "tw-transition-all tw-duration-200",
          checked && ["tw-ml-auto"],
          !checked && ["tw-mr-auto"],
        )}
      />
    </div>
  );
}

export default Switch;
