import React from "react";
import Head from "next/head";
import Name from "../components/Name";

export default ({ style, title, name = {}, ...props }) => (
  <div>
    <div style={{}}>
      <img
        style={{
          height: 128
        }}
        src="../static/picture.png"
      />
      <Name style={{}} name={name} />
    </div>
    <h2 style={{}}>
      {title}
    </h2>
  </div>
);
