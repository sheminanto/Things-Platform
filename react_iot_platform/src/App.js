import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import Page5 from "./components/Page5";
import Profile from "./components/Profile.js";
import Settings from "./components/Settings.js";
import Home from "./components/Home";
import Welcome from "./components/Welcome";

function App() {
  const isLoggedin = false
  if(isLoggedin){
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        {/* <Welcome /> */}
        <SideBar />
        <Route exact path="/" component={Home} />
        <Route path="/page1" component={Page1} />
        <Route path="/page2" component={Page2} />
        <Route path="/page3" component={Page3} />
        <Route path="/page4" component={Page4} />
        <Route path="/page5" component={Page5} />
        <Route path="/profile" component={Profile} />
        <Route path="/settings" component={Settings} />
      </BrowserRouter>
    </div>
  );}
  else{  return (
   <Welcome />
  );}
}

export default App;
