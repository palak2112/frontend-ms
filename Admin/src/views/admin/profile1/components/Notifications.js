// Chakra imports
import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
import Card from "components/card/Card.js";
import { useTranslation } from "react-i18next";
// Custom components
import SwitchField from "components/fields/SwitchField";
import Menu from "components/menu/MainMenu";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

export default function Notifications(props) {
  const { ...rest } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const { t } = useTranslation();

  return (
    <Card mb="20px" {...rest}>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>{t("welcome")}</Th>
              <Th>Status</Th>
              <Th>Upload Date</Th>
              <Th>Document Link</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Adhar Card</Td>
              <Td>Uploaded</Td>
              <Td> 25/12/2022 </Td>
              <Td> Link</Td>
            </Tr>
            <Tr>
              <Td>Adhar Card</Td>
              <Td>Uploaded</Td>
              <Td> 25/12/2022 </Td>
              <Td> Link</Td>
            </Tr>
            <Tr>
              <Td>Adhar Card</Td>
              <Td>Uploaded</Td>
              <Td> 25/12/2022 </Td>
              <Td> Link</Td>
            </Tr>
            <Tr>
              <Td>Adhar Card</Td>
              <Td>Uploaded</Td>
              <Td> 25/12/2022 </Td>
              <Td> Link</Td>
            </Tr>
            <Tr>
              <Td>Adhar Card</Td>
              <Td>Uploaded</Td>
              <Td> 25/12/2022 </Td>
              <Td> Link</Td>
            </Tr>
            <Tr>
              <Td>Adhar Card</Td>
              <Td>Uploaded</Td>
              <Td> 25/12/2022 </Td>
              <Td> Link</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      {/* <Flex align='center' w='100%' justify='space-between' mb='30px'>
        <Text
          color={textColorPrimary}
          fontWeight='bold'
          fontSize='2xl'
          mb='4px'>
          Notifications
        </Text>
        <Menu />
      </Flex>
      <SwitchField
        isChecked={true}
        reversed={true}
        fontSize='sm'
        mb='20px'
        id='1'
        label='Item update notifications'
      />
      <SwitchField
        reversed={true}
        fontSize='sm'
        mb='20px'
        id='2'
        label='Item comment notifications'
      />
      <SwitchField
        reversed={true}
        fontSize='sm'
        mb='20px'
        id='3'
        label='Buyer review notifications'
      />
      <SwitchField
        reversed={true}
        fontSize='sm'
        mb='20px'
        id='4'
        label='Rating reminders notifications'
      />
      <SwitchField
        reversed={true}
        fontSize='sm'
        mb='20px'
        id='5'
        label='Meetups near you notifications'
      />
      <SwitchField
        reversed={true}
        fontSize='sm'
        mb='20px'
        id='6'
        label='Company news notifications'
      />
      <SwitchField
        reversed={true}
        fontSize='sm'
        mb='20px'
        id='7'
        label='New launches and projects'
      />
      <SwitchField
        reversed={true}
        fontSize='sm'
        mb='20px'
        id='8'
        label='Monthly product changes'
      />
      <SwitchField
        reversed={true}
        fontSize='sm'
        mb='20px'
        id='9'
        label='Subscribe to newsletter'
      />
      <SwitchField
        reversed={true}
        fontSize='sm'
        mb='20px'
        id='10'
        label='Email me when someone follows me'
      /> */}
    </Card>
  );
}
