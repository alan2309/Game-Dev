import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import MusicOffIcon from '@mui/icons-material/MusicOff';
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useSpeechSynthesis } from "react-speech-kit";
import styled from "styled-components";
import useSound from 'use-sound';
import Duck from "../Fluffing-a-Duck.mp3";
import Bg from "./image 1.png";
import Aunt from "./image 2.png";
import Boy from "./image_2-removebg-preview 1.svg";
import { Modal, Button } from "react-bootstrap";
const BackgroundImg = styled.img`
  height: 100vh;
  width: 100vw;
  position: absolute;
  ${
    "" /* width: 80vw;
          position: absolute;
          bottom: 0;
          zIndex: -100; */
  }
`;
const MomImg = styled.img`
  zindex: 2;
  position: absolute;
  height: 80vh;
  right: 0%;
  margin-top: 9.8%;
`;
const Diag = styled.div`
  position: absolute;
  width: 60%;
  height: 20%;
  left: 22%;
  top: 64.78px;
  border: 1px solid white;
  background-color: white;
  color: black;
  border-radius: 5px 5px 5px 5px;
`;
const Container = styled.div``;
const BoyImg = styled.img`
  zindex: 2;
  position: absolute;
  height: 80vh;
  left: 0%;
  margin-top: 9.8%;
`;
const Desc = styled.h1`
  margin: 20px 20px;
`;
const Arrows = styled.p`
  font-weight: 1000;
  margin: 5px;
`;
const Nexts = styled.button`
  border: 2px solid black;
  border-radius: 50%;
  background-color: yellow;
  cursor: pointer;
  position: relative;
  float: right;
  &:hover {
    background-color: #2ece34;
  }
  margin: 0% 50% 0% 15%;
  padding: 5px;
`;

const Task = () => {
  const navigate = useNavigate();
  const { speak, voices } = useSpeechSynthesis();
  const handleSpeak = () => {
    speak({
      text: `Okay!....I will bring the groceries!!!`,
      voice: voices[154],
    });
    console.log(voices);
  };

  
  const MyButton=()=>{
    const [isPlaying, setIsPlaying] = useState(false);
    const [playSound,{ stop }] = useSound(Duck)
    
    return (
      <button style={{
        zindex: "2",
  position: "absolute",
  left: "0%",
  border: "2px solid green",
  borderRadius: "50%",
  display:"flex",
  alignItems: "center",
  padding:"2px",
  color:"white",
  backgroundColor:"green",
  marginTop:"2px",
  marginLeft:"3px"
      }} onClick={() => {
        
        isPlaying?stop():playSound()
        setIsPlaying(!isPlaying)
        }}>
        {isPlaying?<AudiotrackIcon />:<MusicOffIcon />}
      </button>
    )
  }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Container>
        
    
      <BackgroundImg src={Bg} />
      <MyButton />
      <Diag>
        <Desc>
          Okay!....I will bring the groceries!!!
        </Desc>
        <Nexts onClick={handleShow}>
          <Arrows>
            <NavigateNextIcon />
          </Arrows>
        </Nexts>
      </Diag>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Task List</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>navigate('/shop')}>
            Go to Market
          </Button>
        </Modal.Footer>
      </Modal>
    
      <MomImg src={Aunt}  />
      <BoyImg src={Boy} onClick={handleSpeak} />
    </Container>
  );
};

export default Task;
