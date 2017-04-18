import React from "react";

export default ({ children, style = {}, ...props }) => (
  <div style={{ fontFamily: "Verdana" }}>
    {children}
  </div>
);
