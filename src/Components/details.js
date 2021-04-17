import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RouteComponent } from "../pages/about";
import Footer from "./footer";
import NavBar from "./navbar";

const Details = (data) => {
  const { title, img, price, details, availiable, SKU, Company } = data;
  return (
    <>
      <NavBar />
      <RouteComponent value={` Home / Products / ${title}`} />
      <Wrapper>
        <article>
          <div className="containerLeft">
            <img src={img} alt="image"></img>
            <Link
              to="/products"
              className="btn"
              style={{
                textDecoration: "none",
                borderRadius: "10px",
              }}
            >
              BACK TO PRODUCTS
            </Link>
          </div>

          <div className="containerRight">
            <h1>{title}</h1>
            <h4> $ {price} </h4>
            <p>{details}</p>
            <div className="details">
              <h3>Availiable : </h3>
              <h3 style={{ color: "grey" }}>{availiable}</h3>
            </div>
            <div className="details">
              <h3> SKU : </h3>
              <h3 style={{ color: "grey" }}>{SKU}</h3>
            </div>
            <div className="details">
              <h3> BRAND : </h3>
              <h3 style={{ color: "grey" }}>{Company}</h3>
            </div>
            <hr></hr>
            <button className="btn" style={{ marginBottom: "6rem" }}>
              ADD TO CART
            </button>
          </div>
        </article>
      </Wrapper>
      <Footer />
    </>
  );
};

const Wrapper = styled.section`
  article {
    display: flex;
  }
  .containerLeft {
    width: 35rem;
    height: 35rem;
    margin-left: 10rem;
  }
  img {
    margin: 2rem 0;
    width: 100%;
    height: 100%;
  }
  .btn {
    border-style: none;
    color: white;
    background-color: #996a51;
    font-size: 15px;
    padding: 0.5rem 8px;
    margin: 2rem 0;
  }
  .btn:hover {
    color: #916249;
    background-color: #c7b2a7;
  }
  .containerRight {
    margin-left: 6rem;
    margin-top: 3rem;
    width: 50%;
  }
  h1 {
    font-size: 35px;
    margin-bottom: -1.5rem;
  }
  h4 {
    font-size: 23px;
    color: #996a51;
  }
  p {
    width: 76%;
    letter-spacing: 1px;
    line-height: 2rem;
  }
  .details {
    display: flex;
  }
  .details h3 {
    margin-right: 2rem;
  }
`;
export default Details;
