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
export default function GeneralInformation(props) {
  const { data, ...rest } = props;
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
        Request Details
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
          Type :
          <Text color={textColorSecondary} fontSize="md" me="20px" mb="40px">
            {data.type}
          </Text>
        </Text>
        <Text
          color={textColorPrimary}
          fontWeight="bold"
          fontSize="md"
          margin-top="-10px"
          // mt='10px'
          // mb='4px'
        >
          Theme :
          <Text color={textColorSecondary} fontSize="md" me="20px" mb="40px">
            {data.theme}
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
          <Text color={textColorSecondary} fontSize="md" mb="60px">
            {data.description}
          </Text>
        </Text>

        <Text
          color={textColorPrimary}
          fontWeight="bold"
          fontSize="md"
          // mt='10px'
          // mb='4px'
        >
          Status :
          <Text color={textColorSecondary} fontSize="md" me="2px" mb="4px">
            {data.status}
          </Text>
        </Text>
      </SimpleGrid>
    </Card>
  );
}
