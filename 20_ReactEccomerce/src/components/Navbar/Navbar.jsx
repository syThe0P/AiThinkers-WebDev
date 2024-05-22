import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const {getTotalCartItems} = useContext(ShopContext);
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Shop {menu === "shop" ? <hr /> : null}{" "}
          </Link>
        </li>
        <li
          onClick={() => {
            setMenu("men");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/mens">
            Men {menu === "men" ? <hr /> : null}
          </Link>
        </li>
        <li
          onClick={() => {
            setMenu("women");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/womens">
            Women {menu === "women" ? <hr /> : null}
          </Link>
        </li>
        <li
          onClick={() => {
            setMenu("kid");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/kids">
            Kids {menu === "kid" ? <hr /> : null}
          </Link>
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link style={{ textDecoration: "none" }} to="/login">
          <button>Login</button>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/cart">
          <img src={cart_icon} alt="cart_icon" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
