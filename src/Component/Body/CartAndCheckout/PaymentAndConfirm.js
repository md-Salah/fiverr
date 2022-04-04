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
  Heading,
} from "@chakra-ui/react";

export const PaymentAndConfirm = () => {
  const [paymentType, setPaymentType] = useState("Full Paid");
  const [paymentGateway, setPaymentGateway] = useState("Bkash");

  return (
    <Box m='20px'>
      {/* Section Title */}
      <Heading size="md" color="#fac520" mb="15px">
        Payment
      </Heading>
      {/*Title ends */}

      {/*Payment method - full paid & cash on delivery */}
      <Box pt="15px">
        <RadioGroup
          name="payment-method"
          onChange={setPaymentType}
          value={paymentType}
        >
          <Text fontWeight="bold">Payment Type:</Text>
          <Stack direction="column" spacing="1" ml="2">
            <Radio value="Full Paid">Full Paid</Radio>
            <Radio value="Cash On Delivery">Cash On Delivery</Radio>
          </Stack>
          <Text py="10px" h='60px' color="gray">
            {paymentType === "Full Paid" ? (
              <>আপনি {1050} টাকা পে করতে যাচ্ছেন</>
            ) : (
              <>
                বইয়ের মূল্য ক্যাশ অন ডেলিভারিতে নেয়া যাবে। ডেলিভারি চার্জ {50}{" "}
                টাকা পে করতে যাচ্ছেন
              </>
            )}
          </Text>
        </RadioGroup>
        <Divider />

        {/*Select payment gateway bkash-nagad-rocket */}
        <RadioGroup
          name="payment-gateway"
          mt="20px"
          onChange={setPaymentGateway}
          value={paymentGateway}
        >
            <Text fontWeight="bold">Gateway:</Text>
          <Stack direction="row" spacing="5">
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
        {/* Payment gateway ends here */}

        {/* Sender Number and payment proof details asking */}
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
            <Button type="submit" size="sm" w="100%" colorScheme="teal" mt='10px'>
              Confirm Order
            </Button>
          </FormControl>
        </form>
        {/*Payment proof ends here */}
      </Box>
    </Box>
  );
};
