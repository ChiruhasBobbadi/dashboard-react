
import Login from "./components/Login/Login/login";
import Home from "./components/home"
import { Route, Routes,BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Form from "react-bootstrap/Form";
import DeviceManagement from "./components/DeviceManagement/DeviceManagement";
import {Switch} from "antd";
import NavBarLoggedIn from "./components/Navbar/NavBarLoggedIn";
import LeftNavBar from "./components/LeftNavBar/LeftNavBar";
import Col from "react-bootstrap/Col";
import {Nav, Navbar} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ControlConfigure from "./components/ControlConfigure/ControlConfigure";
import Billing from "./components/Billing/Billing";
import Invoice from "./components/Billing/Invoice";
import React from "react";
import Monitor from "./components/Monitor/Monitor";
import ServiceRequest from "./components/serviceRequest/ServiceRequest";
import AddUser from "./components/admin/AddUser";
import ViewAllUsers from "./components/admin/ViewAllUsers";
import ManageUsers from "./components/admin/ManageUsers";
import ViewServiceRequests from "./components/admin/ViewServiceRequests";




function App() {
  return (
      <>




                          <Router>
                              <Routes>

                                  <Route exact path='/' element={<Login/>}> </Route>

                                      <Route path='/home' element={<Dashboard/>}> </Route>
                                  <Route path='/deviceManagement' element={<DeviceManagement/>}></Route>
                                  <Route path='/deviceManagement/fan' element={<DeviceManagement/>}></Route>
                                  <Route path='/deviceManagement/light' element={<DeviceManagement/>}></Route>
                                  <Route path='/deviceManagement/camera' element={<DeviceManagement/>}></Route>
                                  <Route path='/deviceManagement/water' element={<DeviceManagement/>}></Route>
                                  <Route path='/deviceManagement/electricity' element={<DeviceManagement/>}></Route>
                                  <Route path='/deviceManagement/weather' element={<DeviceManagement/>}></Route>

                                  <Route path='/controlConfigure' element={<ControlConfigure/>}></Route>
                                    <Route path='/monitor' element={<Monitor/>}></Route>

                                  <Route path='/service' element={<ServiceRequest/>}></Route>
                                  <Route path='/billing' element={<Billing/>}></Route>

                                  <Route path="/invoice" element={<Invoice />}></Route>

                                  <Route path='/addUser' element={<AddUser/>}></Route>
                                  <Route path='/viewAllUsers' element={<ViewAllUsers/>}> </Route>

                                  <Route path='/ManageUsers' element={<ManageUsers/>}> </Route>

                                  <Route path='/viewRequests' element={<ViewServiceRequests/>}> </Route>








                              </Routes>
                          </Router>









      </>


  );
}

export default App;
