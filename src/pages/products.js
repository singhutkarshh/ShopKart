import React, { useState } from "react";
import styled from "styled-components";
import NavBar from "../Components/navbar";
import { RouteComponent } from "./about";
import { productData as Data } from "../utils/data";
import Footer from "../Components/footer";

const Products = () => {
  const [items, setItems] = useState(Data);
  const [search, setSearch] = useState("");
  const [gridview, setGridView] = useState(true);
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
          <div>
            <div className="buttons">
              <button
                onClick={() => {
                  setGridView(true);
                }}
              >
                <i class="fas fa-th-large"></i>
              </button>
              <button
                onClick={() => {
                  setGridView(false);
                }}
              >
                <i class="fas fa-list"></i>
              </button>
              <h2
                style={{
                  fontSize: "18px",
                  marginLeft: ".8rem",
                  paddingLeft: "1rem",
                  borderLeft: "1px solid black",
                  color: "grey",
                }}
              >
                {items.length} Products found
              </h2>
              <label
                style={{
                  marginLeft: "30rem",
                  fontSize: "18px",
                  marginTop: ".8rem",
                }}
                for="Sort"
              >
                Sort By :
              </label>
              <select
                name="Sort"
                id="Sort"
                style={{
                  marginLeft: "1rem",
                  fontSize: "16px",
                  outlineStyle: "unset",
                  color: "grey",
                  border: "none",
                }}
              >
                <option>Price(Highest)</option>
                <option>Price(Lowest)</option>
                <option>Name(A-Z)</option>
                <option>Name(Z-A)</option>
              </select>
            </div>
            {gridview ? (
              <div className="containerRight">
                {items.map((item) => {
                  const { image, id, title, price } = item;
                  return (
                    <GridCard
                      image={image}
                      id={id}
                      title={title}
                      price={price}
                    />
                  );
                })}
              </div>
            ) : (
              <div className="listContainer">
                {items.map((item) => {
                  const { image, id, title, price, detail } = item;
                  return (
                    <ListCard
                      image={image}
                      id={id}
                      title={title}
                      price={price}
                      details={detail}
                    />
                  );
                })}
              </div>
            )}
          </div>
        </article>
      </Wrapper>
      <Footer />
    </>
  );
};

const GridCard = ({ image, id, title, price }) => {
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

const ListCard = ({ image, id, title, price, details }) => {
  return (
    <>
      <div className="Listcontent" key={id}>
        <img
          src={image}
          style={{
            margin: "0",
            marginRight: "3rem",
            width: "24%",
            height: "15rem",
          }}
        ></img>
        <div className="Listinfo">
          <h4 style={{ color: "grey", fontSize: "28px" }}> {title} </h4>
          <h4 style={{ color: "#996a51", marginTop: "-2rem" }}> $ {price} </h4>
          <p style={{ width: "95%", letterSpacing: "1px" }}>{details}</p>
          <button
            style={{
              padding: "3px 5px",
              backgroundColor: "#996a51",
              color: "white",
              outline: "unset",
            }}
          >
            Details
          </button>
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
  .listContainer {
    width: 68rem;
    height: 40rem;
    overflow: scroll;
  }
  .Listcontent {
    display: flex;
    width: 100%;
    height: 18rem;
    margin: 2rem 0;
    border-bottom: 2px solid grey;
  }
  .Listinfo {
    width: 68%;
    margin-top: -2rem;
  }
  .buttons {
    margin-bottom: 1rem;
    display: flex;
  }
  .buttons button {
    margin-right: 0.4rem;
    outline: unset;
    border: none;
    background-color: white;
  }
  i {
    font-size: 20px;
  }
`;
export default Products;
