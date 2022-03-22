import React, { useState } from "react";
import {
  Divider,
  FormControl,
  FormLabel,
  Input,
  List,
  ListItem,
} from "@chakra-ui/react";

export const AutoCompleteInput = ({
  size = "md",
  id,
  label = "",
  value = "",
  setValue,
  options = [],
  placeholder = "",
  bg='white',
}) => {
  const [suggestion, setSuggestion] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setValue(value);

    let filtered = [];
    if (value != "") {
      filtered = options.sort().filter((text) => {
        const regex = new RegExp(`${value}`, "gi");
        return text.match(regex);
      });
    }
    //console.log(filtered);
    setSuggestion(filtered);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setSuggestion([]);
    }, 100);
  };

  const onSelect = (value) => {
    setValue(value);
    handleBlur();
  };

  return (
    <FormControl isInvalid={false} isRequired>
      {label && (
        <FormLabel mb="0" htmlFor={id}>
          {label + ":"}
        </FormLabel>
      )}

      <Input
        size={size}
        bg='white'
        placeholder={placeholder}
        type="text"
        variant="flushed"
        id={id}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      {suggestion.length > 0 && (
        <List
          boxShadow="md"
          my="2px"
          position="absolute"
          w="100%"
          zIndex="2"
          bg="whiteAlpha.700"
        >
          {suggestion.map((item, i) => (
            <ListItem
              fontSize="sm"
              borderBottom="1px solid #e9e9e9"
              key={i}
              p="2px"
              pl="5px"
              cursor="pointer"
              _hover={{ bg: "#008080", color:'#fff' }}
              onClick={() => onSelect(item)}
            >
              {item}
            </ListItem>
          ))}
        </List>
      )}
    </FormControl>
  );
};
