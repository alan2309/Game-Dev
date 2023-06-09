import React, { useState } from "react";
import back from "./back.png";
import boy from "../game/boy.png";
import veg from "./veg.png";
import grocery from "./grocery.png";
import ice from "./icecream.png";
import fruits from "./fruits.png";
import wronggif from "../images/wrong.gif";
import { Row, Col,Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSpeechSynthesis } from "react-speech-kit";
import { Modal } from "react-bootstrap";

function Market({ level, question }) {
  const { speak, voices } = useSpeechSynthesis();
  const[show,setShow] = useState(false);
  const handleSpeak = () => {
    speak({
      text: `You have to buy ${level[question].question}! Where will you go?`,
      voice: voices[90],
    });
    console.log(voices);
  };

  const navigate = useNavigate();

  const goShop = (id) => {
    if (level[question].shop === id) {
      navigate(`/shop/${id}`);
    } else {
      setShow(true)
    }
  };
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
      <Modal show={show} centered>
        <Modal.Body>
          <div className="d-flex justify-content-center">
            <img
              style={{ height: "50vh", width: "30vw" }}
              src={wronggif}
              alt="answer"
            />
          </div>
          <br />
          <div className="d-flex justify-content-center">
            <Button
              onClick={() => {
                setShow(false);
              }}
            >
              Try Again
            </Button>
          </div>
        </Modal.Body>
      </Modal>
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
          border: "1px solid white",
          padding: "20px",
        }}
        onClick={handleSpeak}
      >
        {level[parseInt(question)] !== undefined && (
          <h1 style={{ fontSize: "22px" }}>
            {`You have to buy ${
              level[parseInt(question)].question
            }! Where will you go?`}
          </h1>
        )}
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
          <Col md={6} onClick={() => goShop(0)}>
            <ShopCard img={veg} name="vegetable" />
          </Col>
          <Col md={6} onClick={() => goShop(1)}>
            <ShopCard img={fruits} name="fruit" />
          </Col>
          <Col md={6} onClick={() => goShop(2)}>
            <ShopCard img={grocery} name="grocery" />
          </Col>
          <Col md={6} onClick={() => goShop(3)}>
            <ShopCard img={ice} name="ice cream" />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Market;
