import React from "react";
import SquareIcon from "../../atoms/Icon/squareIcon";
import "./sideBar.css";
import HoverMenu from "../../atoms/Menu/hoverMenu";

function SideBar(props) {
  return (
    <div className="sidebar-container">
      <div className='main-logo'>
        <SquareIcon src={"/main-logo.png"} height={40} width={59} />
      </div>

      
      <div className='sidenav'>
        


            <a href="#">
              <div>
                <SquareIcon src={"/sidebar/add-button.svg"} height={25} width={25} />
              </div>
              <HoverMenu />
            </a>



          <a href="#">
              <div>
                <SquareIcon src={"/sidebar/bookmark.svg"} height={25} width={25} />
              </div>
              Config
            </a>



          <a href="#">
              <div>
                <SquareIcon src={"/sidebar/folders.png"} height={25} width={25} />
              </div>
              Report
            </a>




          <a href="#">
              <div>
                <SquareIcon src={"/sidebar/folders.png"} height={25} width={25} />
              </div>
              Console
            </a>




          <a href="#">
              <div>
                <SquareIcon src={"/sidebar/folders.png"} height={25} width={25} />
              </div>
              System
            </a>



          <a href="#">
              <div>
                <SquareIcon src={"/sidebar/folders.png"} height={25} width={25} />
              </div>
              Logs
            </a>

        

      </div>
    </div>
  );
}

export default SideBar;
