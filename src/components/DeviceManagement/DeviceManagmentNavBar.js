import Container from "react-bootstrap/Container";
import {Nav, Navbar} from "react-bootstrap";


const DeviceManagmentNavBar =()=>{
   return <Navbar expand="lg" variant="light" bg="light" fluid>
        <Container>
            <Nav className="me-auto">
                <Nav.Link href="/deviceManagement/fan" >Fan</Nav.Link>
                <Nav.Link href="/deviceManagement/light" style={{marginLeft:'20%'}} >Light</Nav.Link>
                <Nav.Link href="/deviceManagement/camera" style={{marginLeft:'20%'}}>camera</Nav.Link>
                <Nav.Link href="/deviceManagement/water" style={{marginLeft:'20%'}}>Water Meter</Nav.Link>
                <Nav.Link href="/deviceManagement/electricity" style={{marginLeft:'20%'}}>Electricity Meter</Nav.Link>
                <Nav.Link href="/deviceManagement/weather" style={{marginLeft:'20%'}}>Weather Sensor</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
}

export default DeviceManagmentNavBar;
