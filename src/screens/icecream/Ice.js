import React from "react";
import { Col, Row } from "react-bootstrap";
import Basket from "../Basket";
import boy from "../game/boy.png";
import iceback from "../images/iceBack.png";
import iceback2 from "../images/iceBack2.png";
import iceMan from "../images/iceMan.png";
import choco from "../images/chocolate.png";
import vanilla from "../images/vanilla.png";
import mint from "../images/mint.png";
import strawberry from "../images/strawberry.png";

import { useDrag } from "react-dnd";

function Ice() {
  const list = [
    { id: 1, name: "strawberry icecream", item: strawberry },
    { id: 2, name: "chocolate icecream", item: choco },
    { id: 3, name: "mint icecream", item: mint },
    { id: 4, name: "vanilla icecream", item: vanilla },
  ];
  const ShopCard = ({ img, name, id }) => {
    const [{ isDragging }, dragRef] = useDrag({
      type: "pet",
      item: { id, name, img },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    });
    return (
      <div
        className="mb-4 mx-1"
        style={{ backgroundColor: "White" }}
        ref={dragRef}
      >
        {console.log(isDragging)}
        <img
          style={{ height: "20vh", width: "18.5vw" }}
          src={img}
          alt="shop"
        ></img>
        <div
          className="d-flex justify-content-center"
          style={{ backgroundColor: "#white" }}
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
          width: "70vw",
          position: "absolute",
          bottom: "5vh",
          zIndex: "-100",
          left: "8vw",
        }}
        src={iceback}
        alt="back"
      ></img>
      <img
        style={{
          height: "100vh",
          width: "100vw",
          position: "absolute",
          zIndex: "-101",
        }}
        src={iceback2}
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
        alt="boy"
      ></img>
      <img
        style={{
          height: "60vh",
          width: "30svw",
          position: "relative",
          zIndex: "-90",
          top: "40vh",
          left: "53vw",
        }}
        src={iceMan}
        alt="back"
      ></img>
      <div
        style={{
          backgroundColor: "white",
          width: "57%",
          height: "15vh",
          position: "absolute",
          top: "50px",
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
          top: "40%",
          left: "20%",
        }}
      >
        <Row>
          {list.map((item, index) => {
            return (
              <Col md={6}>
                <ShopCard
                  key={index}
                  img={item.item}
                  name={item.name}
                  id={item.id}
                  draggable
                />
              </Col>
            );
          })}
        </Row>
      </div>
      <Basket correct={list[2]} />
    </div>
  );
}

export default Ice;
