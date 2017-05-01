import React from "react";
import { titlesColor } from "../styles/colors";

export default ({ name = {}, ...props }) => (
  <div>
    <h1 style={{ color: titlesColor }}>{name}</h1>
  </div>
);
