import React, { useState } from "react";
import WheelComponent from "react-wheel-of-prizes";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import MusicOffIcon from "@mui/icons-material/MusicOff";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import congrats from "./confetti.gif";
import useSound from "use-sound";
import Duck from "./success-1-6297.mp3";
const Rewards = () => {
  const Wrapper = styled.div`
    padding: 0px 0px 0px 30%;
    justify-content: space-between;
    display: flex;
    align-items: center;
    height: "100vh";
  `;
  const MyButton = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [playSound, { stop }] = useSound(Duck);

    return (
      <button
        style={{
          zindex: "2",
          position: "absolute",
          left: "0%",
          border: "2px solid green",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          padding: "2px",
          color: "white",
          backgroundColor: "green",
          marginTop: "2px",
          marginLeft: "3px",
        }}
        onClick={() => {
          isPlaying ? stop() : playSound();
          setIsPlaying(!isPlaying);
        }}
      >
        {isPlaying ? <AudiotrackIcon /> : <MusicOffIcon />}
      </button>
    );
  };
  const navigate = useNavigate();
  const segments = [
    "better luck next time",
    "won 70",
    "won 10",
    "better luck next time",
    "won 2",
    "won holiday pass",
    "better luck next time",
    "won a voucher",
  ];
  const segColors = [
    "#EE4040",
    "#F0CF50",
    "#815CD1",
    "#3DA5E0",
    "#34A24F",
    "#F9AA1F",
    "#EC3F3F",
    "#FF9000",
  ];
  const onFinished = (winner) => {
    console.log(winner);
  };
  return (
    <>
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
      <Wrapper>
        <MyButton />
        <WheelComponent
          segments={segments}
          segColors={segColors}
          winningSegment="better luck next time"
          onFinished={(winner) => onFinished(winner)}
          primaryColor="black"
          contrastColor="white"
          buttonText="Spin"
          isOnlyOnce={true}
          size={290}
        />
        <Button
          style={{
            position: "absolute",
            top: "100vh",
            left: "70vw",
            fontSize: "30px",
          }}
          variant="success"
          onClick={() => navigate("/level")}
        >
          Back to Levels
        </Button>
      </Wrapper>
    </>
  );
};
export default Rewards;
