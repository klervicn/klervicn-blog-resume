import React from "react";

// Mettre en italique et bcp plus petit, même alignement que les lignes
export default ({ children, style = {}, ...props }) => (
  <div>
    <p>{children}</p>
  </div>
);
