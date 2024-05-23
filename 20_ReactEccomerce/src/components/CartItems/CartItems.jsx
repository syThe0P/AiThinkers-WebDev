import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
  const { allProducts, cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext);

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p> {/* Corrected typo: 'Tittle' to 'Title' */}
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {allProducts?.map((product) => {
        if (cartItems[product.id] > 0) {
          return (
            <div key={product.id}> {/* Added key to each element in the map function */}
              <div className="cartitems-format cartitems-format-main">
                <img
                  src={product.image}
                  alt="img"
                  className="cartitems-product-icon"
                />
                <p>{product.name}</p>
                <p>${product.new_price}</p>
                <button className="cartitems-quantity">
                  {cartItems[product.id]}
                </button>
                <p>${product.new_price * cartItems[product.id]}</p>
                <img
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(product.id); {/* Changed the onClick handler to pass the correct ID */}
                  }}
                  alt="icon"
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-items">
              <p>SubTotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-items">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-items">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have promo code, Enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
