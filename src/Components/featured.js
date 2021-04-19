import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Featured = () => {
  return (
    <Wrapper>
      <h1>Featured Products</h1>
      <article>
        <div className="products">
          <div
            className="container"
            style={{
              backgroundImage:
                'url("https://dl.airtable.com/.attachmentThumbnails/65708b701baa3a84883ad48301624b44/2de058af")',
            }}
          ></div>
          <div className="description">
            <p>Entertainment Center</p>
            <p className="price">$599.99</p>
          </div>
        </div>
        <div className="products">
          <div
            className="container"
            style={{
              backgroundImage:
                'url("https://dl.airtable.com/.attachmentThumbnails/1af97a4d3eb28563962d8e3520727ffc/1b9cc17f")',
            }}
          ></div>
          <div className="description">
            <p> High-Back Bench </p>
            <p className="price"> $399.99 </p>
          </div>
          <button>
            <Link
              to="/products"
              style={{
                color: "white",
                fontSize: "20px",
                textDecoration: "none",
              }}
            >
              ALL PRODUCTS
            </Link>
          </button>
        </div>
        <div className="products">
          <div
            className="container"
            style={{
              backgroundImage:
                'url("https://dl.airtable.com/.attachmentThumbnails/1e4a818f5184993e430420a152315b40/873c7094")',
            }}
          ></div>
          <div className="description">
            <p> Modern Bookshelf </p>
            <p className="price"> $319.99 </p>
          </div>
        </div>
      </article>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  box-sizing: border-box;
  background-color: #f0d8cc;
  h1 {
    text-align: center;
    font-size: 38px;
    margin-top: 7rem;
    padding-top: 3rem;
    margin-bottom: 3rem;
  }
  .container {
    width: 25rem;
    height: 15rem;
    background-position: center;
  }
  .container:hover {
    transform: scale(1.1);
  }
  p {
    display: flex;
  }
  .description {
    font-size: 18px;
    display: flex;
  }
  article {
    display: flex;
  }
  .products {
    margin-left: 5rem;
  }
  .price {
    margin-left: 10rem;
    color: #996a51;
  }

  button {
    margin: 3rem 8rem;
    padding: 0.5rem 0.7rem;
    border-style: none;
    border-radius: 10px;

    background-color: #996a51;
  }
  button:hover {
    color: #916249;
    background-color: #c7b2a7;
  }
`;
export default Featured;
