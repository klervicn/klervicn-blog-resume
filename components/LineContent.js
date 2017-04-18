import React from "react";

export default ({ children, style = {}, ...props }) => (
  <div
    style={{
      display: "table-cell",
      paddingLeft: 10
    }}
  >
    {children}
  </div>
);
