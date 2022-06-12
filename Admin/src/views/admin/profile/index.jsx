// Chakra imports
import { Flex, Box, Grid, Center, Button } from "@chakra-ui/react";

// Custom components
import Banner from "views/admin/profile/components/Banner";
import General from "views/admin/profile/components/General";
import Notifications from "views/admin/profile/components/Notifications";
import Projects from "views/admin/profile/components/Projects";
import Storage from "views/admin/profile/components/Storage";
import Upload from "views/admin/profile/components/Upload";

// Assets
import banner from "assets/img/auth/banner.png";
import avatar from "assets/img/avatars/avatar4.png";
import { useHistory } from "react-router-dom";
import { React, useState } from "react";
import { documentsUpload } from "../../../api/uploadApi";
import { createEvent } from "../../../api/eventApi";
import { toast } from "react-toastify";

export default function Overview() {
  const [uploadFile, setUploadFile] = useState("");
  const [eventName, setEventName] = useState("");
  const [theme, setTheme] = useState("");
  const [agenda, setAgenda] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [startDateTime, setStartDateTime] = useState("");
  const [endDateTime, setEndDateTime] = useState("");

  const history = useHistory();

  const handleSubmit = async () => {
    console.log("In add event");

    var data = new FormData();
    data.append("file", uploadFile, uploadFile.name);

    try {
      const res = await documentsUpload(data);
      console.log(res.data);
      if (res.status === 200) {
        const payload = {
          name: eventName,
          agenda,
          description,
          posterUrl: res.data.data,
          startDate: startDateTime + ":00.000Z",
          endDate: startDateTime + ":00.000Z",
          theme,
          location,
        };
        try {
          const res = await createEvent(payload);
          console.log(res);
          if (res.status === 200) {
            toast.success("Event added successfully");
            history.replace("/admin/NFTMarketplace");
          }
        } catch (error) {
          console.log(error);
        }
      }
    } catch (error) {
      console.log("Error in addding event", error);
      toast.error("Error adding event... Try again");
    }
  };

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      {/* Main Fields */}
      <Grid
        // mb="20px"
        templateColumns={{
          base: "1fr",
          lg: "repeat(2, 1fr)",
          "2xl": "1.34fr 1.62fr 1fr",
        }}
        templateRows={{
          // base: "1fr",
          // lg: "repeat(2, 1fr)",
          // "2xl": "1fr",
        }}
        gap={{ base: "20px", xl: "20px" }}
      >
        <Projects
          gridArea="1 / 2 / 2 / 2"
          banner={banner}
          avatar={avatar}
          name="Adela Parkson"
          job="Product Designer"
          posts="17"
          followers="9.7k"
          following="274"
          uploadFile={uploadFile}
          setUploadFile={setUploadFile}
        />

        <General
          gridArea={{ base: "2 / 1 / 3 / 2", lg: "1 / 2 / 2 / 3" }}
          minH="365px"
          pe="20px"
          uploadFile={uploadFile}
          eventName={eventName}
          setEventName={setEventName}
          theme={theme}
          setTheme={setTheme}
          agenda={agenda}
          setAgenda={setAgenda}
          location={location}
          setLocation={setLocation}
          description={description}
          setDescription={setDescription}
          startDateTime={startDateTime}
          setStartDateTime={setStartDateTime}
          endDateTime={endDateTime}
          setEndDateTime={setEndDateTime}
        />
      </Grid>
      <br></br>
      <Flex justify="flex-end">
        <Button
              fontSize='sm'
              variant='brand'
              fontWeight='500'
              w='15%'
              background="#F58220"
              onClick={handleSubmit}
              >
              Submit
            </Button>
        </Flex>
    </Box>
  );
}
