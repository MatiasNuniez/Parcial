import React, { useEffect, useState } from "react";
import "../api.js";
import Product from "./Product.jsx";

const ViewProducts = (props) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(props.products || []);
  }, [props.products]);
  function renderProducts() {
    if (products.length > 0) {
      return products.map((product) => (
        <Product product={product} key={product.id} />
      ));
    } else {
      return "aoisj";
    }
  }

  return <div>{renderProducts()}</div>;
};

export default ViewProducts;
