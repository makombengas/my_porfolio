import React from "react";
import styled from "styled-components";
import { AiOutlineMinus } from "react-icons/ai";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { useTranslation } from "react-i18next";
import { HashLink } from "react-router-hash-link";
import Planet from ".././Works/WorkComponents/Planet";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

const Container = styled.div`
  width: 87.5rem;
  height: 100vh;
  scroll-snap-align: center;
  display: flex;

  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    margin-top: 12rem;
  }
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.25rem;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;
const Right = styled.div`
  flex: 1;
  position: relative;
  @media only screen and (max-width: 768px) {
    width: 100%;
    display: none;
  }
`;
const Title = styled.h1`
  font-size: 3.825rem;
  @media only screen and (max-width: 768px) {
    font-size: 2.625rem;
    text-align: center;
  }
`;
const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;
const SubTitle = styled.h2`
  color: #b57d3e;
  font-size: 2.2rem;
  @media only screen and (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
    justify-content: center;
  }
`;
const Desc = styled.p`
  font-size: 1.45rem;
  color: #e9d1b3;
  @media only screen and (max-width: 768px) {
    font-size: 1.45rem;
    text-align: center;
    padding: 0.625rem;
  }
`;
const Button = styled.button`
  background-color: #b57d3e;
  color: white;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  width: 12.25rem;
  padding: 1rem;
  cursor: pointer;
  transition: 1s all ease;
  &:hover {
    background-color: transparent;
    border: 1.5px solid white;
  }
`;
const Image = styled.img`
  width: 20rem;
  height: 25rem;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 1;
  animation: animate 2s infinite ease alternate;
  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }

  @media only screen and (max-width: 768px) {
    width: 18rem;
    height: 18em;
  }
`;
const Hero = () => {
  const { t } = useTranslation();

  return (
    <Section id="home">
      <Container>
        <Left>
          <Title>{t("heroIntro")}</Title>
          <WhatWeDo>
            <AiOutlineMinus style={{ fontSize: "3rem" }} />
            <SubTitle>{t("heroTitle")}</SubTitle>
          </WhatWeDo>
          <Desc>{t("heroSubTitle")}</Desc>
          <HashLink smooth to="/#about">
            <Button>{t("heroButton")}</Button>
          </HashLink>
        </Left>
        <Right>
          <Canvas>
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={0.8} />
            <directionalLight position={[1, 2, 4]} />
            {/* <Sphere args={[1, 100, 200]} scale={2.2}>
              <MeshDistortMaterial
                color="#B57D3E"
                attach="material"
                distort={0.3}
                speed={2}
              />
            </Sphere> */}
            <Planet>
              <MeshDistortMaterial
                color="#B57D3E"
                attach="material"
                distort={0.1}
                speed={1}
              />
            </Planet>
          </Canvas>
          {/* <Image src="../../.././public/image/lion.png" /> */}
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
