import { Box, Button, Heading, HStack,Text ,Image} from '@chakra-ui/react'
import React from 'react'

const Cartitem = ({image,name,price,id,onClick}) => {
  return (
    <HStack p="25px" borderBottom="1px solid gainsboro">
        <Box>
            <Image w="40%"src={image}/>
        </Box>
        <Box>
            <Heading mb="14px"size="sm">{name}</Heading>
            <Text mb="14px" color="red">{`₹ ${price}`}</Text>
            <Button onClick={()=>onClick(id)} w="60%"borderRadius="0px"colorScheme="blackAlpha">Delete</Button>
        </Box>
    </HStack>
  )
}

export default Cartitem