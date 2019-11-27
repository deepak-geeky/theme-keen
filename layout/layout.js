import React from 'react'
import Helmet from 'react-helmet'
import SideBar from '../components/organism/sideBar/sideBar';
import Nav from '../components/organism/navBar/nav';
import MainContent from '../components/organism/mainContent/mainContent';
import './layout.css'
import Head from 'next/head'



const Layout = ({children}) => {
    return (
        <div className='page'>
            <Head>
            <script src="https://kit.fontawesome.com/15373bc92f.js" crossorigin="anonymous"></script>   
            </Head>
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
                {children}
            </div>
        </div>
    )
}

export default Layout
