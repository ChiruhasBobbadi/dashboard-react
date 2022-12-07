import React from "react";

import {Nav} from "react-bootstrap";
import {IoHome} from 'react-icons/io5'
import {AiOutlineAppstoreAdd,AiFillSetting} from 'react-icons/ai'
import {RiBillLine} from 'react-icons/ri'

import {GoGraph} from 'react-icons/go'
const LeftMenuAdmin = ()=> {

        return <>
                <Nav  defaultActiveKey="/viewAllUsers" className="flex-column" bg="dark" variant="dark" style={{backgroundColor:'#343A40',height:'100vh',display:'flex'}}>
                        <Nav.Link href='/viewAllUsers' style={{color:'#fff',fontSize:'20px',marginTop:'10%'}}> View All Users</Nav.Link>
                        <Nav.Link href="/addUser" style={{color:'#fff',fontSize:'20px',marginTop:'10%'}}>  Add User</Nav.Link>
                        <Nav.Link href="/viewRequests" style={{color:'#fff',fontSize:'20px',marginTop:'10%'}}> View Service Requests</Nav.Link>
                        <Nav.Link href='/manageUsers' style={{color:'#fff',fontSize:'20px',marginTop:'10%'}}> Manage Users</Nav.Link>


                      
                </Nav>
        </>
}

export default LeftMenuAdmin;
