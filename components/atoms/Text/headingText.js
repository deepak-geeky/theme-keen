import React from "react";

function HeadingText(props) {
  const { text } = props;
  return (
    <div className="container-heading-text">
      {text}
      <style jsx>
          {
            `
            .container-heading-text
            {
                // font-size:1rem;
                font-family: Poppins,Helvetica,sans-serif;
                // padding-left:1em;
                // font-weight:500;
                color:#48465b
            }
            `
          }
      </style>
    </div>
  );
}

export default HeadingText;
