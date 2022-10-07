import React, { Fragment } from "react";

import CardMain from "../molecules/CardMain"
import { HeaderMobile } from "../molecules/HeaderMobile";
import GlobalStyle from "./GlobalStyles"



const LayoutHome = () => {
  
  return (
    <>
      <GlobalStyle />
      <HeaderMobile />
      <CardMain />

    </>
  );
};

export default LayoutHome
