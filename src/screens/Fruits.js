import React from "react";
import { Col, Row } from "react-bootstrap";
import Basket from "./Basket";
import boy from "./game/boy.png";
import fruitBack from "./images/fruitBack.png";
import back from './game/image3.png';
import vendor from "./images/fruitMan.png";
import apple from './images/apple.png'
import mango from './images/mango.png'
import banana from './images/banana.png'
import strawberry from './images/strawbery.png'
import { useSpeechSynthesis } from "react-speech-kit";
import { useDrag } from "react-dnd";

function Fruits({ level, question, nextQuestion }) {
  const { speak, voices } = useSpeechSynthesis();
  const handleSpeak = () => {
    speak({
      text: `Ayoo kiddo!! Choose ${level[question].question} from the market`,
      voice: voices[90],
    });
    console.log(voices);
  };
  const list = [
    { id: 1, name: "Apples", item: apple },
    { id: 2, name: "Bananas", item: banana },
    { id: 3, name: "Mangoes", item: mango },
    { id: 4, name: "Strawberries", item: strawberry },
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
          height: "100vh",
          width: "81vw",
          position: "absolute",
        
          zIndex: "-100",
        }}
        src={fruitBack}
        alt="back"
      ></img>
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
        alt="boy"
      ></img>
      <img
        style={{
          height: "60vh",
          width: "25svw",
          position: "relative",
          zIndex: "-90",
          top: "40vh",
          left: "58vw",
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
          top: "29px",
          right: "30%",
          border: "1px solid white",
          padding: "20px",
        }}
        onClick={handleSpeak}
      >
        <h1 style={{ fontSize: "24px" }}>Ayoo kiddo!! {`Choose ${level[question].question} from the market`}</h1>
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
      <Basket level={level}
        correct={level[question].ans}
        question={question}
        nextQuestion={nextQuestion} />
    </div>
  );
}

export default Fruits;
