import {Modal, Table} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import {useState} from "react";
import axios from "axios";
import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import DeviceManagement from "../DeviceManagement";
import WaterMeterRow from "./WaterMeterRow";
import Form from "react-bootstrap/Form";



const WaterMeter=()=>{

    const [data, setData] = useState([]);


    const [showAddModal, setShowAddModal] = useState(false);

    const handleCloseAddModal = () => setShowAddModal(false);
    const handleShowAddModal = () => setShowAddModal(true)


    React.useEffect( () => {

        const call = async ()=>{
            const id = sessionStorage.getItem("userId");
            console.log(id);
            const WaterMeterData = await axios.post('http://ec2-204-236-188-241.us-west-1.compute.amazonaws.com:4000/allDevices',{
                type:'water_meter',
                data:{
                    id:id
                }
            });
            console.log(WaterMeterData.data.data);
            setData([...WaterMeterData.data.data]);
        }

        call();
    }, []);



    // todo
    const deleteDevice = async(deviceData)=>{

        // deleting


        await axios.post('http://ec2-204-236-188-241.us-west-1.compute.amazonaws.com:4000/deleteDevice',{
            type:'water_meter',
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
        //todo change USerId
        let d = event.target;
        const data =
            {
                "type": "water_meter",
                "data": {
                    "device_name":d.deviceName.value,
                    "userId":userId,
                    "model" : d.model.value,
                    "installation_date":d.installationDate.value,
                    "id":d.deviceId.value,
                    "item_weight":d.item_weight.value,
                    "location":d.location.value,
                    "deployment_date":d.deploymentDate.value,
                    "manufacturer":d.manufacturer.value,
                    "power":d.power.value,
                    "batteries_included": d.batteries_included.value,
                    "battery_cell_type":d.battery_cell_type.value,
                    "metric":d.metric.value
                }


            }



        await axios.post('http://ec2-204-236-188-241.us-west-1.compute.amazonaws.com:4000/addDevice',data)
        const WaterMeterData = await axios.post('http://ec2-204-236-188-241.us-west-1.compute.amazonaws.com:4000/allDevices',{
            type:'water_meter',
            data:{
                id:userId
            }
        });
        setData([...WaterMeterData.data.data]);

        handleCloseAddModal();

    }






    const update = async()=>{

        const call = async ()=>{
            const id = sessionStorage.getItem("userId");
            //console.log(id);
            const WaterMeterData = await axios.post('http://ec2-204-236-188-241.us-west-1.compute.amazonaws.com:4000/allDevices',{
                type:'water_meter',
                data:{
                    id:id
                }
            });
            console.log(WaterMeterData.data.data);
            setData([...WaterMeterData.data.data]);
        }

        call()

    }



    return <Container style={{marginTop:"5%"}}>

        <Row>
            <Col lg={10}>

            </Col>
            <Col lg={2}>
                <Button variant="success" onClick={handleShowAddModal} style={{justifySelf:'right'}}>Add WaterMeter</Button>
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

                <WaterMeterRow data={d} key={d.id} onDeleteHandler={deleteDevice} onUpdateHandler={update} />
            )}

            </tbody>
        </Table>




        <Modal  show={showAddModal} onHide={handleCloseAddModal}  size="xl">
            <Form onSubmit={onAddClickHandler}>
                <Modal.Header >
                    <Modal.Title>View WaterMeter Information</Modal.Title>
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
                            item_weight : <Form.Control
                            type="text"
                            id="item_weight"
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
                            battery_cell_type :
                            <Form.Control
                                type="text"
                                id="battery_cell_type"
                                required={true}
                            />
                        </Col>
                        <Col lg={4}>
                            batteries_included : <Form.Control
                            type="text"
                            id="batteries_included"
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
                            Metric (gallons per second) : <Form.Control
                            type="text"
                            id="metric"
                            required={true}
                        />

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




export default WaterMeter;
