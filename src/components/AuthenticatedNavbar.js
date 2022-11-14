import React from "react";

import { Layout, Menu } from "antd";
import { SubnodeOutlined } from "@ant-design/icons";

const AuthenticatedNavbar = () => {
  return (
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={["2"]}
      items={[
        {
          label: "Solar",
          key: "solar",
        },
        {
          label: "Storage",
          key: "storage",
        },
        {
          label: "Camera",
          key: "camera",
        },
        {
          label: "IoT",
          key: "iot",
        },
        {
          label: "Meter",
          key: "meter",
          children: [
            {
              label: "Electricity Meter",
              key: "electricity-meter",
            },
            {
              label: "Water Meter",
              key: "water-meter",
            },
          ],
        },
      ]}
    />
  );
};

export default AuthenticatedNavbar;
