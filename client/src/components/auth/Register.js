import React, { useState } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const StyledOuterContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  height: 500px;
`;
const StyledInnerContainer = styled.div`
  box-sizing: border-box;
  display: block;
  width: 50%;
  height: 100%;
`;

const StyledForm = styled.form`
  padding: 50px 0px 0px 50px;
`;

const StyledImg = styled.img`
  max-width: 100%;
  height: 100%;
  overflow: hidden;
  box-shadow: 1px 2px 10px black;
  clip-path: polygon(-20% 0%, 100% 0%, 100% 100%, -20% 100%);
`;

const Styledh3 = styled.h3`
  font: bold 40px/1 sans-serif;
  text-shadow: 1px 1px 1px #999da0;
  margin: 20px 0px;
  padding: 50px 0px 0px 50px;
`;

const Styledp = styled.p`
  font: 15px sans-serif;
  color: #999da0;
  padding: 0px 0px 0px 50px;
`;

const StyledLink = styled(Link)`
  font: 15px/1 sans-serif;
  color: #63c5da;
  text-decoration-line: none;
`;

const StyledDiv = styled.div`
  height: 50px;
`;

const StyledInput = styled.input`
  border: none;
  height: 30px;
  width: 400px;
  border-bottom: 1px #ebecf0 solid;
  font: 13px sans-serif;

  &:focus {
    outline: none;
    box-shadow: 0px 1px 2px #999da0;
  }
`;

const StyledButton = styled.button`
  all: unset;
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
  cursor: pointer;
`;

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangePassword2 = (e) => {
    setPassword2(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      name: name,
      email: email,
      password: password,
      password2: password2,
    };

    console.log(newUser);
  };

  return (
    <StyledOuterContainer>
      <StyledInnerContainer>
        <Styledh3>Register</Styledh3>
        <Styledp>
          Already have an account? <StyledLink to="/login">Log in</StyledLink>
        </Styledp>
        <StyledForm onSubmit={onSubmit}>
          <StyledDiv>
            <StyledInput
              type="email"
              placeholder="Email"
              value={email}
              onChange={onChangeEmail}
            />
          </StyledDiv>
          <StyledDiv>
            <StyledInput
              type="text"
              placeholder="Name"
              value={name}
              onChange={onChangeName}
            />
          </StyledDiv>
          <StyledDiv>
            <StyledInput
              type="password"
              placeholder="Password"
              value={password}
              onChange={onChangePassword}
            />
          </StyledDiv>
          <StyledDiv>
            <StyledInput
              type="password"
              placeholder="Confirm Password"
              value={password2}
              onChange={onChangePassword2}
            />
          </StyledDiv>
          <StyledButton type="submit">Sign up</StyledButton>
        </StyledForm>
      </StyledInnerContainer>
      <StyledInnerContainer>
        <StyledImg src="https://cdn.pixabay.com/photo/2016/03/27/07/32/clouds-1282314_960_720.jpg"></StyledImg>
      </StyledInnerContainer>
    </StyledOuterContainer>
  );
};

export default Register;
