import React from "react";
import Link from "next/link";
import HoverButton from "../../atoms/Buttons/hoverButton";
import "./nav.css";
import NavTopLeft from "../../Molecules/navBar/navTopLeft";
import NavTopRight from "../../Molecules/navBar/navTopRight";
import { NavBottomLeft } from "../../Molecules/navBar/navBottomLeft";
import { NavBottomRight } from "../../Molecules/navBar/navBottomRight";
import IconButton from "../../atoms/Buttons/iconButton";
import SideBar from "../sideBar/sideBar";

const Nav = () => (
  <nav className="nav-container">
    {/* mobile view */}
    {/* <div className="mobile-view">
      <Row>
        <Col xs="9"></Col>
        <div className="hamburger-menu">
          <IconButton
            className="hamburger"
            iconUrl="/hamburger.png"
            height="50px"
            width="50px"
          />

          <SideBar className="sidebar-container" />
        </div>
      </Row>
    </div> */}
    {/* Desktop-view */}
    {/* <div className="desk-view"> */}
    <div className="navtopleft">
      <NavTopLeft />
    </div>
    <div className="navtopright">
      <NavTopRight className="navtopright" />
    </div>
    <div className='hr-nav'>
    <hr />
    </div>
    <div className="navbottomleft">
      <NavBottomLeft className="navbottomleft" />
    </div>
    <div className="navbottomright">
      <NavBottomRight className="navbottomright" />
    </div>

    {/* </div> */}
  </nav>
);

export default Nav;
