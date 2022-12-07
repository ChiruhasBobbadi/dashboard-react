


import Col from "react-bootstrap/Col";
import LeftNavBarAdmin from "./LeftNavBarAdmin/LeftNavBarAdmin";
import Row from "react-bootstrap/Row";
import {Form, Table} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import React, {useState} from "react";
import NavBarLoggedIn from "../Navbar/NavBarLoggedIn";
import axios from "axios";
import NavBarLoggedInAdmin from "./NavbarAdmin/NavBarLoggedInAdmin";


function  ViewServiceRequests(){
    const val=[];

    const [data,setData] = useState(val);


    const resolveHandler= async(event)=>{

        // make api call to delete
        const reqId = event.target.name
        console.log(reqId);
        await axios.post('http://ec2-204-236-188-241.us-west-1.compute.amazonaws.com:4000/markResolved',{
            id:reqId
        });

        const newData = data.filter(d=>{
            if(d.id!=reqId)
                return d;
        });

        setData([...newData])

    }

    React.useEffect( () => {

        const call = async ()=>{


            let serviceData = await axios.get('http://ec2-204-236-188-241.us-west-1.compute.amazonaws.com:4000/getAllServiceRequests');
            console.log(serviceData);

            serviceData = serviceData.data.data;


            setData([...serviceData]);
        }

        call()


    }, []);

return <>
    <NavBarLoggedInAdmin/>

    <Row>
        <Col lg={2}> <LeftNavBarAdmin/> </Col>
        <Col lg={10}>
            <h4 style={{textAlign:'center',marginTop:'5%'}}> View Service Requests </h4>
            <Table striped bordered hover style={{marginTop:'5%'}}>
                <thead>
                <tr>
                    <th>User ID</th>
                    <th>Device Type</th>
                    <th>Description</th>
                    <th>Created At</th>
                    <th>Actions</th>
                    {/*<th>Created At</th>*/}

                </tr>
                </thead>
                <tbody>

                {
                    data.map(el=>{
                        return <tr id={el.id}>
                            <td>{el.userId}</td>
                            <td>{el.device}</td>
                            <td>{el.description}</td>
                            <td>{el.dateCreated}</td>

                            {/*<td>{el.dateCreated}</td>*/}
                            <td> <Button variant="success" onClick={resolveHandler} name={el.id}> Resolve Request</Button>{' '}  </td>
                        </tr>
                    })
                }
                </tbody>
            </Table>


        </Col>
    </Row>





</>

}


export default ViewServiceRequests;
