// Chakra imports
import { Text, useColorModeValue } from "@chakra-ui/react";
// Assets
import Project1 from "assets/img/profile/Project1.png";
import Project2 from "assets/img/profile/Project2.png";
import Project3 from "assets/img/profile/Project3.png";
import { Image, Box } from '@chakra-ui/react'
// Custom components
import Card from "components/card/Card.js";
import React from "react";
import Project from "views/admin/profile/components/Project";
import { Heading } from '@chakra-ui/react'

export default function Projects(props) {
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );
  return (
    <Card mb={{ base: "0px", "2xl": "20px" }}>
      
      <Box boxSize='xs'>
      <Image src='https://www.stjudechild.org/images/logo.png' alt='Dan Abramov' height='250px' width='450px' />
      </Box>
      
      <Text color={textColorSecondary} fontSize='md' me='26px' mb='40px'>
        ADD DETAILS ABOUT THE BOOK DONATION CAMPAIGN.
      </Text>
        
      <Text color={textColorSecondary} fontSize='md' me='26px' mb='40px' font-color='green'>
        Jude Park, Rohini, New delhi
      </Text>


    </Card>
  );
}
