import React from "react";

function Company({ imgSrc, name }) {
  return (
    <div className="row align-items-center">
      <div className="col text-center text-lg-right p-0 mr-10">
        <img src={imgSrc} height={30} />
      </div>
      <div className="col d-none d-lg-block text-left p-0">
        <p className="font-weight-bold text-muted m-0">{name}</p>
      </div>
    </div>
  );
}

export default Company;
