import styled from "styled-components";
import { Ia } from "../../data-list/index";
import { IaCard } from "./IaCard";

export const IaComponent = () => {
  return (
    <Container>
      <h1>Hola</h1>

      {Ia.map((index, _ia) => {
        return (
          <IaCard
            key={index}
            img={_ia.img}
            title={_ia.title}
            description={_ia.description}
          />
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  background-color: red;
`;
