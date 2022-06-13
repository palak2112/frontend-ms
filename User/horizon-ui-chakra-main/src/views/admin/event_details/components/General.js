// Chakra imports
import { useTranslation } from "react-i18next";

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
  const {t} = useTranslation();

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
        {t("Event Details")}
      </Text>

      <SimpleGrid>
      

        <Text color={textColorPrimary} fontWeight="bold" fontSize="md">
          {t("Name :")}
          <Text color={textColorSecondary} fontSize="md" me="10px" mb="20px">
            {t(data?.data?.name)}
          </Text>
        </Text>
        <Text
          color={textColorPrimary}
          fontWeight="bold"
          fontSize="md"

          
        >
          {t("Theme :")}
          <Text color={textColorSecondary} fontSize="md" me="10px" mb="20px">
            {t(data?.data?.theme)}
          </Text>
        </Text>
        <Text
          color={textColorPrimary}
          fontWeight="bold"
          fontSize="md"

          
        >
          {t("Start Date :")}
          <Text color={textColorSecondary} fontSize="md" me="10px" mb="20px">
            {t(data?.data?.createdAt &&
              moment(new Date(data?.data?.createdAt)).format("LLL"))}
          </Text>
        </Text>
        <Text
          color={textColorPrimary}
          fontWeight="bold"
          fontSize="md"

          // mt='10px'
          // mb='4px'
        >
          {t("End Date :")}
          <Text color={textColorSecondary} fontSize="md" me="10px" mb="20px">
            {t(data?.data?.updatedAt &&
              moment(new Date(data?.data?.updatedAt)).format("LLL"))}
          </Text>
        </Text>
        
        <Text
          color={textColorPrimary}
          fontWeight="bold"
          fontSize="md"
         
        >
          {t("Agenda :")}
          <Text color={textColorSecondary} fontSize="md" me="10px" mb="20px">
            {t(data?.data?.agenda)}
          </Text>
        </Text>

        <Text
          color={textColorPrimary}
          fontWeight="bold"
          fontSize="md"
          
        >
          {t("Description :")}
          <Text color={textColorSecondary} fontSize="md">
            {t(data?.data?.description)}
          </Text>
        </Text>
      </SimpleGrid>
    </Card>
  );
}
