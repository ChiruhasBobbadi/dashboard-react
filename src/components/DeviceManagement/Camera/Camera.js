import {Modal, Table} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import {useState} from "react";
import axios from "axios";
import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import DeviceManagement from "../DeviceManagement";
import CameraRow from "./CameraRow";
import Form from "react-bootstrap/Form";



const Camera=()=>{

    const [data, setData] = useState([]);


    const [showAddModal, setShowAddModal] = useState(false);

    const handleCloseAddModal = () => setShowAddModal(false);
    const handleShowAddModal = () => setShowAddModal(true)


    React.useEffect( () => {

        const call = async ()=>{
            const id = sessionStorage.getItem("userId");

            //todo change userId later
            const cameraData = await axios.post('http://localhost:4000/allDevices',{
                type:'camera',
                data:{
                    userId:id
                }
            });
            console.log(cameraData.data.data);
            setData([...cameraData.data.data]);
        }

        call();
    }, []);



    // todo
    const deleteDevice = async(deviceData)=>{

        // deleting


        await axios.post('http://localhost:4000/deleteDevice',{
            type:'camera',
            data:{
                id:deviceData.id
            }
        })

        const newData = data.filter(d=>{
            if(d.id!=deviceData.id)
                return d;
        });

        setData([...newData]);

    }


    const onAddClickHandler = async (event)=>{
        event.preventDefault();
        const userId = sessionStorage.getItem("userId");
        // todo change userID later
        let d = event.target;
        const data =
            {
                "type": "camera",
                "data": {
                    "device_name":d.deviceName.value,
                    "userId":1,
                    "model" : d.model.value,
                    "installation_date":d.installationDate.value,
                    "id":d.deviceId.value,
                    "sensor_size":d.sensor_size.value,
                    "location":d.location.value,
                    "deployment_date":d.deploymentDate.value,
                    "manufacturer":d.manufacturer.value,
                    "power":d.power.value,
                    "resolution": d.resolution.value,
                    "lens":d.lens.value,
                }
            }

        await axios.post('http://localhost:4000/addDevice',data)
        const cameraData = await axios.post('http://localhost:4000/allDevices',{
            type:'camera',
            data:{
                userId:userId
            }
        });
        setData([...cameraData.data.data]);

        handleCloseAddModal();

    }






    const update = async()=>{

        const call = async ()=>{
            const id = sessionStorage.getItem("userId");
            //console.log(id);
            // todo change userID later
            const cameraData = await axios.post('http://localhost:4000/allDevices',{
                type:'camera',
                data:{
                    userId:id
                }
            });
            console.log(cameraData.data.data);
            setData([...cameraData.data.data]);
        }

        call()

    }



    return <Container style={{marginTop:"5%"}}>

        <Row>
            <Col lg={10}>

            </Col>
            <Col lg={2}>
                <Button variant="success" onClick={handleShowAddModal} style={{justifySelf:'right'}}>Add camera</Button>
            </Col>
        </Row>
        <br/>

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

                <CameraRow data={d} key={d.id} onDeleteHandler={deleteDevice} onUpdateHandler={update} />
            )}

            </tbody>
        </Table>




        <Modal  show={showAddModal} onHide={handleCloseAddModal}  size="xl">
            <Form onSubmit={onAddClickHandler}>
                <Modal.Header >
                    <Modal.Title>View camera Information</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Row>
                        <Col lg={4}>
                            Device Id:  <Form.Control
                            type="text"
                            id="deviceId"
                            required={true}


                        />
                        </Col>
                        <Col lg={4}>
                            Device Name : <Form.Control
                            type="text"
                            id="deviceName"
                            required={true}
                        />
                        </Col>
                        <Col lg={4}>
                            Model : <Form.Control
                            type="text"
                            id="model"
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

                        />
                        </Col>
                        <Col lg={4}>
                            sensor_size : <Form.Control
                            type="text"
                            id="sensor_size"
                            required={true}
                        />
                        </Col>
                        <Col lg={4}>
                            Location : <Form.Control
                            type="text"
                            id="location"
                            required={true}
                        />
                        </Col>

                    </Row>
                    <br/>
                    <Row>

                        <Col lg={4}>
                           Lens :
                            <Form.Control
                                type="text"
                                id="lens"
                                required={true}
                            />
                        </Col>
                        <Col lg={4}>
                            Resolution : <Form.Control
                            type="text"
                            id="resolution"
                            required={true}
                        />
                        </Col>
                        <Col lg={4}>
                            Manufacturer : <Form.Control
                            type="text"
                            id="manufacturer"
                            required={true}
                        />
                        </Col>

                    </Row>
                    <br/>
                    <Row>

                        <Col lg={4}>
                            Deployment Date : <Form.Control
                            type="text"
                            id="deploymentDate"
                            required={true}
                        />
                        </Col>
                        <Col lg={4}>
                            Power : <Form.Control
                            type="text"
                            id="power"
                            required={true}
                        />
                        </Col>
                        <Col lg={4}>


                        </Col>

                    </Row>






                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseAddModal}>
                        Close
                    </Button>
                    <Button variant="success" type={"submit"}>
                        Add
                    </Button>
                </Modal.Footer>
            </Form>

        </Modal>





    </Container>
}




export default Camera;
