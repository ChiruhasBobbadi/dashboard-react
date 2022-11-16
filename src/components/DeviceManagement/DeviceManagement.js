
import Container from "react-bootstrap/Container";
import {Nav, Navbar, Table} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {BrowserRouter as Router, Route, Routes, useLocation} from "react-router-dom";
import Login from "../Login/Login/login";
import Dashboard from "../Dashboard";

import Light from "./Light/Light";
import Fan from "./Fan/Fan";
import Camera from "./Camera/Camera";
import LeftNavBar from "../LeftNavBar/LeftNavBar";
import Home from "../home";
import ControlConfigure from "../ControlConfigure/ControlConfigure";
import NavBarLoggedIn from "../Navbar/NavBarLoggedIn";
import DeviceManagmentNavBar from "./DeviceManagmentNavBar";
import {useState} from "react";
import WaterMeter from "./water_meter/waterMeter";
import ElectricityMeter from "./Electricity_meter/ElectricityMeter";
import WeatherSensor from "./Weather_sensor/WeatherSensor";


const DeviceManagement = ()=>{


const location = useLocation();
const path = location.pathname.split('/')[2];

   let el='';

if(path==='light')
    el=<Light/>
else if (path=='fan')
    el=<Fan/>
else if(path=='camera')
    el=<Camera/>
else if(path=='water')
    el=<WaterMeter/>
else if(path==='electricity')
    el=<ElectricityMeter/>
else if(path==='weather')
    el=<WeatherSensor/>
else
    el=<Fan/>



    return (
        <>

            <NavBarLoggedIn/>
            <Row>
                <Col lg={2}> <LeftNavBar/> </Col>
                <Col lg={10}>

                    <DeviceManagmentNavBar/>

                    {el}

                </Col>
            </Row>







        </>

    );

}


export default DeviceManagement;
