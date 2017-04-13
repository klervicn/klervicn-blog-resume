import React from "react";

// Aligné au centre, bordure ? Créer un tableau ?
export default ({ name, style = {}, ...props }) => (
  <div>
    <h2>{name}</h2>
  </div>
);
