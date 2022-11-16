import Container from "react-bootstrap/Container";
import electric from "./electricity_meter.png";
import React from "react";
import {Card, Col, Row} from "antd";

const DummyMonitorAndTracking = ()=>{
return <>
        <meta name="viewport" content=" initial-scale=1" />
        <style
            dangerouslySetInnerHTML={{
                __html:
                    "\n        * {\n            box-sizing: border-box;\n        }\n\n        body {\n            font-family: Arial, Helvetica, sans-serif;\n        }\n\n        .row{\n            align-items: stretch;\n            display: flex;\n            flex-direction: row;\n            flex-wrap: nowrap;\n            overflow-x: auto;\n            overflow-y: hidden;\n        }\n        .card {\n            max-width: 20%;\n            border: 1px solid black;\n            padding: 0.75rem;\n            margin: 1em;\n            flex: 0 0 33.333%;\n        }\n        .card > img {\n            margin-bottom: .75rem;\n            width: 30%;\n        }\n        .card-text {\n            font-size: 85%;\n        }\n    "
            }}
        />
    <h2 style={{textAlign:"center"}}>Monitor and Tracking</h2>
    <h3 style={{textAlign:"center"}}>Fan Devices</h3>
    <div className="container">
        <div className="row">
            <div className="card">
                <img src={electric} />
                <p className="card-text">deviceID:"var"</p>
                <p className="card-text">deviceName:"var"</p>
                <p className="card-text">deviceStatus:"var"</p>
                <p className="card-text">deviceUtilization:"var"</p>
                <p className="card-text">devicePower:"var"</p>
            </div>
        </div>
    </div>
    </>

    {/*<Card style={{ width: '18rem' }}>*/}
    {/*    <Row className='no-gutters'>*/}
    {/*        <Col md={5} lg={5}  >*/}
    {/*            <Card.Img variant="top" src="holder.js/100px180" />*/}
    {/*        </Col>*/}
    {/*        <Col>*/}
    {/*            <Card.Body>*/}
    {/*                <Card.Title>Card Title</Card.Title>*/}
    {/*                <Card.Text>*/}
    {/*                    Some quick example text to build on the card title and make up the bulk of*/}
    {/*                    the card's content.*/}
    {/*                </Card.Text>*/}
    {/*            </Card.Body>*/}
    {/*        </Col>*/}
    {/*    </Row>*/}
    {/*</Card>*/}
// </>
}



export default DummyMonitorAndTracking;