import React from "react";
import "../header.css";
import { BiUserCircle } from "react-icons/bi";
import itclogo from "../assets/itclogo.png";

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <img className="image" alt="logo" src={itclogo} />
      </div>
      <div className="header_center">
        <h1>Technical GC Portal</h1>
      </div>
      <div className="header_right">
        {/* <div className="profilelogo">
                <h3>Full_name</h3>
                <div className="logo">
                <BiUserCircle/>
                </div>
                </div> */}
      </div>
    </div>
  );
}
export default Header;
