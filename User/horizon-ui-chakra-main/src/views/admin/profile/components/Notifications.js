// Chakra imports
import { useTranslation } from "react-i18next";

import {Button, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import Card from "components/card/Card.js";
// Custom components
import SwitchField from "components/fields/SwitchField";
import Menu from "components/menu/MainMenu";

export default function Notifications(props) {
  const { ...rest } = props;
  const {t} = useTranslation();

  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  return (
    <Card mb='20px' {...rest}>
      
      <Flex justify="flex-end">
        <Button
              fontSize='sm'
              variant='brand'
              fontWeight='500'
              w='25%'
              background="#F58220"
              // onClick={handleSubmit}
              >
          {t("Submit")}
            </Button>
        </Flex>
    </Card>
  );
}
