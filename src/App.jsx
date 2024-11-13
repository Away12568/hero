import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

const App = () => {
  return (
    <>
      <Header />
      <Hero id="1" />
      <Hero id="2" />
      <Hero id="3" />
      <Hero id="4" />
      <Hero id="5" />
      <Hero id="6" />
    </>
  );
};

export default App;
