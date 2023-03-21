import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Blog from "./components/pages/Blog";
import Participate from "./components/pages/Participate";
import Auth from "./components/pages/Auth";
import Survey from "./components/Survey";
import Login from "./components/pages/Login";
import Dashboard from "./components/Dashboard";
import Preferences from "./components/Preferences";

function Content() {
  return (
  <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/participate" element={<Participate />} />
      <Route path="/survey" element={<Survey />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/Preferences" element={<Preferences />} />
    </Routes>
  </div>
);
  }

  export default Content;