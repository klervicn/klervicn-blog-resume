import React from "react";

// Aligné à gacuche, en gras ?
export default ({ children, style, picto = {}, ...props }) => (
  <div>
    <label>{children}</label>
  </div>
);
