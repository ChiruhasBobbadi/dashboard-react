import React from "react";
import { render } from "react-dom";

import { Col, Divider, Row, Table } from "antd";
import axios from "axios";
// import "antd/dist/antd.css";


const Invoice=()=> {
    return (
        <div style={{ padding: 20 }}>
            <Row>
                <Col>
                    <h1 >Invoice</h1>
                </Col>
            </Row>

            <Row gutter={24} style={{ marginTop: 32 }}>
                <Col span={8}>
                    <h4>Eco Haya</h4>
                    <div>#944/945, 4th Cross, 9th Main,</div>
                    <div>Vijaya Bank Layout,</div>
                    <div>Bannerghatta Road,</div>
                    <div>Bangalore - 560076</div>
                </Col>
                <Col span={8} offset={8}>
                    <table>
                        <tr>
                            <th>Invoice # :</th>
                            <td>1</td>
                        </tr>
                        <tr>
                            <th>Invoice Date :</th>
                            <td>11-15-2022</td>
                        </tr>
                        <tr>
                            <th>Due Date :</th>
                            <td>11-23-2022</td>
                        </tr>
                    </table>
                </Col>
            </Row>

            <Row style={{ marginTop: 48 }}>
                <div>
                    Bill To: <strong>Strides Shasun Ltd</strong>
                </div>
                <div>Bannerghatt Road,</div>
                <div>Bangalore - 560076</div>
            </Row>

            <Row style={{ marginTop: 48 }}>
                <Table
                    dataSource={[
                        {
                            id: 1,
                            name: "Water Usage",
                            utilization: "10 Gallons",
                            price: "$1599",
                            rate: "159.9"
                        },
                        {
                            id: 2,
                            name: "Power Usage",
                            utilization: "10 KwH",
                            price: "$1599",
                            rate: "159.9"
                        },
                        {
                            id: 3,
                            name: "-----------------------",
                            utilization: "-----------------------",
                            price: "-----------------------",
                            rate: "-----------------------"
                        },
                        {
                            id: 4,
                            name: "Net Total :",
                            utilization: "",
                            price: "$3389.88",
                            rate: ""
                        }
                    ]}
                    pagination={false}
                >
                    <Table.Column title="Items" dataIndex="name" width={150} />
                    <Table.Column title="Utilization" dataIndex="utilization" width={150} />
                    <Table.Column title="Rate per item" dataIndex="rate" width={150} />
                    <Table.Column title="Price" dataIndex="price" width={150} />
                </Table>
            </Row>

            {/*<Row style={{ marginTop: 35 }}>*/}
            {/*    <Col span={8} offset={16}>*/}
            {/*        <table>*/}
            {/*            <tr>*/}
            {/*                <th>Net Total :</th>*/}
            {/*                <td>$3389.88</td>*/}
            {/*            </tr>*/}
            {/*        </table>*/}
            {/*    </Col>*/}
            {/*</Row>*/}


        </div>
    );
}

export default Invoice;
