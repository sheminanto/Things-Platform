import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import Dashboard from "./components/dashboard/Dashboard";
import DeviceDetails from "./components/Devices/DeviceDetails";
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
import AddDevice from "./components/Devices/AddDevice";
import PageNotFound from "./components/layout/PageNotFound";
import Profile from './components/dashboard/Profile'
import NetError from "./components/layout/NetError";
import Welcome from './components/layout/Welcome'
import Devices from './components/Devices/Devices'
console.log(process.env);
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/home" component={Welcome} />
            <Route exact path="/" component={Dashboard} />
            <Route path="/device/:id" component={DeviceDetails} />
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} />
            <Route path="/add-device" component={AddDevice} />
            <Route path="/profile" component={Profile} />
            <Route path="/server-error" component={NetError} />
            <Route path="/devices" component={Devices} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );


  }
}

export default App;
