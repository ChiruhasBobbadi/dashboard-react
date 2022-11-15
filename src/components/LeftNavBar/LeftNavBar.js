import React from "react";

import {Nav} from "react-bootstrap";


const LeftMenu = ()=> {

        return <>
                <Nav defaultActiveKey="/home" className="flex-column" bg="dark" variant="dark">
                        <Nav.Link href="/home">  Home</Nav.Link>
                        <Nav.Link href="/deviceManagement">Device Management</Nav.Link>
                        <Nav.Link href='/monitor'>Monitor & tracking</Nav.Link>
                        <Nav.Link href='/controlConfigure'>Control & Configure</Nav.Link>
                        <Nav.Link href='/billing'>Billing</Nav.Link>
                      
                </Nav>
        </>
}

export default LeftMenu;
