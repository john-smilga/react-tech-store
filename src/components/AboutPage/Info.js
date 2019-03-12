import React from "react";
import Title from "../Title";
import aboutBcg from "../../images/aboutBcg.jpeg";
export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <img
              src={aboutBcg}
              className="img-fluid img-thumbnail"
              alt="iphone"
              style={{ background: "var(--darkGrey)" }}
            />
          </div>
          <div className="col-10 mx-auto col-md-6 my-3 p-3">
            <Title title="our store" />
            <p className="text-lead text-muted my-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
              impedit ab deleniti doloremque quia quis libero deserunt
              repellendus sint earum?
            </p>
            <p className="text-lead text-muted my-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
              impedit ab deleniti doloremque quia quis libero deserunt
              repellendus sint earum?
            </p>
            <button style={{ marginTop: "2rem" }} className="main-link">
              more info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
