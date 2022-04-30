import React from "react";
import { Button, Flex, FormControl, Input, Stack, Textarea } from "@chakra-ui/react";
import { Formik } from "formik";
import { bookInput } from "../../../../Redux/actionCreators";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => {
  return {
    bookInput: (newBook) => dispatch(bookInput(newBook))
  }
}

function AddBook(props) {
  const addBookForm = (values, handleChange, handleSubmit) => {
    // console.log(values.Title);
    return (
      <form onSubmit={handleSubmit}>
        <FormControl>
          <Stack w={{ lg: "60%" }} mx="auto">
            <Input
              values={values.Title}
              onChange={handleChange}
              name="Title"
              placeholder="Title"
              size="sm" />
            <Input
              values={values.Author}
              onChange={handleChange}
              name="Author"
              placeholder="Author"
              size="sm" />
            <Flex>
              <Input
                w="40%"
                values={values.Publisher}
                onChange={handleChange}
                name="Publisher"
                placeholder="Publisher"
                size="sm" />
              <Input
                w="40%"
                values={values.Translator}
                onChange={handleChange}
                name="Translator"
                placeholder="Translator"
                size="sm" />
              <Input
                w="20%"
                values={values.Edition}
                onChange={handleChange}
                name="Edition"
                placeholder="Edition"
                size="sm" />
            </Flex>
            <Flex>
              <Input
                values={values.ActualPrice}
                onChange={handleChange}
                name="ActualPrice"
                placeholder="Actual Price"
                size="sm" />
              <Input
                values={values.SellPrice}
                onChange={handleChange}
                name="SellPrice"
                placeholder="Sell Price"
                size="sm" />
              <Input
                values={values.DiscountPrice}
                onChange={handleChange}
                name="DiscountPrice"
                placeholder="Discount Price"
                size="sm" />
              <Input
                maxW="20%"
                values={values.Qty}
                onChange={handleChange}
                name="Qty"
                placeholder="Qty"
                size="sm" />
            </Flex>
            <Flex>
              <Input
                w="40%"
                values={values.CoverType}
                onChange={handleChange}
                name="CoverType"
                placeholder="Cover Type"
                size="sm" />
              <Input
                w="40%"
                values={values.PrintQuality}
                onChange={handleChange}
                name="PrintQuality"
                placeholder="Print Quality"
                size="sm" />
              <Input
                w="20%"
                values={values.Cost}
                onChange={handleChange}
                name="Cost"
                placeholder="Cost"
                size="sm" />
            </Flex>
            <Flex>
              <Input
                w="40%"
                values={values.NoOfPages}
                onChange={handleChange}
                name="NoOfPages"
                placeholder="No of Pages"
                size="sm" />
              <Input
                w="40%"
                values={values.Condition}
                onChange={handleChange}
                name="Condition"
                placeholder="Condition"
                size="sm" />
            </Flex>
            <Input
              values={values.CategoryTags}
              onChange={handleChange}
              name="CategoryTags"
              placeholder="Category tags"
              size="sm" />
            <Flex>
              <Textarea
                w="65%"
                values={values.DetailsDescription}
                onChange={handleChange}
                name="DetailsDescription"
                placeholder="Details Description/ Caption"
                size="sm"
              ></Textarea>
              <Textarea w="45%" placeholder="Notes" size="sm"></Textarea>
            </Flex>
            <Button
              type="submit"
              size="sm"
              colorScheme="teal">
              Add New To Database
            </Button>
            <Button size="sm" colorScheme="teal">
              Update Existing One
            </Button>
          </Stack>
        </FormControl>
      </form>
    )
  }
  return (
    <Formik
      initialValues={{
        Title: '',
        Author: '',
        Publisher: '',
        Translator: '',
        Edition: '',
        ActualPrice: '',
        SellPrice: '',
        DiscountPrice: '',
        Qty: '',
        CoverType: '',
        PrintQuality: '',
        Cost: '',
        NoOfPages: '',
        Condition: '',
        CategoryTags: '',
        DetailsDescription: '',
        Notes: ''
      }}

      onSubmit={(values) => {
        // console.log(values);
        props.bookInput(values);
      }}
    >
      {({ values, handleChange, handleSubmit }) => {
        return (
          <div>
            {addBookForm(values, handleChange, handleSubmit)}
          </div>
        )
      }}
    </Formik>
  );
};

export default connect(null, mapDispatchToProps)(AddBook)
