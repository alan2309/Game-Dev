import React from "react";
import back from "./image5.png";
import back2 from "./image3.png";
import boy from "./boy.png";
import vendor from "./vendor.png";

function Game() {
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
        <button style={{ position: "absolute", bottom: "30px", right: "35%" }}>
          submit
        </button>
      </div>
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
    </div>
  );
}

export default Game;
