import React from "react"
import "./Billing.css"
import Routing from "./Invoice";
import {Route, Routes, useNavigate} from "react-router-dom";
import Invoice from "./Invoice";




const Billing=()=> {
    const bildetails = (
        {

        }
    );

    const navigate = useNavigate();

    const goToInvoice = () => {
        // 👇️ navigate to /contacts
        navigate('/invoice');
    };

    return (
        <main>
            <h1 className="main--title">Pending Bills</h1>
            <div className="main--facts" style={ {margin : "right", width : 10, padding : 20 }}>
                <p>Name : {bildetails.Name}</p>
                <p>Bill ID : {bildetails.BillId}</p>
                <p>Due Date : {bildetails.DueDate}</p>
                <p>Water Usage : {bildetails.WaterUsage}</p>
                <p>Electricity Usage : {bildetails.ElectricityUsage}</p>
                <p>Total Amount : {bildetails.TotalAmount}</p>
            </div>
            <button className="button-invoice" type="button" onClick={goToInvoice}>Generate Invoice</button>
            <Routes>
                <Route path="/invoice" element={<Invoice />} />
            </Routes>
        </main>
    )
}
export default Billing;