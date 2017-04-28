import React from "react";

export default ({ children, style, picto = {}, ...props }) => (
  <label
    style={{
      display: "table-cell",
      fontSize: 16,
      width: 110
    }}
  >
    {children}
  </label>
);
