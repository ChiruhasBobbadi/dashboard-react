
import Container from "react-bootstrap/Container";
import {Navbar} from "react-bootstrap";
import logo from '../../images/logo.png'
import axios from "axios";
import {useNavigate} from "react-router-dom";


const Navbar2 =()=>{
    const navigate = useNavigate();
  async  function logout() {

      await axios.post('http://localhost:4000/logout');

      navigate("/");

    }

    return <>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="">
                    <img
                        alt=""
                        src={logo}
                        width="40"
                        height="40"
                        className="d-inline-block align-top"
                    />{' '}
                    Green Energy Cloud
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text onClick={logout} style={{color:"white"}}>
                        Logout
                    </Navbar.Text>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    </>

}


export default Navbar2;
