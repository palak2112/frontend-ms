// Chakra imports
import { SimpleGrid, Box, Grid, Text } from "@chakra-ui/react";

// Custom components
import Banner from "views/admin/event_details/components/Banner";
import General from "views/admin/event_details/components/General";
import Notifications from "views/admin/event_details/components/Notifications";
import Projects from "views/admin/event_details/components/Projects";
import Storage from "views/admin/event_details/components/Storage";
import Upload from "views/admin/event_details/components/Upload";
import ColumnsTable from "../dataTables/components/ColumnsTable";

import { columnsDataColumns } from "../dataTables/variables/columnsData";
import tableDataColumns from "../dataTables/variables/tableDataColumns.json";
// Assets
import banner from "assets/img/auth/banner.png";
import avatar from "assets/img/avatars/avatar4.png";
import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

import { fetchEventById } from "../../../api/eventApi";

export default function Overview() {
  const { eid } = useParams();
  console.log({ eid });

  const [apiData, setApiData] = useState({});
  const [posterUrl,setPosterUrl] = useState("");

  const fetchEvent = async () => {
    try {
      const response = await fetchEventById(eid);
      setApiData(response.data);
      setPosterUrl(apiData?.data?.posterUrl);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchEvent();
    console.log(apiData);
    console.log(apiData.posterUrl);

  }, [posterUrl]);

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
        <Projects
        gridArea="1 / 2 / 2 / 2"
        banner={banner}
        avatar={avatar}
        job="Product Designer"
        posts="17"
        followers="9.7k"
        following="274"
        posterUrl = {posterUrl}
        name = {apiData?.data?.name}
      /> 
      <br></br>
      <General
        gridArea={{ base: "2 / 1 / 3 / 2", lg: "1 / 2 / 2 / 3" }}
        minH="365px"
        pe="20px"
        data={apiData}
      />
      {/* Main Fields */}
      <Grid
        templateColumns={{
          base: "1fr",
          lg: "1.34fr 1fr 1.62fr",
        }}
        templateRows={{
          base: "repeat(3, 1fr)",
          lg: "1fr",
        }}
        gap={{ base: "20px", xl: "20px" }}
      >
        
      </Grid>
      <Grid
        mb="20px"
        templateColumns={{
          base: "1fr",
          lg: "repeat(2, 1fr)",
          "2xl": "1.34fr 1.62fr 1fr",
        }}
        templateRows={{
          base: "1fr",
          lg: "repeat(2, 1fr)",
          "2xl": "1fr",
        }}
        gap={{ base: "20px", xl: "20px" }}
      >
       
       
       
      </Grid>
      
    </Box>
  );
}
