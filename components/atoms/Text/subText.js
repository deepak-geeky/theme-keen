import React from "react";

function SubText(props) {
  return (
    <div className="subText">
      {props.text}
      <style jsx>
        {`
          .subText{
            font-size: 0.6rem;
            font-family: Poppins, Helvetica, sans-serif;
            // padding-left: 1em;
            font-weight: 500;
            color: #48465b;
          }
        `}
      </style>
    </div>
  );
}

export default SubText;
