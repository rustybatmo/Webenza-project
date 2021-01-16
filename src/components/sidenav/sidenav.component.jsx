import react, { Component } from "react";
import "./sidenav.styles.css";

import { withRouter, Link } from "react-router-dom";

class Sidenav extends Component {
  state = {
    isCollapse: false,
  };

  toggleClass = (e) => {
    e.preventDefault();
    this.setState({
      isCollapse: !this.state.isCollapse,
    });
    // this.state.isCollapse = !this.state.isCollapse;
    console.log(this.state.isCollapse);
  };
  render() {
    return (
      <div>
        <div
          className={this.state.isCollapse ? "wrapper collapse" : "wrapper "}
        >
          <div class="header">
            <div class="header-menu">
              <div class="title" onClick={this.toggleClass}>
                Project name
              </div>
            </div>
          </div>
          <div class="sidebar">
            <div class="sidebar-menu">
              <div className={this.state.isCollapse ? "hidden" : "heading"}>
                NAVIGATION
              </div>
              <li class="item">
                <Link to="/home-page" class="menu-btn">
                  <i class="fas fa-desktop"></i>
                  <span>Home Page</span>
                </Link>
              </li>
              <li class="item" id="profile">
                <Link to="/dashboard" class="menu-btn">
                  <i class="fas fa-user-circle"></i>
                  <span>Dashboard</span>
                </Link>
              </li>
              <div className={this.state.isCollapse ? "hidden" : "heading"}>
                ANOTHER MENU
              </div>
              <li class="item" id="messages">
                <Link to="/friends" class="menu-btn">
                  <i class="fas fa-envelope"></i>
                  <span>Friends</span>
                </Link>
              </li>
              <li class="item" id="settings">
                <Link to="/settings" class="menu-btn">
                  <i class="fas fa-cog"></i>
                  <span>Settings</span>
                </Link>
              </li>
              <li class="item">
                <Link to="/item" class="menu-btn">
                  <i class="fas fa-info-circle"></i>
                  <span>Information</span>
                </Link>
              </li>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Sidenav);
