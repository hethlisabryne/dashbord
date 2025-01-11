import React, { useState } from "react";
import Ajout from "../Form/ajout";
import Card from "../Cards/card";
import Matiere from "../Matiere/matier";
import Paiement from "../Paiement/Paiement";
import Classe from "../classe/classe";
import {
  HomeOutlined,
  FormOutlined,
  BookOutlined,
  ApartmentOutlined,
  CreditCardOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme, Input, Typography } from "antd";

const { Header, Content, Footer, Sider } = Layout;
const { Search } = Input;
const { Title } = Typography;

const menuItems = [
  { label: "Home", key: "1", icon: <HomeOutlined /> },
  { label: "Inscription", key: "2", icon: <FormOutlined /> },
  {
    label: "Matières",
    key: "sub1",
    icon: <BookOutlined />,
    children: [
      { label: "Math", key: "3" },
      { label: "Physique", key: "4" },
      { label: "Anglais", key: "5" },
      { label: "Français", key: "6" },
      { label: "Informatique", key: "7" },
    ],
  },
  {
    label: "Classes",
    key: "sub2",
    icon: <ApartmentOutlined />,
    children: [
      { label: "7ème années", key: "8" },
      { label: "8ème années", key: "9" },
      { label: "9ème années", key: "10" },
      { label: "1ère années", key: "11" },
      { label: "2ème années", key: "12" },
      { label: "3ème années", key: "13" },
      { label: "4ème années", key: "14" },
    ],
  },
  { label: "Paiement", key: "15", icon: <CreditCardOutlined /> },
];

const breadcrumbMap = {
  1: ["Home"],
  2: ["Home", "Inscription"],
  3: ["Home", "Matières", "Math"],
  4: ["Home", "Matières", "Physique"],
  5: ["Home", "Matières", "Anglais"],
  6: ["Home", "Matières", "Français"],
  7: ["Home", "Matières", "Informatique"],
  8: ["Home", "Classes", "7ème années"],
  9: ["Home", "Classes", "8ème années"],
  10: ["Home", "Classes", "9ème années"],
  11: ["Home", "Classes", "1ère années"],
  12: ["Home", "Classes", "2ème années"],
  13: ["Home", "Classes", "3ème années"],
  14: ["Home", "Classes", "4ème années"],
  15: ["Home", "Paiement"],
};

const classNames = {
  8: "7ème années",
  9: "8ème années",
  10: "9ème années",
  11: "1ère années",
  12: "2ème années",
  13: "3ème années",
  14: "4ème années",
};

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("1");
  const [currentClass, setCurrentClass] = useState("");

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleMenuClick = (e) => {
    setSelectedMenu(e.key);

    if (e.key >= "8" && e.key <= "14") {
      setCurrentClass(classNames[e.key]);
    } else {
      setCurrentClass("");
    }
  };

  const onSearch = (value) => console.log(value);

  const renderContent = () => {
    switch (selectedMenu) {
      case "1":
        return <Card />;
      case "2":
        return <Ajout />;
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
        return <Matiere matiere={selectedMenu} />;
      case "8":
      case "9":
      case "10":
      case "11":
      case "12":
      case "13":
      case "14":
        return <Classe currentClass={selectedMenu} />;
      case "15":
        return <Paiement />;
      default:
        return null;
    }
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={menuItems}
          onClick={handleMenuClick}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Search
            placeholder="Search..."
            onSearch={onSearch}
            enterButton
            style={{ width: 300 }}
            prefix={<SearchOutlined />}
          />
        </Header>
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb
            style={{ margin: "16px 0" }}
            items={breadcrumbMap[selectedMenu]?.map((label, index) => ({
              title: label,
            }))}
          />
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {currentClass && (
              <Title level={2}>Liste des étudiants en {currentClass}</Title>
            )}
            {renderContent()}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          ©{new Date().getFullYear()} Created by Sabrina
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
