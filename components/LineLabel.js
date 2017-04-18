import React from "react";

// Aligné à gacuche, en gras ?
export default ({ children, style, picto = {}, ...props }) => (
  <label
    style={{
      display: "table-cell"
    }}
  >
    {children}
  </label>
);
