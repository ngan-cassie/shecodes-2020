import React, { Component } from "react";
import "./profile.styles.css";
class Profile extends Component {
  render() {
    return (
      <div className="profile">
        <img
          alt="avatar"
          src="https://cf.ltkcdn.net/socialnetworking/images/std/168796-281x281-girl-swear-icon.png"
        />
        <h3> Ngan Hieu Nguyen </h3>
        <ul>
          <li>
            {" "}
            <span> Date of birth: </span> August 01, 2001
          </li>
          <li>
            {" "}
            <span> Gender: </span> Female{" "}
          </li>
          <li>
            {" "}
            <span> Date of birth: </span> Thanh Thai, District 10, HCMC{" "}
          </li>
          <li>
            {" "}
            <span> Email: </span> ngannguyen@gmail.com{" "}
          </li>
          <li>
            <span> Phone number: </span> 0123456789{" "}
          </li>
        </ul>
      </div>
    );
  }
}

export default Profile;
