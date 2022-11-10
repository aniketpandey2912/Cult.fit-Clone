import axios from "axios";

// register request
export const registerRequest = (user) => {
  console.log("register data:", user);
  return axios({
    method: "post",
    url: "https://reqres.in/api/register",
    data: {
      email: user.email,
      password: user.password,
    },
  }).then((res) => res);
};

// login request
export const loginRequest = (user) => {
  console.log("login data:", user);
  return axios({
    method: "post",
    url: "https://reqres.in/api/login",
    data: {
      email: user.email,
      password: user.password,
    },
  }).then((res) => res);
};
