import React from "react";
import { labelColor } from "../styles/colors";

export default ({ children = {}, ...props }) => (
  <h2
    style={{
      fontWeight: "normal",
      borderBottom: "1px solid",
      borderColor: "#bfbfbf",
      textAlign: "center",
      fontSize: 20,
      color: labelColor
    }}
  >
    {children}
  </h2>
);
