import React, { useState } from "react";
import Ajout from "../ajout";
import Card from "../Cards/card";
import Matiere from "../Matiere/matier";
import Classe from "../classe/classe";
import Paiement from "../paiement/paiement";
import {
  HomeOutlined,
  FormOutlined,
  BookOutlined,
  ApartmentOutlined,
  CreditCardOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme, Input } from "antd";

const { Header, Content, Footer, Sider } = Layout;
const { Search } = Input;

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
      { label: "1ère Année", key: "8" },
      { label: "2ème Année", key: "9" },
      { label: "3ème Année", key: "10" },
      { label: "4ème Année", key: "11" },
    ],
  },
  { label: "Paiement", key: "12", icon: <CreditCardOutlined /> },
];

const breadcrumbMap = {
  1: ["Home"],
  2: ["Home", "Inscription"],
  3: ["Home", "Matières", "Math"],
  4: ["Home", "Matières", "Physique"],
  5: ["Home", "Matières", "Anglais"],
  6: ["Home", "Matières", "Français"],
  7: ["Home", "Matières", "Informatique"],
  8: ["Home", "Classes", "1ère Année"],
  9: ["Home", "Classes", "2ème Année"],
  10: ["Home", "Classes", "3ème Année"],
  11: ["Home", "Classes", "4ème Année"],
  12: ["Home", "Paiement"],
};

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("1");
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleMenuClick = (e) => setSelectedMenu(e.key);
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
        return <Matiere />;
      case "8":
      case "9":
      case "10":
      case "11":
        return <Classe />;
      case "12":
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
          <Breadcrumb style={{ margin: "16px 0" }}>
            {breadcrumbMap[selectedMenu]?.map((label, index) => (
              <Breadcrumb.Item key={index}>{label}</Breadcrumb.Item>
            ))}
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
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
