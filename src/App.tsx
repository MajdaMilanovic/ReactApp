import React, {FC} from "react";
import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { Registration } from "./Components/Registration";
import { Login } from "./Components/Login";
import "./App.css"
import { HomePage } from "./Components/HomePage";
import { WelcomePage } from "./Components/WelcomePage";

export const App: React.FC = () => {

  return ( 
  <Routes>
    <Route path="/" element= {<HomePage />}></Route>
     <Route path="/register" element= {<Registration />}></Route>
      <Route path="/login" element= {<Login />}></Route>
       <Route path="/welcome" element= {<WelcomePage />}></Route>
        <Route path="+" element= {<Navigate to="/" />}></Route>
  </Routes>
  );
};
