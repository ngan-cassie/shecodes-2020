import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./component/home";
import { Route, NavLink, HashRouter } from "react-router-dom";
import { Foot } from "./component/footer";
import Blog from "./component/blog";
import User from "./component/user-profile";
import lg from "./component/Logo.svg";
import { Log } from "./component/log-in";
class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <HashRouter>
        <div>
          <header>
            <div className="Logo">
              <img alt="logo" src={lg} />
              <h3> VietVax </h3>
            </div>
            <div className="nav">
              <NavLink exact to="/" className="item">
                Homepage
              </NavLink>

              <NavLink to="/profile" className="item">
                Your profile
              </NavLink>

              <NavLink to="/rec" className="item">
                Vaccination recommendation
              </NavLink>

              <NavLink to="/blog" className="item">
                Blog
              </NavLink>

              <NavLink to="/log" className="item btn">
                Log In
              </NavLink>
            </div>
          </header>
          <body className="content">
            <Route exact path="/" component={Home} />
            <Route path="/profile" component={User} />
            <Route path="/blog" component={Blog} />
            <Route path="/log" component={Log} />
          </body>
          <footer>
            <Foot />
          </footer>
        </div>
      </HashRouter>
    );
  }
}

export default App;
