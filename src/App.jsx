import "./App.css";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Works from "./components/Works/Works";
import Contact from "./components/Contact/Contact";
import styled from "styled-components";
import Navbar from "./components/Hero/Navbar/Navbar";
import { RxHome } from "react-icons/rx";
import { HashLink } from "react-router-hash-link";
import africa from ".././public/image/africa.jpg";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;

  background: linear-gradient(
      to bottom,
      rgb(0, 11, 41),
      rgba(19, 101, 149, 0.301)
    ),
    url(${africa}), linear-gradient(#eb01a5, #d13531);
  &::-webkit-scrollbar {
    display: none;
  }
`;
const Start = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  background-color: transparent;
  border: none;
  z-index: 1;
  position: fixed;
  left: 83%;
  right: 0;
  bottom: 0;
  top: 85%;
  cursor: pointer;
  transition: all 1s ease;
  @media only screen and (max-width: 768px) {
    left: 78%;
  }
  &:hover {
    border: 2px solid white;
    background-color: #b57d3e;
  }
`;
const startStyle = {
  fontSize: "2rem",
  textDecoration: "none",
  color: "white",
};
function App({ setShow }) {
  return (
    <Container>
      <HashLink smooth to="/#home">
        <Start>
          <RxHome style={startStyle} onClick={() => setShow(false)} />
        </Start>
      </HashLink>

      <Navbar />
      <Hero />
      <About />
      <Works />
      <Contact />
    </Container>
  );
}

export default App;
