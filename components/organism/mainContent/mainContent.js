import React from "react";
import { Row, Col } from "reactstrap";
import Trend from "../../Molecules/card/trend";
import './mainContent.css'
import MapCard from "../../Molecules/card/map";
import TableListLarge from "../../Molecules/tableListLarge/tableListLarge";

const MainContent = () => {
  return (
    <div className='main-content-container'>
      <Row>
        <Col xs="4">
          <Trend />
        </Col>
        <Col xs="4">
            <MapCard />
        </Col>
        <Col xs="12">
            <TableListLarge />
        </Col>
        <Col xs="4">
            Hell
        </Col>
      </Row>
    </div>
  );
};

export default MainContent;
