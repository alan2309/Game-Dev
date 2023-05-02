import React from "react";

function Basket() {
  return (
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
  );
}

export default Basket;
