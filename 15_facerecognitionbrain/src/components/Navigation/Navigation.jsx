import React from "react";
import './Navigation.css'

const Navigation = ({onRouteChange}) => {
  return (
    <nav className="navbar">
      <span onClick={()=> onRouteChange('signin')} className="signout">Sign Out</span>
    </nav>
  );
};

export default Navigation;
