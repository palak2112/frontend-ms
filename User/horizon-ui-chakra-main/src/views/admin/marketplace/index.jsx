import React from "react";

// Chakra imports
import {
  Box,
  Button,
  Flex,
  Grid,
  Link,
  Text,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";

// Custom components
import Banner from "views/admin/marketplace/components/Banner";
import TableTopCreators from "views/admin/marketplace/components/TableTopCreators";
import HistoryItem from "views/admin/marketplace/components/HistoryItem";
import NFT from "components/card/NFT";
import Card from "components/card/Card.js";

// Assets
import Nft1 from "assets/img/nfts/Nft1.png";
import Nft2 from "assets/img/nfts/Nft2.png";
import Nft3 from "assets/img/nfts/Nft3.png";
import Nft4 from "assets/img/nfts/Nft4.png";
import Nft5 from "assets/img/nfts/Nft5.png";
import Nft6 from "assets/img/nfts/Nft6.png";
import tableDataTopCreators from "views/admin/marketplace/variables/tableDataTopCreators.json";
import { tableColumnsTopCreators } from "views/admin/marketplace/variables/tableColumnsTopCreators";
import { useState } from "react";
import { useEffect } from "react";
import { fetchAllEvents } from "../../../api/eventApi";
import moment from "moment";

import { useHistory } from "react-router-dom";

const themeMapping = {
  EDUCATION: "Education",
  HEALTHCARE: "Healthcare",
  LIFESTYLE: "Lifesytle",
  LIVELIHOOD: "Livelihood",
  CAREER_COUNSELLING: "Career Counselling",
  GENERAL_COUNSELLING: "General Counselling",
  WELLNESS_COUNSELLING: "Wellness Counselling",
};

export default function Marketplace() {
  const history = useHistory();
  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  //const textColorBrand = useColorModeValue("brand.500", "white");
  const [data, setData] = useState([]);
  const fetchEvents = async () => {
    try {
      const response = await fetchAllEvents();
      console.log(response.data.data);
      setData(response.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <Box pt={{ base: "180px", md: "80px", xl: "80px" }}>
      
      <Flex
        flexDirection="column"
        gridArea={{ xl: "1 / 1 / 2 / 3", "2xl": "1 / 1 / 2 / 2" }}
      >
        <Flex direction="column">
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap="40px">
            {data.map((elem) => {
              return (
                <button
                  onClick={() => history.push(`/admin/eventdetails/${elem.id}`)}
                >
                  <NFT
                    name={elem.name}
                    author={elem.description}
                    bidders={[]}
                    image={elem.posterUrl}
                    currentbid={moment(new Date(elem.startDate)).format("LL")}
                    download="#"
                    location={elem.location}
                    theme={themeMapping[elem.theme]}
                  />
                </button>
              );
            })}
          </SimpleGrid>
        </Flex>
      </Flex>
      {/* </Grid> */}
      {/* Delete Product */}
    </Box>
  );
}
