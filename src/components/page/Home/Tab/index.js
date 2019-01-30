import React, { Component } from "react";
import "./index.scss";
import { NavLink, Link } from "react-router-dom";
class Tab extends Component {
  constructor(props) {
    super(props);
  }
  renderItem() {
    let { data } = this.props;
    if (data) {
      return data.map(nav => {
        return (
          <li className="nav-item" key={nav.id}>
            <NavLink
              to={{
                pathname: `/home/${nav.tag}`,
              }}
              activeClassName="active"
            >
              {nav.name}
            </NavLink>
          </li>
        );
      });
    }
  }
  render() {
    return (
      <div className="app-Tab-box">
        <ul className="nav">{this.renderItem()}</ul>
      </div>
    );
  }
}

export default Tab;
