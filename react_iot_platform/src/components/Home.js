import React from "react";
import "../css/page.css";
import {connect} from 'react-redux';
class Home extends React.Component {
  state = {
   alerts:this.props.alerts,
   devices:this.props.devices
  }
  render(){
    console.log(this.state.devices);
  return (
    <div className="Content container-lg">
      
        <h2 className="mx-3">Overview</h2>
        <div className="alert p-2 bd-highlight bg-danger text-light my-3 mx-3">Alerts !</div>
        {this.state.alerts.length ? <div>{this.state.alerts.map(alert => {
        return(
      
          <div className="alert alert-danger mx-3" role="alert">
            <h4 className="alert-heading">{alert.name}</h4>
            <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
            <hr/>
            <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
            {/* <button type="button" className="btn btn-outline-danger btn-md mt-2" data-dismiss="alert" aria-label="Close">Dismiss</button> */}
          </div>  
          
        );}
          
        )}</div> : <div className="alert alert-success mx-3" role="alert">
            <h4 className="alert-heading">Hurray...!</h4>
            <p>No alerts so far...</p>
          </div> }
       
        
      <div className="alert p-2 bd-highlight bg-info text-light my-3 mx-3  ">Your Devices</div>
      {this.state.devices.length ? <div>
        <table className="table table-striped table-hover mx-3">
          <thead>
            <tr><th>#id</th>
                <th>Name</th>
                <th>Location</th>
                <th>Status</th></tr>
  
          </thead>
          <tbody>
          {this.state.devices.map(device =>{
            return(
              <tr>
              <td>{device.id}</td>
              <td>{device.name}</td>
              <td>{device.location}</td>
              <td>{device.status}</td>
            </tr>
            );
          })}
           
           
          </tbody>
  
        </table>
      </div> : <div className="d-flex p-2 bd-highlight bg-light mx-3">No linked devices...!</div>}
      
       
      
      </div>
  );}
}
const mapStateToProps = (state) =>{
  // console.log(state.alerts)
  return{
    alerts:state.alerts,
    devices:state.devices
    
  }
}

export default connect(mapStateToProps)(Home);
