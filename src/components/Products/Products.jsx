import React, { useState } from "react";
import css from "./Products.module.css";
import Plane from "../../assets/plane.png";
import { ProductsData } from "../../data/products";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const Products = () => {
  const [parent] = useAutoAnimate();

  const [MenuProducts, setMenuProducts] = useState(ProductsData);

  const filter = (type) => {
    setMenuProducts(ProductsData.filter((product) => product.type === type));
  };

  return (
    <div className={css.container} id="Products">
      <img src={Plane} alt="" />
      <h1>Our Featured Products</h1>

      <div className={css.products}>
        <ul className={css.menu}>
          <li onClick={() => setMenuProducts(ProductsData)}>All</li>
          <li onClick={() => filter("SweatShirt")}>SweatShirt</li>
          <li onClick={() => filter("Tshirt")}>Tshirt</li>
          <li onClick={() => filter("Shirt")}>Shirt</li>
          <li onClick={() => filter("Footwear")}>Footwear</li>
        </ul>
        <div className={css.list} ref={parent}>
          {MenuProducts.map((product, i) => (
            <div className={css.product}>
              <div className="left-s">
                <div className="name">
                  <span>{product.name}</span>
                  <span>{product.details}</span>
                </div>
                <span>{product.price}₹</span>
                <a href={product.url} target="_blank" rel="noreferrer">
                  Shop Now
                </a>
              </div>
              <img src={product.img} alt="" className="img-p" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Products;
