// Chakra imports
import { SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import { useTranslation } from "react-i18next";
import "../../../../i18n.js";
import Card from "components/card/Card.js";
import React,{useState,useEffect} from "react";
import Information from "views/admin/profile/components/Information";
import Banner from "views/admin/profile/components/Banner";
import banner from "assets/img/auth/banner.png";
import avatar from "assets/img/avatars/avatar4.png";

import { t } from "i18next";


import { fetchUserById } from "../../../../api/userApi";
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

  const [userData,setUserData] = useState();
    const getUserDetails = async () =>{
    const uid = JSON.parse(localStorage.getItem("user"))["id"];
      try {
          const res = await fetchUserById(uid);
          console.log(res.data.data);
          setUserData(res.data.data);

      } catch (error) {
        
      }
    }

    useEffect(() => {
      getUserDetails();
    }, [])
    

  return (
    <Card mb={{ base: "0px", "2xl": "20px" }} {...rest}>
    
      <Banner
          gridArea='2 / 2 / 2 / 2'
          banner={banner}
          avatar={userData && userData['photoUrl']}
          name={userData && userData['name']}
          // job='Product Designer'
          // posts='17'
          // followers='9.7k'
          // following='274'

        />
     
      <SimpleGrid columns={{base: '1', md:'2'}} gap='20px'>
        <Information
          boxShadow={cardShadow}

          title={t("UID")}
          value={userData && userData['uid']}
        />
        <Information
          boxShadow={cardShadow}
          title={t("Email")}
          value={userData && userData['email']}

        />
       
        
        <Information
          boxShadow={cardShadow}

          title={t("Year of Enrollment")}
          value={userData && userData['yearOfEnrolment']}

        />
        
        <Information
          boxShadow={cardShadow}

          title={t("Phone No")}
          value={userData && userData['phoneNumber']}
        />
        
        <Information
          boxShadow={cardShadow}
          title={t("Address")}
          value= {userData?.address &&
            Object.keys(userData?.address)
              .map(function (key) {
                return userData.address[key];
              })
              .join(", ")}
        />
      </SimpleGrid>
    </Card>
  );
}
