import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./NavBar.js";
import Sidebar from "./SideBar.js";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import ChartDemo from "./ChartDemo";
import Settings from "./Settings";
import Profile from "./Profile.js";
function App() {
  return (
    <div className="App pt-20">
      <BrowserRouter>
        <Navbar />
        <div className="inside container pt-20">
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/chartdemo" component={ChartDemo} />
          <Route path="/settings" component={Settings} />
          <Route path="/profile" component={Profile} />
        </div>

        <Sidebar />
      </BrowserRouter>
    </div>
  );
}

export default App;
