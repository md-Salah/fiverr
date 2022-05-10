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
  variant="flushed",
  size = "md",
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
        <FormLabel mb="0">
          {label + ":"}
        </FormLabel>
      )}

      <Input
        size={size}
        bg='white'
        placeholder={placeholder}
        type="text"
        variant={variant}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        p='5px'
        borderRadius='none'
      />

      {suggestion.length > 0 && (
        <List
          boxShadow="md"
          my="2px"
          position="absolute"
          w="100%"
          zIndex="2"
          bg="white"
        >
          {suggestion.map((item, i) => (
            <ListItem
              fontSize="sm"
              borderBottom="1px solid #e9e9e9"
              key={i}
              p="2px"
              pl="5px"
              cursor="pointer"
              _hover={{ bg: "teal", color:'white' }}
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
