
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import {Navbar} from "react-bootstrap";
import logo from '../../images/logo.png'
const NavBar =()=> {
    return (
<>
    <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="" style={{fontSize:'35px'}}>
                <img
                    alt=""
                    src={logo}
                    width="50"
                    height="50"
                    className="d-inline-block align-top"
                />
                {" "}
                Green Energy Cloud
            </Navbar.Brand>
        </Container>
    </Navbar>
</>



    );
}

export default NavBar;



