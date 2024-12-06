import styled from "styled-components";

export const FooterLayout = () => {
  return (
    <Container>
      <div className="options">
        <ul>
          <li>Términos y Condiciones</li>
          <li>Sobre la Empresa</li>
          <li>Nosotros</li>
          <li>Contacto</li>
        </ul>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  .options {
    ul {
      display: flex;
      list-style-type: none;
      gap: 2em;
      justify-content: center;
    }
  }
`;
