
import Login from "./components/Login/Login/login";
import Home from "./components/home"
import { Route, Routes,BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./components/Dashboard";




function App() {
  return (
      <Router>

          <Routes>
              <Route exact path='/' element={<Login/>}></Route>
              <Route path='/home' element={<Dashboard/>}> </Route>


          </Routes>
      </Router>




  );
}

export default App;
