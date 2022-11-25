import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const { Header, Content, Footer, Sider } = Layout;

function Sidebar() {
  const items = [
    {
      label: "Anasayfa",
      key: "/",
      //title: <Link to="/">Anasayfa</Link>
    },
    {
      label: "Post Oluştur",
      key: "/post/create-post",
      //title: <Link to="/post/create-post">Post Oluştur</Link>,
    },
  ];

  return (
    <Layout className="side-bar">
      <Sider >
        <Menu
          items={items}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["/"]}
        />
      </Sider>
    </Layout>
  );
}

export default Sidebar;
