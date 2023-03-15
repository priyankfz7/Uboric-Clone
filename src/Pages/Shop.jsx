import React from "react";
import { SlArrowDown } from "react-icons/sl";
import {
  Button,
  useDisclosure,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  HStack,
  Box,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import SingleItem from "./SingleItem";
import { Link } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [pop, setPop] = React.useState({
    image:
      "https://www.uboric.com/wp-content/uploads/2022/08/12-Piece-Lot-Cotton-Tank-Top-130x130.jpg",
    name: "12 Piece Lot Cotton Tank Top",
    price: "10000",
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  console.log(products);
  const onClick = (name, image, price) => {
    setPop({ name: name, price: price, image: image });
    onOpen();
  };
  const changeProducts = (root) => {
    fetch(`http://localhost:5000/${root}`)
      .then((res) => res.json())
      .then((res) => setProducts(res));
  };
  const handleAddCart = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 700);
    fetch("https://uboric-backend.onrender.com/cart", {
      method: "POST",
      body: JSON.stringify(pop),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => console.log("done"));
  };
  React.useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setProducts(res);
      });
  }, []);
  return (
    <div>
      <div
        style={{
          width: "80%",
          margin: "auto",
          marginTop: "50px",
          justifyContent: "space-between",
          display: "flex",
        }}
      >
        <div style={{ width: "25%", height: "500px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "5px",
              borderBottom: "1px solid grey",
              marginBottom: "10px",
            }}
          >
            <div>Product Category</div>
            <div>
              {" "}
              <SlArrowDown />
            </div>
          </div>
          <div
            onClick={() => changeProducts("clothing")}
            style={{ padding: "5px", cursor: "pointer" }}
          >
            Clothing (242)
          </div>
          <div
            onClick={() => changeProducts("bags")}
            style={{ padding: "5px", cursor: "pointer" }}
          >
            Bags (16)
          </div>
          <div style={{ padding: "5px" }}>Bathroom Accessories (8)</div>
          <div style={{ padding: "5px" }}>Electric Appliances (130)</div>
          <div style={{ padding: "5px" }}>Grocery (4)</div>
          <div style={{ padding: "5px" }}>Health & Personal Care (111)</div>
          <div style={{ padding: "5px" }}>Industrial Supplies (9)</div>
          <div style={{ padding: "5px" }}>Health & Personal Care (111)</div>
          <div style={{ padding: "5px" }}>Women Accessories (139)</div>
          <div style={{ padding: "5px" }}>Spices (15)</div>
        </div>

        <div style={{ width: "70%", marginBottom: "40px" }}>
          <Heading m="20px">Shop</Heading>
          <div
            width="100%"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "30px",
            }}
          >
            {products.map((p) => (
              <div onClick={() => onClick(p.title, p.image, p.price)}>
                <SingleItem image={p.image} name={p.title} price={p.price} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <>
        <Modal isOpen={isOpen} onClose={onClose} size="3xl">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Chose Best Products For You !!</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <HStack height="200px" justify={"space-between"}>
                <HStack
                  width="80%"
                  borderRight={"1px solid gainsboro"}
                  mr="10px"
                >
                  <Box w="50%">
                    <Image w="80%" src={pop.image} alt="pro" />
                  </Box>
                  <Box>
                    <Heading size="sm" mb="5px">
                      {pop.name}
                    </Heading>
                    <Text mb="5px" color="red">{`₹${pop.price}`}</Text>
                    <Text mb="5px">QTY: 1</Text>
                    <Text mb="5px">color: As per Product Image</Text>
                  </Box>
                </HStack>
                <VStack width="30%">
                  <Box w="100%">
                    <Link to="/cart">
                      <Button
                        colorScheme="blackAlpha"
                        style={{ borderRadius: "0px", width: "100%" }}
                      >
                        View Cart
                      </Button>
                    </Link>
                  </Box>
                  <Box w="100%">
                    <Button
                      isLoading={loading}
                      loadingText="Adding.."
                      colorScheme="blackAlpha"
                      style={{ borderRadius: "0px", width: "100%" }}
                      onClick={handleAddCart}
                    >
                      Add To Cart
                    </Button>
                  </Box>
                </VStack>
              </HStack>
            </ModalBody>

            <ModalFooter></ModalFooter>
          </ModalContent>
        </Modal>
      </>
    </div>
  );
};

export default Shop;
