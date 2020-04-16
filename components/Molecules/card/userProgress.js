import React from "react";
import IconHeaderSubHeader from "../listItem/iconHeaderSubHeader";
import ProgressBar from "../../atoms/Bar/progressBar";
import { Button } from "antd";
import './userProgress.css'

const UserProgress = (props) => {
  return (
    <div className='user-progress-container'>
      {props.data.map((e, index) => {
        return (
            <React.Fragment>
          <div className={`user-detail${index}`}>
            <IconHeaderSubHeader url={e.url} text={e.name} subtext={e.caption} /> 
          </div>
          <div className={`progress${index} userprogress`}>
            <ProgressBar text={e.city} value={e.value} color={e.color} /> 
          </div>
          <div className={`follow-Button${index} follow-button`}>
            <Button type='primary'>Follow</Button>
          </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default UserProgress;
