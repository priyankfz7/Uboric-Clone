import React from "react";
// import data from "../../db.json"
import {Link} from "react-router-dom"
import { AuthContext } from "../Context/AuthContextProvider";

import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,

  Stack,
 
} from "@chakra-ui/react";

const int = {
  name: "",
  email: "",
  password: "",
  phone:""
};

const SignUp = () => {
    const {authState,login}=React.useContext(AuthContext);
    console.log(authState)
    const [data,setData]=React.useState(int);
    const onSubmit=()=>{
        login(data.email,data.password);
        setData(int);
        
    }
    console.log(data)
    const onChange=(e)=>{
        const {name,value}=e.target;
        setData({...data,[name]:value});
    }

  return (

    <Box height="110vh" bg="#ffffff">
      <Divider orientation="horizontal" />
      <Box
        width="1150px"
        position="center"
        margin="auto"
        padding="20px 0px 80px 0px"
        height="900px"
      >
        <Box width="20%" textAlign="left">
          <Breadcrumb fontWeight="light" fontSize="sm">
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="/signup">Sign-Up</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
        <Box width="100%" padding="20px 0px 20px">
          <Heading as="h3" size="lg" fontWeight="medium" textAlign="center">
            Sign Up
          </Heading>
        </Box>
        <Divider orientation="horizontal" />
        <Box width="50%" margin="0 auto" padding="50px 0px 0px 0px">
          <Stack spacing={4}>
            <Box background="none" color="none">
              <FormControl isRequired>
                <FormLabel fontWeight="hairline">Full name</FormLabel>
                <Input
                  focusBorderColor="#353535"
                  errorBorderColor="red.300"
                  type="text"
                  size="lg"
                  borderRadius="0px"
                  name="name"
                  value={data.name}
                  onChange={onChange}
                
                />
              </FormControl>
            </Box>
            <Box>
              <FormControl isRequired>
                <FormLabel fontWeight="hairline">Email address</FormLabel>
                <Input
                  focusBorderColor="black"
                  errorBorderColor="red.300"
                  type="email"
                  name="email"
                  value={data.email}
                  size="lg"
                  borderRadius="0px"
                  onChange={onChange}
                />
              </FormControl>
            </Box>
            <Box>
              <FormControl isRequired>
                <FormLabel fontWeight="hairline">Phone</FormLabel>
                <Input
                  focusBorderColor="black"
                  errorBorderColor="red.300"
                  type="number"
                  name="phone"
                  size="lg"
                  value={data.phone}
                  borderRadius="0px"
                  onChange={onChange}
                />
              </FormControl>
            </Box>
            <Box>
              <FormControl isRequired>
                <FormLabel fontWeight="hairline">Password</FormLabel>
                <InputGroup>
                <Input type="password"
                focusBorderColor="black"
                errorBorderColor="red.30"
                value={data.password}
                onChange={onChange}
                name="password"
                size="lg"
                borderRadius="0px"
                  
                 
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    
                    
                  >
                    
                  </Button>
                </InputRightElement>
              </InputGroup>
              </FormControl>
            </Box>
          </Stack>
          <Box paddingTop="26px">
            Already a user?{" "}
            <Link style={{color:"teal"}} to="/login">
              Sign Up
            </Link>
          </Box>
          <Link to="/login"><Button
            borderRadius="0px"
            width="180px"
            color="white"
            
            background="#302C26"
            padding="20px"
            marginTop="20px"
            onClick={onSubmit}
            _hover={{
              color: "#302C26",
              background: "#ffffff",
              border: "1px solid black"
              
            }}
          >
            Sign Up
          </Button></Link>
          
        </Box>
      </Box>
    </Box>
  );
};

export default SignUp;