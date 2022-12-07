
import Container from "react-bootstrap/Container";
import {Navbar} from "react-bootstrap";
import logo from '../../images/logo.png'
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
        <Navbar fixedTop style={{color:"white",marginTop:'2%' , marginLeft:'1%', marginRight:'1%', backgroundColor: "#009ACD" , backgroundSize:"0" }} >
            <Container>
                <Navbar.Brand className="justify-content-left" href="/home" style={{fontSize:'30px'}}>
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
                <Navbar.Toggle />
            </Container>
                <Navbar.Collapse  className="justify-content-end">

                    <Navbar.Brand href="/profile" style={{color:"white",marginLeft:'5%'}}>
                         {sessionStorage.getItem("userName")} <BiUserCircle style={{fontSize:'35px'} }/>

                    </Navbar.Brand>

                    <Navbar.Brand href="/" onClick={logout}  className="justify-content-end" style={{color:"white",marginLeft:'0%'}}>
                          <FiLogOut style={{fontSize:'30px'} }/>

                    </Navbar.Brand>


                </Navbar.Collapse>


        </Navbar>
    </>

}


export default Navbar2;
