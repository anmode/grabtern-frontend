import React from "react";

function PreLoader({ loadingState, errorState }) {
  return (
    <div className="tw-fixed tw-bg-[green] tw-left-[250px] tw-top-0">
      {loadingState.status && <div>Loading</div>}
      {errorState.status && <div>Error</div>}
    </div>
  );
}

export default PreLoader;
