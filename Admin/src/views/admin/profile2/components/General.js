// Chakra imports
import { SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import React from "react";
import Information from "views/admin/profile/components/Information";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'
// Assets
export default function GeneralInformation(props) {
  const { ...rest } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );
  return (
    <Card mb={{ base: "0px", "2xl": "20px" }} {...rest}>
      <Text
      color={textColorPrimary}
      fontWeight='bold'
      fontSize='2xl'
      mt='10px'
      mb='4px'>
      Event Details
    </Text>
    
    <SimpleGrid >
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
      >
      Name : 
      <Text color={textColorSecondary} fontSize='md' me='10px' mb='20px'>
      Rise Beyond , A book donation drive !
    </Text>
    </Text>
    <Text
      color={textColorPrimary}
      fontWeight='bold'
      fontSize='md'
      
      // mt='10px'
      // mb='4px'
      >
      Theme :
      <Text color={textColorSecondary} fontSize='md' me='10px' mb='20px' >
     Education
    </Text>
    </Text>
    <Text
      color={textColorPrimary}
      fontWeight='bold'
      fontSize='md'
      
      // mt='10px'
      // mb='4px'
      >
      Date :
      <Text color={textColorSecondary} fontSize='md' me='10px' mb='20px' >
      12/02/2001
    </Text>
    </Text>
    <Text
      color={textColorPrimary}
      fontWeight='bold'
      fontSize='md'
      
      // mt='10px'
      // mb='4px'
      >
      Time :
      <Text color={textColorSecondary} fontSize='md' me='10px' mb='20px' >
      9:00 - 12:00 PM
    </Text>
    </Text>
    <Text
      color={textColorPrimary}
      fontWeight='bold'
      fontSize='md'
      // mt='10px'
      // mb='4px'
      >
      Agenda :
      <Text color={textColorSecondary} fontSize='md' me='10px' mb='20px' >
      Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit 
    </Text>
    </Text>

    
    <Text
      color={textColorPrimary}
      fontWeight='bold'
      fontSize='md'
      // mt='10px'
      // mb='4px'
      >
      Description :
      <Text color={textColorSecondary} fontSize='md' >
      Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit 
    </Text>
    </Text>
      </SimpleGrid>
    </Card>
  );
}
