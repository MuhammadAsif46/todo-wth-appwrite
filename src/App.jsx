import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup"
import Login from "./components/Login"
import Profile from "./components/Profile"

function App() {
  return <>
  <Routes>
    <Route path="/" element={<Login/>} />
    <Route path="/signup" element={<Signup/>} />
    <Route path="/profile" element={<Profile/>} />
    <Route path="/" element={<Signup/>} />
  </Routes>
  </>;
}

export default App;
