import Container from "react-bootstrap/Container";
import {Nav, Navbar, Table} from "react-bootstrap";
import React, {useState} from "react";
import axios from "axios";
import ControlConfigureRow from "./ControlConfigureRow";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import fan from "../DeviceManagement/Fan/Fan";


const ControlConfigure = ()=> {


    // const val = [{
    //     type:'fan',
    //     data:{
    //         id:1,
    //         checked:true,
    //         name:'chiruhas'
    //     }
    //
    // },{
    //     type:'fan',
    //     data:{
    //         id:2,
    //         checked:false,
    //         name:'!chiruhas'
    //     }
    // }
    // ]
    //
    //
    // ;



    const val=[];

    const [data,setData] = useState(val);
    const [device,setDevice] = useState("Fan");


    React.useEffect( () => {

        const call = async ()=>{
            const id = sessionStorage.getItem("userId");

            const fanData = await axios.post('http://localhost:4000/getAllDevices',{
                type:'fan',
                data:{
                    id:1
                }
            });

            console.log(fanData.data.data);

            const t =  fanData.data.data.map(m=>{
                return {
                    'type':'fan',
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

        setData([...t]);
    }

    const clickHandler = async (event)=> {

        event.preventDefault();

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
            case 'Water Meter':
                type='water_meter'
                break;
            case 'Electricity Meter':
                type='electricity_meter'
                break;
            case 'Weather Sensor':
                type='weather_Sensor'
                break;

        }

        setDevice(type);

        await call(type);
    }

    const onUpdateDataHandler= async(d)=>{

        const newChecked = !d.data.status;

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
                id:1
            }
        });



        const t =  newData.data.data.map(m=>{
            return {
                'type':'fan',
                data:{
                    ...m
                }
            }
        })




        setData([...t]);




    }



    return <>

        <Navbar expand="lg" variant="fan" bg="fan" fluid>
            <Container>
                <Nav className="me-auto">
                    <Nav.Link onClick={clickHandler} >Fan</Nav.Link>
                    <Nav.Link  onClick={clickHandler} style={{marginLeft:'20%'}} >Light</Nav.Link>
                    <Nav.Link onClick={clickHandler} style={{marginLeft:'20%'}}>Camera</Nav.Link>
                    <Nav.Link onClick={clickHandler} style={{marginLeft:'20%'}}>Water Meter</Nav.Link>
                    <Nav.Link onClick={clickHandler} style={{marginLeft:'20%'}}>Electricity Meter</Nav.Link>
                    <Nav.Link onClick={clickHandler} style={{marginLeft:'20%'}}>Weather Sensor</Nav.Link>
                </Nav>
            </Container>
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

        </>




}

export default ControlConfigure;




