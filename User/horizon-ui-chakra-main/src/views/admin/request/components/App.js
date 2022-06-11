
import "../style.css";
import {Heading, Text, Box} from "@chakra-ui/react"
import Form from "./Form";

export default function App() {
  return (
    <Box className="App" my={10}>
      {/* <Heading as="h1">React-Hook-Form</Heading> */}
      {/* <Text></Text> */}
      <Form />
    </Box>
  );
}
