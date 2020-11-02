import React from "react";
import "../css/page.css";
import {connect} from 'react-redux';
class Page2 extends React.Component {
  state = {
      _devId:'',
      _devName:'',
      _devLoc:'',
      devices:this.props.devices
   
    
  }
  _handleChange = (e) => {
    this.setState({
        [e.target.id]:e.target.value,
        
    })
}
_handleSubmit = (e) => {
  e.preventDefault();
  console.log(this.state.devices)
  this.props.addDevice(this.state);
}

  render(){
    console.log(this.props)
  return (
    <div className="Content container">
      
        <h2 className="mx-3">Add Devices</h2>
        <div className="mx-3 mb-5">
        <form onSubmit={this._handleSubmit}>
          <label>Id:</label>
          <input className="form-control mt-1" type="text" placeholder="Enter device id" id="_devId" onChange={this._handleChange}></input>
          <label>Name:</label>
          <input className="form-control mt-1" type="text" placeholder="Enter device name" id="_devName" onChange={this._handleChange}></input>
          <label>Location:</label>
          <input className="form-control mt-1" type="text" placeholder="Enter device location" id="_devLoc" onChange={this._handleChange}></input>
          <button id="addDevice" className="btn btn-info float-right my-2" onClick={this._handleSubmit}>Add</button>
        </form>
        

        </div>
        <div>
        <table className="table table-striped table-hover mx-3">
          <thead>
            <tr><th>#id</th>
                <th>Name</th>
                <th>Location</th>
                </tr>
  
          </thead>
          <tbody>
          {this.state.devices.map(device =>{
            return(
              <tr>
              <td>{device._devId}</td>
              <td>{device._devName}</td>
              <td>{device._devLoc}</td>
              
            </tr>
            );
          })}    
          </tbody>
        </table>
      </div>
        
             
      
    </div>
  );}
};

const mapStateToProps = (state) =>{
  return{
   devices:state.devices
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    addDevice :(dev) => {
      dispatch({
        type:'ADD_DEVICE',dev:dev
      })
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Page2);
