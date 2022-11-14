import React from "react";

import { Layout, Avatar, Space } from "antd";
import AuthenticatedNavbar from "../components/AuthenticatedNavbar";
import LeftMenu from "../components/LeftMenu";

const { Header, Content, Sider, Footer } = Layout;

const DashboardLayout = ({ children }) => {
    return (
        <Layout
            style={{
                display: "flex",
                minHeight: "100vh",
                flexDirection: "column",
            }}
        >
            <Header
                className="header"
                style={{
                    paddingLeft: 0,
                    paddingRight: 20,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <Space>
                    <div
                        style={{
                            width: 200,
                            color: "LightBlue",
                            textAlign: "center",
                            fontWeight: "bold",

                        }}
                    >
                        <b>Smart Meters</b>
                    </div>
                    <AuthenticatedNavbar />
                </Space>
                <Avatar style={{ backgroundColor: "teal" }}>user1</Avatar>
            </Header>
            <Layout style={{ flex: "1 0 auto" }}>
                <Sider width={200} className="site-layout-background">
                    <LeftMenu />
                </Sider>
                <Layout
                    style={{
                        padding: 24,
                    }}
                >
                    <Content className="site-layout-background" style={{}}>
                        {children}
                    </Content>
                </Layout>
            </Layout>
            <Footer
                style={{
                    backgroundColor: "#001628",
                    color: "white",
                    textAlign: "center",
                }}
            >
                <b>Smart Meter Management</b>
            </Footer>
        </Layout>
    );
};

export default DashboardLayout;
