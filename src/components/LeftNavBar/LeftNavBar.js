import React from "react";

import {Nav} from "react-bootstrap";


const LeftMenu = ()=> {

        return <>
                <Nav defaultActiveKey="/home" className="flex-column" bg="dark" variant="dark">
                        <Nav.Link href="/home">  Home</Nav.Link>
                        <Nav.Link href="/deviceManagement">Device Management</Nav.Link>
                        <Nav.Link eventKey="link-2">Monitor & tracking</Nav.Link>
                        <Nav.Link eventKey="link-2">Control & Configure</Nav.Link>
                      
                </Nav>
        </>
}

export default LeftMenu;
