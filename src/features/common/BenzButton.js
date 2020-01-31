import React from "react";

import "./BenzButton.css";

const BenzButton = props => (
  <div
    className={`Button ${
      props.active
        ? props.fill
          ? `active fill`
          : `active no-fill`
        : `disabled`
    }`}
  >
    {props.label}
  </div>
);

export default BenzButton;
