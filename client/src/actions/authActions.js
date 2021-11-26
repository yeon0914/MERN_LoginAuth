import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from "./types";

// Register User
export const registerUser = (userData, history) => (dispatch) => {
  axios
    .post("/api/users/register", userData)
    .then((res) => history.push("/login")) // register가 성공하면 login창으로 redirect
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// Login User
export const loginUser = (userData) => (dispatch) => {
  axios
    .post("/api/users/login", userData)
    .then((res) => {
      //localStorage에 token 저장
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);

      // set authToken
      setAuthToken(token);

      // decode token
      const decoded = jwt_decode(token);

      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// set current user
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

// set user loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING,
  };
};

// logout
export const logoutUser = () => (dispatch) => {
  // local storage에서 token 제거
  localStorage.removeItem("jwtToken");

  // auth token 제거
  setAuthToken(false);

  // current user 비우기
  dispatch(setCurrentUser({}));
};
