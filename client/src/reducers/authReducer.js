import { SET_CURRENT_USER, USER_LOADING } from "../actions/types";

const isEmpty = require("is-empty");

const initialState = {
  isAuthenticated: false,
  user: {},
  loading: false,
};

export default function (state = initialState, action) {
  // Check to see if the reducer cares about this action
  switch (action.type) {
    case SET_CURRENT_USER:
      // If so, make a copy of `state`
      return {
        ...state,
        // and update the copy with the new value
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      };
    case USER_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
