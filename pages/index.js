import React from "react";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "../components/organism/sideBar/sideBar";
import Trend from "../components/Molecules/card/trend";
import MapCard from "../components/Molecules/card/map";
import Nav from "../components/organism/navBar/nav";

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css?family=Poppins&display=swap"
        rel="preload"
        as="font"
      ></link>
    </Head>

    <div className="container">



      <SideBar />
      <Trend />
      <MapCard />
      <Nav />

    </div>
  </div>
);

export default Home;
