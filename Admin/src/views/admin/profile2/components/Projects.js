// Chakra imports
import { Center,SimpleGrid,
          Text, 
          useColorModeValue,
          Image, 
          Box } from "@chakra-ui/react";


// Custom components
import Card from "components/card/Card.js";
import React from "react";


export default function Projects({posterUrl,name}) {
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  return (
    <div> 
    <Card mb={{ base: "0px", "2xl": "20px" }} >
    <Text
      color={textColorPrimary}
      fontWeight='bold'
      fontSize='2xl'
      mt='10px'
      mb='4px'>
      {name}
    </Text>
    
    <SimpleGrid>
      <Box >
      <Center>
      <Image src={posterUrl} alt='No Image' height='250px' width='50%' borderRadius={"20px"}  />
      </Center> 
      </Box>
    </SimpleGrid>

  
  </Card>



      

      </div>
  );
}
