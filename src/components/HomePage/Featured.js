import React from "react";
import Title from "../Title";
import { PrductConsumer } from "../../context";
export default function Featured() {
  return (
    <section className="py-5">
      <div className="container">
        {/* title */}
        <Title title="featured products" center="true" />
        {/* products */}
      </div>
    </section>
  );
}
