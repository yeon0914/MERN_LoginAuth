import axios from "axios";

const setAuthToken = (token) => {
  if (token) {
    // 만약 로그인되어 있다면 authorization token을 모든 request에 apply한다.
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    // 로그인 안되어있으면 삭제
    delete axios.defaults.headers.common["Authorization"];
  }
};
export default setAuthToken;
