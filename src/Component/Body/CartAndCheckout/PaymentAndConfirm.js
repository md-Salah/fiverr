import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  Input,
  InputGroup,
  Radio,
  RadioGroup,
  Stack,
  Text,
  FormLabel,
  FormHelperText,
  FormControl,
} from "@chakra-ui/react";

export const PaymentAndConfirm = () => {
  const [paymentType, setPaymentType] = useState("Full Paid");
  const [paymentGateway, setPaymentGateway] = useState("Bkash");

  return (
    <Box mt="10" boxShadow="base">
      <Text
        fontWeight="bold"
        bg="#319795"
        textAlign="center"
        color="white"
        py="5px"
      >
        Payment
      </Text>

      <Box m="2">
        <RadioGroup
          name="payment-type"
          onChange={setPaymentType}
          value={paymentType}
        >
          <Text fontWeight="bold">Payment Type:</Text>
          <Stack direction="column" spacing="1" ml="2">
            <Radio value="Full Paid">Full Paid</Radio>
            <Radio value="Cash On Delivery">Cash On Delivery</Radio>
          </Stack>
          {paymentType === "Full Paid" ? (
            <Text pt="4" color="gray">
              আপনি {1050} টাকা পে করতে যাচ্ছেন
            </Text>
          ) : (
            <Text pt="4" color="gray">
              বইয়ের মূল্য ক্যাশ অন ডেলিভারিতে নেয়া যাবে। ডেলিভারি চার্জ {50}{" "}
              টাকা পে করতে যাচ্ছেন
            </Text>
          )}
        </RadioGroup>
        <Divider />
        <RadioGroup
          name="payment-gateway"
          mt="5"
          onChange={setPaymentGateway}
          value={paymentGateway}
        >
          <Stack direction="row" spacing="5">
            <Text fontWeight="bold">Gateway:</Text>
            <Radio value="Bkash">Bkash</Radio>
            <Radio value="Nagad">Nagad</Radio>
            <Radio value="Rocket">Rocket</Radio>
          </Stack>
        </RadioGroup>

        <Text pt="5" textAlign="center">
          Send Money ({paymentGateway})
        </Text>
        <Text pt="1" pb="3" textAlign="center" fontWeight="bold" color="teal">
          015 2125 7646
          {paymentGateway === "Rocket" && " 3"}
        </Text>

        <form onSubmit={(e) => console.log(e.target.value)}>
          <FormControl pt="3">
            <FormLabel htmlFor="last-number">
              যে নাম্বার থেকে টাকা পাঠানো হয়েছে:
            </FormLabel>
            <Input
              size="sm"
              type="text"
              id="last-number"
              placeholder="xxx xxxx 1111"
              isRequired
            />
            <Button type="submit" size="sm" w="100%" colorScheme="teal" my="2">
              Confirm Order
            </Button>
          </FormControl>
        </form>
      </Box>
    </Box>
  );
};
