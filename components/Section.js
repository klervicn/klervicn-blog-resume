import React from "react";

export default ({ children = {}, ...props }) => (
  <div
    style={{
      fontFamily: "Verdana"
    }}
  >
    {children}
  </div>
);
