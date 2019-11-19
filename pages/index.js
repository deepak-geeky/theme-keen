import React from "react";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "../components/organism/navBar/nav";
import SplineArea from "../components/atoms/Chart_Graph/splineArea";
import GoogleApiWrapper, {
  MapContainer
} from "../components/atoms/Maps/googleMaps";
import ProgressBar from "../components/atoms/Bar/progressBar";
import MenuDropDown from "../components/atoms/dropDown/menuDropDown";
import { Container, Row, Col } from "reactstrap";
import SideBar from "../components/Molecules/sideBar/sideBar";
import Trend from "../components/Molecules/card/trend";
import MapCard from "../components/Molecules/card/map";

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Row>
      <Col xs='2'>
        <SideBar />
      </Col>
      <Col className="content-area">
        <Row>
          <Nav />
        </Row>
        <Row>
          <Col xs='4' style={{height:'100px'}}> <Trend/> </Col>
          <Col xs='4' style={{height:'100px'}}> <MapCard/> </Col>
        </Row>
      
      </Col>
      <style jsx>{`
        .content-area {
          overflow: auto;
          height: 100px;
        }
      `}</style>
    </Row>
  </div>
);

export default Home;
