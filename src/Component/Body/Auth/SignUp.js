import React from "react";
import { useState } from "react";
import { EmailIcon, PhoneIcon, Icon } from "@chakra-ui/icons";
import {
  Avatar,
  Heading,
  Stack,
  Text,
  Box,
  FormControl,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
  RadioGroup,
  Radio,
  HStack,
  FormHelperText,
  FormErrorMessage,
} from "@chakra-ui/react";
import { IoPersonSharp } from "react-icons/io5";
import { InputPassword } from "./InputPassword";

export const SignUp = ({ createUser, error }) => {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(details);
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
      <Heading color="teal.500">SignUp</Heading>
      <Box p="20px" w="100%">
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <FormControl>
              <InputGroup>
                <InputLeftElement color="gray.400">
                  <Icon as={IoPersonSharp} />
                </InputLeftElement>
                <Input
                  type="text"
                  name="name"
                  placeholder="Name"
                  onChange={(e) =>
                    setDetails({ ...details, name: e.target.value })
                  }
                  value={details.name}
                />
              </InputGroup>
            </FormControl>

            <FormControl>
              <InputGroup>
                <InputLeftElement color="gray.400">
                  <EmailIcon />
                </InputLeftElement>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={(e) =>
                    setDetails({ ...details, email: e.target.value })
                  }
                  value={details.email}
                />
              </InputGroup>
            </FormControl>

            <FormControl>
              <InputGroup>
                <InputLeftElement color="gray.400">
                  <PhoneIcon />
                </InputLeftElement>
                <Input
                  type="text"
                  name="mobile"
                  placeholder="Phone number"
                  onChange={(e) =>
                    setDetails({ ...details, phoneNumber: e.target.value })
                  }
                  value={details.phoneNumber}
                />
              </InputGroup>
            </FormControl>

            <InputPassword details={details} setDetails={setDetails} error={error} />

            <Button colorScheme="teal" type='submit'>
              Register
            </Button>
          </Stack>
        </form>
      </Box>
    </Stack>
  );
};
