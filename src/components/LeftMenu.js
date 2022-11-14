import React from "react";

import {
  AppstoreOutlined,
  BarChartOutlined,
  BarsOutlined,
  CalendarOutlined,
  HomeFilled,
  MessageOutlined,
  ReconciliationOutlined,
  SafetyCertificateOutlined,
  SettingOutlined,
  WalletOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { useRouter } from "next/router";

const { Header, Content, Sider } = Layout;

const LeftMenu = () => {
  const router = useRouter();
  return (
    <Menu
      mode="inline"
      theme="dark"
      style={{
        height: "100%",
        borderRight: 0,
      }}
      onSelect={({ key }) => {
        if (key !== router.pathname) {
          router.push(key);
        }
      }}
      selectedKeys={[router.pathname]}
      items={[
        {
          label: "Home",
          key: "/dashboard",
          icon: <HomeFilled />,
        },
        {
          label: "Device Management",
          key: "/device-management",
          icon: <AppstoreOutlined />,
        },
        {
          label: "Monitor & Tracking",
          key: "/monitor-tracking",
          icon: <BarChartOutlined />,
        },
        {
          label: "Control & Configuration",
          key: "/control-config",
          icon: <ReconciliationOutlined />,
        },
        {
          label: "Services",
          key: "/services",
          icon: <BarsOutlined />,
        },
        {
          label: "Billing",
          key: "/billing",
          icon: <WalletOutlined />,
        },
        {
          type: "divider", // Must have
        },
        {
          label: "Settings",
          key: "/settings",
          icon: <SettingOutlined />,
        },
      ]}
    />
  );
};

export default LeftMenu;
