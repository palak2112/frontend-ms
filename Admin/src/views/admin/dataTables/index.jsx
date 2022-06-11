// Chakra imports
import { Box, SimpleGrid } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import { Stack, HStack } from "@chakra-ui/react";
// import DevelopmentTable from "views/admin/dataTables/components/DevelopmentTable";
// import CheckTable from "views/admin/dataTables/components/CheckTable";
// import ColumnsTable from "views/admin/dataTables/components/ColumnsTable";
import ComplexTable from "views/admin/dataTables/components/ComplexTable";
import {
  // columnsDataDevelopment,
  // columnsDataCheck,
  // columnsDataColumns,
  columnsDataComplex,
} from "views/admin/dataTables/variables/columnsData";
// import tableDataDevelopment from "views/admin/dataTables/variables/tableDataDevelopment.json";
// import tableDataCheck from "views/admin/dataTables/variables/tableDataCheck.json";
// import tableDataColumns from "views/admin/dataTables/variables/tableDataColumns.json";
import tableDataComplex from "views/admin/dataTables/variables/tableDataComplex.json";
import React from "react";

import { useState, useEffect } from "react";

import { fetchAllRequests } from "../../../api/requestApi";

import Overview from "../profile1";

const statusMapping = {
  APPROVAL_PENDING: "Approval Pending",
  PENDING_UPLOADS: "Pending Uploads",
  UNDER_REVIEW: "Under Review",
  COMPLETE: "Completed",
  REJECTED: "Rejected",
};

export default function Settings() {
  const [apiData, setApiData] = useState([]);

  const fetchRequests = async () => {
    try {
      const response = await fetchAllRequests();
      console.log(response.data.data);
      setApiData(
        response.data.data.map((elem) => {
          console.log(elem);
          return {
            rid: elem.id,
            uid: elem.user.uid,
            name: elem.user.name,
            status: statusMapping[elem.status],
            type: elem.type,
            theme: elem.theme,
          };
        })
      );
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchRequests();
    console.log(apiData);
  }, []);

  // Chakra Color Mode
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      {/* <HStack spacing={3}>
        <Select placeholder="Aid Type" bg="white">
          <option value="option1">Financial</option>
          <option value="option2">Non-Financial</option>
        </Select>

        <Select placeholder="Status" bg="white">
          <option value="option1">Approval_Pending</option>
          <option value="option2">Pending_Uploads</option>
          <option value="option3">Under_Review</option>
          <option value="option4">Completed</option>
          <option value="option5">Rejected</option>
        </Select>

        <Select placeholder="Theme" bg="white">
          <option value="option1">Education</option>
          <option value="option2">Health</option>
          <option value="option3">Lifeskill</option>
          <option value="option4">Housing</option>
          <option value="option5">Transport</option>
          <option value="option6">Recreation</option>
          <option value="option7">Counselling</option>
          <option value="option8">Livelihood</option>
        </Select>
      </HStack> */}
      <Box>
        <br></br>
      </Box>

      <SimpleGrid
        mb="20px"
        columns={{ sm: 1, md: 2 }}
        spacing={{ base: "20px", xl: "20px" }}
      >
        {/* <DevelopmentTable
          columnsData={columnsDataDevelopment}
          tableData={tableDataDevelopment}
        /> */}
        {/* <CheckTable columnsData={columnsDataCheck} tableData={tableDataCheck} /> */}
        {/* <ColumnsTable
          columnsData={columnsDataColumns}
          tableData={tableDataColumns}
        /> */}
        <ComplexTable columnsData={columnsDataComplex} tableData={apiData} />
      </SimpleGrid>
    </Box>
  );
}
