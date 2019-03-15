import React from "react";
import { ProductConsumer } from "../../context";
import styled from "styled-components";
import Title from "../Title";
import Product from "../Product";
export default function Products() {
  return (
    <ProductConsumer>
      {value => {
        const { filteredProducts } = value;
        return (
          <ProductsWrapper className="py-5">
            <div className="container">
              {/* title */}
              <Title center title="our products" />
              {/* products */}
              <div className="row py-5">
                {filteredProducts.map(product => {
                  return <Product key={product.id} product={product} />;
                })}
              </div>
            </div>
          </ProductsWrapper>
        );
      }}
    </ProductConsumer>
  );
}

const ProductsWrapper = styled.section``;
