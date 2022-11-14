
import Login from "./components/Login/Login/login";
import { Route, Routes,BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./components/Home/Home";




function App() {
  return (
      <Router>
          <Routes>
              <Route exact path='/' element={<Dashboard />}></Route>

              {/*<Route exact path='/' element={<Login/>}></Route>*/}

          </Routes>
      </Router>

    // <h1>Hello</h1>




  );
}

export default App;
