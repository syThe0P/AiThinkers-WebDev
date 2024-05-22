import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
          doloremque. Ea vitae ad facere quasi eligendi ullam iure voluptatum
          rerum aliquid nulla aliquam, maiores quis exercitationem culpa
          laboriosam illo odit quas animi, voluptate omnis excepturi corrupti,
          dolores tempora odio! Ea?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
          laboriosam ex est soluta maiores sed architecto similique quisquam
          neque modi iusto earum fugit, rerum cupiditate facere hic magni quis
          eligendi. Nostrum reiciendis soluta aperiam eius quod dicta
          accusantium minus iste.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
