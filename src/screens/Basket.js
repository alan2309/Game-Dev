import React, { useState } from "react";
import { useDrop, useDrag } from 'react-dnd';

function Basket() {
  const [basket, setBasket] = useState([])
  const [{ isOver }, dropRef] = useDrop({
    accept: 'pet',
    drop: (item) => setBasket((basket) =>
      !basket.includes(item) && item.id === 2 ? [...basket, item] : basket),
    collect: (monitor) => ({
      isOver: monitor.isOver()
    })
  })
  const ShopCard = ({ img, name, id }) => {
    const [{ isDragging }, dragRef] = useDrag({
      type: 'pet',
      item: { id, name },
      collect: (monitor) => ({
        isDragging: monitor.isDragging()
      })
    })
    return (

      <div className="mb-4 mx-1" style={{ backgroundColor: "White" }} ref={dragRef}>
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
    <div ref={dropRef}
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
        <div>
          {basket.map(pet => <ShopCard id={pet.id} name={pet.name} img={pet.img} />)}
          {isOver && <div>Drop Here!</div>}
        </div>
      </div>

      <button style={{ position: "absolute", bottom: "30px", right: "35%" }}>
        submit
      </button>
    </div>
  );
}

export default Basket;
