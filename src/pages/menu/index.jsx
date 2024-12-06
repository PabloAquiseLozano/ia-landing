import styled from "styled-components";
import { Issues } from "../../data-list/index.js";
import { Link } from "react-router-dom";

export const MenuSection = () => {
  return (
    <Container>
      <div className="info-section">
        {Issues.map((issue, index) => (
          <div key={index} className="img-section">
            <div className="bgshadow"></div>
            <img src={issue.img} alt="imagen" />
            <div className="description">
              <h3>{issue.title}</h3>
              <p>{issue.description}</p>
            </div>
            <div className="button-route">
              <Link to={issue.route} className="link">
                Ver más
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

const Container = styled.div`
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier,
    monospace;
  .info-section {
    display: flex;
    .img-section {
      position: relative;
      width: 100%;
      img {
        width: 100%;
        height: 100%;
        min-height: 42em;
      }
      .description {
        padding: 0 1em;
        text-align: center;
        position: absolute;
        z-index: 200;
        top: 65%;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1em;
        color: white;
      }
      .button-route {
        width: 100%;
        text-align: center;
        position: absolute;
        z-index: 300;
        top: 90%;
        .link {
          color: black;
          text-decoration: none;
          background-color: white;
          padding: 1em;
          border-radius: 15px;
          font-weight: bold;
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
    }
  }
`;
