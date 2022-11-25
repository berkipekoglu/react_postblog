import { Avatar, Dropdown, Layout, Menu, theme } from "antd";
import Item from "antd/es/list/Item";
import "./AppHeader.css";

function AppHeader() {
  const items = [
    {
      label: "Çıkış Yap",
      key: "exit",
    },
    {
      label: "3rd menu item（disabled）",
      key: "3",
      disabled: true,
    },
  ];

//   const menus = () => {
//     return (<Menu.Item theme="dark" items={items}></Menu.Item >);
//   };

  return (
    <Layout.Header className="app-header">
      <Dropdown menu={{ items}} placement="bottomLeft" arrow>
        <Avatar style={{ background: "#87d068" }}>
          Y
        </Avatar>
      </Dropdown>
    </Layout.Header>
  );
}

export default AppHeader;
