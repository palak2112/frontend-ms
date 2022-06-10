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
        EVENT DETAILS
      </Text>
      <Text color={textColorSecondary} fontSize='md' me='26px' mb='40px'>
        Add the event details in the form below..
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
          <FormControl isRequired>
              <FormLabel htmlFor='email'>Event name</FormLabel>
              <input  placeholder='Add event name' id='email' type='email' />
              {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
        </FormControl>

        <FormControl>
          <FormLabel htmlFor='Theme'>Select Theme</FormLabel>
          <select id='Theme' placeholder='Select Theme'>
            <option>Counselling</option>
            <option>Health</option>
            <option>Finance</option>

          </select>
        </FormControl>

        <FormControl isRequired>
  <FormLabel htmlFor='date'>Date</FormLabel>
  <input  type="date" id='date' placeholder='Date' />
        </FormControl>
        
        <FormControl isRequired>
  <FormLabel htmlFor='location'>Location</FormLabel>
  <input id='location' placeholder='Location' />
</FormControl>
        
<FormControl >
  <FormLabel htmlFor='Purpose of Event'>Purpose of Event</FormLabel>
  <input id='Purpose of Event' placeholder='Purpose of Event' />
</FormControl>

<FormControl isRequired>
  <FormLabel htmlFor='Description'>Description</FormLabel>
  <input id='Description' placeholder='Description' />
</FormControl>


<FormControl isRequired>
  <FormLabel htmlFor='Time'>Time</FormLabel>
  <input type="Time" id='Time' placeholder='Time' />
</FormControl>


      </SimpleGrid>
    </Card>
  );
}
