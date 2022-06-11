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
} from "@chakra-ui/react";
// Assets

import moment from "moment";
export default function GeneralInformation(props) {
  const { data, ...rest } = props;
  // console.log("hey", data);
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
        fontWeight="bold"
        fontSize="2xl"
        mt="10px"
        mb="4px"
      >
        Event Details
      </Text>

      <SimpleGrid>
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

        <Text color={textColorPrimary} fontWeight="bold" fontSize="md">
          Name :
          <Text color={textColorSecondary} fontSize="md" me="10px" mb="20px">
            {data?.data?.name}
          </Text>
        </Text>
        <Text
          color={textColorPrimary}
          fontWeight="bold"
          fontSize="md"

          // mt='10px'
          // mb='4px'
        >
          Theme :
          <Text color={textColorSecondary} fontSize="md" me="10px" mb="20px">
            {data?.data?.theme}
          </Text>
        </Text>
        <Text
          color={textColorPrimary}
          fontWeight="bold"
          fontSize="md"

          // mt='10px'
          // mb='4px'
        >
          Start Date :
          <Text color={textColorSecondary} fontSize="md" me="10px" mb="20px">
            {data?.data?.createdAt &&
              moment(new Date(data?.data?.createdAt)).format("LLL")}
          </Text>
        </Text>
        <Text
          color={textColorPrimary}
          fontWeight="bold"
          fontSize="md"

          // mt='10px'
          // mb='4px'
        >
          End Date :
          <Text color={textColorSecondary} fontSize="md" me="10px" mb="20px">
            {data?.data?.updatedAt &&
              moment(new Date(data?.data?.updatedAt)).format("LLL")}
          </Text>
        </Text>
        {/* <Text
          color={textColorPrimary}
          fontWeight="bold"
          fontSize="md"

          // mt='10px'
          // mb='4px'
        >
          Time :
          <Text color={textColorSecondary} fontSize="md" me="10px" mb="20px">
            9:00 - 12:00 PM
          </Text>
        </Text> */}
        <Text
          color={textColorPrimary}
          fontWeight="bold"
          fontSize="md"
          // mt='10px'
          // mb='4px'
        >
          Agenda :
          <Text color={textColorSecondary} fontSize="md" me="10px" mb="20px">
            {data?.data?.agenda}
          </Text>
        </Text>

        <Text
          color={textColorPrimary}
          fontWeight="bold"
          fontSize="md"
          // mt='10px'
          // mb='4px'
        >
          Description :
          <Text color={textColorSecondary} fontSize="md">
            {data?.data?.description}
          </Text>
        </Text>
      </SimpleGrid>
    </Card>
  );
}
