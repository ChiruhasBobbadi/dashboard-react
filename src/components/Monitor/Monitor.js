import Container from "react-bootstrap/Container";

import Fan from './fan.png';

import React, {useState} from "react";
import axios from "axios";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import LeftNavBar from "../LeftNavBar/LeftNavBar";
import NavBarLoggedIn from "../Navbar/NavBarLoggedIn";

import {Nav, Navbar} from "react-bootstrap";
import "./MonitorAndTrack.css";

import {FaCamera, FaFan, FaLightbulb} from 'react-icons/fa'

import {TbTemperature} from 'react-icons/tb';



const Monitor = ()=> {


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

            console.log(t);
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

    const onClickHandler = async (event)=> {

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
            case 'Electricity':
                type='electric_meter'
                break;
            case 'Weather_Sensor':
                type='weather_sensor'
                break;

        }
       console.log(type)



        await call(type);
    }


    let el='';
    if(device==='fan'){
        el =  data.map(d=>{
            console.log(d);
            return <div className="card">
                <FaFan style={{fontSize:'60px', verticalAlign:"middle"}} />
                <p className="card-text"><b>Device Id</b> :{d.data.id} </p>
                <p className="card-text"><b>deviceName:</b> {d.data.name}</p>
                <p className="card-text" style={{color:"lightgreen"}}><b>deviceStatus:</b> {d.data.status ?"Running":"Failing"}</p>
                <p className="card-text"><b>devicePower:</b> {d.data.power} Watts</p>
                <p className="card-text"><b>Voltage:</b> {Math.floor(Math.random() * (15 - 5) + 5)} V</p>
                <p className="card-text"><b>Current:</b> {Math.floor(Math.random() * (10 - 3) + 3)} A</p>
                <p className="card-text"><b>Fan Speed: </b>: {Math.floor(Math.random() * (40 - 20) + 20)} </p>
                <p className="card-text"><b>Speed Number: </b>{Math.floor(Math.random() * (5 - 1) + 1)} </p>

            </div>
        })
    }else if (device==='light'){
        el =  data.map(d=>{

            return <div className="card">
                <FaLightbulb style={{fontSize:'60px', verticalAlign:"middle"}} />
                <p className="card-text"><b>deviceID: </b>{d.data.id} </p>
                <p className="card-text"><b>deviceName:</b> {d.data.name}</p>
                <p className="card-text" style={{color: d.data.status?"lightgreen":"red"}}> <b>deviceStatus:</b> {d.data.status ?"Running":"Failing"}</p>
                <p className="card-text"><b>devicePower:</b> {d.data.power} Watts</p>
                <p className="card-text"><b>Luminous Efficacy:</b> {Math.floor(Math.random() * (70 - 40) + 40)} %</p>
                <p className="card-text"><b>Luminous Flux:</b> {Math.floor(Math.random() * (8 - 4) + 4)} </p>
                <p className="card-text"><b>Luminous Intensity:</b> {Math.floor(Math.random() * (40 - 20) + 20)} CD</p>
                <p className="card-text"><b>Voltage:</b> {Math.floor(Math.random() * (15 - 5) + 5)} V</p>
                <p className="card-text"><b>Current:</b> {Math.floor(Math.random() * (10 - 3) + 3)} A</p>
            </div>
        })
    }else if(device==='weather_sensor'){
        el =  data.map(d=>{

            return <div className="card">
                <TbTemperature style={{fontSize:'60px', verticalAlign:"middle"}} />
                <p className="card-text"><b>deviceID:</b> {d.data.id} </p>
                <p className="card-text"><b>deviceName:</b> {d.data.name}</p>
                <p className="card-text" style={{color: d.data.status?"lightgreen":"red"}}><b>deviceStatus:</b> {d.data.status ?"Running":"Failing"}</p>
                <p className="card-text"><b>devicePower:</b> {d.data.power} Watts</p>
                <p className="card-text"><b>Temperature</b>: {Math.floor(Math.random() * (100 - 30) + 30)} F</p>
                <p className="card-text"><b>Relative Humidity</b>: {Math.floor(Math.random() * (90 - 30) + 30)} %</p>
                <p className="card-text"><b>Wind Speed:</b> {Math.floor(Math.random() * (150 - 100) + 100)} mph</p>
                <p className="card-text"><b>Air Pressure</b>: {Math.floor(Math.random() * (150 - 100) + 100)} KPA</p>
                <p className="card-text"><b>Precipitation</b> : {Math.floor(Math.random() * (0.5 - 0.3) + 0.3)} mm</p>
                <p className="card-text"><b>Voltage:</b> {Math.floor(Math.random() * (15 - 5) + 5)} V</p>
                <p className="card-text"><b>Current:</b> {Math.floor(Math.random() * (10 - 3) + 3)} A</p>
            </div>
        })
    }else if(device==='camera'){
        el =  data.map(d=>{

            return <div className="card">
                <FaCamera style={{fontSize:'60px', verticalAlign:"middle"}} />
                <p className="card-text"><b>deviceID:</b> {d.data.id} </p>
                <p className="card-text"><b>deviceName:</b> {d.data.name}</p>
                <p className="card-text" style={{color: d.data.status?"lightgreen":"red"}}><b>deviceStatus:</b> {d.data.status ?"Running":"Failing"}</p>
                <p className="card-text"><b>devicePower:</b> {d.data.power} Watts</p>
                <p className="card-text"><b>Voltage:</b> {Math.floor(Math.random() * (15 - 5) + 5)} V</p>
                <p className="card-text"><b>Current:</b> {Math.floor(Math.random() * (10 - 3) + 3)} A</p>
            </div>
        })
    }else {
        el =  data.map(d=>{

            return <div className="card">
                <p className="card-text"><b>deviceID:</b> {d.data.id} </p>
                <p className="card-text"><b>deviceName:</b> {d.data.name}</p>
                <p className="card-text" style={{color: d.data.status?"lightgreen":"red"}}><b>deviceStatus:</b> {d.data.status ?"Running":"Failing"}</p>
                <p className="card-text"><b>devicePower:</b> {d.data.power} Watts</p>
                <p className="card-text"><b>Voltage:</b> {Math.floor(Math.random() * (15 - 5) + 5)} V</p>
                <p className="card-text"><b>Current:</b> {Math.floor(Math.random() * (10 - 3) + 3)} A</p>
            </div>
        })
    }

    return <>
        <NavBarLoggedIn/>

        <Row>
            <Col lg={2}> <LeftNavBar/> </Col>
            <Col lg={10}>
                <Navbar expand="lg" variant="dark" bg="dark" fluid="true"  style={{color:"white",marginTop:'2%'}}>

                    <Nav>
                        <Nav.Link onClick={onClickHandler} style={{marginLeft:"10%"}}>Fan </Nav.Link>
                        <Nav.Link onClick={onClickHandler} style={{marginLeft:'20%'}} >Light</Nav.Link>
                        <Nav.Link onClick={onClickHandler} style={{marginLeft:'20%'}}>Camera</Nav.Link>
                        <Nav.Link onClick={onClickHandler} style={{marginLeft:'20%'}}>Water_Meter</Nav.Link>
                        <Nav.Link onClick={onClickHandler} style={{marginLeft:'20%'}}>Electricity</Nav.Link>
                        <Nav.Link onClick={onClickHandler} style={{marginLeft:'20%'}}>Weather_Sensor</Nav.Link>
                    </Nav>
                </Navbar>

                <Container style={{marginTop:"%"}}>
                    <h2 style={{textAlign:"center", marginTop:'5%'}}>Monitor and Tracking</h2>
                    <h3 style={{textAlign:"center"}}>{device} Devices</h3>
                    <div className="container">
                        <div className="row" style={{marginTop:'5%'}}>


                            {el}



                        </div>
                    </div>
                </Container>
            </Col>
        </Row>


    </>

}
export default Monitor;
