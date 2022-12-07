
import React, {useState} from "react";
import Row from "react-bootstrap/Row";
import Form from 'react-bootstrap/Form';
import NavBarLoggedIn from "../Navbar/NavBarLoggedIn";
import Col from "react-bootstrap/Col";
import LeftNavBar from "../LeftNavBar/LeftNavBar";
import Button from "react-bootstrap/Button";
import axios from "axios";
import {Modal} from "react-bootstrap";


function ServiceRequest() {
    const [show, setShow] = useState(false);

    const handleClose = () => {

        setShow(false);
    }
    const handleShow = () => setShow(true);

    const submitHandler = async(event)=>{

        event.preventDefault();

        const device = event.target.device.value;
        const description = event.target.description.value;

        //unsetting value


      await submit(device,description);
        event.target.description.value="";

    }
    const submit = async(device, description)=>{
        const response = await axios.post("http://localhost:4000/service",{
            device:device,
            userId:sessionStorage.getItem("userId"),
            description:description
        });

        handleShow();




    }
    return (<>
        <NavBarLoggedIn/>
        <Row>
            <Col lg={2}> <LeftNavBar/> </Col>
            <Col lg={10}>
                <Row>
                    <Col lg={4}></Col>
                    <Col lg={4} style={{marginTop:'2%'}} > <h4>Service Request</h4></Col>
                </Row>




            <Form onSubmit={submitHandler} style={{marginLeft:'30%'}}>

                <Form.Label  style={{marginTop:'5%'}}>Select Device</Form.Label>
                <br/>
                <Form.Select aria-label="Select Device"  style={{padding:'1%'}} name={'device'}>
                    <option value="Fan">Fan</option>
                    <option value="Light">Light</option>
                    <option value="Camera">Camera</option>
                    <option value="Electricity_Meter">Electricity Meter</option>
                    <option value="Water_Meter">Water Meter</option>
                    <option value="Weather Sensor">Weather Sensor</option>
                </Form.Select>


                <Row>
                    <Col lg={8}>
                        <Form.Control as="textarea"
                                      required
                                      type="text"
                                      name="description"
                                      placeholder="Write your concerns here"
                                      style={{marginTop:'7%',aspectRatio:'16:9'}}


                        />
                    </Col>
                </Row>

                <Button variant="primary" type="submit" style={{marginTop:'7%'}} >
                    Submit
                </Button>


            </Form>






            </Col>
        </Row>




        <Modal show={show} onHide={handleClose}>
            <Modal.Header >
                <Modal.Title>Success!</Modal.Title>
            </Modal.Header>
            <Modal.Body>Your service request has been submitted, someone will look into it shortly!.</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>





    </>);


}

export default ServiceRequest;
