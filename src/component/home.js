import React, { Component } from "react";
import "./home.styles.css";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="text">
          <h2>VietVax for a healthy Vietnam</h2>
          <p>
            {" "}
            VietVax helps Vietnamese to manage their vaccination record, receive
            personalized recommendation, and be informed about vaccination.{" "}
          </p>
        </div>
        <img
          alt="vaccine"
          className="vaccine"
          src="https://vinmec-prod.s3.amazonaws.com/images/20191116_160613_519563_vacxin-vinmec-2.max-800x800.jpg"
        />
      </div>
    );
  }
}

export default Home;
