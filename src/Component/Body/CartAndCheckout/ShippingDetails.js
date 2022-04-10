import React, { useState } from "react";
import { Box, FormControl, FormLabel, Input, Grid, Heading, VStack, GridItem, Divider, Stack, Flex, Button, Textarea } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { AutoCompleteInput } from "../../GeneralComponent/AutoCompleteInput";

function ShippingDetail(props) {
  const shippingDetailsForm = (values, handleChange, handleSubmit) => {
    // console.log(values.Title);
    return (
      <form onSubmit={handleSubmit}>
        <FormControl>
          <Heading size="md" color="#fac520" mb="30px" mt="5" ml="5">
            Delivery Address
          </Heading>
          <VStack gap="15px" marginLeft="5" marginTop="5" alignItems="left">
            {/*Input for Receiver full name */}
            <FormLabel mb="-5" fontSize="sm">
              Customer Name:
            </FormLabel>
            <Input
              values={values.name}
              onChange={handleChange}
              name="name"
              placeholder="Kazi Nazrul Islam"
              type="text"
              size="sm" />

            {/*Input for email */}
            <FormLabel marginBottom="8" fontSize="sm">
              Email:
            </FormLabel>
            <Input
              values={values.email}
              onChange={handleChange}
              name="email"
              placeholder="example@email.com"
              type="email"
              size="sm" />

            {/*Input for phone number */}
            <FormLabel mb="0" fontSize="sm">
              Phone Number:
            </FormLabel>
            <Input
              values={values.phoneNumber}
              onChange={handleChange}
              name="phoneNumber"
              placeholder="015 8645 8476"
              type="text"
              size="sm" />

            {/*Input for address */}
            <FormLabel mb="0" fontSize="sm">
              Address:
            </FormLabel>
            <Input
              values={values.address}
              onChange={handleChange}
              name="address"
              placeholder="House No: 5, Road No: 24/2"
              type="text"
              size="sm" />

            {/*Input for thana and district */}
            <Grid templateColumns="repeat(2, 1fr)" w="300px" gap="20px">
              <GridItem>
                <AutoCompleteInput
                  placeholder="Feni"
                  size="sm"
                  label="District"
                  value={values.district}
                  options={["Dhaka", "Feni", "Khulna"]}
                />
              </GridItem>

              <GridItem>
                <AutoCompleteInput
                  placeholder="Sonagazi"
                  size="sm"
                  label="Thana"
                  value={values.thana}
                  options={["Mirpur", "Pallabi", "Sonagazi"]}
                />
              </GridItem>
            </Grid>
          </VStack>
        </FormControl>
      </form>
    )
  }
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        phoneNumber: "",
        address: "",
        district: "",
        thana: "",
      }}

      onSubmit={(values) => {
        // console.log(values);
        props.bookInput(values);
      }}
    >
      {({ values, handleChange, handleSubmit }) => {
        return (
          <div>
            {shippingDetailsForm(values, handleChange, handleSubmit)}
          </div>
        )
      }}
    </Formik>
  );
};

export default ShippingDetail;
