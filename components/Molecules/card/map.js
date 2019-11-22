import React from "react";
import GoogleApiWrapper from "../../atoms/Maps/googleMaps";
import { Row, Col } from "reactstrap";
import ProgressBar from "../../atoms/Bar/progressBar";
import "./map.css";
import HeadingText from "../../atoms/Text/headingText";
function MapCard() {
  return (
    <div className='map-container'>
          <Row>
              <Col xs='10'> <HeadingText text={'Top Location'} /></Col>
              <Col className='menu'> ... </Col>
            </Row>
        <hr/>

        <Row className='map-wrapper'>
        <GoogleApiWrapper />
        </Row>


        <Row className='city-names'>
          <Col xs="6">
            {" "}
            <ProgressBar text={"London"} color={"danger"} value={39}/>{" "}
          </Col>
          <Col xs="6">
            {" "}
            <ProgressBar text={"Delhi"} color={"info"} value={49} />{" "}
          </Col>
        </Row>
        <Row style={{paddingTop:'10%'}}>
          <Col xs="6">
            {" "}
            <ProgressBar text={"Goa"} color={"success"} value={85} />{" "}
          </Col>
          <Col xs="6">
            {" "}
            <ProgressBar text={"Dhaka"} color={"warning"} value={19} />{" "}
          </Col>
        </Row>

    </div>
  );
}

export default MapCard;
