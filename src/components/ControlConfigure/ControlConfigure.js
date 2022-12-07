import Container from "react-bootstrap/Container";
import {Modal, Nav, Navbar, Spinner, Table} from "react-bootstrap";
import React, {useState} from "react";
import axios from "axios";
import ControlConfigureRow from "./ControlConfigureRow";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import fan from "../DeviceManagement/Fan/Fan";
import NavBarLoggedIn from "../Navbar/NavBarLoggedIn";
import LeftNavBar from "../LeftNavBar/LeftNavBar";
import Home from "../home";


const ControlConfigure = ()=> {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const val=[];

    const [data,setData] = useState(val);
    const [device,setDevice] = useState("fan");


    React.useEffect( () => {

        const call = async ()=>{
            const id = sessionStorage.getItem("userId");

            const fanData = await axios.post('http://localhost:4000/getAllDevices',{
                type:device,
                data:{
                    id:id
                }
            });

            const t =  fanData.data.data.map(m=>{
                return {
                    'type':device,
                    data:{
                        ...m
                    }
                }
            })


            setData([...t]);
        }

        call();
    }, []);


    const call = async (type)=>{
        const id = sessionStorage.getItem("userId");

        const deviceData = await axios.post('http://localhost:4000/getAllDevices',{
            type:type,
            data:{
                id:id
            }
        });

        const t = deviceData.data.data.map(m=>{
            return {
                type:type,
                data:{
                    ...m
                }
            }
        })
        setDevice(type)
        setData([...t]);
    }

    const clickHandler = async (event)=> {

        event.preventDefault();

        setData([])

        let type='';
        switch(event.target.innerText){
            case 'Fan':
                type='fan';
                break;
            case 'Light':
                type='light';
                break;
            case 'Camera':
                type='camera';
                break;
            case 'Water_Meter':
                type='water_meter'
                break;
            case 'Electricity_Meter':
                type='electric_meter'
                break;
            case 'Weather_Sensor':
                type='weather_sensor'
                break;

        }

        await call(type);
    }

    const onUpdateDataHandler= async(d)=>{

        const newChecked = !d.data.status;

        handleShow();

        console.log("changing state to " + newChecked + " " + d.data.id);


        console.log(d);
        if(newChecked)
            await axios.post('http://localhost:4000/startDevice',{
                ...d
            })
        else{
            await axios.post('http://localhost:4000/stopDevice',{
                ...d
            })
        }

        const type= d.type;
        const id = sessionStorage.getItem("userId");

        const newData = await axios.post('http://localhost:4000/getAllDevices',{
            type:type,
            data:{
                id:id
            }
        });



        const t =  newData.data.data.map(m=>{
            return {
                'type':type,
                data:{
                    ...m
                }
            }
        })


        handleClose();

        setData([...t]);




    }



    return <>

        <NavBarLoggedIn/>
        <Row>
            <Col lg={2}> <LeftNavBar/> </Col>
            <Col lg={10}>
                <Navbar expand="lg" variant="dark" bg="dark" fluid="true"  style={{color:"white",marginTop:'2%'}}>

                    <Nav>
                        <Nav.Link onClick={clickHandler} style={{marginLeft:"10%"}}>Fan </Nav.Link>
                        <Nav.Link onClick={clickHandler} style={{marginLeft:'20%'}} >Light</Nav.Link>
                        <Nav.Link onClick={clickHandler} style={{marginLeft:'20%'}}>Camera</Nav.Link>
                        <Nav.Link onClick={clickHandler} style={{marginLeft:'20%'}}>Water_Meter</Nav.Link>
                        <Nav.Link onClick={clickHandler} style={{marginLeft:'20%'}}>Electricity_Meter</Nav.Link>
                        <Nav.Link onClick={clickHandler} style={{marginLeft:'20%'}}>Weather_Sensor</Nav.Link>
                    </Nav>

                </Navbar>

                <h2 style={{textAlign:"center", marginTop:"5%"}}> {device} Data</h2>
                <Container style={{marginTop:"5%"}}>

                    <Table bordered>
                        <thead>
                        <tr>
                            <th>Device Id</th>
                            <th>Device Name</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>

                        {data.map(d=>
                            <ControlConfigureRow data={d} key={d.data.id} updateData={onUpdateDataHandler}/>

                        )}

                        </tbody>
                    </Table>
                </Container>

            </Col>
        </Row>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header>
                <Modal.Title>Processing Request</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner></Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>

            </Modal.Footer>
        </Modal>


        </>




}

export default ControlConfigure;




