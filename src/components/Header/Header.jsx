import React, { useContext } from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Header = () => {
  const { logout } = useContext(AuthContext);
  const hendealLogout = () => {
    logout()
      .then(() => {
      
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/login">Login</Link>
        <Link to="/singup">Singup</Link>
        {<button onClick={hendealLogout}>Log out</button>}
      </div>
    </nav>
  );
};

export default Header;
