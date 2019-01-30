import React, { Component } from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";

class ListNavs extends Component {
  constructor(props) {
    super(props);
  }
  renderItem() {
    let { data } = this.props;
    if (data) {
      return data.map(nav => {
        return (
          <li className="nav-item" key={nav.categoryId}>
            <NavLink
              to={{
                pathname: `/category/classify/${nav.categoryId}`,
                search: `id=${nav.categoryId}`
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
      <div className="app-ListNavs-box">
        <ul className="nav">{this.renderItem()}</ul>
      </div>
    );
  }
}

export default ListNavs;
