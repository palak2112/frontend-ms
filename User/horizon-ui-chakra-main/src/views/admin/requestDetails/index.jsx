// Chakra imports
import {
  Box,
  Grid,
  Text,
  Flex,
  Button,
  SimpleGrid,
  Center,
} from "@chakra-ui/react";

// Custom components
import Banner from "views/admin/requestDetails/components/Banner";
import General from "views/admin/requestDetails/components/General";
import Notifications from "views/admin/requestDetails/components/Notifications";
import RequestDetails from "views/admin/requestDetails/components/RequestDetails";
import Storage from "views/admin/requestDetails/components/Storage";
import Upload from "views/admin/requestDetails/components/Upload";
import ColumnsTable from "../dataTables/components/ColumnsTable";

import { columnsDataColumns } from "../dataTables/variables/columnsData";
import tableDataColumns from "../dataTables/variables/tableDataColumns.json";
// Assets
import banner from "assets/img/auth/banner.png";
import avatar from "assets/img/avatars/avatar4.png";
import React from "react";
import { useState } from "react";

import { fetchRequestById } from "../../../api/requestApi";
import { fetchUserById } from "../../../api/userApi";
import {
  getDocumentsByRequestId,
  updateRequest,
} from "../../../api/requestApi";

import { useEffect } from "react";

import { useParams, useHistory } from "react-router-dom";

import { MdDone, MdClear } from "react-icons/md";

export default function Overview(props) {
  const { rid } = useParams();

  console.log("Hello");

  const history = useHistory();

  const [apiData, setApiData] = useState({
    requestData: [],
    documentData: [],
  });

  const fetchData = async () => {
    let requestData;
    let documentData;

    try {
      const response = await fetchRequestById(rid);
      requestData = response.data.data;
    } catch (e) {
      console.log(e);
    }

    try {
      const response = await getDocumentsByRequestId(rid);
      documentData = response.data;
    } catch (e) {
      console.log(e);
      documentData = [];
    }

    setApiData({ requestData, documentData });
  };

  useEffect(() => {
    fetchData();
    console.log({ apiData });
  }, []);

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
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
        <Banner
          gridArea="1 / 1 / 2 / 2"
          banner={banner}
          avatar={avatar}
          name="Adela Parkson"
          job="Product Designer"
          posts="17"
          followers="9.7k"
          following="274"
        />
        <Storage
          gridArea={{ base: "2 / 1 / 3 / 2", lg: "1 / 2 / 2 / 3" }}
          used={25.6}
          total={50}
        />
        <Upload
          gridArea={{
            base: "3 / 1 / 4 / 2",
            lg: "1 / 3 / 2 / 4",
          }}
          minH={{ base: "auto", lg: "420px", "2xl": "365px" }}
          pe="20px"
          pb={{ base: "100px", lg: "20px" }}
        />
      </Grid>

      <Grid
        mb="20px"
        templateColumns={{
          base: "1fr",
          // lg: "repeat(2, 1fr)",
          // "2xl": "1.34fr 1.62fr 1fr",
        }}
        templateRows={{
          base: "1fr",
          // lg: "repeat(2, 1fr)",
          // "2xl": "1fr",
        }}
        gap={{ base: "20px", xl: "20px" }}
      >
        {/* <RequestDetails
          gridArea="1 / 2 / 2 / 2"
          banner={banner}
          avatar={avatar}
          name="Adela Parkson"
          job="Product Designer"
          posts="17"
          followers="9.7k"
          following="274"
          data={apiData.userData}
        /> */}

        <General
          // gridArea={{ base: "2 / 1 / 3 / 2", lg: "1 / 2 / 2 / 3" }}
          data={apiData.requestData}
        />
        {apiData?.requestData?.status &&
        apiData.requestData.status !== "APPROVAL_PENDING" ? (
          <Notifications
            used={25.6}
            total={50}
            gridArea={{
              base: "3 / 1 / 4 / 2",
              lg: "2 / 1 / 3 / 3",
              "2xl": "1 / 3 / 2 / 4",
            }}
            data={apiData.documentData}
            reqId={rid}
            reqStatus={apiData.requestData.status}
            apiData={apiData}
            setApiDataCB={setApiData}
          />
        ) : (
          <div></div>
        )}
      </Grid>

      {/* <ColumnsTable
          columnsData={columnsDataColumns}
          tableData={tableDataColumns}
        /> */}
    </Box>
  );
}
