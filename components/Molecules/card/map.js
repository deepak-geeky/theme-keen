import React from "react";
import GoogleApiWrapper, { MapContainer } from "../../atoms/Maps/googleMaps";
import { Row, Col } from "reactstrap";
import ProgressBar from "../../atoms/Bar/progressBar";
import "./map.css";
import HeadingText from "../../atoms/Text/headingText";
function MapCard() {
  return (
    <div className='container'>
      <div className="head">
          <Row>
              <Col> <HeadingText text={'Top Location'} /></Col>
              <Col className='menu'> ... </Col>
            </Row>
      </div>
        <hr/>
      <div style={{ height:"350px" }}>
        <GoogleApiWrapper />
      </div>

      <div>
        <Row>
          <Col xs="6">
            {" "}
            <ProgressBar text={"London"} color={"danger"} value={39}/>{" "}
          </Col>
          <Col xs="6">
            {" "}
            <ProgressBar text={"Delhi"} color={"info"} value={49} />{" "}
          </Col>
        </Row>
        <Row>
          <Col xs="6">
            {" "}
            <ProgressBar text={"Mumbai"} color={"success"} value={85} />{" "}
          </Col>
          <Col xs="6">
            {" "}
            <ProgressBar text={"Chennai"} color={"warning"} value={19} />{" "}
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default MapCard;
