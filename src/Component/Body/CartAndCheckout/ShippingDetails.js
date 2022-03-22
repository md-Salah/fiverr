import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Grid,
  Heading,
  VStack,
  GridItem,
  Divider,
} from "@chakra-ui/react";
import { Form } from "formik";
import { AutoCompleteInput } from "../../GeneralComponent/AutoCompleteInput";

export default function ShippingDetails() {
  //const [deliveryInfo, setDeliveryInfo] = useState({});
  //add error state

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const [district, setDistrict] = useState("");
  const [thana, setThana] = useState("");

  return (
    <Box m="20px">
      <Heading size="md" color="#fac520" mb="30px">
        Delivery Address
      </Heading>

      <VStack gap="20px" alignItems="left">
        {/*Input for Receiver full name */}
        <InputForm
          label="Receiver Full Name"
          id="fullName"
          placeholder="Kazi Nazrul Islam"
          type="text"
          value={name}
          setValue={setName}
        />

        {/*Input for email */}
        <InputForm
          id="email"
          type="email"
          label="Email"
          value={email}
          setValue={setEmail}
          placeholder="example@email.com"
        />

        {/*Input for phone number */}
        <InputForm
          id="phoneNumber"
          type="text"
          label="Phone Number"
          value={phoneNumber}
          setValue={setPhoneNumber}
          placeholder="015 8645 8476"
        />

        {/*Input for address */}
        <InputForm
          id="address"
          type="text"
          label="Address"
          value={address}
          setValue={setAddress}
          placeholder="House No: 5, Road No: 24/2"
        />

        {/*Input for thana and district */}
        <Grid templateColumns="repeat(2, 1fr)" w="300px" gap="20px">
          <GridItem>
            <AutoCompleteInput
              placeholder="Feni"
              size="sm"
              id="district"
              label="District"
              value={district}
              setValue={setDistrict}
              options={["Dhaka", "Feni", "Khulna"]}
            />
          </GridItem>

          <GridItem>
            <AutoCompleteInput
              placeholder="Sonagazi"
              size="sm"
              id="thana"
              label="Thana"
              value={thana}
              setValue={setThana}
              options={["Mirpur", "Pallabi", "Sonagazi"]}
            />
          </GridItem>
        </Grid>

      </VStack>
      
    </Box>
  );
}

const InputForm = ({
  id = "input",
  label = "",
  type = "text",
  placeholder = "",
  value = "",
  setValue,
}) => {
  return (
    <FormControl isInvalid={false} isRequired w="300px">
      {label && (
        <FormLabel mb="0" htmlFor={id} fontSize="sm">
          {label + ":"}
        </FormLabel>
      )}
      <Input
        size="sm"
        type={type}
        variant="flushed"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </FormControl>
  );
};
