// Chakra imports
import { Text, useColorModeValue } from "@chakra-ui/react";
// Assets
import Project1 from "assets/img/profile/Project1.png";
import Project2 from "assets/img/profile/Project2.png";
import Project3 from "assets/img/profile/Project3.png";
import { Image, Box,Input,Center } from '@chakra-ui/react'
// Custom components
import Card from "components/card/Card.js";
import {React,useEffect,useState,useSelector} from "react";
import Project from "views/admin/profile/components/Project";
import { Heading ,Button} from '@chakra-ui/react'
import {toast} from "react-toastify"



export default function Projects({uploadFile,setUploadFile}) {
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );
   

  const [previewImage,setPreviewImage] = useState("");


  const handleUpload = async() =>{
    try{
      setPreviewImage(URL.createObjectURL(uploadFile));
      toast.success("Image Upload Successful");
    }
    catch(error){
      console.log("error in upload",error);
      if(uploadFile === "") toast.error("Select an image");
      else toast.error("Image upload failed");
    }
  }  
  return (
    <Card mb={{ base: "0px", "2xl": "20px" }}>
      
      <Box boxSize='xs'>
      <Image src={previewImage} alt='Upload an image' height='300px' width='500px' />
      </Box>
        
              
      <Input type={"file"} placeholder={"Upload an image"} onChange = {(e) =>{
                setUploadFile(e.target.files[0]);
              }}/>
      <br></br>
      <br></br>
<br></br>

      <Center>
        
      <Button
              fontSize='sm'
              variant='brand'
              fontWeight='1000'
              w='25%'
              background="#F58220"
              type="submit"
              onClick={handleUpload}
              >
              Upload
            </Button>
            </Center>

      

    </Card>
  );
}
