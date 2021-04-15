import React from "react";
import NavBar from "../Components/navbar";
import Intro from "../Components/intro";
import Featured from "../Components/featured";
import Reviews from "../Components/reviews";
import Newsletter from "../Components/newsletter";
import Footer from "../Components/footer";
const Home = () => {
  return (
    <>
      <NavBar />
      <Intro />
      <Featured />
      <Reviews />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
