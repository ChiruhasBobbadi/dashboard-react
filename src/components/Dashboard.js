import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import FormView from "./Login/form/Form";
import Row from "react-bootstrap/Row";
import LeftNavBar from "./LeftNavBar/LeftNavBar";
import NavBarLoggedIn from "./Navbar/NavBarLoggedIn";
import Home from "./home";
import deviceManagement from "./DeviceManagement/DeviceManagement";
import DeviceManagement from "./DeviceManagement/DeviceManagement";


function Dashboard() {
    return (<>
        <NavBarLoggedIn></NavBarLoggedIn>
        <Row>
            <Col lg={2}> <LeftNavBar></LeftNavBar> </Col>
            <Col lg={10}>

                {/*<Home></Home>*/}

          {/*<deviceManagement> </deviceManagement>*/}

            <DeviceManagement/>




            </Col>

        </Row>

    </>);


}

export default Dashboard;
