import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Footer from "../Components/footer";
import NavBar from "../Components/navbar";
import { RouteComponent } from "./about";

const Cart = () => {
  const [isEmpty, setIsEmpty] = useState("");
  var x = JSON.parse(localStorage.getItem("cart"));
  useEffect(() => {
    if (x.length === 0) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  }, []);
  console.log(isEmpty);
  let MRP = 0;
  return (
    <>
      <NavBar />
      <RouteComponent value="Home / Cart" />
      <Wrapper>
        {isEmpty ? (
          <div className="emptyContainer">
            <h1>CART IS EMPTY</h1>
            <h3>Please Add some Items to the Cart ....!!!!</h3>
            <button className="emptyBtn">
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/products"
              >
                Add Items
              </Link>
            </button>
          </div>
        ) : (
          <div className="header">
            <ul>
              <li className="item" style={{ width: "9%", paddingLeft: "3rem" }}>
                Item
              </li>
              <li className="item" style={{}}>
                Company
              </li>
              <li className="item" style={{ marginLeft: "16" }}>
                Color
              </li>
              <li className="item" style={{ marginLeft: "17%" }}>
                Subtotal
              </li>
            </ul>
            <hr></hr>
            {x.map((item) => {
              const { title, image, price, Company, id, Colors } = item;
              MRP += price;
              return (
                <>
                  <ul key={id}>
                    <li className="item" style={{ width: "13%" }}>
                      <img src={image}></img>
                      <h3 style={{ color: "black" }}>{title}</h3>
                    </li>
                    <li
                      className="item"
                      style={{ marginTop: "2rem", width: "4%" }}
                    >
                      {Company}
                    </li>
                    <li
                      className="item"
                      style={{ marginLeft: "16%", marginTop: "2rem" }}
                    >
                      {Colors}
                    </li>
                    <li
                      className="item"
                      style={{
                        marginLeft: "17%",
                        marginTop: "2rem",
                        color: "black",
                      }}
                    >
                      $ {price}
                    </li>
                  </ul>
                  <hr></hr>
                </>
              );
            })}
            <article>
              <div className="leftContainer">
                <button>
                  <Link to="/products" className="btn">
                    Continue Shopping
                  </Link>
                </button>
              </div>
              <div className="rightContainer">
                <button
                  style={{
                    backgroundColor: "Black",
                    marginLeft: "60%",
                  }}
                  onClick={() => {
                    localStorage.setItem("cart", JSON.stringify([]));
                  }}
                >
                  <Link to="/products" className="btn">
                    Clear Shopping Cart
                  </Link>
                </button>
                <div className="innerContainer">
                  <div className="arrange" style={{ marginTop: "1rem" }}>
                    <h3>Sub-Total : </h3>
                    <h3 style={{ marginLeft: "3rem" }}> $ {parseInt(MRP)} </h3>
                  </div>
                  <div className="arrange">
                    <h3>Shipping Charges : </h3>
                    <h3 style={{ marginLeft: "3rem" }}>N / A</h3>
                  </div>
                  <hr></hr>
                  <div className="arrange set">
                    <h3>Order Total : </h3>
                    <h3 style={{ marginLeft: "3rem" }}>$ {parseInt(MRP)}</h3>
                  </div>
                </div>
                <button className="orderBtn">
                  <Link
                    style={{
                      color: "white",
                      textDecoration: "none",
                      fontSize: "22px",
                    }}
                    to="/login"
                  >
                    Order Today
                  </Link>
                </button>
              </div>
            </article>
          </div>
        )}
      </Wrapper>
      <Footer />
    </>
  );
};

const Wrapper = styled.section`
  display: block;
  box-sizing: border-box;

  .header {
    width: 80%;
    margin-top: 2rem;
    margin-left: 8rem;
  }
  ul {
    display: flex;
    list-style: none;
  }
  ul li {
    margin-left: 15%;
    font-size: 20px;
    color: grey;
  }

  img {
    width: 5rem;
    height: 5rem;
    margin-left: 2rem;
  }
  h3 {
    margin-top: -0.2rem;
    font-weight: 500;
    margin-bottom: -0.5rem;
    font-size: 16px;
    margin-left: 2rem;
  }
  .item {
    margin-left: 11%;
    font-size: 20px;
    color: grey;
    width: 8%;
  }
  .leftContainer {
    width: 45%;
    height: 100%;
  }
  .rightContainer {
    width: 45%;
    height: 100%;
    margin-left: 3rem;
  }
  article {
    display: flex;
    width: 100%;
    height: 23rem;
    margin-top: 3rem;
  }
  button {
    padding: 2px 1rem;
    background-color: #996a51;
    border-radius: 4px;
    outline: unset;
    color: white;
  }
  .btn {
    text-decoration: none;
    color: white;
    font-size: 16px;
  }
  .innerContainer {
    width: 70%;
    height: 14rem;
    border: 2px solid grey;
    margin-top: 2rem;
    margin-left: 8rem;
  }
  .arrange {
    display: flex;
    margin-bottom: 3rem;
  }
  .arrange h3 {
    font-size: 20px;
  }
  .set h3 {
    font-size: 26px;
    padding-top: 1rem;
  }
  .orderBtn {
    margin-top: 2rem;
    margin-left: 50%;
  }
  .emptyContainer {
    height: 26rem;
    width: 100%;
  }
  .emptyContainer h1 {
    font-size: 40px;
    text-align: center;
  }
  .emptyContainer h3 {
    font-size: 20px;
    text-align: center;
    color: grey;
  }
  .emptyBtn {
    font-size: 25px;
    margin-top: 3rem;
    margin-left: 45%;
  }
  .emptyBtn:hover {
    color: #916249;
    background-color: #c7b2a7;
  }
`;
export default Cart;
