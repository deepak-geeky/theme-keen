import React from "react";
import Link from "next/link";
import HoverButton from "../../atoms/Buttons/hoverButton";
import "./navTopLeft.css";

const components =[{name:'Button',href:'/component/base/buttons'},
{name:'Dropdown',href:'/component/base/dropdown'},
{name:'Typography',href:'/component/base/typography'}
]


const NavTopLeft = () => (
  
  <ul className="list">
    <li className="item">
      <Link href="/">
        <a className='dashboard-link'>
        <HoverButton label={"Dashboard"} hoverColor={"#f5f7ff"} />
        </a>
        {/* Dashboard */}
      </Link>
    </li>
    <li>
      <div className='dropdown'>
      <HoverButton label={"Components"} hoverColor={"#f5f7ff"} className='dropbtn' />
        <div className='dropdown-content'>
          {components.map( (e) =>{
            //flaticon here
            return <Link href={`${e.href}`}>
              <a>{e.name}</a>
            </Link>
          })}
        </div>
      </div>
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
