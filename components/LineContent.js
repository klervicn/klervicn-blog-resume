import React from "react";

export default ({ children, style = {}, ...props }) => (
  <div
    style={{
      display: "table-cell",
      paddingLeft: 10,
      textAlign: "justify",
      fontSize: 14
    }}
  >
    {children}
  </div>
);
