import {
  Heading,
  HStack,
  Stack,
  Stat,
  StatHelpText,
  StatLabel
} from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";


export default function Stats(props) {
  const {t} = useTranslation();
  return (
    <Stat mt={5}>
      <Heading my={2} as="h4" fontSize="20px">
        {t("Submitted Result")}
      </Heading>
      <Stack
        p={4}
        borderWidth="3px"
        borderRadius="md"
        direction="column"
        align="flex-start"
      >
        <HStack>
          <StatLabel> {t("Name:")} {props.Firstname}</StatLabel>
          <StatLabel>{props.Lastname}</StatLabel>
        </HStack>
        <StatHelpText>{t("Password:")} {props.Password}</StatHelpText>
      </Stack>
    </Stat>
  );
}
