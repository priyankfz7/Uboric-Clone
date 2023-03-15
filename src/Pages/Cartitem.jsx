import { Box, Button, Heading, HStack, Text, Image } from "@chakra-ui/react";
import React from "react";

const Cartitem = ({ image, name, price, id, onClick }) => {
  return (
    <Box
      display={"flex"}
      justifyContent="space-between"
      p="14px"
      borderBottom={"1px solid gainsboro"}
    >
      <Box>
        <Image w="200px" h="200px" src={image} />
      </Box>
      <Box width="50%">
        <Heading mb="14px" size="sm">
          {name}
        </Heading>
        <Text mb="14px" color="red">{`₹ ${price}`}</Text>
        <Button
          onClick={() => onClick(id)}
          w="60%"
          borderRadius="0px"
          colorScheme="blackAlpha"
        >
          Delete
        </Button>
      </Box>
    </Box>
  );
};

export default Cartitem;
