import React, { Fragment, useState } from "react";

import { Layout, Menu } from "antd";
// import  LeftMenu  from "../LeftMenu";
// import  AuthenticatedNavbar  from "../AuthenticatedNavbar";
import { Statistic } from "antd";
import { Card } from "antd";
// import { Grid } from "antd";
import { Col, Row } from "antd";
import { Typography } from "antd";
import DashboardLayout from "../DashboardLayout";
import { Space } from "antd";
import { Divider } from "antd";
import MeterSelector from "../MeterSelector";
import { DEVICE_METER_TYPES } from "../../constants";

const { Header, Content } = Layout;

const waterUsageData = {
    "": {
        "Total Usage": {
            value: 22,
            unit: "gal",
        },
        "Last 24hr Usage": {
            value: 10,
            unit: "gal",
        },
        "Last Update": {
            value: Date().toLocaleString().split('G')[0],
            unit: "",
        },
    },
    "This Week's Overview": {
      "Total Usage": {
        value: 15,
        unit: "gal",
      },
      "Avg Daily Usage": {
        value: 8,
        unit: "gal",
      },
      "Max Usage": {
        value: 18,
        unit: "gal",
      },
    },
    "This Month's Overview": {
      "Total Usage": {
        value: 1580,
        unit: "gal",
      },
      "Avg Daily Usage": {
        value: 82,
        unit: "gal",
      },
      "Max Usage": {
        value: 118,
        unit: "gal",
      },
    },
};
const electricUsageData = {
    "": {
        "Total Usage": {
            value: 18,
            unit: "KWh",
        },
        "Last 24hr Usage": {
            value: 20,
            unit: "KWh",
        },
        "Last Update": {
            value: Date().toLocaleString().split('G')[0],
            unit: "",
        },
    },
    "This Week's Overview": {
      "Total Usage": {
        value: 15,
        unit: "KWh",
      },
      "Avg Daily Usage": {
        value: 8,
        unit: "KWh",
      },
      "Max Usage": {
        value: 18,
        unit: "KWh",
      },
    },
    "This Month's Overview": {
      "Total Usage": {
        value: 1580,
        unit: "KWh",
      },
      "Avg Daily Usage": {
        value: 82,
        unit: "KWh",
      },
      "Max Usage": {
        value: 118,
        unit: "KWh",
      },
    },
};

const Dashboard = () => {
    const [selectedDeviceType, setSelectedDeviceType] = useState(
        DEVICE_METER_TYPES.ELECTRIC
    );

    const statsData =
        selectedDeviceType === DEVICE_METER_TYPES.WATER
            ? waterUsageData
            : electricUsageData;

    return (
        <DashboardLayout>
            <div style={{ display: "grid", placeItems: "center", marginBottom: 32 }}>
                <MeterSelector
                    value={selectedDeviceType}
                    onChange={setSelectedDeviceType}
                />
            </div>

            <Space direction="vertical" style={{ width: "100%" }}>
                {Object.entries(statsData).map(([title, data]) => {
                    return (
                        <Fragment key={title}>
                            {title && (
                                <Divider orientation="left">
                                    <Typography.Title level={3}>{title}</Typography.Title>
                                </Divider>
                            )}
                            <Row gutter={[8, 8]}>
                                {Object.entries(data).map(([statTitle, statInfo]) => {
                                    return (
                                        <Col span={8} key={statTitle}>
                                            <Card>
                                                <Statistic
                                                    title={statTitle}
                                                    value={statInfo.value}
                                                    suffix={statInfo.unit}
                                                />
                                            </Card>
                                        </Col>
                                    );
                                })}
                            </Row>
                        </Fragment>
                    );
                })}
            </Space>
        </DashboardLayout>
    );
};

export default Dashboard;
