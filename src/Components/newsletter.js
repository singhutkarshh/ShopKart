import React from "react";
import styled from "styled-components";

const Newsletter = () => {
  return (
    <Wrapper>
      <h1>Join our Newsletter and get 20% off</h1>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint
          unde quaerat ratione soluta veniam provident adipisci cumque eveniet
          tempore?
        </p>
        <form>
          <input placeholder="Enter email" autoCorrect />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 0 8rem;
  margin-top: 18rem;
  min-height: 20rem;
  h1 {
    font-size: 32px;
  }
  p {
    width: 40%;
    font-size: 18px;
    color: grey;
  }
  div {
    display: flex;
  }
  input {
    font-size: 20px;
    width: 25rem;
    padding: 5px 3px;
    margin-left: 10rem;
    margin-top: 2.5rem;
  }
  button {
    font-size: 25px;
    background-color: #996a51;
    color: white;
  }
  button:hover {
    color: #916249;
    background-color: #c7b2a7;
  }
`;

export default Newsletter;
