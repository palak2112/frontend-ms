// Chakra imports
import { SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import React from "react";
import Information from "views/admin/profile/components/Information";
import Banner from "views/admin/profile/components/Banner";
import banner from "assets/img/auth/banner.png";
import avatar from "assets/img/avatars/avatar4.png";
// Assets
export default function GeneralInformation(props) {
  const { ...rest } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );
  return (
    <Card mb={{ base: "0px", "2xl": "20px" }} {...rest}>
      {/* <Text
        color={textColorPrimary}
        fontWeight='bold'
        fontSize='2xl'
        mt='10px'
        mb='4px'>
        General Information
      </Text> */}
      <Banner
          gridArea='2 / 2 / 2 / 2'
          banner={banner}
          avatar={avatar}
          name='User Name'
          // job='Product Designer'
          // posts='17'
          // followers='9.7k'
          // following='274'
        />
      {/* <Text color={textColorSecondary} fontSize='md' me='26px' mb='40px'>
        As we live, our hearts turn colder. 
      </Text> */}
      <SimpleGrid columns={{base: '1', md:'2'}} gap='20px'>
        <Information
          boxShadow={cardShadow}
          title='UID'
          value='show-uid'
        />
        <Information
          boxShadow={cardShadow}
          title='Email'
          value='user@gmail.com'
        />
       
        
        <Information
          boxShadow={cardShadow}
          title='Year of Enrollment'
          value='2015'
        />
        
        <Information
          boxShadow={cardShadow}
          title='Phone No'
          value='9999999999'
        />
        
        <Information
          boxShadow={cardShadow}
          title='Address'
          value='line 1'
        />
      </SimpleGrid>
    </Card>
  );
}
