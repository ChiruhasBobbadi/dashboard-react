import React, {useState} from "react"
import "./Billing.css"
import Routing from "./Invoice";
import {Route, Routes, useNavigate} from "react-router-dom";
import Invoice from "./Invoice";
import NavBarLoggedIn from "../Navbar/NavBarLoggedIn";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
 import LeftNavBar from "../LeftNavBar/LeftNavBar";
import Home from "../home";
import axios from "axios";




const Billing=()=> {


    const [data,setData] = useState({});


    const navigate = useNavigate();

    const goToInvoice = () => {
        // 👇️ navigate to /contacts
        navigate('/invoice');
    };

    React.useEffect( () => {

        const call = async ()=>{
            const id = sessionStorage.getItem("userId");
            console.log(id);
            const bill = await axios.post('http://localhost:4000/bill',{
                data:{
                    userId:id
                }
            });
            console.log(bill);

            setData({...bill.data})

        }

        call();
    }, []);

    return (
<>
    <NavBarLoggedIn/>
    <Row>
        <Col lg={2}> <LeftNavBar/> </Col>
        <Col lg={5}>
            <main>
                <h1 className="main--title">Pending Bills</h1>
                <div className="main--facts" >
                    <p>Name : {data.name}</p>
                    <p>Bill ID : 110ec58a-a0f2-4ac4-8393-c866d813b8d1</p>
                    <p>Due Date : 11-24-2022</p>
                    <p>Water Usage : {Math.round((data.waterUtilization) * 100) / 100} Gallons</p>
                    <p>Electricity Usage : {Math.round((data.electricityUtilization) * 100) / 100} KWH</p>
                    <p>Total Amount : {Math.round((data.electricityCost+data.waterCost) * 100) / 100} $</p>
                </div>
                <button className="button-invoice" type="button" onClick={goToInvoice} style={{marginLeft:'40%'}}>Generate Invoice</button>
                <Routes>
                    <Route path="/invoice" element={<Invoice />} />
                </Routes>
            </main>
        </Col>
    </Row>
</>


    )
}
export default Billing;
