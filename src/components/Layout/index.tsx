import { NextPage } from "next";
import React from "react";
import { Header } from "..";

interface Props {
  children: JSX.Element;
}

const index: NextPage<Props> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default index;
