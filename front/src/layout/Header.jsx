import React from "react";
import { NavLink } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import "./header.css";
const Header = () => {
  return (
    <div className="container">
      <header>
        <h1>
          Estore<span className="point">.</span>
        </h1>
        <nav>
          <ul>
            <li>
              <NavLink
                to={"/"}
                className={(navData) => (navData.isActive ? "active" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/category"}
                className={(navData) => (navData.isActive ? "active" : "")}
              >
                Category
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/latest"}
                className={(navData) => (navData.isActive ? "active" : "")}
              >
                Latest
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/blog"}
                className={(navData) => (navData.isActive ? "active" : "")}
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/pages"}
                className={(navData) => (navData.isActive ? "active" : "")}
              >
                Pages
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/contact"}
                className={(navData) => (navData.isActive ? "active" : "")}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/form"}
                className={(navData) => (navData.isActive ? "active" : "")}
              >
                Form
              </NavLink>
            </li>
            <input className="searchinp" placeholder="Search products" />
            <FaRegHeart />
            <MdShoppingCart />
            <button className="signInbtn">Sign in</button>
           
          </ul>
        </nav>
        <div className="menu">
        <GiHamburgerMenu />
        </div>
      </header>
    </div>
  );
};

export default Header;
