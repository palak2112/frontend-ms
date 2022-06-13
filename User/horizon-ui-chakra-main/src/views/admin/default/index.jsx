import { useTranslation } from "react-i18next";
import "../../../i18n.js";
// Chakra imports
import {
  Avatar,
  Box,
  Flex,
  FormLabel,
  Icon,
  Select,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import Usa from "assets/img/dashboards/usa.png";
// Custom components
// import MiniCalendar from "components/calendar/MiniCalendar";
import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";

import React,{ useState, useEffect } from "react";

import {
  MdAddTask,
  MdAttachMoney,
  MdBarChart,
  MdFileCopy,
  MdCheckCircle,
  MdOutlineError,
  MdArticle
} from "react-icons/md";
import CheckTable from "views/admin/default/components/CheckTable";
import ComplexTable from "views/admin/default/components/ComplexTable";
import DailyTraffic from "views/admin/default/components/DailyTraffic";
import PieCard from "views/admin/default/components/PieCard";
import Tasks from "views/admin/default/components/Tasks";
import TotalSpent from "views/admin/default/components/TotalSpent";
import WeeklyRevenue from "views/admin/default/components/WeeklyRevenue";
import {
  columnsDataCheck,
  columnsDataComplex,
} from "views/admin/default/variables/columnsData";
import tableDataCheck from "views/admin/default/variables/tableDataCheck.json";
import tableDataComplex from "views/admin/default/variables/tableDataComplex.json";

import { fetchAllRequests } from "../../../api/requestApi";
import { fetchStatusCount } from "../../../api/userApi";


const statusMapping = {
  APPROVAL_PENDING: "Approval Pending",
  PENDING_UPLOADS: "Pending Uploads",
  UNDER_REVIEW: "Under Review",
  COMPLETE: "Completed",
  REJECTED: "Rejected",
};

export default function UserReports() {
  // Chakra Color Mode
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");

  const { t } = useTranslation();

  // useEffect(() => {
  //   var cur = window.location.href;
  //   cur += "?lng=en";
  //   window.location.href = cur;
  // }, []);

  
  const [apiData, setApiData] = useState([]);
  const [statusCount,setStatusCount] = useState();
  const [totalRequest,setTotalRequest] = useState();


  const fetchCount = async () => { 
    const uid = JSON.parse(localStorage.getItem("user"))["uid"];
    console.log(uid);
    try {
      const response = await fetchStatusCount({uid});
      console.log(response.data);
      setStatusCount(response.data.data);
      setTotalRequest(response.data.data["COMPLETE"] + 
      response.data.data["APPROVAL_PENDING"] +
      response.data.data["PENDING_UPLOADS"] +
      response.data.data["UNDER_REVIEW"]
                      );
    } catch (error) {
      console.log(error);
    }
  }

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
    fetchCount();
  }, []);



  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, "2xl": 6 }}
        gap='20px'
        mb='20px'>
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={MdCheckCircle} color={"green.500"} />
              }
            />
          }

          name={t("Completed requests")}
          value= {statusCount && statusCount["COMPLETE"]}

        />
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={MdOutlineError} color={"orange.500"} />
              }
            />
          }

          name={t("Pending approval")}
          value={statusCount && statusCount["APPROVAL_PENDING"]}

        />
        {/* <MiniStatistics growth='+23%' name='Sales' value='$574.34' /> */}
        <MiniStatistics
          // endContent={
          //   <Flex me='-16px' mt='10px'>
          //     <FormLabel htmlFor='balance'>
          //       <Avatar src={Usa} />
          //     </FormLabel>
          //     <Select
          //       id='balance'
          //       variant='mini'
          //       mt='5px'
          //       me='0px'
          //       defaultValue='usd'>
          //       <option value='usd'>USD</option>
          //       <option value='eur'>EUR</option>
          //       <option value='gba'>GBA</option>
          //     </Select>
          //   </Flex>
          // }
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={MdArticle} color={"blue.500"} />
              }
            />
          }

          name={t("Pending Upload")}
          value={statusCount && statusCount["PENDING_UPLOADS"]}

        />
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={MdAddTask} color={"yellow.500"} />
              }
            />
          }
          name={t("Under Review")}
          value={statusCount && statusCount["UNDER_REVIEW"]}
        />
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={MdFileCopy} color={brandColor} />
              }
            />
          }
          name={t("Total Requests")}
          value={totalRequest}

        />
      </SimpleGrid>

      {/* <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
        <TotalSpent />
        <WeeklyRevenue />
      </SimpleGrid> */}
      {/* <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap='20px' mb='20px'>
        <CheckTable columnsData={columnsDataCheck} tableData={tableDataCheck} />
        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px'>
          <DailyTraffic />
          <PieCard />
        </SimpleGrid>
      </SimpleGrid> */}
      <SimpleGrid columns={{ base: 1, md: 2, xl: 0 }} gap='20px' mb='20px'>
        <ComplexTable
          columnsData={columnsDataComplex}
          tableData={apiData}
        />
        {/* <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px'>
          <Tasks />
          <MiniCalendar h='100%' minW='100%' selectRange={false} />
        </SimpleGrid> */}
      </SimpleGrid>
    </Box>
  );
}
