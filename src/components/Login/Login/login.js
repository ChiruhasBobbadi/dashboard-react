
import './login.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from "../form/Form";
import Navbar from "../../Navbar/Navbar";
import FormView from "../form/Form";


const Login = ()=>{

    return (
        <>
    <Navbar></Navbar>
    <Container>
        <Row>
            <Col lg={3}></Col>
            <Col lg={6}>
                <Container>

                    <FormView></FormView>
                </Container>
            </Col>
            <Col lg={3}></Col>
        </Row>
    </Container>
</>
    );

}


export default Login;
