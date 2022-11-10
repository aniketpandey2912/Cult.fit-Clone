import React, { useState } from "react";
import { Button } from "@chakra-ui/button";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/form-control";
import { loginRequest, registerRequest } from "../UtilityFunctions/Utils";

// initiaState
const initState = {
  email: "",
  password: "",
};

function LoginForm() {
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

  // handleLogin
  const handleLogin = () => {
    loginRequest(formState).then((res) => {
      console.log("login res:", res);
    });

    // registerRequest(formState).then((res) => {
    //   console.log("register res:", res);
    // });
  };

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

      {/* Continue - request making button */}
      <Button
        colorScheme="gray"
        color="black"
        fontWeight="bold"
        letterSpacing="1px"
        w="100%"
        my="30px"
        _hover={{ color: "green" }}
        onClick={handleLogin}
      >
        CONTINUE
      </Button>
    </FormControl>
  );
}

export default LoginForm;
