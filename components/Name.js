import React from "react";
import { titlesColor } from "../styles/colors";

// Garder comme ça ou tout intégrer à la title ?
export default ({ name, style = {}, ...props }) => (
  <div>
    <h1 style={{ color: titlesColor }}>{name}</h1>
  </div>
);
