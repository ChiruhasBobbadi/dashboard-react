import Container from "react-bootstrap/Container";
import {Nav, Navbar} from "react-bootstrap";

import {GrFan} from 'react-icons/gr'
import { useLocation} from "react-router-dom";
import { NavLink } from "react-router-dom";

const DeviceManagmentNavBar =()=>{
    const location = useLocation();
    const path = location.pathname.split('/')[2];

   return <Navbar expand="lg" variant="dark" bg="dark" fluid="true"  style={{color:"white",marginTop:'2%'}}>

            <Nav>
                <Nav.Link href="/deviceManagement/fan" style={{marginLeft:'20%' , color : path ==='fan'?'#009ACD':'inherit'} } >Fan </Nav.Link>
                <Nav.Link href="/deviceManagement/light" style={{marginLeft:'20%' , color : path ==='light'?'#009ACD':'inherit'} } >Light</Nav.Link>
                <Nav.Link href="/deviceManagement/camera" style={{marginLeft:'20%' , color : path ==='camera'?'#009ACD':'inherit' }}>camera</Nav.Link>
                <Nav.Link href="/deviceManagement/water" style={{marginLeft:'20%' , color : path ==='water'?'#009ACD':'inherit' }}>Water_Meter</Nav.Link>
                <Nav.Link href="/deviceManagement/electricity" style={{marginLeft:'20%' , color : path ==='electricity'?'#009ACD':'inherit' }}>Electricity_Meter</Nav.Link>
                <Nav.Link href="/deviceManagement/weather" style={{marginLeft:'20%' , color : path ==='weather'?'#009ACD':'inherit' }}>Weather_Sensor</Nav.Link>
            </Nav>

    </Navbar>
}

export default DeviceManagmentNavBar;
