import React from "react";
import { IconCard } from "../UI";

function Service({ ServiceIcon, serviceHeading, serviceDescription }) {
  return (
    <IconCard
      className="tw-shadow-sm"
      Icon={Object.values(ServiceIcon)[0]}
      heading={serviceHeading}
      body={serviceDescription}
      intent="bg"
      size="lg"
    />
  );
}

export default Service;
