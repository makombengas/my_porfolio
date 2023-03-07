import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, PerspectiveCamera } from "@react-three/drei";
import Piano from "./Piano";
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
  top: 30.25rem;
  right: 16.25rem;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
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
const Music = () => {
  return (
    <>
      <Canvas>
        <OrbitControls enableZoom={false} autoRotate />
        <Stage environment="city" intensity={0.6}>
          <PerspectiveCamera makeDefault position={[2, 1, 0]} />
          <Piano />
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

export default Music;
