import React, { Component } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import AppHeader from "./components/AppHeader";
import FooterSocial from "./components/Footer";
import { Route, Routes, } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Blog from "./components/pages/Blog";
import Participate from "./components/pages/Participate";
import Auth from "./components/pages/Auth";
import Survey from "./components/Survey";



export default class App extends Component {
  
  render() {
    return (
      <div>
        <div className="App">
          <AppHeader />
          <Navigation />
          <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/participate" element={<Participate />} />
            <Route path="/survey" element={<Survey />} /> 
          </Routes>
          <FooterSocial />
        </div>
      </div>
    );
  }
}


