
import Container from "react-bootstrap/Container";
import {Navbar} from "react-bootstrap";
import logo from '../../../images/logo.png'
import axios from "axios";
import {useNavigate} from "react-router-dom";

import { FiLogOut } from "react-icons/fi";
import {BiUserCircle} from "react-icons/bi";

const Navbar2 =(props)=>{
    const navigate = useNavigate();
  async  function logout() {

      await axios.post('http://localhost:4000/logout');

      navigate("/");

    }


    return <>
        <Navbar fixedTop style={{color:"white",marginTop:'2%' , marginLeft:'1%', marginRight:'1%', backgroundColor: "#009ACD" , backgroundSize:"0" }}>
            <Container>
                <Navbar.Brand href="/viewAllUsers" style={{fontSize:'30px'}}>
                    <img
                        alt=""
                        src={logo}
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                    />
                    {" "}
                    Smart Meter Dashboard
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse  className="justify-content-end">

                    <Navbar.Text style={{color:"white",marginLeft:'5%'}}>
                        Hello, {sessionStorage.getItem("userName")}! <BiUserCircle style={{fontSize:'35px'} }/>

                    </Navbar.Text>
                    <Navbar.Text onClick={logout}  className="justify-content-end" style={{color:"white",marginLeft:'10%'}}>
                        Logout  <FiLogOut style={{fontSize:'30px'} }/>

                    </Navbar.Text>


                </Navbar.Collapse>

            </Container>
        </Navbar>
    </>

}


export default Navbar2;
