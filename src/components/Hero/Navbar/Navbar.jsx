import React, { useState } from "react";
import styled from "styled-components";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";
import { NavLink, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { TfiWorld } from "react-icons/tfi";
import Dropdown from "react-bootstrap/Dropdown";
import { HashLink } from "react-router-hash-link";
import logo from "../../../.././public/image/logo.png";

const Section = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 2rem;
  flex-wrap: wrap;
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 0rem;
  }
`;
const Container = styled.div`
  width: 87.5rem;
  position: absolute;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.625rem 0rem;
  height: 5rem;
  @media only screen and (max-width: 768px) {
    width: 100%;
    position: fixed;
    gap: 0rem;
    background-color: #000b29;
  }
`;
const Links = styled.div`
  display: flex;
  gap: 3.125rem;
  align-items: center;

  @media only screen and (max-width: 768px) {
    width: 100%;

    justify-content: center;
  }
`;
const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  @media only screen and (max-width: 768px) {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;
const Logo = styled.img`
  width: 15rem;

  object-fit: contain;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    width: 6rem;
  }
`;
const List = styled.ul`
  display: flex;
  gap: 1.25rem;
  list-style: none;
  @media only screen and (max-width: 768px) {
    width: 10rem;
    text-align: center;
    display: ${({ show }) => (show ? "block" : "none")};
    flex-direction: column;
    position: absolute;
    top: 15rem;
    left: 30%;
    padding: 1rem;
  }
`;
const ListItem = styled.li`
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    font-size: 1rem;
    width: 100%;
    padding: 1rem;
    font-weight: 500;
  }
`;

const Button = styled.button`
  width: 7.25rem;
  padding: 0.625rem;
  background-color: #b57d3e;
  color: white;
  border: none;

  transition: 1s all ease;
  &:hover {
    background-color: transparent;
    border: 1.5px solid white;
  }
  border: none;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    width: 5.25rem;
    font-size: 0.75rem;
  }
`;
const listStyle = {
  textDecoration: "none",
  color: "white",
  borderBottom: "2px solid black",
};
const Responsive = styled.div`
  justify-content: center;
  display: none;
  @media only screen and (max-width: 768px) {
    display: block;
  }
`;
const BurgerMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8rem;
  height: 8rem;
  background-color: transparent;
  z-index: 1;
  position: absolute;
  left: 81.5%;
  right: 0;
  bottom: 0rem;
  top: 5.5rem;
  cursor: pointer;
  display: block;
  @media only screen and (max-width: 768px) {
    display: block;
    left: 65.5%;
    z-index: 2;
  }
`;
const NavBurger = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100rem;
  background-color: rgba(0, 11, 41, 0.872);
  position: absolute;
  left: 0%;
  right: 4rem;
  bottom: 0rem;
  top: 0rem;
  cursor: pointer;
  display: none;
  @media only screen and (max-width: 768px) {
    display: block;
    width: 100%;
    z-index: 1;

    transform: ${({ show }) => (show ? "translateX(0)" : "translateX(0%)")};
  }
`;
const Translate = styled.div`
  width: 100%;
  height: 100%;
  @media only screen and (max-width: 768px) {
    padding-right: 1.5rem;
  }
`;

const BgMenuStyle = {
  fontSize: "3.5rem",
  margin: "0",
  position: "absolute",
  top: "50%",
  left: "50%",
  color: "#000B29",
  backgroundColor: "white",
  transform: "translate(-50%, -50%)",
};
const LinkStyle = styled(HashLink)`
  font-weight: 400;
  color: white;
  text-decoration: none;
  transition: 0.25s all ease;
  &:hover {
    color: white;
    border-bottom: 3px solid #b57d3e;
    transform: translate(0, 5rem);
  }
  &.active:target {
    color: white;
    text-decoration: none;
    border-bottom: 3px solid #b57d3e;
    transform: translate(0, 5rem);
  }
`;
const languages = [
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
  {
    code: "fr",
    name: "Français",
    country_code: "fr",
  },
  {
    code: "de",
    name: "Deutsch",
    country_code: "de",
  },
];
const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleShow = (e) => {
    e.preventDefault();
    setShow(true);
  };

  const { t } = useTranslation();
  return (
    <Section>
      <Responsive>
        <BurgerMenu>
          <RxHamburgerMenu style={BgMenuStyle} onClick={handleShow} />
          {show ? (
            <GrClose style={BgMenuStyle} onClick={() => setShow(!show)} />
          ) : (
            <RxHamburgerMenu style={BgMenuStyle} onClick={handleShow} />
          )}
        </BurgerMenu>

        {show && <NavBurger />}
      </Responsive>

      <Container>
        <Links>
          <HashLink smooth to="/#home" onClick={() => setShow(false)}>
            <Logo src={logo} />
          </HashLink>

          <List show={show}>
            <ListItem activeClassName="active">
              <LinkStyle smooth to="/#home" onClick={() => setShow(false)}>
                {t("home")}
              </LinkStyle>
            </ListItem>
            <ListItem activeClassName="active">
              <LinkStyle smooth to="/#about" onClick={() => setShow(false)}>
                {t("about_me")}
              </LinkStyle>
            </ListItem>

            <ListItem activeClassName="active">
              <LinkStyle smooth to="/#works" onClick={() => setShow(false)}>
                {t("works")}
              </LinkStyle>
            </ListItem>
            <ListItem activeClassName="active">
              <LinkStyle smooth to="/#contact" onClick={() => setShow(false)}>
                {t("contact")}
              </LinkStyle>
            </ListItem>
          </List>
        </Links>
        <Icons>
          <HashLink
            style={listStyle}
            smooth
            to="/#contact"
            onClick={() => setShow(false)}
          >
            <Button> {t("hire_now")} </Button>
          </HashLink>

          <Translate>
            <Dropdown style={{ width: "4rem" }}>
              <Dropdown.Toggle
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                }}
                id="dropdown-basic"
              >
                <TfiWorld style={{ fontSize: "2rem" }} />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {languages.map(({ code, name, country_code }) => (
                  <Dropdown.Item
                    key={country_code}
                    onClick={() => i18next.changeLanguage(code)}
                  >
                    <span className={`fi fi-${country_code} mx-2`}></span>
                    {name}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Translate>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
