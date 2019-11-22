import React from "react";
import Link from "next/link";
import HoverButton from "../../atoms/Buttons/hoverButton";
import "./nav.css";
import HoverMenu from "../../atoms/Menu/hoverMenu";
import { Row, Col } from "reactstrap";
import NavTopLeft from "../../Molecules/navBar/navTopLeft";
import NavTopRight from "../../Molecules/navBar/navTopRight";
import { NavBottomLeft } from "../../Molecules/navBar/navBottomLeft";
import { NavBottomRight } from "../../Molecules/navBar/navBottomRight";

const Nav = () => (
  <nav className="nav-container">
    <Row>
      <Col xs="9">
        <NavTopLeft />
      </Col>
      <Col>
        <NavTopRight />
      </Col>
    </Row>
    <hr />
    <Row>
      <Col xs='8'>
        <NavBottomLeft />
      </Col>
      <Col>
        <NavBottomRight />
      </Col>
    </Row>
  </nav>
);

export default Nav;
