import React, { useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "../css/Navbar.css";

function InfoBanner() {
  return (
    <div className="info-banner p-2 text-center bg-black text-white">
      Note: This website is still under construction.
    </div>
  );
}

export default InfoBanner;
