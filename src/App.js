
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











                              </Routes>
                          </Router>









      </>


  );
}

export default App;
