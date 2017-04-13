import React from "react";

// Diminuer la font-size, faire en sorte que ce soit aligné à gauche après le label
export default ({ content, style = {}, ...props }) => (
  <div>
    <p>{content}</p>
  </div>
);
