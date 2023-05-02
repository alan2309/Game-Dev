import React from "react";
import back from "./back.png";
import boy from "../game/boy.png";
import veg from "./veg.png";
import grocery from "./grocery.png";
import ice from "./icecream.png";
import fruits from "./fruits.png";
import { Row, Col } from "react-bootstrap";
import Basket from "../Basket";

function Market() {
  const ShopCard = ({ img, name }) => {
    return (
      <div className="mb-4" style={{ backgroundColor: "White" }}>
        <img
          style={{ height: "24vh", width: "25vw" }}
          src={img}
          alt="shop"
        ></img>
        <div
          className="d-flex justify-content-center"
          style={{ backgroundColor: "#FFC953" }}
        >
          {name} vendor
        </div>
      </div>
    );
  };
  return (
    <div>
      <img
        style={{
          height: "100vh",
          width: "100vw",
          position: "absolute",
          zIndex: "-101",
        }}
        src={back}
        alt="back"
      ></img>
      <img
        style={{
          height: "45vh",
          width: "30vw",
          position: "absolute",
          zIndex: "-90",
          bottom: "0",
          left: "0",
        }}
        src={boy}
        alt="back"
      ></img>
      <div
        style={{
          backgroundColor: "white",
          width: "57%",
          height: "15vh",
          position: "absolute",
          top: "65px",
          right: "25%",
          border: "1px solid black",
          padding: "20px",
        }}
      >
        <p style={{ fontSize: "22px" }}>
          First in the list is 1kg ladyfinger! Where will you go?
        </p>
      </div>
      <div
        style={{
          backgroundColor: "transparent",
          height: "60vh",
          width: "55vw",
          position: "absolute",
          top: "35%",
          left: "20%",
        }}
      >
        <Row>
          <Col md={6}>
            <ShopCard img={veg} name="vegetable" />
          </Col>
          <Col md={6}>
            <ShopCard img={fruits} name="fruit" />
          </Col>
          <Col md={6}>
            <ShopCard img={grocery} name="grocery" />
          </Col>
          <Col md={6}>
            <ShopCard img={ice} name="ice cream" />
          </Col>
        </Row>
      </div>
      <Basket />
    </div>
  );
}

export default Market;
