import React from "react";
import Head from "next/head";
import { titlesColor } from "../styles/colors";
import Name from "../components/Name";

// Remplacer par des sections génériques ou garder ça ?
export default ({ style = {}, ...props }) => (
  <div>
    <Name name="Klervi Corbel" />
    <h2>Titre</h2>
    <h2>Photo</h2>
  </div>
);
