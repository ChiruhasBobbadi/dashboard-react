import React from "react";

import {Nav} from "react-bootstrap";
import {IoHome} from 'react-icons/io5'
import {AiOutlineAppstoreAdd,AiFillSetting} from 'react-icons/ai'
import {RiBillLine} from 'react-icons/ri'
import {useLocation} from "react-router-dom";

import {GoGraph} from 'react-icons/go'
const LeftMenu = ()=> {

        const location = useLocation();
        const path = location.pathname.split('/')[1];

        return <>
                <Nav  defaultActiveKey="/home" className="flex-column"  style={{marginTop:'5%', marginLeft:'5%',  backgroundColor:'#009ACD',height:'100vh',display:'flex'}}>
                        <Nav.Link href="/home" style={{ color : path ==='home'?'#000000':'#fff',fontSize:'20px',marginTop:'10%'}}> <IoHome style={{fontSize:'25px'}} />{' '} Home</Nav.Link>
                        <Nav.Link href="/deviceManagement" style={{color : path ==='deviceManagement'?'#000000':'#fff',fontSize:'20px',marginTop:'10%'}}><AiOutlineAppstoreAdd style={{fontSize:'25px'}}/> Device Management</Nav.Link>
                        <Nav.Link href='/monitor' style={{color : path ==='monitor'?'#000000':'#fff',fontSize:'20px',marginTop:'10%'}}> <GoGraph style={{fontSize:'25px'}}/> Monitor & tracking</Nav.Link>
                        <Nav.Link href='/controlConfigure' style={{color : path ==='controlConfigure'?'#000000':'#fff',fontSize:'20px',marginTop:'10%'}}> <AiFillSetting style={{fontSize:'25px'}}/> Control & Configure</Nav.Link>
                        <Nav.Link href='/billing' style={{color : path ==='billing'?'#000000':'#fff',fontSize:'20px',marginTop:'10%'}}><RiBillLine style={{fontSize:'25px'}}/> Billing</Nav.Link>
                        <p> ----------------------------------------------</p>
                        <Nav.Link href='/service' style={{color : path ==='service'?'#000000':'#fff',fontSize:'20px',marginTop:'10%'}}> <AiFillSetting style={{fontSize:'20px'}}/>Service Request</Nav.Link>

                </Nav>
        </>
}

export default LeftMenu;
