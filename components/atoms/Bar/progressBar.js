import React from "react";
import { Progress, Button, Container, Row, Col } from "reactstrap";
import "./style.css";

function ProgressBar(props) {
  return (
    <div>
      {/* {props.text} */}
      <Row>
        <Col>
        {props.text}
        </Col>
        <Col className='right'>
        {props.value} %
        </Col>
      </Row>
      <Progress className="progress" color={props.color} value={props.value} />
    </div>
  );
}

export default ProgressBar;
