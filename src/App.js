
import "./App.css";
import {BrowserRouter as Router,Routes,Link,Route, Navigate, useNavigate} from 'react-router-dom'
import Home from "./Containers/User/pages/Home";
import Package from "./Containers/User/pages/Package";
import Vehicle from "./Containers/User/pages/Vehicle";
import About from "./Containers/User/pages/About";
import Contact from "./Containers/User/pages/Contact";
import Place from "./Containers/User/pages/Place";
import Login from "./Containers/User/components/Login/Login";

function App() {
  const token = JSON.parse(localStorage.getItem("token"))
  console.log(token);
  const navigate = useNavigate()
  // const history = useHist()
  // if(!token){
  //   navigate("/login")
  //   // history.push("/login")
  // }
  console.log(token);
  return <div className="App">
    <Router>
    {token?
      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/packages" element={<Package/>}/>
        <Route path="/vehicles" element={<Vehicle/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Places" element={<Place/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>:<Routes>
          {/* {navigate("/login")} */}
          <Route path="/login" element={<Login/>}/>

      </Routes>}
    </Router>
  </div>;
}

export default App;
