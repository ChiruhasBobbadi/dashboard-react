
import Login from "./components/Login/Login/login";
import Home from "./components/home"
import { Route, Routes,BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import DeviceManagement from "./components/DeviceManagement/DeviceManagement";
import ControlConfigure from "./components/ControlConfigure/ControlConfigure";
import Billing from "./components/Billing/Billing";
import Invoice from "./components/Billing/Invoice";
import React from "react";
import Monitor from "./components/Monitor/Monitor";




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
                                    <Route path='/monitor' element={<Monitor />}></Route>

                                  <Route path='/billing' element={<Billing/>}></Route>

                                  <Route path="/invoice" element={<Invoice />}></Route>






                              </Routes>
                          </Router>









      </>


  );
}

export default App;
