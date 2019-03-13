import React from "react";
import styled from "styled-components";
export default function Product({ product }) {
  const { url } = product.image.fields.file;

  return (
    <div className="col-10 mx-auto col-sm-8 col-md-6 col-lg-4 my-3">
      <div className="card">
        <div className="img-container">
          <img
            src={url}
            className="card-img-top p-5"
            alt="product"
            style={{ height: "320px" }}
          />
        </div>
        <div className="card-body d-flex justify-content-between">
          <p className="text-uppercase mb-0">{product.title}</p>
          <p className="text-main mb-0">${product.price}</p>
        </div>
      </div>
    </div>
  );
}
