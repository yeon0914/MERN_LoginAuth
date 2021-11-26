import React, { Component } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const NavbarTitle = styled(Link)`
  box-sizing: border-box;
  display: block;
  text-align: center;
  padding: 10px;
  font: small-caps 24px/1 fantasy;
  color: white;
  background-color: powderblue;
  text-decoration-line: none;
`;

class Navbar extends Component {
  render() {
    return (
      <div>
        <div>
          <NavbarTitle to="/">YEONOEY</NavbarTitle>
        </div>
      </div>
    );
  }
}
export default Navbar;
