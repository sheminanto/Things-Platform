import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./NavBar.js";
import Sidebar from "./SideBar.js";
// import Home from "./Home";
// import About from "./About";
import Contact from "./Contact";
import ChartDemo from "./ChartDemo";
import Settings from "./Settings";
import Profile from "./Profile.js";
import Cards from "./Cards";
import Overview from "./Overview";
import Error404 from "./Error404";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));

function App() {
  return (
    <div className="App pt-20">
      <BrowserRouter basename={`${process.env.PUBLIC_URL}/`}>
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
          <div className="inside container pt-20">
            <Switch>
              <Route exact path="/home" component={Home} />
              <Route path="/about" component={About} />
              <Route exact path="/" component={Overview} />
              <Route path="/contact" component={Contact} />
              <Route path="/chartdemo" component={ChartDemo} />
              <Route path="/settings" component={Settings} />
              <Route path="/profile" component={Profile} />
              <Route path="/cards" component={Cards} />
              <Route component={Error404} />
            </Switch>
          </div>
          <Sidebar />
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
