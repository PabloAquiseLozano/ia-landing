import styled from "styled-components";
import { Video } from "../../../public/videos/index.js";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";

export const Home = () => {
  return (
    <Container>
      <div className="wrapper-video">
        <video className="video" autoPlay loop controls={false} muted>
          <source src={Video} />
        </video>
      </div>

      <div className="bgshadow"></div>
      <div className="title">
        <FontAwesomeIcon icon={faReact} />
        <p>Elaborado con REACT</p>
      </div>
      <div className="description">
        <div className="text">
          <p>DevPool presenta:</p>
          <h2>TECNOLOGÍAS</h2>
          <h1>IA CIBERSEGURIDAD Y SISTEMAS EXPERTOS</h1>
        </div>
        <div className="buttonMenu">
          <Link className="link" to="/menu">
            <FontAwesomeIcon icon={faLocationArrow} />
            <p>COMENCEMOS</p>
          </Link>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100svh;
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier,
    monospace;

  .wrapper-video {
    width: 100vw;
    height: 100vh;
    position: relative;
    overflow: hidden;

    .video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .title {
    z-index: 200;
    position: absolute;
    top: 5%;
    left: 5%;
    color: white;
    font-size: 3em;
    display: flex;
    align-items: center;
    gap: 0.5em;

    p {
      font-size: 2rem;
    }
  }

  .description {
    width: 100%;
    position: absolute;
    z-index: 800;
    top: 50%;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    line-height: 3em;
    font-size: 1.3em;
    gap: 3em;
    .text {
      padding-left: 2em;
      color: white;
    }
    .buttonMenu {
      width: 100%;
      top: 80%;
      left: 0;
      right: 0;
      display: flex;
      justify-content: center;

      .link {
        text-decoration: none;
        color: black;
        display: flex;
        align-items: center;
        gap: 0.5em;
        background-color: white;
        padding: 0.5em;
        border-radius: 15px;
        font-size: 1.5em;
        border: 2px solid black;
      }
    }
  }

  .bgshadow {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-blend-mode: multiply;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.640494) 0%,
        black 0%,
        rgba(255, 255, 255, 0) 70%
      ),
      linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.640494) 0%,
        black 0%,
        rgba(255, 255, 255, 0) 42%
      );
    z-index: 100;
    width: 100%;
    height: 100%;
  }
`;
