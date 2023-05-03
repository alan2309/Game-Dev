import React from "react";
import congrats from "./images/congrats.gif";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Final() {
  const navigate = useNavigate();
  return (
    <div>
      <img
        style={{
          height: "100vh",
          width: "100vw",
          zIndex: "-100",
          position: "absolute",
        }}
        src={congrats}
        alt="congrats"
      />
      <Button
        style={{
          position: "absolute",
          top: "85vh",
          left: "40vw",
          fontSize: "30px",
        }}
        variant="success"
        onClick={() => navigate("/level")}
      >
        Back to Levels
      </Button>
    </div>
  );
}

export default Final;
