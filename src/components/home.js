
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {Card, Nav, Navbar} from "react-bootstrap";
import Button from "react-bootstrap/Button";




const Home = ()=>{


    return <Container>
        <Row style={{marginTop:'10%'}}>
            <Col lg={4}>

            </Col>
            <Col lg={4} style={{textAlign:'center'}}>
               <h4> Electricity Usage</h4>
            </Col>
            <Col lg={4}>

            </Col>
        </Row>


            <Row style={{marginTop:'5%'}}>

                <Col lg={4} >
                    <Card style={{'box-shadow': '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                        <Card.Body>
                            <Card.Title>Total Usage</Card.Title>

                            <Card.Text>
                               18 KWH
                            </Card.Text>

                        </Card.Body>
                    </Card>

                </Col>
                <Col lg={4} >
                    <Card style={{'box-shadow': '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                        <Card.Body>
                            <Card.Title>Last 24 hour Usage</Card.Title>

                            <Card.Text>
                                18 KWH
                            </Card.Text>

                        </Card.Body>
                    </Card>

                </Col>

                <Col lg={4} >
                    <Card style={{'box-shadow': '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                        <Card.Body>
                            <Card.Title>Last Updated</Card.Title>

                            <Card.Text>
                                {Date().toLocaleString().split('G')[0]}
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
                <h4> Water Usage</h4>
            </Col>
            <Col lg={4}>

            </Col>
        </Row>


        <Row style={{marginTop:'5%'}}>

            <Col lg={4} >
                <Card style={{'box-shadow': '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                    <Card.Body>
                        <Card.Title>Total Usage</Card.Title>

                        <Card.Text>
                            18 KWH
                        </Card.Text>

                    </Card.Body>
                </Card>

            </Col>
            <Col lg={4} >
                <Card style={{'box-shadow': '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                    <Card.Body>
                        <Card.Title>Last 24 hour Usage</Card.Title>

                        <Card.Text>
                            18 KWH
                        </Card.Text>

                    </Card.Body>
                </Card>

            </Col>

            <Col lg={4} >
                <Card style={{'box-shadow': '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                    <Card.Body>
                        <Card.Title>Last Updated</Card.Title>

                        <Card.Text>
                            {Date().toLocaleString().split('G')[0]}
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
