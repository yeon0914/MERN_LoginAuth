import React, { Component } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const Styledh4 = styled.h4`
  box-sizing: border-box;
  display: block;
  text-align: center;
  padding: 100px 0px 0px 0px;
  margin: 10px;
  font: bold 30px/1 cursive;
  text-decoration-line: none;
`;

const Styledp = styled.p`
  box-sizing: border-box;
  display: block;
  text-align: center;
  font: 20px sans-serif;
  color: #999da0;
`;

const StyledButton = styled(Link)`
  box-sizing: border-box;
  display: block;
  width: 150px;
  margin: 10px auto;
  text-align: center;
  padding: 10px;
  color: white;
  background-color: #3e4248;
  text-decoration-line: none;
  border-radius: 3px;
  box-shadow: 1px 1px 2px black;
`;

class Landing extends Component {
  render() {
    return (
      <div>
        <div>
          <div>
            <Styledh4>A login/auth app with the MERN stack</Styledh4>
            <Styledp>Create a full-stack app with user authentication</Styledp>
            <br />
            <div>
              <StyledButton to="/register">REGISTER</StyledButton>
            </div>
            <div>
              <StyledButton to="/login">LOGIN</StyledButton>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;
