import React from "react";

export default ({ children, caption, style = {}, ...props }) => (
  <div
    style={{
      display: "table-cell",
      paddingLeft: 10,
      textAlign: "justify",
      fontSize: 14
    }}
  >
    {children}
    <p
      style={{
        display: "table-cell",
        textAlign: "justify",
        fontSize: 12,
        fontStyle: "italic"
      }}
    >
      {caption}
    </p>
  </div>
);
