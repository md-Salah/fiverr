import React, { Component, useState } from "react";
import { RadioGroup, Text, Radio, Box, FormControl, FormLabel, Input, Grid, Heading, VStack, GridItem, Divider, Stack, Flex, Button, Textarea } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { AutoCompleteInput } from "../../GeneralComponent/AutoCompleteInput";
import { shippingAndOrderInput } from "../../../Redux/actionCreators";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => {
  return {
    orderInput: (newOrder) => dispatch(shippingAndOrderInput(newOrder))
  }
}

class ShippingDetail extends Component {
  render() {
    const shippingDetailsForm = (values, handleChange, handleSubmit) => {
      // console.log(values);
      return (
        <Form onSubmit={handleSubmit}>
          <FormControl>
            <Grid
              templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
              gap="50px"
              mx="250px"
              mb="50px"
              mt='40px'
              bg='white'
              boxShadow='lg'
            >
              <GridItem>
                {/* shipping details section starts here */}
                <Box>
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
                    {/* <Grid templateColumns="repeat(2, 1fr)" w="300px" gap="20px">
                    <GridItem>
                      <AutoCompleteInput
                        placeholder="Feni"
                        size="sm"
                        name="district"
                        label="District"
                        onChange={handleChange}
                        value={values.district}
                        options={["Dhaka", "Feni", "Khulna"]}
                      />
                    </GridItem>

                    <GridItem>
                      <AutoCompleteInput
                        placeholder="Sonagazi"
                        size="sm"
                        name="thana"
                        onChange={handleChange}
                        label="Thana"
                        value={values.thana}
                        options={["Mirpur", "Pallabi", "Sonagazi"]}
                      />
                    </GridItem>
                  </Grid> */}

                  </VStack>
                </Box>
                {/* shipping details section ends here */}
              </GridItem>

              <GridItem>
                {/* payment info section starts here */}
                <Box m='20px'>
                  {/* Section Title */}
                  <Heading size="md" color="#fac520" mb="15px">
                    Payment
                  </Heading>
                  {/*Title ends */}

                  {/*Payment method - full paid & cash on delivery */}
                  <Box pt="15px">
                    <RadioGroup
                      name="paymentType"
                      value={values.paymentType}
                    >
                      <Text fontWeight="bold">Payment Type:</Text>
                      <Stack direction="column" spacing="1" ml="2">
                        <Radio name="paymentType" onChange={handleChange} value="FullPaid">Full Paid</Radio>
                        <Radio name="paymentType" onChange={handleChange} value="CashOnDelivery">Cash On Delivery</Radio>
                      </Stack>
                      <Text py="10px" h='60px' color="gray">
                        {values.paymentType === "FullPaid" ? (
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
                      name="paymentGateway"
                      mt="20px"
                      value={values.paymentGateway}
                    >
                      <Text fontWeight="bold">Gateway:</Text>
                      <Stack direction="row" spacing="5">
                        <Radio name="paymentGateway" onChange={handleChange} value="Bkash">Bkash</Radio>
                        <Radio name="paymentGateway" onChange={handleChange} value="Nagad">Nagad</Radio>
                        <Radio name="paymentGateway" onChange={handleChange} value="Rocket">Rocket</Radio>
                      </Stack>
                    </RadioGroup>

                    <Text pt="5" textAlign="center">
                      Send Money ({values.paymentGateway})
                    </Text>
                    <Text pt="1" pb="3" textAlign="center" fontWeight="bold" color="teal">
                      015 2125 7646
                      {values.paymentGateway === "Rocket" && " 3"}
                    </Text>
                    {/* Payment gateway ends here */}

                    {/* Sender Number and payment proof details asking */}
                    <FormLabel htmlFor="last-number">
                      যে নাম্বার থেকে টাকা পাঠানো হয়েছে:
                    </FormLabel>
                    <Input
                      size="sm"
                      type="text"
                      name="senderNumber"
                      value={values.senderNumber}
                      onChange={handleChange}
                      placeholder="xxx xxxx 1111"
                      isRequired
                    />
                    <Button type="submit" size="sm" w="100%" colorScheme="teal" mt='10px'>
                      Confirm Order
                    </Button>

                    {/*Payment proof ends here */}
                  </Box>
                </Box>
                {/* payment info section ends here */}
              </GridItem>
            </Grid>

          </FormControl>
        </Form>
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
          paymentType: "FullPaid",
          paymentGateway: "Bkash",
          senderNumber: "",
        }}

        onSubmit={(values) => {
          console.log(values);
          this.props.orderInput(values);
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
  }

};

export default connect(null, mapDispatchToProps)(ShippingDetail);
