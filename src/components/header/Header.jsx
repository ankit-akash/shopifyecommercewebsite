import React, { useState } from "react";
import css from "./Header.module.css";
import Logo from "../../assets/logo.png";
import { CgShoppingBag } from "react-icons/cg";
import { GoThreeBars } from "react-icons/go";
import { HashLink as Link } from "react-router-hash-link";

const Header = () => {
  const [ShowMenu, setShowMenu] = useState(true);
  const toggleMenu = () => {
    setShowMenu((ShowMenu) => !ShowMenu);
  };
  return (
    <div className={css.container} id="Home">
      <div className={css.Logo}>
        <img src={Logo} alt="" />
        <span>Shopify</span>
      </div>

      <div className={css.right}>
        <div className={css.bars} onClick={toggleMenu}>
          <GoThreeBars />
        </div>
        <ul
          className={css.menu}
          style={{ display: ShowMenu ? "inherit" : "none" }}
        >
          <li>
            <Link to="#Home">Home</Link>
          </li>
          <li>
            <Link to="#Virtual">Virtual</Link>
          </li>
          <li>
            <Link to="#Products">Featured Products</Link>
          </li>
          <li>
            <Link to="#Reviews">Reviews</Link>
          </li>
          <li>
            <Link to="#Footer">About</Link>
          </li>
        </ul>
        <input type="text" className={css.search} placeholder="Search" />
        <CgShoppingBag Bag className={css.cart} />{" "}
      </div>
    </div>
  );
};

export default Header;
