import React from "react";
import NavBar from "../Components/navbar";
import Intro from "../Components/intro";
import Featured from "../Components/featured";
import Reviews from "../Components/reviews";
import Newsletter from "../Components/newsletter";
import Footer from "../Components/footer";
import styled from "styled-components";
const Home = () => {
  return (
    <WrapperHome>
      <h2 className="extra">Please Use Desktop for better Experience</h2>
      <h3 className="extra1">Thank You</h3>
      <div className="extraBlock">
        <NavBar />
        <Intro />
        <Featured />
        <Reviews />
        <Newsletter />
        <Footer />
      </div>
    </WrapperHome>
  );
};
const WrapperHome = styled.section`
  @media screen and (max-width: 1480px) {
    .extraBlock {
      display: none;
    }
    .extra {
      font-size: 30px;
      text-align: center;
      margin-top: 10rem;
    }
    .extra1 {
      font-size: 24px;
      text-align: center;
      margin-top: 1rem;
    }
  }
  @media screen and (min-width: 1480px) {
    .extraBlock {
      display: all;
    }
    .extra {
      display: none;
    }
    .extra1 {
      display: none;
    }
  }
`;
export default Home;
