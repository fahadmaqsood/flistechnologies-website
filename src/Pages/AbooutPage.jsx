import React from "react";
import MainContainer from "../component/About/MainContainer";
import MissionPage from "../component/About/MissionPage";
import CompanyValues from "../component/About/CompanyValues";
import Reviews from "../component/Home/Reviews";
import Contact from "../component/Home/Contact";

import { useTitle } from "../utils";

function AbooutPage() {
  useTitle("About us | Flis Technologies");

  return (
    <>
      <MainContainer />
      <MissionPage />
      <CompanyValues />
      <Reviews />
      <Contact />
    </>
  );
}

export default AbooutPage;
