import React, { Component } from "react";

class Profile extends Component {
  render() {
    return (
      <div>
        <img
          alt="avatar"
          src="https://cf.ltkcdn.net/socialnetworking/images/std/168796-281x281-girl-swear-icon.png"
        />
        <h3> Ngan Hieu Nguyen </h3>
        <p>
          <span> Date of birth: </span> August 01, 2000
          <span> Gender: </span> Female
          <span> Date of birth: </span> Thanh Thai, District 10, HCMC
          <span> Email: </span> ngannguyen@gmail.com
          <span> Phone number: </span> 0123456789
        </p>
      </div>
    );
  }
}

export default Profile;
