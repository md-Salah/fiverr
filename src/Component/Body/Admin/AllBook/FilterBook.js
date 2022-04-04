import { Box, HStack, Select } from "@chakra-ui/react";
import React, { useState } from "react";

export const FilterBook = () => {

  const filterBy = {
    selectedAuthor: "",
    authors: ["Humayun Ahmed", "Zafor iqbal", "Agatha Cristie"],
    selectedPublisher: "",
    publishers: [
      "Sheba Prokashoni",
      "Onno Prokash",
      "Somokalin Prokashoni",
    ],
    selectedCondition: "",
    Conditions: ["Old", "New"],
    selectedCategories: [],
    categories: [
      "War",
      "History",
      "Biography",
      "Programming",
      "Learn English",
      "BCS",
      "Thriller",
      "Math",
      "HSC Admission",
      "Motivational",
    ],
    selectedPrintQuality: "",
    printQualities: ["Orginal", "Local", "Premium", "Indian Orginal"],
  }

  const [filter, setFilter] = useState(filterBy);

  return (
    <Box>
      <HStack mb='15px' spacing={5} w={{ base: "100%", md: "50%" }}>
        <Select placeholder="Author" size="sm" variant="flushed">
          {filterBy.authors.map((value, i) => (
            <option key={i} value={value}>
              {value}
            </option>
          ))}
        </Select>
        <Select placeholder="Publisher" size="sm" variant="flushed">
          {filterBy.publishers.map((value, i) => (
            <option key={i} value={value}>
              {value}
            </option>
          ))}
        </Select>
        <Select placeholder="Condition" size="sm" variant="flushed">
          {filterBy.Conditions.map((value, i) => (
            <option key={i} value={value}>
              {value}
            </option>
          ))}
        </Select>

        <Select placeholder="Category" size="sm" variant="flushed">
          {filterBy.categories.map((value, i) => (
            <option key={i} value={value}>
              {value}
            </option>
          ))}
        </Select>
        <Select placeholder="Print Quality" size="sm" variant="flushed">
          {filterBy.printQualities.map((value, i) => (
            <option key={i} value={value}>
              {value}
            </option>
          ))}
        </Select>
      </HStack>
    </Box>
  );
};
