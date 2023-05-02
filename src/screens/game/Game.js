import React, { useState } from "react";
import back from "./image5.png";
import back2 from "./image3.png";
import boy from "./boy.png";
import vendor from "./vendor.png";
import Basket from "../Basket";
import { Row, Col } from "react-bootstrap";
import cauli from "./cauli.png";
import carrot from "./carrot.png";
import potato from "./potato.png";
import finger from "./finger.png";

function Game() {
  const [list, setList] = useState([
    { id: 1, name: "cauliflower", item: cauli },
    { id: 2, name: "lady finger", item: finger },
    { id: 3, name: "potato", item: potato },
    { id: 4, name: "carror", item: carrot },
  ]);
  const ShopCard = ({ img, name }) => {
    return (
      <div className="mb-4 mx-1" style={{ backgroundColor: "White" }}>
        <img
          style={{ height: "20vh", width: "18.5vw" }}
          src={img}
          alt="shop"
        ></img>
        <div
          className="d-flex justify-content-center"
          style={{ backgroundColor: "#FFC953" }}
        >
          {name}
        </div>
      </div>
    );
  };
  return (
    <div>
      <img
        className=""
        style={{
          height: "90vh",
          width: "80vw",
          position: "absolute",
          bottom: "0",
          zIndex: "-100",
        }}
        src={back}
        alt="back"
      ></img>
      <img
        style={{
          height: "100vh",
          width: "100vw",
          position: "absolute",
          zIndex: "-101",
        }}
        src={back2}
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
      <img
        style={{
          height: "60vh",
          width: "40vw",
          position: "relative",
          zIndex: "-90",
          top: "40vh",
          left: "40vw",
        }}
        src={vendor}
        alt="back"
      ></img>
      <div
        style={{
          backgroundColor: "white",
          width: "57%",
          height: "15vh",
          position: "absolute",
          top: "75px",
          right: "30%",
          border: "1px solid black",
          padding: "20px",
        }}
      >
        <p style={{ fontSize: "24px" }}>question</p>
      </div>
      <div
        style={{
          backgroundColor: "transparent",
          height: "40vh",
          width: "40vw",
          position: "absolute",
          top: "38%",
          left: "18%",
        }}
      >
        <Row>
          {list.map((item, index) => {
            return (
              <Col md={6}>
                <ShopCard img={item.item} name={item.name} />
              </Col>
            );
          })}
        </Row>
      </div>
      <Basket />
    </div>
  );
}

export default Game;
