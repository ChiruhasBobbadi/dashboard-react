import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import FormView from "./Login/form/Form";
import Row from "react-bootstrap/Row";
import LeftNavBar from "./LeftNavBar/LeftNavBar";
import NavBarLoggedIn from "./Navbar/NavBarLoggedIn";
import Home from "./home";
import deviceManagement from "./DeviceManagement/DeviceManagement";
import DeviceManagement from "./DeviceManagement/DeviceManagement";
import ControlConfigure from "./ControlConfigure/ControlConfigure";


function Dashboard() {
    return (<>
        <NavBarLoggedIn/>
        <Row >
            <Col lg={2}> <LeftNavBar/> </Col>
            <Col lg={10}>
                <Home/>
            </Col>
        </Row>



    </>);


}

export default Dashboard;
