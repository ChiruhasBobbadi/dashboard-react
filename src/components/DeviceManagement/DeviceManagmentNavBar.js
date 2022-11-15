import Container from "react-bootstrap/Container";
import {Nav, Navbar} from "react-bootstrap";

import {GrFan} from 'react-icons/gr'
import {BrowserRouter as Router, Route, Routes, useLocation} from "react-router-dom";
import { NavLink } from "react-router-dom";

const DeviceManagmentNavBar =()=>{
    const location = useLocation();
    const path = location.pathname.split('/')[2];

   return <Navbar expand="lg" variant="dark" bg="dark" fluid="true"  style={{color:"white",marginTop:'2%'}}>

            <Nav>
                {/* <NavLink>Fan</NavLink> */}

                <Nav.Link href="/deviceManagement/fan" style={{marginLeft:'20%' , color : path ==='fan'?'#00FF00':'inherit'} } >Fan </Nav.Link>
                <Nav.Link href="/deviceManagement/light" style={{marginLeft:'20%' , color : path ==='light'?'#00FF00':'inherit'} } >Light</Nav.Link>
                <Nav.Link href="/deviceManagement/camera" style={{marginLeft:'20%' , color : path ==='camera'?'#00FF00':'inherit' }}>camera</Nav.Link>
                <Nav.Link href="/deviceManagement/water" style={{marginLeft:'20%' , color : path ==='water'?'#00FF00':'inherit' }}>Water_Meter</Nav.Link>
                <Nav.Link href="/deviceManagement/electricity" style={{marginLeft:'20%' , color : path ==='electricity'?'#00FF00':'inherit' }}>Electricity_Meter</Nav.Link>
                <Nav.Link href="/deviceManagement/weather" style={{marginLeft:'20%' , color : path ==='weather'?'#00FF00':'inherit' }}>Weather_Sensor</Nav.Link>
            </Nav>

    </Navbar>
}

export default DeviceManagmentNavBar;
