import React from "react";

import {Nav} from "react-bootstrap";
import {IoHome} from 'react-icons/io5'
import {AiOutlineAppstoreAdd,AiFillSetting} from 'react-icons/ai'
import {RiBillLine} from 'react-icons/ri'

import {GoGraph} from 'react-icons/go'
import {useLocation} from "react-router-dom";
const LeftMenuAdmin = ()=> {

        const location = useLocation();
        const path = location.pathname.split('/')[1];

        return <>
                <Nav  defaultActiveKey="/viewAllUsers" className="flex-column"  style={{marginTop:'5%', marginLeft:'5%',  backgroundColor:'#009ACD',height:'100vh',display:'flex'}}>
                        <Nav.Link href='/viewAllUsers' style={{ color : path ==='viewAllUsers'?'#000000':'#fff',fontSize:'20px',marginTop:'10%'}}> View All Users</Nav.Link>
                        <Nav.Link href="/addUser" style={{ color : path ==='addUser'?'#000000':'#fff',fontSize:'20px',marginTop:'10%'}}>  Add User</Nav.Link>
                        <Nav.Link href="/viewRequests" style={{ color : path ==='viewRequests'?'#000000':'#fff',fontSize:'20px',marginTop:'10%'}}> View Service Requests</Nav.Link>
                        <Nav.Link href='/manageUsers' style={{ color : path ==='manageUsers'?'#000000':'#fff',fontSize:'20px',marginTop:'10%'}}> Manage Users</Nav.Link>


                      
                </Nav>
        </>
}

export default LeftMenuAdmin;
