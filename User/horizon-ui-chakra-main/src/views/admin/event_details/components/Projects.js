// Chakra imports
import { Center,SimpleGrid,Text, useColorModeValue } from "@chakra-ui/react";
// Assets
import { useTranslation } from "react-i18next";

import Project1 from "assets/img/profile/Project1.png";
import Project2 from "assets/img/profile/Project2.png";
import Project3 from "assets/img/profile/Project3.png";
import { Image, Box } from '@chakra-ui/react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'
// Custom components
import Card from "components/card/Card.js";
import React, { useEffect, useState } from "react";
import Project from "views/admin/profile/components/Project";
import { Heading } from '@chakra-ui/react'

export default function Projects({posterUrl,name}) {
  // Chakra Color Mode
  const {t} = useTranslation();

  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );

     useEffect(() => {
      console.log(posterUrl);
     },[posterUrl])

  return (
    <div> 
    <Card mb={{ base: "0px", "2xl": "20px" }} >
    <Text
      color={textColorPrimary}
      fontWeight='bold'
      fontSize='2xl'
      mt='10px'
      mb='4px'>
      {t(name)}
    </Text>
    
    <SimpleGrid>
      
     <Box >
      <Center>
      <Image src={posterUrl} alt='No image' height='250px' width='50%'  borderRadius={"20px"}/>
      </Center>
      
      </Box>
 
    </SimpleGrid>

  
  </Card>



      

      </div>
  );
}
