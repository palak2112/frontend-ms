import { Box, Grid, SimpleGrid, Text, useColorModeValue, Input, InputGroup, InputRightElement, Icon, Flex, Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

// Custom components
import Card from "components/card/Card.js";
import React from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiEyeCloseLine } from "react-icons/ri";
import Information from "views/admin/profile/components/Information";
import {
  Select,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'
import { useState } from "react";
import General from 'views/admin/request2/components/General';

export default function GeneralInformation(props) {
  const [uploadFile, setUploadFile] = useState("");
  const [eventName, setEventName] = useState("");
  const [theme, setTheme] = useState("");
  const [agenda, setAgenda] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [startDateTime, setStartDateTime] = useState("");
  const [endDateTime, setEndDateTime] = useState("");
  const textColorBrand = useColorModeValue("brand.500", "white");
  const handleClick = () => setShow(!show);
  const [show, setShow] = React.useState(false);
  const textColor = useColorModeValue("navy.700", "white");
  const { ...rest } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );
  const [input, setInput] = useState('')

  const handleInputChange = (e) => setInput(e.target.value)

  let isError = input === ''
  return (
    <>
      <Box pt={{ base: "180px", md: "80px", xl: "80px" }}>
        <Grid
          mx='150px'
          gridTemplateColumns={{ xl: "repeat(3, 1fr)", "2xl": "1fr 0.46fr" }}
          gap={{ base: "20px", xl: "20px" }}
          display={{ base: "block" }}>
          <General gridArea={{ base: "2 / 1 / 3 / 2", lg: "1 / 2 / 2 / 3" }}
          minH="365px"
          pe="20px"/>

        </Grid>
      </Box>



      {/* <FormControl isInvalid={isError} isRequired>
        <FormLabel
          display='flex'
          ms='4px'
          fontSize='lg'
          fontWeight='500'
          color={textColor}
          mb='8px'>
          First Name
        </FormLabel>
        <Input
          // w='0%'
          backgroundColor="white"
          isRequired={true}
          variant='auth'
          fontSize='md'
          ms={{ base: "0px", md: "0px" }}
          type='email'
          placeholder='Enter your First Name'
          mb='0px'
          fontWeight='500'
          size='lg'
          // value={input}
          onChange={handleInputChange}
        />
        {!isError ? (
          <FormHelperText></FormHelperText>
        ) : (
          <FormErrorMessage>First name is required.</FormErrorMessage>
        )}
      </FormControl>

      <FormControl isInvalid={isError} isRequired>
        <FormLabel
          display='flex'
          ms='4px'
          fontSize='lg'
          fontWeight='500'
          color={textColor}
          mb='8px'
          mt='30px'>
          Last Name
        </FormLabel>
        <Input
          backgroundColor="white"
          isRequired={true}
          variant='auth'
          fontSize='md'
          ms={{ base: "0px", md: "0px" }}
          type='email'
          placeholder='Enter your Last Name'
          mb='0px'
          fontWeight='500'
          size='lg'
          // value={input}
          onChange={handleInputChange}
        />
        {!isError ? (
          <FormHelperText></FormHelperText>
        ) : (
          <FormErrorMessage>Last Name is required.</FormErrorMessage>
        )}
      </FormControl>

      <FormControl isInvalid={isError} isRequired>
        <FormLabel
          display='flex'
          ms='4px'
          fontSize='lg'
          fontWeight='500'
          color={textColor}
          mb='8px'
          mt='30px'>
          Email
        </FormLabel>
        <Input
          backgroundColor="white"
          isRequired={true}
          variant='auth'
          fontSize='md'
          ms={{ base: "0px", md: "0px" }}
          type='email'
          placeholder='Enter your Email'
          mb='0px'
          fontWeight='500'
          size='lg'
          // value={input}
          onChange={handleInputChange}
        />
        {!isError ? (
          <FormHelperText></FormHelperText>
        ) : (
          <FormErrorMessage>Email is required.</FormErrorMessage>
        )}
      </FormControl>
      <FormLabel
        display='flex'
        ms='4px'
        fontSize='lg'
        fontWeight='500'
        color={textColor}
        mb='8px'
        mt='30px'>
        Address
      </FormLabel>
      <Input
        backgroundColor="white"
        isRequired={true}
        variant='auth'
        fontSize='md'
        ms={{ base: "0px", md: "0px" }}
        type='email'
        placeholder='Address line 1'
        mb='10px'
        fontWeight='500'
        size='lg'
        // value={input}
        onChange={handleInputChange}
      />
      <Input

        backgroundColor="white"
        isRequired={true}
        variant='auth'
        fontSize='md'
        ms={{ base: "0px", md: "0px" }}
        type='email'
        placeholder='Address line 2'
        mb='10px'
        fontWeight='500'
        size='lg'
        // value={input}
        onChange={handleInputChange}
      />
      <Input
        backgroundColor="white"
        isRequired={true}
        variant='auth'
        fontSize='md'
        ms={{ base: "0px", md: "0px" }}
        type='email'
        placeholder='City'
        mb='10px'
        fontWeight='500'
        size='lg'
        // value={input}
        onChange={handleInputChange}
      />
      <Select
        backgroundColor="white"
        isRequired={true}
        variant='auth'
        fontSize='md'
        ms={{ base: "0px", md: "0px" }}
        type='email'
        placeholder='Select State'
        mb='10px'
        fontWeight='500'
        size='lg'
        // value={input}
        onChange={handleInputChange}>
        <option>Andaman and Nicobar Islands</option>
        <option>Andhra Pradesh</option>
        <option>Arunachal Pradesh</option>
        <option>Assam</option>
        <option>Bihar</option>
        <option>Chandigarh</option>
        <option>Chhattisgarh</option>
        <option>Dadra Nagar Haveli and Daman Diu</option>
        <option>Goa</option>
        <option>Gujarat</option>
        <option>Haryana</option>
        <option>Himachal Pradesh</option>
        <option>Jammu and Kashmir</option>
        <option>Jharkhand</option>
        <option>Karnataka</option>
        <option>Kerala</option>
        <option>Lakshadweep</option>
        <option>Ladakh</option>
        <option>Madhya Pradesh</option>
        <option>Maharashtra</option>
        <option>Manipur</option>
        <option>Meghalaya</option>
        <option>Mizoram</option>
        <option>Nagaland</option>
        <option>Delhi</option>
        <option>Odisha</option>
        <option>Puducherry</option>
        <option>Punjab</option>
        <option>Rajasthan</option>
        <option>Sikkim</option>
        <option>Tamil Nadu</option>
        <option>Telangana</option>
        <option>Tripura</option>
        <option>Uttar Pradesh</option>
        <option>Uttarakhand</option>
        <option>West Bengal</option>
      </Select>

      <Input
        backgroundColor="white"
        isRequired={true}
        variant='auth'
        fontSize='md'
        ms={{ base: "0px", md: "0px" }}
        type='email'
        placeholder='Zip/Postal Code'
        mb='10px'
        fontWeight='500'
        size='lg'
        // value={input}
        onChange={handleInputChange}
      />
      <FormControl isInvalid={isError} isRequired>
        <FormLabel
          display='flex'
          ms='4px'
          fontSize='lg'
          fontWeight='500'
          color={textColor}
          mb='8px'
          mt='30px'>
          Phone Number
        </FormLabel>
        <Input
          backgroundColor="white"
          isRequired={true}
          variant='auth'
          fontSize='md'
          ms={{ base: "0px", md: "0px" }}
          type='email'
          placeholder='Phone number'
          mb='10px'
          fontWeight='500'
          size='lg'
          // value={input}
          onChange={handleInputChange}
        />
        <Input
          backgroundColor="white"
          isRequired={true}
          variant='auth'
          fontSize='md'
          ms={{ base: "0px", md: "0px" }}
          type='email'
          placeholder='Alternate Phone number'
          mb='10px'
          fontWeight='500'
          size='lg'
          // value={input}
          onChange={handleInputChange}
        />
        {!isError ? (
          <FormHelperText></FormHelperText>
        ) : (
          <FormErrorMessage>Email is required.</FormErrorMessage>
        )}
      </FormControl>

      <FormControl isInvalid={isError} isRequired>
        <FormLabel
          display='flex'
          ms='4px'
          fontSize='lg'
          fontWeight='500'
          color={textColor}
          mb='8px'
          mt='30px'>
          Type of Request
        </FormLabel>
        <Select
          backgroundColor="white"
          isRequired={true}
          variant='auth'
          fontSize='md'
          ms={{ base: "0px", md: "0px" }}
          type='email'
          placeholder='Select Type'
          mb='10px'
          fontWeight='500'
          size='lg'
          // value={input}
          onChange={handleInputChange}>
          <option>Financial</option>
          <option>Non-Financial</option>
        </Select>
        {!isError ? (
          <FormHelperText></FormHelperText>
        ) : (
          <FormErrorMessage>Email is required.</FormErrorMessage>
        )}
      </FormControl>
      <FormControl isInvalid={isError} isRequired>
        <FormLabel
          display='flex'
          ms='4px'
          fontSize='lg'
          fontWeight='500'
          color={textColor}
          mb='8px'>
          Have you receieved financial aid earlier?
        </FormLabel>
        <Select
          backgroundColor="white"
          isRequired={true}
          variant='auth'
          fontSize='md'
          ms={{ base: "0px", md: "0px" }}
          type='email'
          placeholder='Select Type'
          mb='10px'
          fontWeight='500'
          size='lg'
          // value={input}
          onChange={handleInputChange}>
          <option>Yes</option>
          <option>No</option>
        </Select>
        {!isError ? (
          <FormHelperText></FormHelperText>
        ) : (
          <FormErrorMessage>First name is required.</FormErrorMessage>
        )}
      </FormControl>
      <FormControl isInvalid={isError} isRequired>
        <FormLabel
          display='flex'
          ms='4px'
          fontSize='lg'
          fontWeight='500'
          color={textColor}
          mb='8px'>
          If yes, please enter the amount (in Rupees)
        </FormLabel>
        <Input
          backgroundColor="white"
          isRequired={true}
          variant='auth'
          fontSize='md'
          ms={{ base: "0px", md: "0px" }}
          type='email'
          placeholder='₹'
          mb='0px'
          fontWeight='500'
          size='lg'
          // value={input}
          onChange={handleInputChange}
        />
        {!isError ? (
          <FormHelperText></FormHelperText>
        ) : (
          <FormErrorMessage>First name is required.</FormErrorMessage>
        )}
      </FormControl>
      <FormControl isInvalid={isError} isRequired>
        <FormLabel
          display='flex'
          ms='4px'
          fontSize='x-large'
          fontWeight='500'
          color={textColor}
          mb='8px'
          mt='40px'>
          Education
        </FormLabel>
        <FormLabel
          display='flex'
          ms='4px'
          fontSize='lg'
          fontWeight='500'
          color={textColor}
          mb='8px'
          mt='30px'>
          Enter School name
        </FormLabel>
        <Input
          backgroundColor="white"
          isRequired={true}
          variant='auth'
          fontSize='md'
          ms={{ base: "0px", md: "0px" }}
          type='email'
          placeholder='School name'
          mb='0px'
          fontWeight='500'
          size='lg'
          // value={input}
          onChange={handleInputChange}
        />
        {!isError ? (
          <FormHelperText></FormHelperText>
        ) : (
          <FormErrorMessage>First name is required.</FormErrorMessage>
        )}
      </FormControl> */}
    </>
  );
}