import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { DrawerLayout } from "./DrawerLayout.jsx";
import { useNavigate } from "react-router-dom";

export const HeaderLayout = () => {
  const [isVisibleDrawer, setIsVisibleDrawer] = useState(false);

  const onSetIsVisibleDrawer = () => {
    setIsVisibleDrawer(true);
  };

  const navigate = useNavigate();

  const onNavigateTo = (url) => navigate(url);

  return (
    <HeaderContainer>
      <div className="drawer-button">
        <FontAwesomeIcon icon={faBars} onClick={onSetIsVisibleDrawer} />
      </div>
      <div className="description">
        <p>Aprendiendo de Tecnologías</p>
      </div>
      <DrawerLayout
        isVisibleDrawer={isVisibleDrawer}
        onSetIsVisibleDrawer={setIsVisibleDrawer}
        onNavigateTo={onNavigateTo}
      />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  position: sticky;
  display: flex;
  align-items: center;
  gap: 2em;
  background-color: black;
  color: white;
  padding: 0.4em;
  font-size: 1.8em;

  .drawer-button {
    cursor: pointer;
  }

  .description {
    font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier,
      monospace;
  }
`;
