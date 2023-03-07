import React from "react";
import styled from "styled-components";
import { AiOutlineMinus } from "react-icons/ai";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Cube from "../Hero/Cube/Cube";
import { HashLink } from "react-router-hash-link";
import { useTranslation } from "react-i18next";
const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 87.5rem;
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    margin-top: 0rem;
  }
`;
const Left = styled.div`
  flex: 1;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.25rem;
  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;
const Title = styled.h1`
  font-size: 4.625rem;
  @media only screen and (max-width: 768px) {
    text-align: center;
    font-size: 2.625rem;
    padding: 0.5rem;
  }
`;
const WhatWeDo = styled.div`
  display: flex;

  align-items: center;
  gap: 0.625rem;
`;
const SubTitle = styled.h2`
  color: #b57d3e;
  font-size: 2.2rem;
`;
const Desc = styled.p`
  font-size: 1.45rem;
  color: #e9d1b3;
  @media only screen and (max-width: 768px) {
    text-align: center;
    padding: 1.5rem;
    font-size: 1.15rem;
  }
`;
const Button = styled.button`
  background-color: #b57d3e;
  color: white;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  width: 12rem;
  padding: 1rem;
  cursor: pointer;
  transition: 1s all ease;
  &:hover {
    background-color: transparent;
    border: 1.5px solid white;
    width: 13rem;
  }
`;

const About = () => {
  const { t } = useTranslation();

  return (
    <Section id="about">
      <Container>
        <Left>
          <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={1.5} />
            <directionalLight position={[3, 2, 1]} />
            <Cube />
          </Canvas>
        </Left>
        <Right>
          <Title>{t("aboutIntro")}</Title>
          <WhatWeDo>
            <AiOutlineMinus style={{ fontSize: "3rem" }} />
            <SubTitle>{t("aboutTitle")}</SubTitle>
          </WhatWeDo>
          <Desc>{t("aboutSubTitle")}</Desc>
          <HashLink smooth to="/#works">
            <Button>{t("aboutButton")}</Button>
          </HashLink>
        </Right>
      </Container>
    </Section>
  );
};

export default About;
