import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <Wrapper>
      <div className="compName">
        <h1>Shop</h1>
        <h1 style={{ color: "#996a51" }}>Kart</h1>
      </div>
      <ul>
        <li>
          <Link to="/" className="links">
            {" "}
            Home{" "}
          </Link>
        </li>
        <li>
          <Link to="/about" className="links" className="links">
            {" "}
            About{" "}
          </Link>
        </li>
        <li>
          <Link to="/products" className="links">
            {" "}
            Products{" "}
          </Link>
        </li>
      </ul>
      <div className="options">
        <h1>
          <Link to="/cart" className="goLinks">
            Cart <i class="fas fa-shopping-cart" />
          </Link>
        </h1>
        <h1>
          <Link to="/login" className="goLinks">
            Login <i class="fas fa-user-plus" />
          </Link>
        </h1>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 5rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  .compName {
    display: flex;
    margin-left: 10%;
  }
  .compName h1 {
    font-family: "Kaushan Script", cursive;
    font-size: 30px;
    text-shadow: 1.2px 1px black;
  }
  ul {
    display: flex;
    list-style: none;
    margin-left: 22%;
    padding-top: 22px;
  }
  ul li {
    margin-left: 1.5rem;
  }
  .links {
    color: #595959;
    text-decoration: none;
    animation: all 2s;
  }
  .links:hover {
    border-bottom: 2px solid #996a51;
  }
  .options {
    display: flex;
    margin-left: 15%;
    padding-top: 10px;
  }
  .options h1 {
    margin-left: 3rem;
    font-size: 24px;
    font-weight: 400;
  }
  .goLinks {
    text-decoration: none;
    color: black;
  }
`;

export default NavBar;
