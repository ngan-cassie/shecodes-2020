import React from "react";
import lg from "./Logo.svg";
import "./footer.styles.css";
export function Foot() {
  return (
    <div className="foot">
      <div className="left">
        <div className="Logo item1">
          <img alt="logo" src={lg} />
          <h4> VietVax </h4>
        </div>
        <p className="item1">
          An application to manage vaccination record for Vietnam
        </p>
        <p className="item1">©2020 VietVax</p>
      </div>
      <div className="right">
        <h5 className="item2">Contact us at: </h5>

        <p className="item2"> Email: support@vietvax.com </p>
        <p className="item2"> Hotline: 1900 1696 </p>
      </div>
    </div>
  );
}
