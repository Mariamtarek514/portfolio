import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";



function App() {
    return <div className="App">
    <Navbar/>
 
    <Home/>
    <Routes>
        <Route path="/" to={<Home/>} />
    <Route path="/portfolio" exact to={<Portfolio/>} />
    </Routes>
    </div>;
}

export default App;
