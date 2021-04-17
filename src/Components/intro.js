import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Intro = () => {
  return (
    <Wrapper>
      <article>
        <div className="container1">
          <Textsection />
        </div>
        <div className="container2">
          <Imagesection />
        </div>
      </article>
    </Wrapper>
  );
};

const Textsection = () => {
  return (
    <Wrapper>
      <h1>Design Your Comfort Zone</h1>
      <h4>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at sed
        omnis corporis doloremque possimus velit! Repudiandae nisi odit, aperiam
        odio ducimus, obcaecati libero et quia tempora excepturi quis alias?
      </h4>
      <Link className="btn" to="/products">
        SHOP NOW
      </Link>
    </Wrapper>
  );
};

const Imagesection = () => {
  return (
    <Wrapper>
      <img src="./images/Intro1.jpg" className="Intro1"></img>
      <img src="./images/Intro2.jpg" className="Intro2"></img>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .container1 {
    width: 37%;
    min-height: 30rem;
    margin-left: 12rem;
    margin-top: 5rem;
  }
  .container2 {
    width: 37%;
    min-height: 28rem;
    margin-left: 2rem;
    margin-top: 5rem;
    position: relative;
  }
  article {
    display: flex;
  }
  h1 {
    font-size: 45px;
    width: 20rem;
    line-height: 2.8rem;
  }
  h4 {
    font-size: 20px;
    margin-top: -2rem;
    width: 85%;
    line-height: 2rem;
    color: #595959;
  }
  .btn {
    padding: 0.7rem 1.1rem;
    border-style: none;
    border-radius: 10px;
    color: white;
    background-color: #996a51;
    font-size: 20px;
    text-decoration: none;
  }
  .btn:hover {
    color: #916249;
    background-color: #c7b2a7;
  }
  .Intro1 {
    width: 100%;
    height: 28rem;
  }
  .Intro2 {
    width: 15rem;
    height: 10rem;
    position: absolute;
    bottom: -2%;
    left: -10%;
  }
`;

export default Intro;
