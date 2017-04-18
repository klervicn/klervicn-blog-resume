import React from "react";

export default ({ children, style = {}, ...props }) => (
  <ul
    style={{
      display: "table",
      padding: 0
    }}
  >
    {children}
  </ul>
);
