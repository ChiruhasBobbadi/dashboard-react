
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {Card, Nav, Navbar} from "react-bootstrap";
import Button from "react-bootstrap/Button";

import {GiElectric} from 'react-icons/gi'
import {IoWater} from 'react-icons/io5'
import React, {useState} from "react";
import axios from "axios";


const Home = ()=>{


    const [data,setData] = useState({});

    React.useEffect( () => {

        const call = async ()=>{
            const id = sessionStorage.getItem("userId");

            //todo change userId
            const homeData = await axios.post('http://localhost:4000/home',{

                    userId:id

            });
            console.log(homeData);

            setData({...homeData.data});

        }

        call();
    }, []);


    return <Container>
        <Row style={{marginTop:'4%'}}>
            <Col lg={4}>

            </Col>
            <Col lg={4} style={{textAlign:'center'}}>
               <h4> Electricity Usage <GiElectric style={{fontSize:'25px'}}/> </h4>
            </Col>
            <Col lg={4}>

            </Col>
        </Row>


            <Row className='hover-overlay' style={{marginTop:'5%'}}>

                <Col lg={4} >
                    <Card style={{'box-shadow': '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', color:"white",  backgroundColor: "#009ACD" , backgroundSize:"0"}}>
                        <Card.Body>
                            <Card.Title>Total Usage</Card.Title>

                            <Card.Text>
                                {Math.round((data.fanMetrics+data.lightMetrics+data.weatherSensorMetrics+data.cameraMetrics)/1000)} KWH
                            </Card.Text>

                        </Card.Body>
                    </Card>

                </Col>
                <Col lg={4} >
                    <Card style={{'box-shadow': '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' , color:"white",  backgroundColor: "#009ACD" , backgroundSize:"0"}}>
                        <Card.Body>
                            <Card.Title>Last 24 hour Usage</Card.Title>

                            <Card.Text>
                                {Math.round(((data.fanMetrics+data.lightMetrics+data.weatherSensorMetrics+data.cameraMetrics)/1000) * 100) / 100} KWH
                            </Card.Text>

                        </Card.Body>
                    </Card>

                </Col>

                <Col lg={4} >
                    <Card style={{'box-shadow': '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' , color:"white",  backgroundColor: "#009ACD" , backgroundSize:"0" }}>
                        <Card.Body>
                            <Card.Title>Last Updated</Card.Title>

                            <Card.Text>
                                {Date().toLocaleString().split('G')[0]}
                                {/*Mon Nov 14 2022 10:28:05*/}
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Col>

            </Row>


        <Row>

        </Row>




        <Row style={{marginTop:'10%'}}>
            <Col lg={4}>

            </Col>
            <Col lg={4} style={{textAlign:'center'}}>
                <h4> Water Usage <IoWater style={{fontSize:'25px'}}/></h4>
            </Col>
            <Col lg={4}>

            </Col>
        </Row>


        <Row style={{marginTop:'5%'}}>

            <Col lg={4} >
                <Card style={{'box-shadow': '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' , color:"white",  backgroundColor: "#009ACD" , backgroundSize:"0"}}>
                    <Card.Body>
                        <Card.Title>Total Usage</Card.Title>

                        <Card.Text>
                            {Math.round((data.waterMeterMetrics) * 100) / 100} Gallons
                        </Card.Text>

                    </Card.Body>
                </Card>

            </Col>
            <Col lg={4} >
                <Card style={{'box-shadow': '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' , color:"white",  backgroundColor: "#009ACD" , backgroundSize:"0"}}>
                    <Card.Body>
                        <Card.Title>Last 24 hour Usage</Card.Title>

                        <Card.Text>
                            {Math.round((data.waterMeterMetrics) * 100) / 100} Gallons
                        </Card.Text>

                    </Card.Body>
                </Card>

            </Col>

            <Col lg={4} >
                <Card style={{'box-shadow': '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' , color:"white",  backgroundColor: "#009ACD" , backgroundSize:"0" }}>
                    <Card.Body>
                        <Card.Title>Last Updated</Card.Title>

                        <Card.Text>
                            {Date().toLocaleString().split('G')[0]}
                            {/*Mon Nov 14 2022 10:28:05*/}
                        </Card.Text>

                    </Card.Body>
                </Card>
            </Col>

        </Row>


        <Row>

        </Row>

    </Container>





}


export default Home;
