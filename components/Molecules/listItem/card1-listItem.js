import React from "react";
import IconHeaderSubHeader from "./iconHeaderSubHeader";
import Price from "../../atoms/Text/price";
import './card1.css'


function ListItemOne(props) {
  const {url,text,subtext,price} = props
  return (
    <div className='list-1-container'>
      <div className="left-icon-header">
      <IconHeaderSubHeader url={url} text={text} subtext={subtext}/>
      </div>
      <div className="price-container">
      <Price text={price}/>
      </div>
    </div>
  );
}

export default ListItemOne;
