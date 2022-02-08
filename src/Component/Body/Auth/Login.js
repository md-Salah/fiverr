import React from "react";
import { useState } from "react";
import { PhoneIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Heading,
  Stack,
  Box,
  FormControl,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
  FormHelperText,
  FormErrorMessage,
  Link,
} from "@chakra-ui/react";
import { InputPassword } from "./InputPassword";

export const LoginForm = ({ login, error, isLogin }) => {

  const [details, setDetails] = useState({ phoneNumber: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    login(details);
  };

  return (
    <Stack
      mt={{ base: "50px", md: "80px" }}
      justifyContent="center"
      alignItems="center"
      p="2"
      pt="5"
      boxShadow="md"
      bg="whiteAlpha.800"
    >
      <Avatar bg="teal" src="#" />
      <Heading color="teal.500">Welcome</Heading>
      <Box p="20px" w="100%">
        <form onSubmit={handleSubmit}>
          <Stack spacing={4}>
            <FormControl>
              <InputGroup>
                <InputLeftElement color="gray.400">
                  <PhoneIcon />
                </InputLeftElement>
                <Input
                  type="text"
                  placeholder="Phone number"
                  onChange={(e) =>
                    setDetails({ ...details, phoneNumber: e.target.value })
                  }
                  value={details.phoneNumber}
                />
              </InputGroup>
            </FormControl>
            <InputPassword details={details} setDetails={setDetails} error={error} placeholder={"Password"} />

            <FormControl>
              <FormHelperText textAlign="right">
                <Link>Forgot password?</Link>
              </FormHelperText>
            </FormControl>
            <Button colorScheme="teal" type="submit">
              Login
            </Button>
          </Stack>
        </form>
      </Box>
    </Stack>
  );
};
