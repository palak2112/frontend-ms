// Chakra imports
import {
  Textarea,
  Select,
  Input,
  Flex,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import { React, useState, useEffect } from "react";

import Information from "views/admin/profile/components/Information";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button,
  Center,
} from "@chakra-ui/react";

// import {toast} from "react-toastify"

import {
  REQUEST_TYPES,
  FINANCIAL_THEMES,
  NON_FINANCIAL_THEMES,
} from "constants";

import { createRequest } from "api/requestApi";
import { useHistory } from "react-router-dom";

// Assets
export default function GeneralInformation({
  uploadFile,
  gridArea,
  eventName,
  theme,
  agenda,
  location,
  description,
  startDateTime,
  endDateTime,
  posterUrl,
  setEventName,
  setTheme,
  setAgenda,
  setDescription,
  setStartDateTime,
  setEndDateTime,
  setPosterUrl,
  setLocation,
}) {
  const { ...rest } = gridArea;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );
  // const [eventName,setEventName] = useState("");
  // const [theme,setTheme] = useState("");
  // const [agenda,setAgenda] = useState("");
  // const [location,setLocation] = useState("");
  // const [description,setDescription] = useState("");
  // const [startDateTime,setStartDateTime] = useState("");
  // const [endDateTime,setEndDateTime] = useState("");
  // const [posterUrl, setPosterUrl] = useState("");
  // const history = useHistory();

  const [selectedType, setSelectedType] = useState("");
  const [selectedTheme, setSelectedTheme] = useState("");
  const [reqDescription, setReqdescription] = useState("");
  const [donationSoFar, setDonationSoFar] = useState("");
  const [fundsRequired, setFundsRequired] = useState("");

  const history = useHistory();

  const handleSubmit = async () => {
    const payload = {
      type: selectedType,
      theme: selectedTheme,
      description: reqDescription,
      user: JSON.parse(localStorage.getItem("user"))["id"],
    };
    if (donationSoFar !== "") payload["donation"] = Number(donationSoFar);
    if (fundsRequired !== "") payload["fundsRequired"] = Number(fundsRequired);
    const response = await createRequest(payload);
    console.log(response.data);
    history.push("/admin/data-tables");
  };

  return (
    <Card mb={{ base: "0px", "2xl": "20px" }} {...rest}>
      <Text
        color={textColorPrimary}
        fontWeight="bold"
        fontSize="2xl"
        mt="10px"
        mb="4px"
      >
        Create New Request
      </Text>
      <br></br>
      {/* <Text color={textColorSecondary} fontSize='md' me='26px' mb='40px'>
        Add the event details in the form below..
      </Text> */}
      <SimpleGrid columns="1" gap="20px">
        <FormControl isRequired>
          <FormLabel htmlFor="Request-Type">Select Request Type</FormLabel>
          <Select
            id="Request-Type"
            placeholder="Select Request Type"
            value={selectedType}
            onChange={(e) => {
              setSelectedType(e.target.value);
            }}
          >
            {Object.keys(REQUEST_TYPES).map((type_key, idx) => (
              <option key={`type-${idx}`} value={type_key}>
                {REQUEST_TYPES[type_key]}
              </option>
            ))}
          </Select>
        </FormControl>

        <FormControl isRequired>
          <FormLabel htmlFor="Request-Theme">Select Theme</FormLabel>
          <Select
            id="Request-Theme"
            placeholder="Select Theme"
            value={selectedTheme}
            onChange={(e) => {
              setSelectedTheme(e.target.value);
            }}
          >
            {Object.keys(
              selectedType === "FINANCIAL"
                ? FINANCIAL_THEMES
                : NON_FINANCIAL_THEMES
            ).map((theme_key, idx) => (
              <option key={`type-${idx}`} value={theme_key}>
                {selectedType === "FINANCIAL"
                  ? FINANCIAL_THEMES[theme_key]
                  : NON_FINANCIAL_THEMES[theme_key]}
              </option>
            ))}
          </Select>
        </FormControl>

        <SimpleGrid>
          <FormControl>
            <FormLabel htmlFor="Description">Description</FormLabel>
            <Textarea
              id="Description"
              placeholder="Add Description"
              value={reqDescription}
              onChange={(e) => {
                setReqdescription(e.target.value);
              }}
            />
          </FormControl>
        </SimpleGrid>

        {selectedType === "FINANCIAL" && (
          <FormControl>
            <FormLabel htmlFor="email">
              Have you received any donation so far? If yes enter the amount
            </FormLabel>
            <Input
              placeholder="Enter amount"
              required={true}
              id="event name"
              type="number"
              value={donationSoFar}
              onChange={(e) => {
                setDonationSoFar(e.target.value);
              }}
            />
            {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
          </FormControl>
        )}
        {selectedType === "FINANCIAL" && (
          <FormControl isRequired>
            <FormLabel htmlFor="email">
              How much funds do you require?
            </FormLabel>
            <Input
              placeholder="Enter amount"
              required={true}
              id="event name"
              type="number"
              value={fundsRequired}
              onChange={(e) => {
                setFundsRequired(e.target.value);
              }}
            />
            {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
          </FormControl>
        )}
        {/* <FormControl isRequired>
          <FormLabel htmlFor="date">Start Date & Time</FormLabel>
          <Input
            type="datetime-local"
            id="date"
            placeholder="Date"
            value={startDateTime}
            onChange={(e) => {
              setStartDateTime(e.target.value);
            }}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel htmlFor="date">End Date & Time</FormLabel>
          <Input
            type="datetime-local"
            id="date"
            placeholder="Date"
            value={endDateTime}
            onChange={(e) => {
              setEndDateTime(e.target.value);
            }}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel htmlFor="location">Location</FormLabel>
          <Input
            id="location"
            placeholder="Add Location"
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="Purpose of Event">Agenda</FormLabel>
          <Input
            id="Purpose of Event"
            placeholder="Add Agenda"
            value={agenda}
            onChange={(e) => {
              setAgenda(e.target.value);
            }}
          />
        </FormControl> */}
        <Center>
          <Button
            width="25%"
            fontSize="sm"
            variant="brand"
            fontWeight="500"
            w="30%"
            background="#1B254B"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Center>
      </SimpleGrid>
    </Card>
  );
}
