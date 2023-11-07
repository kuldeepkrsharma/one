import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import json from "./component/jsondata.json";
import Overview from "./component/Overview";
import Timesales from "./component/Timesales";

function App() {
  return (
    
    <>
    <h1 className="text-center my-3">Dashboard</h1>
    <Overview />
    <Header />
    <Timesales />

    
    </>
  );
}

export default App;
