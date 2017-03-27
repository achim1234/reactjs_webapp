import React from "react";
import { IndexLink, Link } from "react-router";

export default class NavigationBar extends React.Component {
  constructor() {
    super();
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
    const { collapsed } = this.state;
    const navClass = collapsed ? "collapse" : "";

    return (
      <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar" />
              <span class="icon-bar" />
              <span class="icon-bar" />
            </button>
          </div>
        </div>
        <div class={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li>
              <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Filmroulette</IndexLink>
            </li>
            <li>
              <Link to="initial" onClick={this.toggleCollapse.bind(this)}>Genres</Link>
            </li>
            <li>
              <Link to="movies" onClick={this.toggleCollapse.bind(this)}>New Movies</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}