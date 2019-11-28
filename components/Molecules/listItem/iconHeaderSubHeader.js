import React from "react";
import CircleIcon from "../../atoms/Icon/circleIcon";
import HeadingText from "../../atoms/Text/headingText";
import SubText from "../../atoms/Text/subText";
import "./iconHeaderSubHeader.css"

const IconHeaderSubHeader = props => {
  const { url, text, subtext } = props;
  return (
    <div className="ihs-container">
      <div className="image-cont">
        <CircleIcon src={url} height={"40px"} width={"40px"} />
      </div>
      <div className="text-container">
        <HeadingText text={text} />
        <SubText text={subtext} />
      </div>
    </div>
  );
};

export default IconHeaderSubHeader;
