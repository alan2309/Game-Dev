import React, { useState } from "react";
import { useDrop, useDrag } from "react-dnd";
import { Modal, Button } from "react-bootstrap";
import correctgif from "./images/correct.gif";
import wronggif from "./images/wrong.gif";
import { useNavigate } from "react-router-dom";

function Basket({ level, correct, question, nextQuestion }) {
  const [show, setShow] = useState(false);
  const [basket, setBasket] = useState([]);
  const [gif, setGif] = useState(correctgif);
  const [{ isOver }, dropRef] = useDrop({
    accept: "pet",
    drop: (item) => {
      if (item.id === correct) {
        setGif(correctgif);
      } else {
        setGif(wronggif);
      }
      setShow(true);
      setBasket((basket) =>
        !basket.includes(item) && item.id === correct
          ? [...basket, item]
          : basket
      );
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const navigate = useNavigate();

  const ShopCard = ({ img, name, id }) => {
    const [{ isDragging }, dragRef] = useDrag({
      type: "pet",
      item: { id, name },
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
          style={{ backgroundColor: "#FFC953" }}
        >
          {name}
        </div>
      </div>
    );
  };
  return (
    <div
      ref={dropRef}
      style={{
        height: "80vh",
        backgroundColor: "white",
        position: "absolute",
        width: "18vw",
        top: "70px",
        right: "10px",
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          borderRadius: "10px",
          backgroundColor: "#eeeeee",
          borderBottom: "5px solid #cccccc",
        }}
      >
        <h3 className="d-flex justify-content-center pt-2">Basket</h3>
      </div>
      <div>
        {basket.map((pet, index) => (
          <ShopCard key={index} id={pet.id} name={pet.name} img={pet.img} />
        ))}
        {isOver && <div>Drop Here!</div>}
      </div>
      {!basket.length && (
        <div
          style={{ height: "70vh" }}
          className="d-flex align-items-center justify-content-center"
        >
          Drop Item to buy
        </div>
      )}
      <Modal show={show} centered>
        <Modal.Body>
          <div className="d-flex justify-content-center">
            <img
              style={{ height: "50vh", width: "30vw" }}
              src={gif}
              alt="answer"
            />
          </div>
          <br />
          <div className="d-flex justify-content-center">
            <Button
              onClick={() => {
                if (gif === correctgif) {
                  if (level.length === question + 1) {
                    navigate("/end");
                  } else {
                    nextQuestion();
                    navigate("/shop");
                  }
                } else {
                  setShow(false);
                }
              }}
            >
              {gif === correctgif ? "Next Task" : "Try Again"}{" "}
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Basket;
