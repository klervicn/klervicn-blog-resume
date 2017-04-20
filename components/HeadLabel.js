import React from "react";

export default ({ children, style = {}, ...props }) => (
  <h2
    style={{
      fontWeight: "normal",
      borderBottom: "1px solid",
      borderColor: "#bfbfbf",
      textAlign: "center",
      fontSize: 20
    }}
  >
    {children}
  </h2>
);
