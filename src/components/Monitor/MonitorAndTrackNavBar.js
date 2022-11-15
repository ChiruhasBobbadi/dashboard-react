import Container from "react-bootstrap/Container";
import {Nav, Navbar} from "react-bootstrap";

import {GrFan} from 'react-icons/gr'
const MonitorAndTrackNavBar =()=>{
    return <Navbar expand="lg" variant="light" bg="light" fluid="true">

        <Nav>
            <Nav.Link href="/monitorandtrack/fan" style={{marginLeft:"10%"}}>Fan </Nav.Link>
            <Nav.Link href="/monitorandtrack/light" style={{marginLeft:'20%'}} >Light</Nav.Link>
            <Nav.Link href="/monitorandtrack/camera" style={{marginLeft:'20%'}}>camera</Nav.Link>
            <Nav.Link href="/monitorandtrack/water" style={{marginLeft:'20%'}}>Water_Meter</Nav.Link>
            <Nav.Link href="/monitorandtrack/electricity" style={{marginLeft:'20%'}}>Electricity_Meter</Nav.Link>
            <Nav.Link href="/monitorandtrack/weather" style={{marginLeft:'20%'}}>Weather_Sensor</Nav.Link>
        </Nav>
    </Navbar>
}

export default MonitorAndTrackNavBar;
