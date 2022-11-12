
import Login from "./components/Login/Login/login";
import { Route, Routes,BrowserRouter as Router } from "react-router-dom";




function App() {
  return (
      <Router>
          <Routes>
              <Route exact path='/' element={<Login/>}></Route>

              <Route exact path='/' element={<Login/>}></Route>
          </Routes>
      </Router>




  );
}

export default App;
