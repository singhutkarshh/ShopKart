import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <div>
        <h5> © 2021 </h5>
        <h5 style={{ color: "#996a51" }}> ShopKart </h5>
        <h5> All Rights Reserved </h5>
      </div>
      <a href="https://github.com/singhutkarshh/Shopkart">Github Source code</a>
      <h4>Developed by :- UTKARSH SINGH</h4>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  background-color: black;
  color: white;
  min-height: 7rem;
  div {
    display: flex;
    margin-left: 42%;
  }
  h5 {
    margin-left: 0.5rem;
  }
  h4 {
    text-align: center;
    margin-top: -0.2rem;
  }
  a {
    text-align: center;
    margin-left: 45%;
    text-decoration: none;
  }
`;

export default Footer;
