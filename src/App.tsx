import React, {FC} from "react";
import {
  Navigate,
  Route,
  Router,
  Routes,
} from "react-router-dom";
import { Registration } from "./Components/Registration";
import { Login } from "./Components/Login";
import "./App.css"
import { HomePage } from "./Components/HomePage";
import { WelcomePage } from "./Components/WelcomePage";
import { Kategorije } from "./Components/Kategorije";
import { ToDoItem } from "./Components/ToDo";
import { ToDoList } from "./Components/ToDo";
import { Nav } from "./Components/Nav";
import { CategoryList } from "./Components/CategoryList";

export const App: React.FC = () => {

  return ( 
   <>    
     <Nav/>
  <Routes>
    <Route path="/" element= {<HomePage />}></Route>
     <Route path="/register" element= {<Registration />}></Route>
      <Route path="/login" element= {<Login />}></Route>
       <Route path="/welcome" element= {<WelcomePage />}></Route>
        <Route path="+" element= {<Navigate to="/" />}></Route>

        <Route path="categories" element = {<Kategorije />}></Route>
        <Route path="item" element={<ToDoItem category="School" />} />
        <Route path="list" element = {<ToDoList />}></Route>
  </Routes>
  </>
  );
};
