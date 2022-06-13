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



     
    </>
  );
}