import Layout from "antd/es/layout/layout";
import AppContent from "../../components/AppContent/AppContent";
import AppHeader from "../../components/AppHeader/AppHeader";
import Sidebar from "../../components/Sidebar/Sidebar";

const MainLayout = (props) => {
  return (
    <Layout>
      {/* Sidebar */}
      <Sidebar />
      <Layout style={{ marginLeft: "200px" }}>
        {/* Header */}
        <AppHeader />
        <AppContent>
          {/* Content */}
          {props.children}
        </AppContent>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
