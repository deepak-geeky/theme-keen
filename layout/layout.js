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
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
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
