import React from "react";
import { useState } from "react";
import {
  Select,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
export function SearchBar(props) {
  // Pass the computed styles into the `__css` prop
  const { variant, background, children, placeholder, borderRadius, ...rest } =
    props;
  // Chakra Color Mode
  const searchIconColor = useColorModeValue("gray.700", "white");
  const inputBg = useColorModeValue("secondaryGray.300", "navy.900");
  const inputText = useColorModeValue("gray.700", "gray.100");
  const [language, setLanguage] = useState("en");
  return (

    <InputGroup w={{ base: "100%", md: "200px" }} {...rest}>
      <InputLeftElement
      // children={
      //   <IconButton
      //     bg='inherit'
      //     borderRadius='inherit'
      //     _hover='none'
      //     _active={{
      //       bg: "inherit",
      //       transform: "none",
      //       borderColor: "transparent",
      //     }}
      //     _focus={{
      //       boxShadow: "none",
      //     }}
      //     icon={
      //       <SearchIcon color={searchIconColor} w='15px' h='15px' />
      //     }></IconButton>
      // }
      />
      {/* <Input
        variant='search'
        fontSize='sm'
        bg={background ? background : inputBg}
        color={inputText}
        fontWeight='500'
        _placeholder={{ color: "gray.400", fontSize: "14px" }}
        borderRadius={borderRadius ? borderRadius : "30px"}
        placeholder={placeholder ? placeholder : "Search..."}

      /> */}
      <Select placeholder=""
        // var getUrl = window.location;
        // var baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
        onChange={(e) => {
          console.log(e.target.value);
          console.log(window.location);
          var temp = window.location.href;
          console.log(temp);
          var tp = temp.substring(temp.length - 2, temp.length);
          //console.log(window.location.href);
          //var temp = window.location.href.substring(window.location.href.length - 2, window.location.href.length);
          console.log(tp);
          if (tp === "en" || tp === "bn" || tp === "hi" || tp === "kn" || tp === "mr" || tp === "ta") {
            var new_url = temp.substring(0, temp.length - 2) + e.target.value;
            console.log(new_url);
            window.location.href = new_url;
          } else {
            var s = temp + "?lng=" + e.target.value;
            window.location.href = s;
          }
           window.location.reload();
        }}

        // the UI SUPPORTS MULTIPLE PERSONAS - ADMIN,USER.
        // HIGHLIGHT AUTH API WHEN IN LOGIN PAGE.
        // QUALITY DATA EVEN DURING PRESENTATION. EG RAISING REQUESTS
        // 
        variant='search'
        fontSize='sm'
        bg={background ? background : inputBg}
        color={inputText}
        fontWeight='500'
        _placeholder={{ color: "gray.400", fontSize: "14px" }}
        borderRadius={borderRadius ? borderRadius : "30px"}>
        <option value="en" selected >English </option>
        <option value="hi"> हिन्दी </option>
        <option value="kn"> ಕನ್ನಡ </option>
        <option value="ta"> தமிழ் </option>
        <option value="mr"> मराठी </option>
        <option value="bn"> বাংলা </option>
      </Select>
    </InputGroup>
  );
}