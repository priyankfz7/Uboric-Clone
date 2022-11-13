import React from 'react'
import {Box,Image,Flex, border,} from "@chakra-ui/react"
import {Link} from "react-router-dom"
import{FiSearch} from "react-icons/fi"
import {IoPersonOutline} from "react-icons/io5"
import {BiHeart} from "react-icons/bi"
import {BsHandbag} from "react-icons/bs"


const Navbar = () => {
  return (
    <div style={{borderBottom:"1px solid gainsboro"}}>
    <div  style={{backgroundColor:"black",width:"100%",padding:"10px 0px 0.8px 1px"}}><p align="center" style={{color:"white"}}>FOR ONLINE PAYMENT EXTRA ₹10% DISCOUNT ON ORDERS ABOVE ₹500</p></div>
   <Box w="100%" p="4px"  >
    
    <Flex m="auto"justify="space-between"w="85%" p="7px" >
        <Box>
            < Image src="https://outstripinfotech.com/wpword/razi/wp-content/uploads/2022/08/200x80black.png" w="160px"/>
        </Box>
        <Box display={"flex"}justifyContent="space-between" w="30%" alignItems="center">
            <Link style={{color:"black" ,textDecoration:"none"}} to="/">Home</Link>
            <Link style={{color:"black" ,textDecoration:"none"}}  to="/about">About Us</Link>
            <Link style={{color:"black" ,textDecoration:"none"}}  to="/shop">Shop</Link>
            <Link style={{color:"black" ,textDecoration:"none"}}  to="/category">Categories</Link>
            <Link style={{color:"black" ,textDecoration:"none"}}  to="/contact">Contact Us</Link>
        </Box>
        <Box width="15%" display="flex" alignItems={"center"} justifyContent="space-between">
        <FiSearch size="20px" />
        <Link to="/login" >{<IoPersonOutline size="20px"/>}</Link>
        <BiHeart size="20px"/>
        <Link to="/cart"><BsHandbag size="20px"/></Link>

        </Box>
    </Flex>

   </Box>
   </div>
  )
}

export default Navbar