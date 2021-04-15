import React from "react";
import styled from "styled-components";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
export const About = () => {
  return (
    <Wrapper>
      <Navbar />
      <RouteComponent value="Home / About" />
      <article>
        <div className="imgContainer">
          <img
            src="https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg.a876f19f.jpeg"
            alt="about"
          ></img>
        </div>
        <div className="aboutContainer">
          <h1>Our Story</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            accusantium sapiente tempora sed dolore esse deserunt eaque
            excepturi, delectus error accusamus vel eligendi, omnis beatae.
            Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
            dolore, obcaecati incidunt sequi blanditiis est exercitationem
            molestiae delectus saepe odio eligendi modi porro eaque in libero
            minus unde sapiente consectetur architecto. Ullam rerum, nemo iste
            ex, eaque perspiciatis nisi, eum totam velit saepe sed quos
            similique amet. Ex, voluptate accusamus nesciunt vitae esse iste.
          </p>
        </div>
      </article>
      <Footer />
    </Wrapper>
  );
};

export const RouteComponent = ({ value }) => {
  return (
    <Wrapper>
      <div className="routeContainer">
        <h1>{value}</h1>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .routeContainer {
    min-height: 6rem;
    width: 100%;
    background-color: #dedee0;
    margin-top: -1.5rem;
  }
  .routeContainer h1 {
    margin-left: 9.5rem;
    font-size: 34px;
    padding-top: 1.6rem;
    color: #996a51;
    font-weight: 500;
  }
  .imgContainer {
    width: 40%;
    margin-left: 10rem;
  }
  img {
    height: 33rem;
    width: 33rem;
  }
  .aboutContainer h1 {
    font-size: 40px;
  }
  .aboutContainer p {
    width: 90%;
    line-height: 1.8rem;
    letter-spacing: 1px;
    color: grey;
  }
  .aboutContainer {
    width: 40%;
    margin-left: 1rem;
  }
  article {
    display: flex;
    margin: 5rem 0;
  }
`;
