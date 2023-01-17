import React from "react";
import './OpenContactBook.css/'
const OpenContactBook = (props) => {
  return (
    <div>
      <button className="openbook-btn" onClick={props.openContacttBook} >Open Contact Book</button>
    </div>
  );
};

export default OpenContactBook;
