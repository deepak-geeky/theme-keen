import React from "react";
import SquareIcon from "../../atoms/Icon/squareIcon";
import HeadingText from "../../atoms/Text/headingText";
import SubText from "../../atoms/Text/subText";
import Price from "../../atoms/Text/price";
import { Row, Col } from "reactstrap";

function ListItemCardOne(props) {
  return (
    <div>
      <Row>
        <Col xs='2'>
          <SquareIcon src={"/dashboard/python.png"} height={50} width={50} />
        </Col>
        <Col xs='6'>
          <HeadingText text={"Python"} />
          <SubText text={"A Programming Language"} />
        </Col>
        <Col xs='3'>
          <Price text={"+11$"} />
        </Col>
      </Row>
      <Row>
        <Col xs='2'>
          <SquareIcon src={"/dashboard/python.png"} height={50} width={50} />
        </Col>
        <Col xs='6'>
          <HeadingText text={"Python"} />
          <SubText text={"A Programming Language"} />
        </Col>
        <Col xs='3'>
          <Price text={"+11$"} />
        </Col>
      </Row>
    </div>
  );
}

export default ListItemCardOne;
