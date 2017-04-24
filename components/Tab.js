import React from "react";

export default ({ children, style = {}, ...props }) => (
  <ul
    style={{
      display: "table",
      paddingLeft: 0
    }}
  >
    {children}
  </ul>
);
