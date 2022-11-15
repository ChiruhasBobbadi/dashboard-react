import Container from "react-bootstrap/Container";
import electric from './electricity_meter.png';
import Fan from './fan.png';

import React, {useState} from "react";
import axios from "axios";
import MonitorAndTrackRow from "./MonitorAndTrackRow";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
// import fan from "../DeviceManagement/Fan/Fan";
import LeftNavBar from "../LeftNavBar/LeftNavBar";
import NavBarLoggedIn from "../Navbar/NavBarLoggedIn";
import DeviceManagmentNavBar from "../DeviceManagement/DeviceManagmentNavBar";
import {Nav, Navbar} from "react-bootstrap";
import "./MonitorAndTrack.css";
import MonitorAndTrackNavBar from "./MonitorAndTrackNavBar";



const MonitorAndTrack = ()=> {


     // const val = [{
     //     type: 'fan',
     //     data: {
     //         id: 1,
     //         checked: true,
     //         name: 'chiruhas'
     //     }
     //
     // }, {
     //     type: 'fan',
     //     data: {
     //         id: 2,
     //         checked: false,
     //         name: '!chiruhas'
     //     }
     // }];


    const val=[];

    const [data, setData] = useState(val);
    const [device,setDevice] = useState("fan");


    React.useEffect(() => {

        const call = async () => {
            const id = sessionStorage.getItem("userId");
            const fanData = await axios.post('http:localhost:4000/getAllDevices', {
                type: 'fan',
                data: {
                    id: 1
                }
            });
            console.log(fanData.data.data);

            const t = fanData.data.data.map(m => {
                return {
                    'type': 'fan',
                    data: {
                        ...m
                    }
                }
            })
            console.log(t);
            setData([...t]);
        }

        call();
    }, []);


    const call = async (type) => {
        const id = sessionStorage.getItem("userId");

        const deviceData = await axios.post('http:localhost:4000/getAllDevices', {
            type: type,
            data: {
                id: id
            }
        });


        const t = deviceData.data.data.map(m => {
            return {
                type: type,
                data: {
                    ...m
                }
            }
        })

        setData([...t]);
    }

    const clickHandler = async (event) => {

        event.preventDefault();

        let type = '';
        switch (event.target.innerText) {
            case 'Fan':
                type = 'fan';
                break;
            case 'Light':
                type = 'light';
                break;
            case 'Camera':
                type = 'camera';
                break;
            case 'Water Meter':
                type = 'water_meter'
                break;
            case 'Electricity Meter':
                type = 'electricity_meter'
                break;
            case 'Weather Sensor':
                type = 'weather_Sensor'
                break;

        }

        setDevice(type);

        await call(type);
    }

    const onUpdateDataHandler = async (d) => {

        const newChecked = !d.data.status;

        console.log("changing state to " + newChecked + " " + d.data.id);

        console.log(d);
        if (newChecked)
            await axios.post('http:localhost:4000/all', {
                ...d
            })
        else {
            await axios.post('http:localhost:4000/stopDevice', {
                ...d
            })
        }

        const type = d.type;
        const id = sessionStorage.getItem("userId");

        const newData = await axios.post('http:localhost:4000/getAllDevices', {
            type: type,
            data: {
                id: 1
            }
        });


        const t = newData.data.data.map(m => {
            return {
                'type': 'fan',
                data: {
                    ...m
                }
            }
        })

        setData([...t]);
    }

    return <>
        <NavBarLoggedIn/>

             <Row>
                 <Col lg={2}> <LeftNavBar/> </Col>
                 <Col lg={10}>
                     <MonitorAndTrackNavBar/>

                 <Container style={{marginTop:"%"}}>
                     <h2 style={{textAlign:"center"}}>Monitor and Tracking</h2>
                     <h3 style={{textAlign:"center"}}>{device} Devices</h3>
                     <div className="container">
                         <div className="row">
                             <div className="card">
                                 <img src={require(`./${device}.png`) }/>
                                 <p className="card-text">deviceID: {device} 1</p>
                                 <p className="card-text">deviceName: Home {device}</p>
                                 <p className="card-text" style={{color:"lightgreen"}}>deviceStatus: Active</p>
                                 <p className="card-text">deviceUtilization: 30 units </p>
                                 <p className="card-text">devicePower: 50 W</p>
                             </div>
                             <div className="card">
                                 <img src={require(`./${device}.png`) }/>
                                 <p className="card-text">deviceID: {device} 2</p>
                                 <p className="card-text">deviceName: Home {device}</p>
                                 <p className="card-text" style={{color:"red"}}>deviceStatus: Inactive</p>
                                 <p className="card-text">deviceUtilization: 30 units </p>
                                 <p className="card-text">devicePower: 50 W</p>
                             </div>
                             <div className="card">
                                 <img src={require(`./${device}.png`) }/>
                                 <p className="card-text">deviceID: {device} 3</p>
                                 <p className="card-text">deviceName: Office {device}</p>
                                 <p className="card-text" style={{color:"lightgreen"}}>deviceStatus: Active</p>
                                 <p className="card-text">deviceUtilization: 30 units </p>
                                 <p className="card-text">devicePower: 50 W</p>
                             </div>
                             <div className="card">
                                 <img src={require(`./${device}.png`) }/>
                                 <p className="card-text">deviceID: {device} 4</p>
                                 <p className="card-text">deviceName: Office {device}</p>
                                 <p className="card-text" style={{color:"red"}}>deviceStatus: Inactive</p>
                                 <p className="card-text">deviceUtilization: 30 units </p>
                                 <p className="card-text">devicePower: 50 W</p>
                             </div>
                             <div className="card">
                                 <img src={require(`./${device}.png`) }/>
                                 <p className="card-text">deviceID: {device} 5</p>
                                 <p className="card-text">deviceName: Office {device}</p>
                                 <p className="card-text" style={{color:"lightgreen"}}>deviceStatus: Active</p>
                                 <p className="card-text">deviceUtilization: 30 units </p>
                                 <p className="card-text">devicePower: 50 W</p>
                             </div>
                             <div className="card">
                                 <img src={require(`./${device}.png`) }/>
                                 <p className="card-text">deviceID: {device} 6</p>
                                 <p className="card-text">deviceName: Office {device}</p>
                                 <p className="card-text" style={{color:"lightgreen"}}>deviceStatus: Active</p>
                                 <p className="card-text">deviceUtilization: 30 units </p>
                                 <p className="card-text">devicePower: 50 W</p>
                             </div>
                         </div>
                     </div>
                     </Container>
                 </Col>
             </Row>


         </>

}
export default MonitorAndTrack;




