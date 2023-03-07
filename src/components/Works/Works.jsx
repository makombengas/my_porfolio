import React, { useState } from "react";
import styled from "styled-components";
import WebDesign from "./WorkComponents/WebDesign";
import Development from "./WorkComponents/Development";
import SocialMedia from "./WorkComponents/SocialMedia";
import ProductDesign from "./WorkComponents/ProductDesign";
import Cameramen from "./WorkComponents/Cameramen";
import Music from "./WorkComponents/Music";
import { useTranslation } from "react-i18next";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  position: relative;
`;
const Container = styled.div`
  width: 87.5rem;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    margin-top: 10rem;
  }
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 768px) {
    padding: 1.25rem;
    justify-content: center;
  }
`;
const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;
const ListItem = styled.li`
  font-size: 3.5rem;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 0.063rem white;
  position: relative;

  @media only screen and (max-width: 768px) {
    font-size: 1.45rem;
    color: white;
    -webkit-text-stroke: 0px;
  }
  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: #b57d3e;
    width: 0rem;
    overflow: hidden;
    white-space: nowrap;
  }
  &:hover {
    ::after {
      animation: moveText 1s linear both;
      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`;
const Right = styled.div`
  flex: 1;
`;

const Works = () => {
  const { t } = useTranslation();
  const [work, setWork] = useState(`${t("workWebDev")}`);
  const data = [
    `${t("workWebDev")}`,
    `${t("workDevelopment")}`,
    `${t("workCamera")}`,
    `${t("workProduct")}`,
    `${t("workMusic")}`,
    `${t("workSocial")}`,
  ];
  return (
    <Section id="works">
      <Container>
        <Left>
          <List>
            {data.map((item, index) => (
              <ListItem key={index} text={item} onClick={() => setWork(item)}>
                {item}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>
          {work === `${t("workWebDev")}` ? (
            <WebDesign />
          ) : work === `${t("workDevelopment")}` ? (
            <Development />
          ) : work === `${t("workProduct")}` ? (
            <ProductDesign />
          ) : work === `${t("workCamera")}` ? (
            <Cameramen />
          ) : work === `${t("workSocial")}` ? (
            <SocialMedia />
          ) : work === `${t("workMusic")}` ? (
            <Music />
          ) : (
            <WebDesign />
          )}
        </Right>
      </Container>
    </Section>
  );
};

export default Works;
