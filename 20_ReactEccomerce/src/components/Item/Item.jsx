import React from 'react'
import "./Item.css"

const Item = ({image, name, old_price, new_price}) => {
  return (
    <div className="item">
        <img src={image} alt="img" />
        <p>{name}</p>
        <div className="item-prices">
            <div className="item-price-new">${new_price}</div>
            <div className="item-price-old">${old_price}</div>
        </div>
    </div>
  )
}

export default Item