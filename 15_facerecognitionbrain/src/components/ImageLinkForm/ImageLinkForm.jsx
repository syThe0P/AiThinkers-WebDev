import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = () => {
  return (
    <div className="container">
      <p className="title">{'The magic Brain will detect faces in your pictures, Give it a try'}</p>
      <div className="content">
        <input className="form" type="text" />
        <button className="button">Detect</button>
      </div>
    </div>
  );
};

export default ImageLinkForm;
