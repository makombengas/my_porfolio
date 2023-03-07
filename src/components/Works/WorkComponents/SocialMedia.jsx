import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Smile from "./Smile";
import styled from "styled-components";
const Desc = styled.div`
  width: 12.5rem;
  height: 16.375rem;
  padding: 1.25rem;
  background-color: white;
  color: black;
  font-size: 1.2rem;
  font-weight: 300;
  border-radius: 0.655rem;
  position: absolute;
  top: 35.25rem;
  right: 16.25rem;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  @media only screen and (max-width: 768px) {
    width: 18.5rem;
    height: 10.375rem;
    top: 1;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    background-color: rgba(255, 255, 255, 0.721);
    font-weight: 400;
  }
`;
const SocialMedia = () => {
  return (
    <>
      <Canvas>
        <OrbitControls enableZoom={false} autoRotate />
        <Stage environment="city" intensity={0.6}>
          <Smile />
        </Stage>
        <OrbitControls enableZoom={false} />
      </Canvas>
      <Desc>
        I design products with a strong focus on both world class deign and
        ensuring yor product is a market success
      </Desc>
    </>
  );
};

export default SocialMedia;
