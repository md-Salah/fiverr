import React, { useEffect } from "react";
import {
  Avatar,
  Box,
  FormControl,
  FormHelperText,
  FormLabel,
  InputGroup,
  Switch,
  Text,
  HStack,
  Icon,
  Divider,
  useBoolean,
} from "@chakra-ui/react";

export const SendBookPhoto = () => {
  const [btn, setBtn] = useBoolean(false);

  return (
    <Box mt="10" boxShadow="base" p="2">
      <FormControl my="2">
        <InputGroup>
          <FormLabel htmlFor="send-photos">
            প্যাকেজিং এর সময় বই গুলোর ছবি দেখতে চাই
          </FormLabel>
          <Switch onChange={setBtn.toggle} id="send-photos" />
        </InputGroup>

        <FormHelperText>
          {btn ? (
            <>
              অর্ডারটি প্যাকেজিং এর সময় messenger অথবা whatsapp এর মাধ্যমে
              বইগুলোর ছবি পাঠানো হবে। ছবি দেখে বই পরিবর্তনের সুযোগ থাকবে।
            </>
          ) : (
            <>
              বই গুলোর ছবি দেখতে উপরের বাটনে ক্লিক করুন এবং Messenger / Whatsapp
              এ অর্ডার আইডি শেয়ার করুন
            </>
          )}
        </FormHelperText>
      </FormControl>
      {btn && (
        <>
          <Divider />
          <Text textAlign="center" mt="15px">
            Inbox us, <br /> Your Phone Number & Order Reference
          </Text>
          <HStack mt="5" mb="2">
            <Avatar name="messenger" src="#" />
            <Avatar name="Whatapp" src="#" />
          </HStack>
        </>
      )}
    </Box>
  );
};
