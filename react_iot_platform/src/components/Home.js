import React from "react";
import "../css/page.css";
import {connect} from 'react-redux';
class Home extends React.Component {
  state = {
    alerts:this.props.posts[0].status
  }
  render(){
    // console.log(this.state.alerts);
  return (
    <div className="Content container-lg">
      
        <h2 className="mx-3">Overview</h2>
        <div class="alert p-2 bd-highlight bg-danger text-light my-3 mx-3">Alerts !</div>
        <div class="alert alert-danger mx-3" role="alert">
          <h4 class="alert-heading">Well done!</h4>
          <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
          <hr/>
          <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
          <button type="button" class="btn btn-outline-danger btn-md mt-2" data-dismiss="alert" aria-label="Close">Dismiss</button>

        </div>

        <div class="alert alert-warning mx-3" role="alert">
          <h4 class="alert-heading">Well done!</h4>
          <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
          <hr/>
          <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
          <button type="button" class="btn btn-outline-warning btn-md mt-2" data-dismiss="alert" aria-label="Close">Dismiss</button>

        </div>
        <div class="alert alert-success mx-3" role="alert">
          A simple success alert—check it out!
        </div>
      <div class="alert p-2 bd-highlight bg-info text-light my-3 mx-3  ">Your Devices</div>
        <table class="table table-striped table-hover mx-3">
          <thead>
            <tr><th>#id</th>
                <th>Name</th>
                <th>Location</th>
                <th>Status</th></tr>
  
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Temperature Sensor</td>
              <td>Garden</td>
              <td>Active</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Temperature Sensor</td>
              <td>Living Room</td>
              <td>Active</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Temperature Sensor</td>
              <td>Kitchen</td>
              <td>Inactive</td>
            </tr>
          </tbody>
  
        </table>
      
      </div>
  );}
}
const mapStateToProps = (state) =>{
  return{
    posts:state.posts
  }
}

export default connect(mapStateToProps)(Home);
