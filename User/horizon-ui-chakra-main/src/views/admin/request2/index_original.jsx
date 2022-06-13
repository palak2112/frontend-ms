
import { Box, Grid, SimpleGrid, Text, useColorModeValue, Input, InputGroup, InputRightElement, Icon, Flex, Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

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
  const {t} = useTranslation();

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
     
      
      <Box pt={{ base: "180px", md: "80px", xl: "80px" }}>
        <Grid
          mb='20px'
          gridTemplateColumns={{ xl: "repeat(3, 1fr)", "2xl": "1fr 0.46fr" }}
          gap={{ base: "20px", xl: "20px" }}
          display={{ base: "block", xl: "grid" }}>
        </Grid>
        <SimpleGrid columns='1' gap='30px'>
          
          <FormControl>
            <FormLabel htmlFor='email'>{t("Email address")}</FormLabel>
            <input id='email' type='email' />
            <FormHelperText>{t("We'll never share your email.")}</FormHelperText>
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor='email'>{t("Event name")}</FormLabel>
            <input placeholder='Add event name' id='email' type='email' />
            {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
          </FormControl>

          <FormControl>
            <FormLabel htmlFor='Theme'>{t("Select Theme")}</FormLabel>
            <select id='Theme' placeholder='Select Theme'>
              <option>{t("Counselling")}</option>
              <option>{t("Health")}</option>
              <option>{t("Finance")}</option>

            </select>
          </FormControl>

          <FormControl isRequired>
            <FormLabel htmlFor='date'>{t("Date")}</FormLabel>
            <input type="date" id='date' placeholder='Date' />
          </FormControl>

          <FormControl isRequired>
            <FormLabel htmlFor='location'>{t("Location")}</FormLabel>
            <input id='location' placeholder='Location' />
          </FormControl>

          <FormControl >
            <FormLabel htmlFor='Purpose of Event'>{t("Purpose of Event")}</FormLabel>
            <input id='Purpose of Event' placeholder='Purpose of Event' />
          </FormControl>

          <FormControl isRequired>
            <FormLabel htmlFor='Description'>{t("Description")}</FormLabel>
            <input id='Description' placeholder='Description' />
          </FormControl>


          <FormControl isRequired>
            <FormLabel htmlFor='Time'>{t("Time")}</FormLabel>
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
          {t("Email")}
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
          {t("Password")}
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
           
            <FormLabel
              htmlFor='remember-login'
              mb='0'
              fontWeight='normal'
              color={textColor}
              fontSize='sm'>
            </FormLabel>
          </FormControl>
          <NavLink to='/auth/forgot-password'>
            <Text
              color={textColorBrand}
              fontSize='sm'
              w='124px'
              fontWeight='500'>
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
          {t("Sign In")}
        </Button>
      </FormControl>
    </>
  );
}
