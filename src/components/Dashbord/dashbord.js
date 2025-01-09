import React, { useState } from "react";
import Ajout from "../ajout";
import Card from "../Cards/card";
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
    label: "Matiere",
    key: "sub1",
    icon: <BookOutlined />,
    children: [
      { label: "Matiere 1", key: "3" },
      { label: "Matiere 2", key: "4" },
      { label: "Matiere 3", key: "5" },
    ],
  },
  {
    label: "Classe",
    key: "sub2",
    icon: <ApartmentOutlined />,
    children: [
      { label: "Classe 1", key: "6" },
      { label: "Classe 2", key: "8" },
    ],
  },
  { label: "Paiement", key: "9", icon: <CreditCardOutlined /> },
];

const breadcrumbMap = {
  1: ["Home"],
  2: ["Home", "Inscription"],
  3: ["Home", "Matiere 1"],
  4: ["Home", "Matiere 2"],
  5: ["Home", "Matiere 3"],
  6: ["Home", "Classe 1"],
  8: ["Home", "Classe 2"],
  9: ["Home", "Paiement"],
};

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("1");
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleMenuClick = (e) => {
    setSelectedMenu(e.key);
  };

  const onSearch = (value) => {
    console.log(value); // Handle the search functionality here
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
            {breadcrumbMap[selectedMenu].map((label, index) => (
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
            {selectedMenu === "1" && <Card />}
            {selectedMenu === "2" && <Ajout />}
            {selectedMenu === "3" && <h2>Welcome to Matiere 1</h2>}
            {selectedMenu === "4" && <h2>Welcome to Matiere 2</h2>}
            {selectedMenu === "5" && <h2>Welcome to Matiere 3</h2>}
            {selectedMenu === "6" && <h2>Welcome to Classe 1</h2>}
            {selectedMenu === "8" && <h2>Welcome to Classe 2</h2>}
            {selectedMenu === "9" && <h2>Welcome to the Paiement Section</h2>}
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
