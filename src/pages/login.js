import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <Wrapper>
      <div className="container">
        <h1>OOPS ...!!! THERE IS AN ERROR IN LOGIN</h1>
        <h3>Sorry , This Service is not Availiable for the moment</h3>
        <Link to="/" className="btn">
          Back Home
        </Link>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: grey;
  text-align: center;
  .container {
    width: 70%;
    height: 20rem;
    border: 2px solid black;
    background-color: #bee6c5;
  }
  h1 {
    padding-top: 2rem;
    font-size: 40px;
  }
  h3 {
    color: black;
    margin-bottom: 1.5rem;
  }
  .btn {
    text-decoration: none;
    font-size: 23px;
  }
`;
export default Login;
