
import { useTranslation } from "react-i18next";
import {
  Flex,
  Table,
  Progress,
  Icon,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useMemo } from "react";
import { useHistory } from "react-router-dom";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";

// Custom components
import Card from "components/card/Card";
// import Menu from "components/menu/MainMenu";
import moment from "moment";

// Assets
import {
  MdArticle,
  MdAddTask,
  MdCheckCircle,
  MdCancel,
  MdOutlineError,
} from "react-icons/md";

export default function ColumnsTable(props) {
const { t } = useTranslation();

  const history = useHistory();
  const { columnsData, tableData } = props;

  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => tableData, [tableData]);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    initialState,
  } = tableInstance;
  initialState.pageSize = 5;

  const textColor = useColorModeValue("secondaryGray.900", "white");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");

  return (
    <Card
      direction="column"
      w="200%"
      // h='150%'
      px="0px"
      overflowX={{ sm: "scroll", lg: "hidden" }}
    >
      <Flex px="25px" justify="space-between" mb="20px" align="center">
        <Text
          color={textColor}
          fontSize="22px"
          fontWeight="700"
          lineHeight="100%"
        >
          {t("Recent requests")}
        </Text>
      </Flex>
      <Table
        {...getTableProps()}
        variant="simple"
        color="gray.500"
        mb="24px"
        size="lg"
      >
        <Thead>
          {headerGroups.map((headerGroup, index) => (
            <Tr {...headerGroup.getHeaderGroupProps()} key={index}>
              {headerGroup.headers.map((column, index) => (
                <Th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  pe="10px"
                  key={index}
                  borderColor={borderColor}
                >
                  <Flex
                    justify="space-between"
                    align="center"
                    fontSize={{ sm: "10px", lg: "12px" }}
                    color="gray.400"
                  >
                    {column.render("Header")}
                  </Flex>
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {page.map((row, index) => {
            prepareRow(row);
            return (
              <Tr
                {...row.getRowProps()}
                key={index}
                _hover={{
                  cursor: "pointer",
                }}
                onClick={() =>
                  history.push(`/admin/requestdetails/${row.values.rid}`)
                }
              >
                {row.cells.map((cell, index) => {
                  let data = "";
                  if (cell.column.Header === "REQ-ID") {
                    data = (
                      <Text color={textColor} fontSize="sm" fontWeight="700">
                        {t(cell.value)}
                      </Text>
                    );
                  } else if (cell.column.Header === "Last-Updated") {
                    data = (
                      <Text color={textColor} fontSize="sm" fontWeight="700">
                        {moment(new Date(cell.value)).format("LL")}
                      </Text>
                    );
                  } else if (cell.column.Header === "STATUS") {
                    data = (
                      <Flex align="center">
                        <Icon
                          w="24px"
                          h="24px"
                          me="5px"
                          color={
                            cell.value === "Completed"
                              ? "green.500"
                              : cell.value === "Rejected"
                              ? "red.500"
                              : cell.value === "Approval Pending"
                              ? "orange.500"
                              : cell.value === "Under Review"
                              ? "yellow.500"
                              : cell.value === "Pending Uploads"
                              ? "blue.500"
                              : null
                          }
                          as={
                            cell.value === "Completed"
                              ? MdCheckCircle
                              : cell.value === "Rejected"
                              ? MdCancel
                              : cell.value === "Approval Pending"
                              ? MdOutlineError
                              : cell.value === "Under Review"
                              ? MdAddTask
                              : cell.value === "Pending Uploads"
                              ? MdArticle
                              : null
                          }
                        />
                        <Text color={textColor} fontSize="sm" fontWeight="700">
                          {t(cell.value)}
                        </Text>
                      </Flex>
                    );
                  } else if (cell.column.Header === "TYPE") {
                    data = (
                      <Text color={textColor} fontSize="sm" fontWeight="700">
                        {t(cell.value)}
                      </Text>
                    );
                  } else if (cell.column.Header === "NAME") {
                    data = (
                      <Text color={textColor} fontSize="sm" fontWeight="700">
                        {t(cell.value)}
                      </Text>
                    );
                  } else if (cell.column.Header === "THEME") {
                    data = (
                      <Text color={textColor} fontSize="sm" fontWeight="700">
                        {t(cell.value)}
                      </Text>
                    );
                  }
                  return (
                    <Td
                      {...cell.getCellProps()}
                      key={index}
                      fontSize={{ sm: "14px" }}
                      minW={{ sm: "150px", md: "200px", lg: "auto" }}
                      borderColor="transparent"
                    >
                      {t(data)}
                    </Td>
                  );
                })}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Card>
  );
}
