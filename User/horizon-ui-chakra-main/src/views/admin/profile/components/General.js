// Chakra imports
import { SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import { useTranslation } from "react-i18next";
import "../../../../i18n.js";
import Card from "components/card/Card.js";
import React from "react";
import Information from "views/admin/profile/components/Information";
import Banner from "views/admin/profile/components/Banner";
import banner from "assets/img/auth/banner.png";
import avatar from "assets/img/avatars/avatar4.png";
import { t } from "i18next";
// Assets
export default function GeneralInformation(props) {
  const { ...rest } = props;
  const {t} = useTranslation(); 
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );
  return (
    <Card mb={{ base: "0px", "2xl": "20px" }} {...rest}>
    
      <Banner
          gridArea='2 / 2 / 2 / 2'
          banner={banner}
          avatar={avatar}
          name={t("User Name")}
          
        />
     
      <SimpleGrid columns={{base: '1', md:'2'}} gap='20px'>
        <Information
          boxShadow={cardShadow}
          title={t("UID")}
          value='show-uid'
        />
        <Information
          boxShadow={cardShadow}
          title={t("Email")}
          value='user@gmail.com'
        />
       
        
        <Information
          boxShadow={cardShadow}
          title={t("Year of Enrollment")}
          value='2015'
        />
        
        <Information
          boxShadow={cardShadow}
          title={t("Phone No")}
          value='9999999999'
        />
        
        <Information
          boxShadow={cardShadow}
          title={t("Address")}
          value='line 1'
        />
      </SimpleGrid>
    </Card>
  );
}
