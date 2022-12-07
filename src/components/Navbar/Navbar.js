
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import {Navbar} from "react-bootstrap";
import logo from '../../images/logo.png'
const NavBar =()=> {
    return (
<>
    <Navbar fixedTop style={{color:"white",marginTop:'2%' , marginLeft:'1%', marginRight:'1%', backgroundColor: "#009ACD" , backgroundSize:"0" }}>
        {/*<Container>*/}
            <Navbar.Brand href="" style={{fontSize:'35px'}}>
                <img
                    alt=""
                    src={logo}
                    width="50"
                    height="50"
                    className="d-inline-block align-top"
                />
                {" "}
                Smart Meter System
            </Navbar.Brand>
        {/*</Container>/*/}
    </Navbar>
</>



    );
}

export default NavBar;



