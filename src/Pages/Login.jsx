import React from "react";
import { AuthContext } from "../Context/AuthContextProvider";
import {Link} from "react-router-dom"
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
    
    Stack,
  } from "@chakra-ui/react";
function Login() {
    const [data,setData]=React.useState({email:"",password:""});
    const {authState}=React.useContext(AuthContext);
    console.log(authState);

    const onSubmit=()=>{
        if (authState.email===data.email && authState.password===data.password){
          alert("Login Successfull")

        }else{
          alert("Wrong Username or Password");
        }
    }
    console.log(data)
    const onChange=(e)=>{
        const {type,value}=e.target;
        setData({...data,[type]:value});
    }
    
    return (
      <>
      <Box height="85vh" bg="#ffffff" padding="0px">
      <Divider orientation="horizontal" />
      <Box
        width="1150px"
        position="center"
        margin="auto"
        height="100%"
        padding="20px 0px 60px 0px"
      >
        <Box width="20%" textAlign="left" padding="">
          <Breadcrumb fontWeight="light" fontSize="sm">
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="/sign-in">Sign-In</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
        <Box width="100%" padding="20px 0px 50px">
          <Heading as="h3" size="lg" fontWeight="medium" textAlign="center">
            Welcome Back
          </Heading>
        </Box>
        <Divider orientation="horizontal" />
        <Box width="50%" margin="0 auto" padding="50px 0px 50px 0px">
          <Stack spacing={4}>
            <Box>
              <FormControl>
                <FormLabel fontWeight="hairline">Email address *</FormLabel>
                <Input
                  focusBorderColor="black"
                  errorBorderColor="red.300"
                  type="email"
                  value={data.email}
                  size="lg"
                  borderRadius="0px"
                  onChange={onChange}
                />
              </FormControl>
            </Box>
            <Box>
              <FormControl>
                <FormLabel fontWeight="hairline">Password *</FormLabel>
                <Input
                  focusBorderColor="black"
                  errorBorderColor="red.300"
                  type="password"
                  size="lg"
                  borderRadius="0px"
                  onChange={onChange}
                  value={data.password}
                  
                />
              </FormControl>
            </Box>
          </Stack>
          <Box paddingTop="50px">
            Are you new here 💅?{" "}
            <Link style={{color:"teal" }} to="/signup">
              Sign Up
            </Link>
          </Box>
          <Link to="/"><Button
            borderRadius="0px"
            width="180px"
            color="white"
            background="#302C26"
            padding="20px"
            marginTop="20px"
            _hover={{
              color: "#302C26",
              background: "#ffffff",
              border: "1px solid black",
            }}
            onClick={onSubmit}
          >Sign In
            
            
          </Button></Link>
          
        </Box>
      </Box>
    </Box></>
   
    )
  }
export default Login;