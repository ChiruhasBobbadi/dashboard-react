import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import {useState} from "react";
import {Modal} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form';
import axios from "axios";


const WeatherSensorRow = (props)=>{


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [showUpdateModal, setShowUpdateModal] = useState(false);

    const handleCloseUpdateModal = () => setShowUpdateModal(false);
    const handleShowUpdateModal = () => setShowUpdateModal(true)


    const onDeleteClickHandler = ()=>{


        console.log(props.data);
        props.onDeleteHandler(props.data);
    }

    const onUpdateClickHandler = async (event)=>{

        event.preventDefault();
        const userId = sessionStorage.getItem("userId");

        let d = event.target;
        const data =
            {
                "type": "weatherSensor",
                "data": {
                    "device_name":d.deviceName.value,
                    "userId":userId,
                    "model" : d.model.value,
                    "installation_date":d.installationDate.value,
                    "id":d.deviceId.value,
                    "temperature_range":d.temperature_range.value,
                    "location":d.location.value,
                    "deployment_date":d.deploymentDate.value,
                    "manufacturer":d.manufacturer.value,
                    "power":d.power.value,
                    "temperature_accuracy": d.temperature_accuracy.value,


                }


            }
        console.log("from update");
        console.log(data);


        await axios.post('http://localhost:4000/updateDevice',data)


        handleCloseUpdateModal();
        props.onUpdateHandler();
    }

    return <>
        <tr>

            <td>{props.data.id.split("-")[0]}</td>
            <td>{props.data.name}</td>
            <td> <Row>
                <Col lg={2}>
                    <Button onClick={handleShow}> View </Button>
                </Col>
                <Col lg={2}>
                    <Button onClick={handleShowUpdateModal} variant="secondary"> Update </Button>
                </Col>
                <Col lg={2}>
                    <Button onClick={onDeleteClickHandler} variant="danger"> Delete </Button>
                </Col>
            </Row>
            </td>
        </tr>

        {/*view modal*/}
        <Modal show={show} onHide={handleClose}  size="xl">
            <Modal.Header closeButton>
                <Modal.Title>View weatherSensor Information</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <Row>
                    <Col lg={4}>
                        Device Id: {props.data.id.split("-")[0]}
                    </Col>
                    <Col lg={4}>
                        Device Name : {props.data.name}
                    </Col>
                    <Col lg={4}>
                        Model : {props.data.model}
                    </Col>

                </Row>
                <br/>
                <Row>
                    <Col lg={4}>
                        Installation Date : {props.data.installation_date}
                    </Col>
                    <Col lg={4}>
                        temperature_range : {props.data.temperature_range}
                    </Col>
                    <Col lg={4}>
                        Deployment Date : {props.data.deployment_date}
                    </Col>

                </Row>
                <br/>
                <Row>

                    <Col lg={4}>
                        temperature_accuracy : {props.data.temperature_accuracy}
                    </Col>
                    <Col lg={4}>
                        Power : {props.data.power}
                    </Col>
                    <Col lg={4}>
                        Manufacturer : {props.data.manufacturer}
                    </Col>

                </Row>
                <br/>
                <Row>

                    <Col lg={4}>
                        Location : {props.data.location}
                    </Col>
                    <Col lg={4}>

                    </Col>
                    <Col lg={4}>

                    </Col>

                </Row>






            </Modal.Body>

        </Modal>



        {/*update modal*/}

        <Modal  show={showUpdateModal} onHide={handleCloseUpdateModal}  size="xl">
            <Form onSubmit={onUpdateClickHandler}>
                <Modal.Header closeButton>
                    <Modal.Title>View weatherSensor Information</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Row>
                        <Col lg={4}>
                            Device Id:  <Form.Control
                            type="text"
                            id="deviceId"
                            contentEditable={true}
                            defaultValue={props.data.id}
                            required={true}
                        />
                        </Col>
                        <Col lg={4}>
                            Device Name : <Form.Control
                            type="text"
                            id="deviceName"
                            defaultValue={props.data.name}
                            required={true}
                        />
                        </Col>
                        <Col lg={4}>
                            Model : <Form.Control
                            type="text"
                            id="model"
                            defaultValue={props.data.model}
                            required={true}
                        />
                        </Col>

                    </Row>
                    <br/>
                    <Row>
                        <Col lg={4}>
                            Installation Date : <Form.Control
                            type="text"
                            id="installationDate"
                            required={true}
                            defaultValue={props.data.installation_date}
                        />
                        </Col>
                        <Col lg={4}>
                            temperature_range : <Form.Control
                            type="text" required={true}
                            id="temperature_range"
                            defaultValue={props.data.temperature_range}
                        />
                        </Col>
                        <Col lg={4}>
                            Location : <Form.Control
                            type="text"
                            id="location"
                            required={true}
                            defaultValue={props.data.location}
                        />
                        </Col>

                    </Row>
                    <br/>
                    <Row>

                        <Col lg={4}>
                            Battery Cell Type :
                            <Form.Control
                                type="text"
                                required={true}
                                id="temperature_accuracy"
                                defaultValue={props.data.temperature_accuracy}
                            />
                        </Col>
                        <Col lg={4}>
                            Power : <Form.Control
                            type="text"
                            id="power"
                            required={true}
                            defaultValue={props.data.power}
                        />
                        </Col>
                        <Col lg={4}>
                            Manufacturer : <Form.Control
                            type="text"
                            id="manufacturer"
                            required={true}
                            defaultValue={props.data.manufacturer}
                        />
                        </Col>

                    </Row>
                    <br/>
                    <Row>

                        <Col lg={4}>
                            Deployment Date : <Form.Control
                            type="text"
                            required={true}
                            id="deploymentDate"
                            defaultValue={props.data.deployment_date}
                        />
                        </Col>
                        <Col lg={4}>

                        />
                        </Col>
                        <Col lg={4}>


                        </Col>

                    </Row>






                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseUpdateModal}>
                        Close
                    </Button>
                    <Button variant="primary" type={"submit"}>
                        Update
                    </Button>
                </Modal.Footer>
            </Form>

        </Modal>




    </>
}

export default WeatherSensorRow;
