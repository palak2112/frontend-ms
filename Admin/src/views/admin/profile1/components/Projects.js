// Chakra imports
import { SimpleGrid,Text, useColorModeValue } from "@chakra-ui/react";

// Assets
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
    <div> 
    <Card mb={{ base: "0px", "2xl": "20px" }} >
    <Text
      color={textColorPrimary}
      fontWeight='bold'
      fontSize='2xl'
      mt='10px'
      mb='4px'>
      User Details
    </Text>
    
    <SimpleGrid columns='2' gap='20px'>
      {/* <Information
        boxShadow={cardShadow}
        title='Education'
        value='Stanford University'
      />
      <Information
        boxShadow={cardShadow}
        title='Languages'
        value='English, Spanish, Italian'
      />
      <Information
        boxShadow={cardShadow}
        title='Department'
        value='Product Design'
      />
      <Information
        boxShadow={cardShadow}
        title='Work History'
        value='Google, Facebook'
      />
      <Information
        boxShadow={cardShadow}
        title='Organization'
        value='Simmmple Web LLC'
      />
      <Information
        boxShadow={cardShadow}
        title='Birthday'
        value='20 July 1986'
      /> */}

     <Text
      color={textColorPrimary}
      fontWeight='bold'
      fontSize='md'
      // mt='10px'
      // mb='4px'
      >
      Name : 
      <Text color={textColorSecondary} fontSize='md' me='2px' mb='4px'>
      Sarah Shah
    </Text>
    </Text>
    <Text
      color={textColorPrimary}
      fontWeight='bold'
      fontSize='md'
      margin-top='-10px'
      // mt='10px'
      // mb='4px'
      >
      U - ID : 
      <Text color={textColorSecondary} fontSize='md' me='2px' mb='4px'>
     12345
    </Text>
    </Text>
    <Text
      color={textColorPrimary}
      fontWeight='bold'
      fontSize='md'
      // mt='10px'
      // mb='4px'
      >
      Email :
      <Text color={textColorSecondary} fontSize='md' me='2px' mb='4px'>
      sara@gmail.com
    </Text>
    </Text>
    <Text
      color={textColorPrimary}
      fontWeight='bold'
      fontSize='md'
      margin-top='-10px'
      // mt='10px'
      // mb='4px'
      >
      Address :
      <Text color={textColorSecondary} fontSize='md' me='2px' mb='4px'>
      300, Lorem ipsum dolor sit amet, consectetur
    </Text>
    </Text>
    <Text
      color={textColorPrimary}
      fontWeight='bold'
      fontSize='md'
      // mt='10px'
      // mb='4px'
      >
      Year of Enrollment : 
      <Text color={textColorSecondary} fontSize='md' me='2px' mb='4px'>
      2005
    </Text>
    </Text>
    <Text
      color={textColorPrimary}
      fontWeight='bold'
      fontSize='md'
      margin-top='-10px'
      // mt='10px'
      // mb='4px'
      >
      Phone no. :
      <Text color={textColorSecondary} fontSize='md' me='2px' mb='4px'>
      1234567899
    </Text>
    </Text>
    <Text
      color={textColorPrimary}
      fontWeight='bold'
      fontSize='md'
      // mt='10px'
      // mb='4px'
      >
      Previous Donations :
      <Text color={textColorSecondary} fontSize='md' me='2px' mb='4px'>
      Lorem ipsum dolor sit amet, consectetur
    </Text>
    </Text>
    <Text
      color={textColorPrimary}
      fontWeight='bold'
      fontSize='md'
      // mt='10px'
      // mb='4px'
      >
     Status :
      <Text color={textColorSecondary} fontSize='md' me='2px' mb='4px'>
      Pending
    </Text>
    </Text>
    
    



    </SimpleGrid>

  
  </Card>



      

      </div>
  );
}
