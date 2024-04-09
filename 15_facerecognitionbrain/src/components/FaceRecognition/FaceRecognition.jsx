import React from "react";

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className="container">
      <div className="holder">
        <img src={imageUrl} alt="img" width='500px' height='auto'/>
        <div className="bounding_box" style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
      </div>
    </div>
  );
};

export default FaceRecognition;
