import React from "react";
import SquareIcon from "../../atoms/Icon/squareIcon";
import "./sideBar.css";

const links = ['+Export','+Config','+Terminal']

export const  SideBar=(props) => {
  return (
    <div className="sidebar-main-container">
      <div className='main-logo'>
        <SquareIcon src={"/main-logo.png"} height={40} width={59} />
      </div>
      <div className='sidenav'>
            <a href="#">
              <div>
                {/* <SquareIcon src={"/sidebar/add-button.svg"} height={25} width={25} />
                 */}
                 <i class="fas fa-align-center fa-lg"></i>
              </div>
              Export
            </a>
          <a href="#" className='sidebar-dd'>
              <div>
              <i class="fab fa-buffer fa-lg"></i>

                {/* <SquareIcon src={"/sidebar/bookmark.svg"} height={25} width={25} /> */}
              </div>
              Config
              <div className="sidebar-dd-content">
    {links.map((e,index)=>{
      return <a href='#' key={index}>{e}</a>
    })}
              </div>
            </a>
          <a href="#">
              <div>
              <i class="fas fa-bookmark fa-lg"></i>

                {/* <SquareIcon src={"/sidebar/folders.png"} height={25} width={25} /> */}
              </div>
              Report
            </a>
          <a href="#">
              <div>
              <i class="fas fa-terminal fa-lg"></i>

                {/* <SquareIcon src={"/sidebar/folders.png"} height={25} width={25} /> */}
              </div>
              Console
            </a>
          <a href="#">
              <div>
              <i class="fas fa-cogs fa-lg"></i>

                {/* <SquareIcon src={"/sidebar/folders.png"} height={25} width={25} /> */}
              </div>
              System
            </a>
          <a href="#">
              <div>
              <i class="fas fa-clipboard-list fa-lg"></i>

                {/* <SquareIcon src={"/sidebar/folders.png"} height={25} width={25} /> */}
              </div>
              Logs
            </a>
      </div>
    </div>
  );
}

export default SideBar;
