import React, { useContext } from 'react';
import './css/ShopCategory.css';
import dropdown_icon from '../components/Assets/dropdown_icon.png';
import { ShopContext } from '../Context/ShopContext';
import Item from '../components/Item/Item';

const ShopCategory = (props) => {
  const { allProducts } = useContext(ShopContext); // Destructure allProducts from context
  const { banner, category } = props;

  return (
    <div className="shop-category">
      <img className='shopcategory-banner' src={banner} alt="banner" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="dropdown icon" />
        </div>
      </div>
      <div className="shopcategory-product">
        {allProducts && allProducts
          .filter(item => category === item.category)
          .map(item => (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))
        }
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;
