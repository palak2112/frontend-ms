// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
// import {
//   Box,
//   Button,
//   Flex,
//   Grid,
//   Link,
//   Text,
//   useColorModeValue,
//   // SimpleGrid,
// } from "@chakra-ui/react";

// // ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// // serviceWorker.unregister();
// // import App from "./components/App";

// export default function Req() {
//   return (
//     <Box pt={{ base: "180px", md: "80px", xl: "80px" }}>
//       <Grid
//         mb='20px'
//         gridTemplateColumns={{ xl: "repeat(3, 1fr)", "2xl": "1fr 0.46fr" }}
//         gap={{ base: "20px", xl: "20px" }}
//         display={{ base: "block", xl: "grid" }}>
//         <App/>
//       </Grid>
//     </Box>
//   )
// }
// Chakra imports
import { Box, Grid, SimpleGrid, Text, useColorModeValue, Input, InputGroup, InputRightElement, Icon, Flex, Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

// Custom components
import Card from "components/card/Card.js";
import React from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiEyeCloseLine } from "react-icons/ri";
import Information from "views/admin/profile/components/Information";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'
// Assets
export default function GeneralInformation(props) {
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
  return (
    <>
      {/* <Box pt={{ base: "180px", md: "80px", xl: "80px" }}>
        <Grid
          mb='20px'
          gridTemplateColumns={{ xl: "repeat(3, 1fr)", "2xl": "1fr 0.46fr" }}
          gap={{ base: "20px", xl: "20px" }}
          display={{ base: "block", xl: "grid" }}>
        </Grid>
      </Box> */}
      {/* <Card mb={{ base: "0px", "2xl": "20px" }} {...rest}> */}
      {/* <Text
          color={textColorPrimary}
          fontWeight='bold'
          fontSize='2xl'
          mt='10px'
          mb='4px'>
          EVENT DETAILS
        </Text>
        <Text color={textColorSecondary} fontSize='md' me='26px' mb='40px'>
          Add the event details in the form below..
        </Text> */}
      <Box pt={{ base: "180px", md: "80px", xl: "80px" }}>
        <Grid
          mb='20px'
          gridTemplateColumns={{ xl: "repeat(3, 1fr)", "2xl": "1fr 0.46fr" }}
          gap={{ base: "20px", xl: "20px" }}
          display={{ base: "block", xl: "grid" }}>
        </Grid>
        <SimpleGrid columns='1' gap='30px'>
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
          <FormControl>
            <FormLabel htmlFor='email'>Email address</FormLabel>
            <input id='email' type='email' />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor='email'>Event name</FormLabel>
            <input placeholder='Add event name' id='email' type='email' />
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
            <input type="date" id='date' placeholder='Date' />
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
      </Box>
      <FormControl>
        <FormLabel
          display='flex'
          ms='4px'
          fontSize='sm'
          fontWeight='500'
          color={textColor}
          mb='8px'>
          Email
        </FormLabel>
        <Input
          isRequired={true}
          variant='auth'
          fontSize='sm'
          ms={{ base: "0px", md: "0px" }}
          type='email'
          placeholder='mail@simmmple.com'
          mb='24px'
          fontWeight='500'
          size='lg'
        />
        <FormLabel
          ms='4px'
          fontSize='sm'
          fontWeight='500'
          color={textColor}
          display='flex'>
          Password
        </FormLabel>
        <InputGroup size='md'>
          <Input
            isRequired={true}
            fontSize='sm'
            placeholder='Min. 8 characters'
            mb='24px'
            size='lg'
            type={show ? "text" : "password"}
            variant='auth'
          />
          <InputRightElement display='flex' alignItems='center' mt='4px'>
            <Icon
              color={textColorSecondary}
              _hover={{ cursor: "pointer" }}
              as={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
              onClick={handleClick}
            />
          </InputRightElement>
        </InputGroup>
        <Flex justifyContent='space-between' align='center' mb='24px'>
          <FormControl display='flex' alignItems='center'>
            {/* <Checkbox
                  id='remember-login'
                  colorScheme='brandScheme'
                  me='10px'
                /> */}
            <FormLabel
              htmlFor='remember-login'
              mb='0'
              fontWeight='normal'
              color={textColor}
              fontSize='sm'>
              {/* Keep me logged in */}
            </FormLabel>
          </FormControl>
          <NavLink to='/auth/forgot-password'>
            <Text
              color={textColorBrand}
              fontSize='sm'
              w='124px'
              fontWeight='500'>
              {/* Forgot password? */}
            </Text>
          </NavLink>
        </Flex>
        <Button
          fontSize='sm'
          variant='brand'
          fontWeight='500'
          w='100%'
          h='50'
          mb='24px'
          background="#F58220">
          Sign In
        </Button>
      </FormControl>
      {/* </Card> */}
    </>
  );
}
