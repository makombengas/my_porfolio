import React, { useRef, useState } from "react";
import styled from "styled-components";
import Map from "./Map/Map";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

const YOUR_SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const YOUR_TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const YOUR_PUBLIC_ID = import.meta.env.VITE_PUBLIC_KEY;

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 3.125rem;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Form = styled.form`
  width: 31.25rem;
  display: flex;
  flex-direction: column;
  gap: 1.563rem;
  @media only screen and (max-width: 768px) {
    width: 18.75rem;
    padding-top: 10rem;
  }
`;
const Input = styled.input`
  padding: 1.25rem;
  background-color: #f3eee7;
  outline: none;
  border: none;
`;
const TextArea = styled.textarea`
  padding: 1.25rem;
  outline: none;
  border: none;
  background-color: #f3eee7;
`;
const Button = styled.button`
  background-color: #b57d3e;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  padding: 1.25rem;
  font-size: 1.5rem;
  transition: all 1s ease;
  &:hover {
    border: 2px solid white;
    background-color: transparent;
    color: white;
  }
`;

const Right = styled.div`
  flex: 1;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Contact = () => {
  const { t } = useTranslation();
  const ref = useRef();
  const [success, setSuccess] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, ref.current, YOUR_PUBLIC_ID)
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };
  return (
    <Section id="contact">
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title> {t("contact_me")}</Title>
            <Input placeholder={`${t("contactName")}`} name="name" />
            <Input placeholder={`${t("contactEmail")}`} name="email" />
            <TextArea
              placeholder={`${t("contactMessage")}`}
              name="message"
              rows={10}
            />
            <Button type="submit" value="Send">
              {t("send")}
            </Button>
            {success && "Your message has been sent. We will get to you soon!"}
          </Form>
        </Left>
        <Right>
          <Map />
        </Right>
      </Container>
    </Section>
  );
};

export default Contact;
