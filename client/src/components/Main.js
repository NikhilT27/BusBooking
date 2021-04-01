import React from "react";

import Header from "./Header";

export default function Main(props) {
  return (
    <>
      <Header />

      {props.children}
    </>
  );
}
