import React, { useState } from "react";
import { LockIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  FormControl,
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
  Button,
  FormErrorMessage,
} from "@chakra-ui/react";

export const InputPassword = ({ details, setDetails, error, placeholder="New Password" }) => {
  const [showPassword, setShowPassword] = useState(placeholder == "New Password");

  return (
    <div>
      <FormControl>
        <InputGroup>
          <InputLeftElement color="gray.400">
            <LockIcon />
          </InputLeftElement>
          <Input
          name='password'
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
            type={showPassword ? "text" : "password"}
            placeholder={placeholder}
          />
          <InputRightElement w="25%" justifyContent="right">
            <Button
              pt="2px"
              mx="2px"
              size="sm"
              fontWeight="normal"
              onClick={() => setShowPassword(!showPassword)}
              bg="inherit"
              color="gray.400"
            >
              {showPassword ? <ViewIcon /> : <ViewOffIcon />}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl  isInvalid={error}>
        <FormErrorMessage>{error}</FormErrorMessage>
      </FormControl>
    </div>
  );
};
