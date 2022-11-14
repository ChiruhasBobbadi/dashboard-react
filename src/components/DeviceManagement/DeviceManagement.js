
import Container from "react-bootstrap/Container";
import {Nav, Navbar, Table} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from "../Login/Login/login";
import Dashboard from "../Dashboard";

import Light from "./Light/Light";
import Fan from "./Fan/Fan";
import Camera from "./Camera/Camera";


const DeviceManagement = ()=>{




    return (
        <>
            <Navbar expand="lg" variant="fan" bg="fan" fluid>
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link href="/deviceManagement/fan" >Fan</Nav.Link>
                        <Nav.Link href="/deviceManagement/fan" style={{marginLeft:'20%'}}>fan</Nav.Link>
                        <Nav.Link href="/deviceManagement/camera" style={{marginLeft:'20%'}}>camera</Nav.Link>
                        <Nav.Link href="/deviceManagement/water" style={{marginLeft:'20%'}}>Water Meter</Nav.Link>
                        <Nav.Link href="/deviceManagement/electricity" style={{marginLeft:'20%'}}>Electricity Meter</Nav.Link>
                        <Nav.Link href="/deviceManagement/weather" style={{marginLeft:'20%'}}>Weather Sensor</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            {/*<Light/>*/}

         {/*<Fan/>*/}
            <Camera/>
        </>

    );

}


export default DeviceManagement;
