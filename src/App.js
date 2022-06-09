import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import TodoList from "./components/TodoList";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import {Contact} from "./pages/Contact";
import Header from "./components/Header/Header";
 

export function App() {
  return (
    <Router>
      <div className="App">
        <Navigation/>
          <Routes>
          <Route path="/"element={"Home"}/>
         <Route path="/"element={"About"}/>
         </Routes>
      
         
        <h1
          className="max-w-xl m-auto 
      bg-green-300
      text-blue-800 
      text-2xl mt-20"
        >
          <TodoList />
        </h1>
       
      </div>
      </Router>
    
  );
};

export default App;
