import React from "react";

// Aligné à gacuche, en gras ?
export default ({ label, style, picto = {}, ...props }) => (
  <div>
    <label>{label}</label>
  </div>
);
