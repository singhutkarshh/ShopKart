import React, { useState, useEffect } from "react";
import styled from "styled-components";
import NavBar from "../Components/navbar";
import { Link } from "react-router-dom";
import { RouteComponent } from "./about";
import { productData as Data } from "../utils/data";
import Footer from "../Components/footer";

if (localStorage.getItem("cart") === null) {
  var x = [];
  localStorage.setItem("cart", JSON.stringify(x));
}

const Products = () => {
  const [items, setItems] = useState(Data);
  const [search, setSearch] = useState("");
  const [gridview, setGridView] = useState(true);
  const [showDetails, setShowDetails] = useState(false);
  const [detailInfo, setDetailInfo] = useState(items[0]);
  const [notify, setNotify] = useState(false);

  const [dropdown, setDropdown] = useState("a-z");

  //drop-down filter
  useEffect(() => {
    if (dropdown === "decrease") {
      let x = items.sort((a, b) => {
        return a.price - b.price;
      });
      setItems(x);
    }
    if (dropdown === "increase") {
      let x = items.sort((a, b) => {
        return a.price - b.price;
      });
      setItems(x.reverse());
    }
    if (dropdown === "z-a") {
      let x = items.sort((a, b) => {
        return a.title.localeCompare(b.title);
      });
      setItems(x);
    }
    if (dropdown === "a-z") {
      let x = items.sort((a, b) => {
        return a.title.localeCompare(b.title);
      });

      setItems(x.reverse());
    }
  }, [dropdown]);

  //notification on adding to cart
  useEffect(() => {
    setTimeout(() => {
      setNotify(false);
    }, 4000);
  }, [notify]);

  if (showDetails === false) {
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
                  htmlFor="select"
                >
                  Sort By :
                </label>
                <select
                  name="select"
                  id="select"
                  style={{
                    marginLeft: "1rem",
                    fontSize: "16px",
                    outlineStyle: "unset",
                    color: "grey",
                    border: "none",
                  }}
                  onChange={(e) => {
                    console.log(e.target.value);
                    setDropdown(e.target.value);
                  }}
                >
                  <option value="decrease">Price(Highest)</option>
                  <option value="increase">Price(Lowest)</option>
                  <option value="a-z">Name(A-Z)</option>
                  <option value="z-a">Name(Z-A)</option>
                </select>
              </div>
              {gridview ? (
                <div className="containerRight">
                  {items.map((item) => {
                    const { image, id, title, price } = item;
                    return (
                      <>
                        <div className="content" key={id}>
                          <img
                            src={image}
                            onClick={() => {
                              setDetailInfo(Data[id - 1]);
                              setShowDetails(true);
                            }}
                          ></img>
                          <div className="info">
                            <h4 style={{ color: "grey" }}> {title} </h4>
                            <h4
                              style={{ marginLeft: "4rem", color: "#996a51" }}
                            >
                              {" "}
                              $ {price}{" "}
                            </h4>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              ) : (
                <div className="listContainer">
                  {items.map((item) => {
                    const { image, id, title, price, detail } = item;
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
                            <h4 style={{ color: "grey", fontSize: "28px" }}>
                              {" "}
                              {title}{" "}
                            </h4>
                            <h4
                              style={{ color: "#996a51", marginTop: "-2rem" }}
                            >
                              {" "}
                              $ {price}{" "}
                            </h4>
                            <p style={{ width: "95%", letterSpacing: "1px" }}>
                              {detail}
                            </p>
                            <button
                              style={{
                                padding: "3px 5px",
                                backgroundColor: "#996a51",
                                color: "white",
                                outline: "unset",
                              }}
                              onClick={() => {
                                setDetailInfo(Data[id - 1]);
                                setShowDetails(true);
                              }}
                            >
                              Details
                            </button>
                          </div>
                        </div>
                      </>
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
  }
  if (showDetails === true) {
    const {
      id,
      title,
      image,
      price,
      detail,
      availiable,
      SKU,
      Company,
      Colors,
      Category,
      freeShip,
    } = detailInfo;
    return (
      <>
        <NavBar />
        <RouteComponent value={` Home / Products / ${title}`} />
        <WrapperDetails>
          <article>
            <div className="containerLeft">
              <button
                className="btn"
                onClick={() => {
                  setShowDetails(false);
                }}
              >
                <Link
                  to="/products"
                  style={{
                    textDecoration: "none",
                    color: "white",
                  }}
                >
                  BACK TO PRODUCTS
                </Link>
              </button>
              <img src={image} alt="image"></img>
            </div>

            <div className="containerRight">
              <h1>{title}</h1>
              <h4> $ {price} </h4>
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
              <div className="details">
                <h3> Color : </h3>
                <h3 style={{ color: "grey" }}>{Colors}</h3>
              </div>
              <div className="details">
                <h3> Category : </h3>
                <h3 style={{ color: "grey" }}>{Category}</h3>
              </div>
              <div className="details">
                <h3> Free Shipping Availiability : </h3>
                <h3 style={{ color: "grey" }}>{freeShip} </h3>
              </div>
              <p>{detail}</p>
              <hr></hr>
              <button
                className="btn"
                style={{ marginBottom: "6rem" }}
                onClick={() => {
                  x = JSON.parse(localStorage.getItem("cart"));
                  x.push(Data[id - 1]);
                  localStorage.setItem("cart", JSON.stringify(x));
                  setNotify(true);
                }}
              >
                <Link
                  to="/cart"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  {" "}
                  ADD TO CART
                </Link>
              </button>
            </div>
          </article>
        </WrapperDetails>
        {notify && (
          <div
            style={{
              width: "100%",
              height: "4rem",
              backgroundColor: "lightgreen",
            }}
          >
            <h3
              style={{
                fontSize: "20px",
                paddingTop: "1rem",
                textAlign: "center",
                fontWeight: "500",
              }}
            >
              SUCCESS ! Your item has been added , <strong> Check Cart</strong>
            </h3>
          </div>
        )}
        <Footer />
      </>
    );
  }
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
  img:hover {
    transform: scale(1.1);
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

const WrapperDetails = styled.section`
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
    margin-top: 2rem;
    border-radius: 3px;
  }
  .btn:hover {
    color: #916249;
    background-color: #c7b2a7;
  }
  .containerRight {
    margin-left: 6rem;
    width: 50%;
    margin-top: 3rem;
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
    width: 85%;
    letter-spacing: 1px;
    line-height: 2rem;
  }
  .details {
    display: flex;
    margin-top: -1rem;
  }
  .details h3 {
    margin-right: 2rem;
  }
`;
export default Products;
