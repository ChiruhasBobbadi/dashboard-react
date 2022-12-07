import React, {useState} from "react";
import { render } from "react-dom";

import { Col, Divider, Row, Table } from "antd";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import NavBarLoggedIn from "../Navbar/NavBarLoggedIn";



const Invoice=()=> {


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
            {/*style={{marginLeft:'20%' , color : path ==='fan'?'#009ACD':'inherit'} }*/}
            {/*, background :'black',color:'white' */}
            <div style={{ padding: 20  }}>
                <Row>
                    <Col>
                        <h1 >Invoice</h1>
                    </Col>
                </Row>

                <Row gutter={24} style={{ marginTop: 32 }}>
                    <Col span={8}>
                        <h4>{data.name}</h4>
                        <div>San Jose State University,</div>
                        <div>1 washington square</div>
                        <div>San Jose,</div>
                        <div>California - 95112</div>
                    </Col>
                    <Col span={8} offset={8}>
                        <table>
                            <tr>
                                <th>Invoice # :</th>
                                <td>1</td>
                            </tr>
                            <tr>
                                <th>Invoice Date :</th>
                                <td>11-15-2022</td>
                            </tr>
                            <tr>
                                <th>Due Date :</th>
                                <td>11-23-2022</td>
                            </tr>
                        </table>
                    </Col>
                </Row>

                <Row style={{ marginTop: 48 }}>
                    <div>
                        Bill To: <strong>{data.name}</strong>
                    </div>
                    <div>756 The alameda,</div>
                    <div>San Jose - 95126</div>
                </Row>

                <br/>
                <br/>
                <table>

                <thead>
                <tr>
                    <th>
                        Items
                    </th>
                    <th>
                        Utilization
                    </th>
                    <th>
                        Rate per item
                    </th>
                    <th>
                        Price
                    </th>



                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        Water Usage
                    </td>
                    <td>
                        {Math.round(data.waterUtilization * 100) / 100} Gallons

                    </td>
                    <td>
                        {data.water_metric} $

                    </td>
                    <td>
                        {Math.round(data.waterCost * 100) / 100} $
                    </td>
                </tr>

                <tr>
                    <td>
                        Power Usage
                    </td>
                    <td>

                        {Math.round(data.electricityUtilization * 100) / 100} KWH
                    </td>
                    <td>

                        {Math.round(data.electric_metric * 100) / 100} $
                    </td>
                    <td>

                        {Math.round(data.electricityCost * 100) / 100} $

                    </td>
                </tr>


                <tr>
                    <td>
                        -----------------------
                    </td>
                    <td>
                        -----------------------

                    </td>
                    <td>
                        -----------------------

                    </td>
                    <td>
                        -----------------------
                    </td>
                </tr>
                <tr>
                    <td>

                    </td>
                    <td>


                    </td>
                    <td>


                    </td>
                    <td>
                        NetTotal: {Math.round((data.electricityCost+data.waterCost) * 100) / 100} $
                    </td>
                </tr>
                </tbody>
                </table>







            </div>

        </>

    );
}

export default Invoice;
