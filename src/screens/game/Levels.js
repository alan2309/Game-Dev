import React, { useState } from "react";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import MusicOffIcon from "@mui/icons-material/MusicOff";
import styled from "styled-components";
import Bg from "./image 7.png";
import level1 from "./Group 8.png";
import level2 from "./MILAP/Group 9.png";
import level3 from "./Group 10.png";
import { useNavigate } from "react-router-dom";
import useSound from "use-sound";
import Duck from "../Fluffing-a-Duck.mp3";
const Container = styled.div``;
const Navbar = styled.div`
  height: 50px;
  padding: 10px 20px;

  position: absolute;
  width: 100%;

  background-color: #6fc276;
`;
const Wrapper = styled.div`
  padding: 10px 0px 0px 60px;
  justify-content: space-between;
  display: flex;
  align-items: center;
`;
const BackgroundImg = styled.img`
  height: 100vh;
  width: 100vw;
  position: absolute;
`;
const Level1 = styled.img`
  display: flex;
  flex: 1;
  zindex: 2;
  position: absolute;
  width: 25%;
  height: 20%;
  left: 5%;
  top: 30%;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.1);
  }
  cursor: pointer;
`;
const Level2 = styled.img`
  display: flex;
  flex: 1;
  width: 25%;
  height: 20%;
  left: 35%;
  top: 30%;
  zindex: 2;
  position: absolute;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.1);
  }
  cursor: pointer;
`;
const Level3 = styled.img`
  display: flex;
  flex: 1;
  width: 25%;
  height: 20%;
  left: 65%;
  top: 30%;
  zindex: 2;
  position: absolute;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.1);
  }
  cursor: pointer;
`;
const Levels = () => {
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
  return (
    <Container>
      <BackgroundImg src={Bg} />

      <Navbar>
        <h2 style={{ color: "white", fontFamily: "fantasy" }}>
          Market Adventure
        </h2>
      </Navbar>
      <MyButton />
      <Wrapper>
        <Level1 src={level1} onClick={() => navigate("/start")} />
        <Level2 src={level2} onClick={() => navigate("/start")} />
        <Level3 src={level3} onClick={() => navigate("/start")} />
      </Wrapper>
    </Container>
  );
};

export default Levels;
