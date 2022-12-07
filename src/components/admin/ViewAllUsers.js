import AddUser from "./AddUser";
import Col from "react-bootstrap/Col";
import LeftNavBarAdmin from "./LeftNavBarAdmin/LeftNavBarAdmin";
import Row from "react-bootstrap/Row";
import {Form, Table} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import React, {useState} from "react";
import NavBarLoggedIn from "../Navbar/NavBarLoggedIn";
import axios from "axios";
import NavBarLoggedInAdmin from "./NavbarAdmin/NavBarLoggedInAdmin";


function  ViewAllUsers(){

    const val=[];

    const [data,setData] = useState(val);

    React.useEffect( () => {

        const call = async ()=>{
            const id = sessionStorage.getItem("userId");

            let userData = await axios.get('http://localhost:4000/getAllUsers');
            console.log(userData);

            userData = userData.data.data;


            setData([...userData]);
        }

        call()


    }, []);

    return <>
        <NavBarLoggedInAdmin/>

        <Row>
            <Col lg={2}> <LeftNavBarAdmin/> </Col>
            <Col lg={10}>
                <h4 style={{textAlign:'center',marginTop:'5%'}}> View All Users </h4>
                <Table striped bordered hover style={{marginTop:'5%'}}>
                    <thead>
                    <tr>
                        <th>User ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Created At</th>
                    </tr>
                    </thead>
                    <tbody>

                    {
                        data.map(el=>{
                           return <tr>
                                <td>{el.id}</td>
                                <td>{el.firstName}</td>
                                <td>{el.lastName}</td>
                                 <td>{el.email}</td>
                                <td>{el.dateCreated}</td>
                            </tr>
                        })
                    }
                    </tbody>
                </Table>


            </Col>
        </Row>



    </>

}


export default ViewAllUsers;
