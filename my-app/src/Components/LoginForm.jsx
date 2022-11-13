import React, { useContext, useState } from "react";
import { Button } from "@chakra-ui/button";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/form-control";
import {
  userLoginRequest,
  // userRegisterRequest,
  adminLoginRequest,
} from "../UtilityFunctions/Utils";
import { Text } from "@chakra-ui/react";
import { AuthContext } from "../Contexts/AuthContextProvider";
import { Navigate } from "react-router-dom";

// initiaState
const initState = {
  email: "",
  password: "",
};

function LoginForm({ handleCloseLoginModal }) {
  // Authentication
  const { isAuth, token, handleUserLogin, handleToken } =
    useContext(AuthContext);

  // Form State - we will make request with this data
  const [formState, setFormState] = useState(initState);

  // Email - chakra
  const [input, setInput] = React.useState("");
  const handleInputChange = (e) => {
    setFormState({ ...formState, email: e.target.value }); // setting email in formState
    return setInput(e.target.value);
  };
  const isError = input === "" || !input.includes(".in"); // Error text form email

  // Password - chakra
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const [inputPass, setInputPass] = React.useState("");
  const handleInputChangePass = (e) => {
    setFormState({ ...formState, password: e.target.value }); // setting password in formState
    return setInputPass(e.target.value);
  };
  const isErrorPass = inputPass === ""; // Error text for password

  // console.log("email:", input, "password:", inputPass);
  // console.log("form data:", formState);

  // handle User Login
  const handleUserLoginRequest = () => {
    userLoginRequest(formState)
      .then((res) => {
        // console.log("login res:", res);
        handleUserLogin(); // setting authentication to true
        handleToken(res.token); // setting token after successfull login
      })
      .catch((err) => {
        console.log("Error in user login request");
      });

    // registerRequest(formState).then((res) => {
    //   console.log("register res:", res);
    // });
  };

  // handle Admin Login
  const handleAdminLoginRequest = () => {
    adminLoginRequest(formState).then((res) => {
      console.log("login res:", res);
      handleUserLogin(); // setting authentication to true
      handleToken(res.token); // setting token after successfull login
    });
  };

  // Redirecting user/admin to their respective dashboards basis on the token, if token includes word "admin" then send to admin dashboard otherwise send to userDashboard
  if (token.length !== 0 && token.includes("admin")) {
    alert("admin login successful");
    handleCloseLoginModal();
    return <Navigate to="/admindashboard" />;
  } else if (token.length !== 0) {
    alert("user login successful");
    handleCloseLoginModal();
    return <Navigate to="/userdashboard" />;
  }

  return (
    <FormControl isInvalid={isError}>
      {/* Email */}
      <Input
        type="email"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter email"
      />
      {!isError ? (
        <FormHelperText mb="10px">You are good to go.</FormHelperText>
      ) : (
        <FormErrorMessage my="10px">
          Email is required. Include e.g. .com
        </FormErrorMessage>
      )}

      {/* Password */}
      <InputGroup size="md">
        <Input
          pr="4.5rem"
          type={show ? "text" : "password"}
          value={inputPass}
          onChange={handleInputChangePass}
          placeholder="Enter password"
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" color="black" onClick={handleClick}>
            {show ? "Hide" : "Show"}
          </Button>
        </InputRightElement>
      </InputGroup>
      {!isErrorPass ? (
        <FormHelperText mb="10px">You are good to go.</FormHelperText>
      ) : (
        <FormErrorMessage my="10px">
          Password required and must not include e.g. "123" or "abc"
        </FormErrorMessage>
      )}

      {/* Continue as user- request making button */}
      <Button
        colorScheme="gray"
        color="black"
        fontWeight="bold"
        letterSpacing="1px"
        w="100%"
        my="20px"
        _hover={{ color: "green" }}
        onClick={handleUserLoginRequest}
      >
        CONTINUE AS USER
      </Button>

      <Text textAlign="center" my="5px">
        OR
      </Text>

      {/* Continue as admin- request making button */}
      <Button
        colorScheme="green"
        color="black"
        fontWeight="bold"
        letterSpacing="1px"
        w="100%"
        // my="30px"
        _hover={{ color: "red" }}
        onClick={handleAdminLoginRequest}
      >
        CONTINUE AS ADMIN
      </Button>
    </FormControl>
  );
}

export default LoginForm;
