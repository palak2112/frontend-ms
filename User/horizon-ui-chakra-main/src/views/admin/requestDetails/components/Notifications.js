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

import { useState } from "react";
import { useEffect } from "react";

import { documentsUpload } from "api/uploadApi";
import { updateDocument } from "api/documentApi";
import { updateRequest } from "api/requestApi";
import { useHistory } from "react-router-dom";

import { Offline, Online } from "react-detect-offline";

function dataURItoBlob(dataURI) {
  // convert base64 to raw binary data held in a string
  // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
  var byteString = atob(dataURI.split(",")[1]);

  // separate out the mime component
  var mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];

  // write the bytes of the string to an ArrayBuffer
  var ab = new ArrayBuffer(byteString.length);
  var ia = new Uint8Array(ab);
  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  //Old Code
  //write the ArrayBuffer to a blob, and you're done
  //var bb = new BlobBuilder();
  //bb.append(ab);
  //return bb.getBlob(mimeString);

  //New Code
  return new Blob([ab], { type: mimeString });
}

const DocListItem = (props) => {
  const { name, status, reqId, reqStatus, docNumber, awsUrls, setAwsUrlsCB } =
    props;
  console.log(`doc-${reqId}-${docNumber}`);
  console.log("AWS", awsUrls);
  const [uploadFile, setUploadFile] = useState("");
  const [uploadStatus, setUploadStatus] = useState(status.length > 0);
  console.log(awsUrls[`doc-${reqId}-${docNumber}`].length, uploadStatus);
  useEffect(async () => {
    if (uploadFile === "") return;

    // Upload file as Data URL to Localstorage
    const reader = new FileReader();
    reader.readAsDataURL(uploadFile);
    reader.onload = (e) => {
      // console.log(reader.result);
      localStorage.setItem(`doc-${reqId}-${docNumber}`, reader.result);
      console.log("doc uploaded", uploadFile);
    };
  }, [uploadFile]);

  const uploadAWS = async () => {
    // Upload file to AWS
    const blob = dataURItoBlob(
      localStorage.getItem(`doc-${reqId}-${docNumber}`)
    );
    const fd = new FormData();
    // const xhr = new XMLHttpRequest();

    fd.append("file", blob, blob.name);

    const res = await documentsUpload(fd);

    if (res.status === 200) {
      localStorage.removeItem(`doc-${reqId}-${docNumber}`);
      console.log({ ...awsUrls, [`doc-${reqId}-${docNumber}`]: res.data.data });
      setAwsUrlsCB({
        ...awsUrls,
        [`doc-${reqId}-${docNumber}`]: res.data.data,
      });
    }

    setUploadStatus(true);
  };

  const handleNetworkChange = async () => {
    if (localStorage.getItem(`doc-${reqId}-${docNumber}`)) {
      // Upload file to AWS
      const blob = dataURItoBlob(
        localStorage.getItem(`doc-${reqId}-${docNumber}`)
      );
      const fd = new FormData();
      // const xhr = new XMLHttpRequest();

      fd.append("file", blob, blob.name);

      const res = await documentsUpload(fd);

      if (res.status === 200) {
        localStorage.removeItem(`doc-${reqId}-${docNumber}`);
        console.log({
          ...awsUrls,
          [`doc-${reqId}-${docNumber}`]: res.data.data,
        });
        setAwsUrlsCB({
          ...awsUrls,
          [`doc-${reqId}-${docNumber}`]: res.data.data,
        });
      }

      setUploadStatus(true);
    }
    // for (const [key, value] of Object.entries(localStorage)) {
    //   console.log(`${key}: ${value}`);
    //   if (key.startsWith("doc") && key.split("-")[1] == reqId) {
    //     // Upload file to AWS
    //     const blob = dataURItoBlob(localStorage.getItem(key));
    //     const fd = new FormData();
    //     // const xhr = new XMLHttpRequest();

    //     fd.append("file", blob, blob.name);

    //     const res = await documentsUpload(fd);

    //     if (res.status === 200) {
    //       localStorage.removeItem(key);
    //       console.log({ ...awsUrls, [key]: res.data.data });
    //       setAwsUrls({
    //         ...awsUrls,
    //         [key]: res.data.data,
    //       });
    //     }

    //     // setUploadStatus(true);
    //   }
    // }
  };

  return (
    <Tr>
      <Td>{name}</Td>
      <Td>{uploadStatus === false ? "Not Uploaded" : "Uploaded"}</Td>
      {/* <Td>
    {" "}
    {moment(new Date(data?.data?.updatedAt)).format("L")}{" "}
  </Td> */}

      {reqStatus === "PENDING_UPLOADS" ? (
        <Flex gap="20px">
          <Input
            w="70%"
            required={true}
            id="event name"
            type="file"
            // value={doc.name}
            onChange={(e) => {
              setUploadFile(e.target.files[0]);
            }}
          />
          <Button onClick={uploadAWS}>Upload</Button>
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
  const { data, reqId, reqStatus, apiData, setApiDataCB, ...rest } = props;
  const history = useHistory();
  console.log({ data });
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");

  console.log(data?.data?.data);
  const initObject = {};
  Object.keys(data?.data?.data).forEach((key, idx) => {
    initObject[`doc-${reqId}-${idx}`] = data?.data?.data[key];
  });
  console.log(initObject);
  const [awsUrls, setAwsUrls] = useState(initObject);

  const handleSubmit = async () => {
    // updateDocument
    const payload = {
      data: {},
    };
    Object.keys(data?.data?.data).forEach((key, idx) => {
      payload["data"][key] = awsUrls[`doc-${reqId}-${idx}`];
    });

    await updateDocument(payload, data.data.id);
    console.log("Documents updated");

    await updateRequest({ status: "UNDER_REVIEW" }, reqId);
    // setApiDataCB({
    //   ...apiData,
    //   requestData: { ...apiData.requestData, status: "UNDER_REVIEW" },
    // });
    // history.push(`/admin/requestdetails/${reqId}`);
    window.location.reload();
  };

  const handleNetworkChange = async () => {
    for (const [key, value] of Object.entries(localStorage)) {
      console.log(`${key}: ${value}`);
      if (key.startsWith("doc") && key.split("-")[1] == reqId) {
        // Upload file to AWS
        const blob = dataURItoBlob(localStorage.getItem(key));
        const fd = new FormData();
        // const xhr = new XMLHttpRequest();

        fd.append("file", blob, blob.name);

        const res = await documentsUpload(fd);

        if (res.status === 200) {
          localStorage.removeItem(key);
          console.log({ ...awsUrls, [key]: res.data.data });
          setAwsUrls({
            ...awsUrls,
            [key]: res.data.data,
          });
        }
      }
    }
  };
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
            {awsUrls &&
              Object.keys(awsUrls).map((key, idx) => {
                return (
                  <DocListItem
                    name={Object.keys(data?.data?.data)[idx]}
                    status={awsUrls[key]}
                    docNumber={idx}
                    reqId={reqId}
                    reqStatus={reqStatus}
                    awsUrls={awsUrls}
                    setAwsUrlsCB={setAwsUrls}
                  />
                );
              })}
          </Tbody>
        </Table>
      </TableContainer>
      {reqStatus === "PENDING_UPLOADS" && (
        <Button
          disabled={
            Object.keys(awsUrls).filter((key) => awsUrls[key].length === 0)
              .length > 0
          }
          onClick={handleSubmit}
        >
          Submit
        </Button>
      )}
      <Offline onChange={handleNetworkChange}></Offline>
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
