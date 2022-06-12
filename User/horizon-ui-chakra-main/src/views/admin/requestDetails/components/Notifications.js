// Chakra imports
import { Icon, Flex, Text, useColorModeValue, Center } from "@chakra-ui/react";
import Card from "components/card/Card.js";
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
  Button,
  FormControl,
  Input,
  Box,
} from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";

import moment from "moment";
import { useState } from "react";
import { useId } from "react";
import { useEffect } from "react";

const DocListItem = (props) => {
  const { name, status } = props;
  const [doc, setDoc] = useState({ file: {}, name: "" });

  useEffect(() => {
    console.log({ doc });
  }, [doc]);

  return (
    <Tr>
      <Td>{name}</Td>
      <Td>{status === "" ? "Not Uploaded" : "Uploaded"}</Td>
      {/* <Td>
    {" "}
    {moment(new Date(data?.data?.updatedAt)).format("L")}{" "}
  </Td> */}

      {status === "" ? (
        <Flex gap="20px">
          {/* <FormControl w="70%"> */}
          <Input
            w="70%"
            required={true}
            id="event name"
            type="file"
            // value={doc.name}
            onChange={(e) => {
              // console.log(docs);
              // const temp = Number(idx);
              setDoc({
                file: e.target.files[0],
                name: e.target.files[0]["name"],
              });
              console.log(e.target.files[0]);
              console.log(doc);
              // console.log(docs[idx]);
            }}
          />
          {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
          {/* </FormControl> */}
          <Button>Upload</Button>
        </Flex>
      ) : (
        <Td color="blue">
          <Text spacing="1">
            {" "}
            View &nbsp;
            <a href={status} target="__blank">
              <Icon
                ms="auto"
                as={FaExternalLinkAlt}
                // color='secondaryGray.600'
                w="10px"
                h="10px"
              />
            </a>{" "}
          </Text>
        </Td>
      )}
    </Tr>
  );
};

export default function Notifications(props) {
  const { data, ...rest } = props;
  console.log({ data });
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");

  console.log(data.data.data);
  const initObject = {};
  Object.keys(data.data.data).forEach((key, idx) => {
    initObject[key] = data.data.data[key];
  });
  console.log(initObject);
  const [docs, setDocs] = useState(initObject);
  return (
    <Card mb="20px" {...rest}>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Document Name</Th>
              <Th>Status</Th>
              {/* <Th>Upload Date</Th> */}
              <Th>Document Link</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.data?.data &&
              Object.keys(data?.data?.data).map((key, idx) => {
                return (
                  <DocListItem name={key} status={data?.data?.data[key]} />
                );
              })}
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
