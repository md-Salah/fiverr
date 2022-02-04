import React, { useState } from "react";
import { Box, Select, Text } from "@chakra-ui/react";
import ShowList from "./ShowList";
import { types } from "./OrderListData";

export const Orders = () => {
  const [type, setType] = useState(types[0]);

  return (
    <Box mt="10px" mx="3%" px="2%">
      {/*Filter Orders*/}
      <Select variant="flushed" size="sm">
        {types.map((type) => (
            <option
              key={type}
              value={type}
              onClick={(e) => setType(e.target.value)}
            >
              {type + " Orders"}
            </option>
        ))}
      </Select>

      <ShowList type={type} />
    </Box>
  );
};
