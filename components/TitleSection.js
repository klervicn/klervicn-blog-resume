import React from "react";
import Head from "next/head";
import Name from "../components/Name";

export default ({ style = {}, ...props }) => (
  <div>
    <Name name="Klervi Corbel" />
    <h2>Titre</h2>
    <h2>Photo</h2>
  </div>
);
