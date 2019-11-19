import React from "react";
import Link from "next/link";
import HoverButton from "../../atoms/Buttons/hoverButton";
import "./navTopLeft.css";

const NavTopLeft = () => (
  <ul className="list">
    <li className="item">
      <Link href="/">
        <HoverButton link={"/"} label={"Dashboard"} hoverColor={"#f5f7ff"} />
      </Link>
    </li>
    <li>
      <HoverButton label={"Components"} hoverColor={"#f5f7ff"} />
    </li>
    <li>
      <HoverButton label={"Crud"} hoverColor={"#f5f7ff"} />
    </li>
    <li>
      <HoverButton label={"Apps"} hoverColor={"#f5f7ff"} />
    </li>
    <li>
      <HoverButton label={"Pages"} hoverColor={"#f5f7ff"} />
    </li>
  </ul>
);

export default NavTopLeft;
