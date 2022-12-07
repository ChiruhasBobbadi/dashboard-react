
import Col from "react-bootstrap/Col";
import LeftNavBarAdmin from "./LeftNavBarAdmin/LeftNavBarAdmin";
import Row from "react-bootstrap/Row";
import {Form, Table} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import React, {useState} from "react";
import NavBarLoggedIn from "../Navbar/NavBarLoggedIn";
import axios from "axios";
import NavBarLoggedInAdmin from "./NavbarAdmin/NavBarLoggedInAdmin";


function  ManageUsers(){

    const val=[];

    const [data,setData] = useState(val);


    const deleteHandler= async(event)=>{

        // make api call to delete
        const userId = event.target.name
        await axios.post('http://ec2-204-236-188-241.us-west-1.compute.amazonaws.com:4000/deleterUser',{
            userId:userId
        });

        const newData = data.filter(d=>{
            if(d.id!=userId)
                return d;
        });

        setData([...newData])

    }

    React.useEffect( () => {

        const call = async ()=>{


            let userData = await axios.get('http://ec2-204-236-188-241.us-west-1.compute.amazonaws.com:4000/getAllUsers');
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
                <h4 style={{textAlign:'center',marginTop:'5%'}}> Manage Users </h4>
                <Table striped bordered hover style={{marginTop:'5%'}}>
                    <thead>
                    <tr>
                        <th>User ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        {/*<th>Created At</th>*/}
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>

                    {
                        data.map(el=>{
                            return <tr id={el.id}>
                                <td>{el.id}</td>
                                <td>{el.firstName}</td>
                                <td>{el.lastName}</td>
                                <td>{el.email}</td>
                                {/*<td>{el.dateCreated}</td>*/}
                                <td> <Button variant="danger" onClick={deleteHandler} name={el.id}>Delete User</Button>{' '}  </td>
                            </tr>
                        })
                    }
                    </tbody>
                </Table>


            </Col>
        </Row>



    </>

}


export default ManageUsers;
