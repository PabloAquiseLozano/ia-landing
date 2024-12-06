import styled from "styled-components";
import { Issues } from "../../data-list/index.js";
import { Link } from "react-router-dom";

export const MenuSection = () => {
  return (
    <Container>
      <div className="info-section">
        {Issues.map((issue, index) => (
          <div key={index} className="img-section">
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
    background-color: red;
    .img-section {
      position: relative;
      width: 100%;
      img {
        width: 100%;
        height: 100%;
        min-height: 40em;
      }
      .description {
        position: absolute;
        z-index: 200;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }
      .button-route {
        position: absolute;
        z-index: 300;
        top: 20%;
        .link {
          color: white;
          text-decoration: none;
        }
      }
    }
  }
`;
