import React, { useEffect, useState } from "react";
import "../api.js";
import getProducts from "../api.js";
import "../css/viewProducts.css";

const Product = (props) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    setProduct(props.product);
  }, [props.product]);
  return (
    <div class="col d-flex justify-content-md-center">
      <div
        className="card mb-2"
        style={{
          minHeight: "280px",
          minWidth: "750px",
          maxHeight: "300px",
          maxWidth: "750px"
        }}
      >
        <div className="row no-gutters">
          <div className="col-md-2">
            <img className="card-img" src={product.thumbnail} />
          </div>
          <div className="col-md-4">
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">
                Precio: ${product.price} {product.currency_id}
              </p>
              <p className="card-text">Condicion: {product.condition}</p>
              <p className="card-text">
                Cantidad: {product.available_quantity}
              </p>
              <button className="btn btn-primary">Comprar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
