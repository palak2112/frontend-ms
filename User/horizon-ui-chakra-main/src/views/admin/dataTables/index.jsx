

// Chakra imports
import { Box, SimpleGrid } from "@chakra-ui/react";
import DevelopmentTable from "views/admin/dataTables/components/DevelopmentTable";
import CheckTable from "views/admin/dataTables/components/CheckTable";
import ColumnsTable from "views/admin/dataTables/components/ColumnsTable";
import ComplexTable from "views/admin/dataTables/components/ComplexTable";
import {
  columnsDataDevelopment,
  columnsDataCheck,
  columnsDataColumns,
  columnsDataComplex,
} from "views/admin/dataTables/variables/columnsData";
import tableDataDevelopment from "views/admin/dataTables/variables/tableDataDevelopment.json";
import tableDataCheck from "views/admin/dataTables/variables/tableDataCheck.json";
import tableDataColumns from "views/admin/dataTables/variables/tableDataColumns.json";
import tableDataComplex from "views/admin/dataTables/variables/tableDataComplex.json";
import React,{ useState, useEffect }  from "react";
import { fetchAllRequests } from "../../../api/requestApi";

const statusMapping = {
  APPROVAL_PENDING: "Approval Pending",
  PENDING_UPLOADS: "Pending Uploads",
  UNDER_REVIEW: "Under Review",
  COMPLETE: "Completed",
  REJECTED: "Rejected",
};

export default function Settings() {
  // Chakra Color Mode
  const [apiData, setApiData] = useState([]);

  const fetchRequests = async () => {
    const uid = JSON.parse(localStorage.getItem("user"))["uid"];
    console.log(uid);
    try {
      const response = await fetchAllRequests({uid});
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
            updatedAt:elem.updatedAt
          };
        })
      );

    } catch (e) {
      console.log(e);
    }
  };

  useEffect(async () => {
    fetchRequests();
  }, []);


  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      
      <SimpleGrid
        mb='20px'
        columns={{ sm: 1, md: 2 }}
        spacing={{ base: "20px", xl: "20px" }}>
        {/* <DevelopmentTable
          columnsData={columnsDataDevelopment}
          tableData={tableDataDevelopment}
        /> */}
        {/* <CheckTable columnsData={columnsDataCheck} tableData={tableDataCheck} /> */}
        {/* <ColumnsTable
          columnsData={columnsDataColumns}
          tableData={tableDataColumns}
        /> */}
        <ComplexTable
          columnsData={columnsDataComplex}
          tableData={apiData}
        />
      </SimpleGrid>
    </Box>
  );
}
