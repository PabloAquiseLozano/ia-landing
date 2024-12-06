import styled from "styled-components";

export const IaCard = ({ img, title, description }) => {
  return (
    <Container>
      <div className="img-wrapper">
        <img src={img} alt="image" />
      </div>
      <div className="title">
        <p>{title}</p>
      </div>
      <div className="description">
        <p>{description}</p>
      </div>
    </Container>
  );
};

const Container = styled.div``;
