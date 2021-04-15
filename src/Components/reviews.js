import React from "react";
import styled from "styled-components";
import { reviewData as Data } from "../utils/data";
const Reviews = () => {
  return (
    <Wrapper>
      <article className="Review1">
        <h1>Custom Furniture Built Only For You</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum
          debitis consectetur reprehenderit non aliquam voluptates dolore aut
          vero consequuntur.
        </p>
      </article>
      <article className="review2">
        <Cards />
      </article>
    </Wrapper>
  );
};

const Cards = () => {
  return (
    <>
      {Data.map((item) => {
        const { id, title, description } = item;
        return (
          <div className="card" key={id}>
            <img
              src="https://icons-for-free.com/iconfiles/png/512/desire+game+goal+mission+sport+target+icon-1320184914414056998.png"
              alt="image"
            ></img>
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        );
      })}
    </>
  );
};
const Wrapper = styled.section`
  height: 30rem;
  background-color: #dbb19a;
  .Review1 {
    display: flex;
    flex-direction: row;
    padding-top: 5rem;
  }
  .Review1 h1 {
    font-size: 38px;
    width: 22rem;
    margin-left: 10rem;
  }
  .Review1 p {
    width: 37rem;
    margin-top: 3.5rem;
    margin-left: 20%;
    font-size: 20px;
    color: #996a51;
  }

  .review2 {
    display: flex;
    flex-direction: row;
    margin-left: 6rem;
    margin-top: 3.5rem;
  }
  .card {
    width: 25%;
    height: 20rem;
    background-color: #996a51;
    border-radius: 10px;
    margin-left: 3rem;
  }
  .card img {
    width: 8rem;
    height: 8rem;
    margin-left: 35%;
    border-radius: 80px;
  }
  .card h1 {
    font-size: 26px;
    margin-top: -1rem;
    text-align: center;
    letter-spacing: 1px;
  }
  .card p {
    text-align: center;
    margin-top: -1rem;
    line-height: 1.7rem;
  }
`;

export default Reviews;
