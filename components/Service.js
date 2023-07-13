import React from "react";
import { IconCard } from "./UI";

function Service({ ServiceIcon, serviceHeading, serviceDescription }) {
  return (
    <IconCard
      Icon={Object.values(ServiceIcon)[0]}
      heading={serviceHeading}
      body={serviceDescription}
    />
  );
}

export default Service;
