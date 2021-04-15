import React, { useState, useEffect } from "react";
import styled from "styled-components";
import NavBar from "../Components/navbar";
import { RouteComponent } from "./about";
import { productData as Data } from "../utils/data";
import Footer from "../Components/footer";
const Products = () => {
  const [items, setItems] = useState(Data);
  const [search, setSearch] = useState("");
  return (
    <>
      <NavBar />
      <RouteComponent value="Home / Products" />
      <Wrapper>
        <article>
          <div className="containerLeft">
            <input
              placeholder="Search"
              type="text"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            ></input>
            <h1>Category</h1>
            <ul>
              <li>
                <button
                  className="linkBtn"
                  onClick={() => {
                    setItems(Data);
                  }}
                >
                  {" "}
                  All{" "}
                </button>
              </li>
              <li>
                {" "}
                <button
                  className="linkBtn"
                  onClick={() => {
                    setItems(
                      Data.filter((ele) => {
                        return ele.Category === "office";
                      })
                    );
                  }}
                >
                  Office
                </button>
              </li>
              <li>
                <button
                  className="linkBtn"
                  onClick={() => {
                    setItems(
                      Data.filter((ele) => {
                        return ele.Category === "Living Room";
                      })
                    );
                  }}
                >
                  Living Room
                </button>
              </li>
              <li>
                <button
                  className="linkBtn"
                  onClick={() => {
                    setItems(
                      Data.filter((ele) => {
                        return ele.Category === "kitchen";
                      })
                    );
                  }}
                >
                  Kitchen
                </button>
              </li>
              <li>
                <button
                  className="linkBtn"
                  onClick={() => {
                    setItems(
                      Data.filter((ele) => {
                        return ele.Category === "bedroom";
                      })
                    );
                  }}
                >
                  Bedroom
                </button>
              </li>
              <li>
                <button
                  className="linkBtn"
                  onClick={() => {
                    setItems(
                      Data.filter((ele) => {
                        return ele.Category === "dining";
                      })
                    );
                  }}
                >
                  Dinning
                </button>
              </li>
              <li>
                <button
                  className="linkBtn"
                  onClick={() => {
                    setItems(
                      Data.filter((ele) => {
                        return ele.Category === "kids";
                      })
                    );
                  }}
                >
                  Kids
                </button>
              </li>
              <h1 style={{ marginLeft: "1rem" }}>Colors</h1>

              <div className="radios">
                <input type="radio" name="color" id="1" />
                <label htmlFor="1">Red</label>

                <input type="radio" name="color" id="2" />
                <label htmlFor="2">Blue</label>

                <input type="radio" name="color" id="3" />
                <label htmlFor="3">Green</label>

                <input type="radio" name="color" id="4" />
                <label htmlFor="4">Yellow</label>
              </div>
              <button
                className="btn"
                onClick={() => {
                  setItems(Data);
                }}
              >
                Clear Filter
              </button>
            </ul>
          </div>
          <div className="containerRight">
            {items.map((item) => {
              const { image, id, title, price } = item;
              return <Card image={image} id={id} title={title} price={price} />;
            })}
          </div>
        </article>
      </Wrapper>
      <Footer />
    </>
  );
};

const Card = ({ image, id, title, price }) => {
  return (
    <>
      <div className="content" key={id}>
        <img src={image}></img>
        <div className="info">
          <h4 style={{ color: "grey" }}> {title} </h4>
          <h4 style={{ marginLeft: "4rem", color: "#996a51" }}> $ {price} </h4>
        </div>
      </div>
    </>
  );
};
const Wrapper = styled.section`
  box-sizing: border-box;
  display: block;
  article {
    margin-top: 2rem;
    margin-left: 10rem;
    display: flex;
  }
  .containerLeft {
    width: 18%;
  }
  .containerLeft input {
    font-size: 20px;
    border: 2px solid grey;
    width: 80%;
    background-color: #d4d4d4;
  }
  .containerLeft h1 {
  }
  .containerLeft ul {
    list-style: none;
    margin-left: -3.8rem;
  }
  label {
    margin-left: -9rem;
  }
  .containerLeft ul li {
    padding: 2px 1rem;
    width: 6rem;
  }
  .containerLeft ul li:hover {
    border: 1px solid grey;
    border-left: 6px solid #996a51;
  }
  .btn {
    margin-top: 2rem;
    font-size: 18px;
    color: white;
    background-color: #996a51;
  }
  .btn:hover {
    color: #916249;
    background-color: #c7b2a7;
  }
  // ------------------------------------------
  .linkBtn {
    background-color: white;
    border: none;
    outline: unset;
  }
  .containerRight {
    width: 70rem;
    height: 40rem;
    overflow: scroll;
    display: flex;
    flex-flow: row wrap;
  }
  .content {
    width: 20rem;
    height: 16rem;
    margin-right: 1rem;
    margin-bottom: 1rem;
  }
  .radios {
    margin-left: -9rem;
  }
  img {
    height: 80%;
    width: 100%;
    margin-bottom: -1rem;
  }
  .info {
    display: flex;
  }
  .info h4 {
    font-size: 18px;
    font-weight: 500;
  }
`;
export default Products;
