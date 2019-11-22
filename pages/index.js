import React from "react";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "../components/organism/sideBar/sideBar";
import Nav from "../components/organism/navBar/nav";
import MainContent from "../components/organism/mainContent/mainContent";
import './index.css'

const Home = () => (
  <div className='body'>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css?family=Poppins&display=swap"
        rel="preload"
        as="font"
      ></link>
    </Head>

    <div className="main-container">
      <SideBar />
      <Nav />
      <MainContent />

    </div>
  </div>
);

export default Home;
