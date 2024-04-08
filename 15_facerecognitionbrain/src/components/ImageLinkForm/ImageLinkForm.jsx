import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
  return (
    <div className="container">
      <p className="title">{'The magic Brain will detect faces in your pictures, Give it a try'}</p>
      <div className="content">
        <input className="form" type="text" onChange={onInputChange}/>
        <button onClick={onButtonSubmit} className="button">Detect</button>
      </div>
    </div>
  );
};

export default ImageLinkForm;
