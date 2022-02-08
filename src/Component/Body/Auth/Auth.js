import React from "react";
import { useState } from "react";
import { Flex, Box, Link } from "@chakra-ui/react";
import { LoginForm } from "./Login";
import { SignUp } from "./SignUp";

export const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const adminUser = {
    name: "salahuddin",
    email: "admin@pp.com",
    phoneNumber: "01521257646",
    password: "admin",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState(false);

  const login = (details) => {
    if (details.phoneNumber === "") setError("Phone number is required");
    else if (details.password === "") setError("Password is required");
    else if (
      adminUser.phoneNumber == details.phoneNumber &&
      adminUser.password == details.password
    ) {
      setError("");
      setUser({ name: adminUser.name, phoneNumber: adminUser.phoneNumber });
      console.log("Login Success, User:", user);
    } else setError("incorrect password");
  };

  const logout = () => {
    console.log("Logout");
  };

  const createUser = ({name, email, phoneNumber, password}) => {
    if(name == '') setError('Name is Required')
    else if(email == '') setError('Email is Required')
    else if(phoneNumber == '') setError('Phone number is Required')
    else if(password == '') setError('Password is Required')
    //User Already Exits check
    else{
        setError('')
        setUser({name: name, email: email})
        console.log('Welcome boss! Your Account is Created', user);
    }
  };

  const handleClick = ()=>{
    setIsLogin(!isLogin);
    setError('');
  }

  return (
    <Box h="100vh">
      <Flex
        mt="100px"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        {isLogin ? (
          <LoginForm login={login} error={error} />
        ) : (
          <SignUp createUser={createUser} error={error} />
        )}

        <Box pt="15px">
          {isLogin ? "New to us?" : "Already member?"}{" "}
          <Link onClick={handleClick} color="teal">
            {isLogin ? "SignUp" : "Login"}
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};
