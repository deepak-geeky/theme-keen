import React from "react";
import "./mainContent.css";
import SplineArea from "../../atoms/Chart_Graph/splineArea";
import ListItemOne from "../../Molecules/listItem/card1-listItem";
import CardLayout from "../../../layout/cardLayout";
import CardHeader from "../../Molecules/card/cardHeader";
import GoogleApiWrapper from "../../atoms/Maps/googleMaps";
import MainTable from "../../atoms/Table/table";
import PercentAreaChart from "../../atoms/Chart_Graph/percentAreaChart";
import ProgressBars from '../../Molecules/bar/progressBar'
import { salesProgressData, topLocationData } from "../../../utils/progressData";
import UserProgress from "../../Molecules/card/userProgress";
import { userProgressData } from "../../../utils/userProgressData";


const MainContent = () => {
  return (
    <div className="main-container">
      <div className="trend">
        <CardLayout>
          <CardHeader headerText={"Trends"} />
          <SplineArea />
          <ListItemOne
            url={"/files/doc.svg"}
            text={"Lionel Messi"}
            subtext={"Barcelona"}
            price={"10$"}
          />
          <ListItemOne
            url={"/files/jpg.svg"}
            text={"Cr7"}
            subtext={"PSG"}
            price={"16$"}
          />
          <ListItemOne
            url={"/files/pdf.svg"}
            text={"Antone Grizeman"}
            subtext={"Barcelona"}
            price={"100$"}
          />
        </CardLayout>
      </div>

      <div className="map">
        <CardLayout>
          <CardHeader headerText={"Top Location"} />
          <div className="map-wrapper">
            <GoogleApiWrapper />
          </div>
          <ProgressBars data={topLocationData} />
        </CardLayout>
      </div>

      <div className="sales-stat">
        <CardLayout>
        <CardHeader headerText={"Sales Stats"} />
          <PercentAreaChart />
          <ProgressBars data={salesProgressData}/>
        </CardLayout>
      </div>

      <div className="table-bg">
        <CardLayout>
          <MainTable />
        </CardLayout>
      </div>

      <div className="user-progress">
        <CardLayout>
        <CardHeader headerText={"User Progress"} />
        <UserProgress data={userProgressData}/>
        </CardLayout>
      </div>


      <div className="sale-stats">
        <CardLayout>
        <CardHeader headerText={"Sales Stats"} />
        <PercentAreaChart />
          <ProgressBars data={salesProgressData}/>
        </CardLayout>
      </div>
    </div>
  );
};

export default MainContent;
