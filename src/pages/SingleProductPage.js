import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import singleProductImg from "../images/singleProductBcg.jpeg";
import styled from "styled-components";
import { ProductConsumer } from "../context";
export default function SingleProductPage() {
  return (
    <>
      <Hero img={singleProductImg} title="single product" />
      <ProductConsumer>
        {value => {
          const { singleProduct, addToCart, loading } = value;
          if (loading) {
            return <h1>product loading...</h1>;
          }

          const { company, description, id, price, title } = singleProduct;
          const { url } = singleProduct.image.fields.file;
          console.log(url);
          return (
            <ProductWrapper className="py-5">
              <div className="container">
                <div className="row">
                  <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
                    <img
                      src={`../${url}`}
                      alt="single product"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
                    <h5 className="text-title mb-4">model :{title}</h5>
                    <h5 className="text-capitalize text-muted mb-4">
                      company : {company}
                    </h5>
                    <h5 className="text-main text-capitalize  mb-4">
                      price : ${price}
                    </h5>
                    <p className="text-capitalize text-title mt-3">
                      some info about product :
                    </p>
                    <p>{description}</p>

                    <button
                      type="button"
                      className="main-link"
                      style={{ margin: "0.75rem" }}
                      onClick={() => addToCart(id)}
                    >
                      add to cart
                    </button>
                    <Link
                      to="/products"
                      className="main-link"
                      style={{ margin: "0.75rem" }}
                    >
                      back to products
                    </Link>
                  </div>
                </div>
              </div>
            </ProductWrapper>
          );
        }}
      </ProductConsumer>
    </>
  );
}

const ProductWrapper = styled.section``;
