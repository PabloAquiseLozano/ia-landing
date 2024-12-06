import { Drawer, Menu } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot, faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";

export const DrawerLayout = ({
  isVisibleDrawer,
  onSetIsVisibleDrawer,
  onNavigateTo,
}) => {
  const items = [
    {
      key: "sub1",
      label: "IA",
      icon: <FontAwesomeIcon icon={faRobot} style={{ fontSize: "1em" }} />,
      onClick: () => {
        onNavigateTo("/ia"), onSetIsVisibleDrawer(false);
      },
    },
    {
      key: "sub2",
      label: "Sistemas Expertos",
      icon: <FontAwesomeIcon icon={faReact} style={{ fontSize: "1.2em" }} />,
      children: [
        {
          key: "1",
          label: "Sub Opción 1",
        },
        {
          key: "2",
          label: "Sub Opción 2",
        },
      ],
    },
    {
      key: "sub3",
      label: "Ciberseguridad",
      icon: (
        <FontAwesomeIcon icon={faUserSecret} style={{ fontSize: "1.2em" }} />
      ),
      onClick: () => {
        onNavigateTo("/cibersecurity"), onSetIsVisibleDrawer(false);
      },
    },
  ];

  return (
    <Drawer
      key="right"
      title={
        <p style={{ width: "100%", textAlign: "right" }}>MENÚ DE OPCIONES</p>
      }
      open={isVisibleDrawer}
      onClose={() => onSetIsVisibleDrawer(!isVisibleDrawer)}
      placement="left"
      bodyStyle={{ padding: "0" }}
    >
      <Menu items={items} mode="inline" style={{ fontSize: "1.4em" }} />
    </Drawer>
  );
};
