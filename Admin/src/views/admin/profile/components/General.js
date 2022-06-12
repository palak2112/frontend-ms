// Chakra imports
import {Textarea,Select,Input, Flex,SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import {React,useState,useEffect} from "react";

import Information from "views/admin/profile/components/Information";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button,
  Center
} from '@chakra-ui/react'

import {toast} from "react-toastify"

// Assets
export default function GeneralInformation({uploadFile,gridArea,eventName,theme,agenda,location,description,
  startDateTime,endDateTime,posterUrl,setEventName,setTheme,setAgenda,setDescription,setStartDateTime,
  setEndDateTime,setPosterUrl,setLocation}) {
  const {...rest} = gridArea;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );
  // const [eventName,setEventName] = useState("");
  // const [theme,setTheme] = useState("");
  // const [agenda,setAgenda] = useState("");
  // const [location,setLocation] = useState("");
  // const [description,setDescription] = useState("");
  // const [startDateTime,setStartDateTime] = useState("");
  // const [endDateTime,setEndDateTime] = useState("");
  // const [posterUrl, setPosterUrl] = useState("");
  // const history = useHistory();


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
      <br></br>
      {/* <Text color={textColorSecondary} fontSize='md' me='26px' mb='40px'>
        Add the event details in the form below..
      </Text> */}
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
              <Input  placeholder='Add event name' required = {true} id='event name' type='text' value={eventName} onChange={(e) => {
                  setEventName(e.target.value);
                }}/>
              {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
        </FormControl>

        <FormControl>
          <FormLabel htmlFor='Theme'>Select Theme</FormLabel>
          <Select id='Theme' placeholder='Select Theme' value={theme} onChange={(e) => {
                  setTheme(e.target.value);
                }}>
            <option>HEALTHCARE</option>
            <option>EDUCATION</option>
            <option>LIVELIHOOD</option>
            <option>LIFESTYLE</option>
            <option>CAREER_COUNSELLING</option>
            <option>GENERAL_COUNSELLING</option>
            <option>WELLNESS_COUNSELLING</option>
          </Select>
        </FormControl>

        <FormControl isRequired>
  <FormLabel htmlFor='date'>Start Date & Time</FormLabel>
  <Input  type="datetime-local" id='date' placeholder='Date' value={startDateTime} onChange={(e)=>{
    setStartDateTime(e.target.value);
  }}/>
        </FormControl>

        <FormControl isRequired>
  <FormLabel htmlFor='date'>End Date & Time</FormLabel>
  <Input  type="datetime-local" id='date' placeholder='Date' value={endDateTime} onChange={(e)=>{
    setEndDateTime(e.target.value);
  }}/>
        </FormControl>
        
        <FormControl isRequired>
  <FormLabel htmlFor='location'>Location</FormLabel>
  <Input id='location' placeholder='Add Location' value={location} onChange={(e)=>{
    setLocation(e.target.value);
  }}/>
</FormControl>
        
<FormControl >
  <FormLabel htmlFor='Purpose of Event'>Agenda</FormLabel>
  <Input id='Purpose of Event' placeholder='Add Agenda' value={agenda}  onChange={(e)=>{
    setAgenda(e.target.value);
  }}/>
</FormControl>


      </SimpleGrid>
      <br></br>
      <SimpleGrid>
      <FormControl isRequired>
  <FormLabel htmlFor='Description'>Description</FormLabel>
  <Textarea id='Description' placeholder='Add Description' value={description} onChange={(e)=>{
    setDescription(e.target.value);
  }} />
</FormControl> 
      </SimpleGrid>
      <br></br>
      <br></br>
    </Card>
  );
}
