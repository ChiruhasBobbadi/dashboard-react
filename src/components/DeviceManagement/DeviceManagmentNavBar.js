import Container from "react-bootstrap/Container";
import {Nav, Navbar} from "react-bootstrap";

import {GrFan} from 'react-icons/gr'
const DeviceManagmentNavBar =()=>{
   return <Navbar expand="lg" variant="light" bg="light" fluid="true">

            <Nav>
                <Nav.Link href="/deviceManagement/fan" style={{marginLeft:"10%"}}>Fan </Nav.Link>
                <Nav.Link href="/deviceManagement/light" style={{marginLeft:'20%'}} >Light</Nav.Link>
                <Nav.Link href="/deviceManagement/camera" style={{marginLeft:'20%'}}>camera</Nav.Link>
                <Nav.Link href="/deviceManagement/water" style={{marginLeft:'20%'}}>Water_Meter</Nav.Link>
                <Nav.Link href="/deviceManagement/electricity" style={{marginLeft:'20%'}}>Electricity_Meter</Nav.Link>
                <Nav.Link href="/deviceManagement/weather" style={{marginLeft:'20%'}}>Weather_Sensor</Nav.Link>
            </Nav>

    </Navbar>
}

export default DeviceManagmentNavBar;
