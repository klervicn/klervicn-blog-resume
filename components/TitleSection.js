import React from "react";
import Head from "next/head";
import Name from "../components/Name";

export default ({ style, title, name = {}, ...props }) => (
  <div>
    <div style={{ display: "table-cell" }}>
      <img
        style={{
          height: 128
        }}
        src="../static/picture.png"
      />
    </div>
    <div
      style={{
        display: "table-cell",
        verticalAlign: "top",
        paddingLeft: 10
      }}
    >
      <Name style={{}} name={name} />

      <h2 style={{}}>
        {title}
      </h2>
    </div>
  </div>
);
