import React from "react";
import aboutBcg from "../images/aboutBcg.jpeg";
import Hero from "../components/Hero";
import Info from "../components/AboutPage/Info";

export default function AboutPage() {
  return (
    <>
      <Hero img={aboutBcg} />
      <Info />
    </>
  );
}
