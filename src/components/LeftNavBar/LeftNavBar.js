import React from "react";

import {Nav} from "react-bootstrap";
import {IoHome} from 'react-icons/io5'
import {AiOutlineAppstoreAdd,AiFillSetting} from 'react-icons/ai'
import {RiBillLine} from 'react-icons/ri'

import {GoGraph} from 'react-icons/go'
const LeftMenu = ()=> {

        return <>
                <Nav  defaultActiveKey="/home" className="flex-column" bg="dark" variant="dark" style={{backgroundColor:'#343A40',height:'100vh',display:'flex'}}>
                        <Nav.Link href="/home" style={{color:'#fff',fontSize:'20px',marginTop:'10%'}}> <IoHome style={{fontSize:'20px'}} />{' '} Home</Nav.Link>
                        <Nav.Link href="/deviceManagement" style={{color:'#fff',fontSize:'20px',marginTop:'10%'}}><AiOutlineAppstoreAdd style={{fontSize:'20px'}}/> Device Management</Nav.Link>
                        <Nav.Link href='/monitor' style={{color:'#fff',fontSize:'20px',marginTop:'10%'}}> <GoGraph style={{fontSize:'20px'}}/> Monitor & tracking</Nav.Link>
                        <Nav.Link href='/controlConfigure' style={{color:'#fff',fontSize:'20px',marginTop:'10%'}}> <AiFillSetting style={{fontSize:'20px'}}/> Control & Configure</Nav.Link>
                        <Nav.Link href='/service' style={{color:'#fff',fontSize:'20px',marginTop:'10%'}}> <AiFillSetting style={{fontSize:'20px'}}/>Service Request</Nav.Link>
                        <Nav.Link href='/billing' style={{color:'#fff',fontSize:'20px',marginTop:'10%'}}><RiBillLine style={{fontSize:'20px'}}/> Billing</Nav.Link>
                      
                </Nav>
        </>
}

export default LeftMenu;
