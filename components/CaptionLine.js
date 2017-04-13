import React from "react";

// Mettre en italique et bcp plus petit, même alignement que les lignes
export default ({ caption, style = {}, ...props }) => (
  <div>
    <p>{caption}</p>
  </div>
);
