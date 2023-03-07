import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Figma from "./Figma";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
const Desc = styled.div`
  width: 12rem;
  // height: 23.375rem;
  padding: 1.25rem;
  background-color: white;
  color: black;
  font-size: 1.2rem;
  font-weight: 300;
  border-radius: 0.655rem;
  position: absolute;
  top: 14.25rem;
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

const WebDesign = () => {
  const { t } = useTranslation();
  return (
    <>
      <Canvas>
        <OrbitControls enableZoom={false} autoRotate />
        <Stage environment="city" intensity={0.6}>
          <Figma />
        </Stage>
        <OrbitControls enableZoom={false} />
      </Canvas>
      <Desc>{t("workWebDevDesc")}</Desc>
    </>
  );
};

export default WebDesign;
