import React from "react";
import { Row, Col } from "reactstrap";
import Trend from "../../Molecules/card/trend";
import "./mainContent.css";
import MapCard from "../../Molecules/card/map";
// import TableListLarge from "../../Molecules/tableListLarge/tableListLarge";
import DownloadFiles from "../../Molecules/card/downloadFiles";

const MainContent = () => {
  return (
    <div className="container">
      <Trend />

      <MapCard />

      <DownloadFiles />

      {/* <TableListLarge /> */}
    </div>
  );
};

export default MainContent;
