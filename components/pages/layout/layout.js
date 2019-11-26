import React from 'react'
import Helmet from 'react-helmet'
import SideBar from '../../organism/sideBar/sideBar';
import Nav from '../../organism/navBar/nav';
import MainContent from '../../organism/mainContent/mainContent';
import './layout.css'


const Layout = () => {
    return (
        <div className='page'>
            <Helmet titleTemplate="%s | KeenThemes" defaultTitle='KeenThemes'/>
            {/* <SideBar className='sidebar'/>
            <Nav className='nav'/>
            <MainContent className='main-content'/> */}
            <div className="sidebar">
                <SideBar />
            </div>
            <div className="nav">
                <Nav/>
            </div>
            <div className="main-content">
                <MainContent />
            </div>
        </div>
    )
}

export default Layout
