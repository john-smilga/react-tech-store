import React from "react";
import { Link } from "react-router-dom";
import Title from "../Title";
import { ProductConsumer } from "../../context";
import Product from "../Product";
export default function Featured() {
  return (
    <section className="py-5">
      <div className="container">
        {/* title */}
        <Title title="featured products" center="true" />
        {/* products */}
        <div className="row my-5">
          <ProductConsumer>
            {value => {
              const { featuredProducts } = value;
              return featuredProducts.map(product => (
                <Product key={product.id} product={product} />
              ));
            }}
          </ProductConsumer>
        </div>
        {/* button */}
        <div className="row mt-5">
          <div className="col text-center">
            <Link to="/products" className="main-link">
              our products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
