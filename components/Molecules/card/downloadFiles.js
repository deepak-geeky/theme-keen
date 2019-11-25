import React from "react";
import { Row, Col } from "reactstrap";
import "./downloadFiles.css";

const filesData = [
  { icon: "/files/doc.svg", label: "Metronic Documentation", line: true },
  { icon: "/files/jpg.svg", label: "Product Launch Event", line: true },
  { icon: "/files/pdf.svg", label: "Make JS Development", line: true },
  { icon: "/files/doc.svg", label: "Metronic Documentation", line: true },
  { icon: "/files/jpg.svg", label: "Product Launch Event", line: false }
];

const DownloadFiles = () => {
  return (
    <div className="download-files-container">
      <Row>
        <Col xs="8">Download Files</Col>
        <Col>DD</Col>
      </Row>
      <hr />
      <Row>
        <ul className="files-list">
          {filesData.map((e, index) => {
            return (
              <li className={`files files+${index}`} key={index}>
                <Row className='row-file'>
                  <Col xs='3'>
                    <img src={e.icon} height="40px" width="40px" />
                  </Col>
                  <Col>
                    <p>{e.label}</p>
                  </Col>
                </Row>

                {e.line && <hr />}
              </li>
            );
          })}
        </ul>
      </Row>
    </div>
  );
};

export default DownloadFiles;
