import { Box, Button, Flex, Heading, HStack, Text } from "@chakra-ui/react";
import React from "react";
import Cartitem from "./Cartitem";
const tell = (arr) => {
  let temp = 0;
  for (let i = 0; i < arr.length; i++) {
    let t = arr[i];
    temp += Number(t.price);
  }
  return temp;
};
const getData = () => {
  return fetch("https://uboric-backend.onrender.com/cart").then((res) =>
    res.json()
  );
};

const Cart = () => {
  const [cart, setCart] = React.useState([]);
  const [total, setTotal] = React.useState(0);
  console.log(cart);
  const append = () => {
    getData().then((res) => {
      setCart(res);
      setTotal(tell(res));
    });
  };
  React.useEffect(() => {
    append();
  }, []);
  const handledelete = (id) => {
    fetch(`https://uboric-backend.onrender.com/cart/${id}`, {
      method: "DELETE",
    }).then((res) => append());
  };
  if (cart.length === 0) {
    return (
      <Box p="200px">
        <Heading align="center">Cart is Empty!!</Heading>
      </Box>
    );
  }

  return (
    <>
      <Box margin="auto">
        <Heading align="center" mt="50px" mb="50px">
          Cart
        </Heading>
      </Box>
      <Flex w="80%" m="auto" gap="10%">
        <Box width="60%">
          {cart.map((c) => (
            <Cartitem
              image={c.image}
              onClick={handledelete}
              price={c.price}
              id={c.id}
              name={c.name}
            />
          ))}
        </Box>
        <Box width="30%">
          <Box w="100%" backgroundColor="#f5f5f5" p="30px">
            <Flex
              justify="space-between"
              p="8px"
              borderBottom="1px solid gainsboro"
            >
              <Heading size="sm">
                {`Total Items   ~  `}
                {cart.length}
              </Heading>
            </Flex>
            <Flex
              justify="space-between"
              p="8px"
              borderBottom="1px solid gainsboro"
            >
              <Text>SubTotal</Text>
              <Text>{`₹${total}`}</Text>
            </Flex>
            <Flex
              justify="space-between"
              p="8px"
              borderBottom="1px solid gainsboro"
            >
              <Text>Texes & Duties</Text>
              <Text>$6</Text>
            </Flex>
            <Flex justify="space-between" p="8px">
              <Heading size="md">Total</Heading>
              <Heading size="md">{`₹${total + 6}`}</Heading>
            </Flex>
          </Box>
          <Button
            marginBottom="50px"
            colorScheme={"blackAlpha"}
            backgroundColor="black"
            hover="none"
            width="100%"
            borderRadius="0px"
            onClick={() => {
              alert("Your Order has been placed successfully");
            }}
          >
            Proceed To Checkout
          </Button>
        </Box>
      </Flex>
    </>
  );
};

export default Cart;
