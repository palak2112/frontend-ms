

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

export default function Marketplace() {
  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  //const textColorBrand = useColorModeValue("brand.500", "white");
  return (
    
    <Box pt={{ base: "180px", md: "80px", xl: "80px" }}>
      {/* Main Fields */}
      <Grid
        mb='20px'
        gridTemplateColumns={{ xl: "repeat(3, 1fr)", "2xl": "1fr 0.46fr" }}
        gap={{ base: "20px", xl: "20px" }}
        display={{ base: "block", xl: "grid" }}>
        <Flex
          flexDirection='column'
          gridArea={{ xl: "1 / 1 / 2 / 3", "2xl": "1 / 1 / 2 / 2" }}>
          <Banner />
          <Flex direction='column'>
            <Flex
              mt='45px'
              mb='20px'
              justifyContent='space-between'
              direction={{ base: "column", md: "row" }}
              align={{ base: "start", md: "center" }}>
              <Text color={textColor} fontSize='2xl' ms='24px' fontWeight='700'>
                Recently added events
              </Text>
              {/* <Flex
                align='center'
                me='20px'
                ms={{ base: "24px", md: "0px" }}
                mt={{ base: "20px", md: "0px" }}>
                <Link
                  color={textColorBrand}
                  fontWeight='500'
                  me={{ base: "34px", md: "44px" }}
                  to='#art'>
                  Art
                </Link>
                <Link
                  color={textColorBrand}
                  fontWeight='500'
                  me={{ base: "34px", md: "44px" }}
                  to='#music'>
                  Music
                </Link>
                <Link
                  color={textColorBrand}
                  fontWeight='500'
                  me={{ base: "34px", md: "44px" }}
                  to='#collectibles'>
                  Collectibles
                </Link>
                <Link color={textColorBrand} fontWeight='500' to='#sports'>
                  Sports
                </Link>
              </Flex> */}
            </Flex>
            <SimpleGrid columns={{ base: 1, md: 2 }} gap='40px'>
              <NFT
                name='Event title1'
                author='Event description'
                bidders={[
                 
                ]}
                image={Nft1}
                currentbid='5/11/21'
                download='#'
              />
              <NFT
                name='Event title2'
                author='Event description'
                bidders={[
                  
                ]}
                image={Nft2}
                currentbid='5/11/21'
                download='#'
              />
              <NFT
                name='Event title1'
                author='Event description'
                bidders={[
                 
                ]}
                image={Nft1}
                currentbid='5/11/21'
                download='#'
              />
              <NFT
                name='Event title3 '
                author='Event description'
                bidders={[
                ]}
                image={Nft3}
                currentbid='5/11/21'
                download='#'
              />
            </SimpleGrid>
            <Text
              mt='45px'
              mb='36px'
              color={textColor}
              fontSize='2xl'
              ms='24px'
              fontWeight='700'>
              Popular events
            </Text>
            <SimpleGrid
              columns={{ base: 1, md: 2 }} 
              gap='20px'
              mb={{ base: "20px", xl: "0px" }}>
              <NFT
                name='Event title a'
                author='Event Description'
                bidders={[
                ]}
                image={Nft4}
                currentbid='5/11/21'
                download='#'
              />
              <NFT
                name='Event title b'
                author='Event Description'
                bidders={[
                ]}
                image={Nft5}
                currentbid='5/11/21'
                download='#'
              />
              <NFT
                name='Event title'
                author='Event Description'
                bidders={[
                  
                ]}
                image={Nft6}
                currentbid='5/11/21'
                download='#'
              />

                <NFT
                name='Event title'
                author='Event Description'
                bidders={[
                  
                ]}
                image={Nft6}
                currentbid='5/11/21'
                download='#'
              />
            </SimpleGrid>
          </Flex>
        </Flex>
        <Flex
          flexDirection='column'
          gridArea={{ xl: "1 / 3 / 2 / 4", "2xl": "1 / 2 / 2 / 3" }}>
          <Card px='0px' mb='20px'>
            <TableTopCreators
              tableData={tableDataTopCreators}
              columnsData={tableColumnsTopCreators}
            />
          </Card>
          <Card p='0px'>
            {/* <Flex
              align={{ sm: "flex-start", lg: "center" }}
              justify='space-between'
              w='100%'
              px='22px'
              py='18px'>
              <Text color={textColor} fontSize='xl' fontWeight='600'>
                History
              </Text>
              <Button variant='action'>See all</Button>
            </Flex> */}

            <HistoryItem
              name='Event titlea'
              author='Event description'
              date='30s ago'
              image={Nft5}
              price='0.91 ETH'
            />
            <HistoryItem
              name='Event title b'
              author='Event description'
              date='58s ago'
              image={Nft1}
              price='0.91 ETH'
            />
            <HistoryItem
              name='Event title c'
              author='Event description'
              date='1m ago'
              image={Nft2}
              price='0.91 ETH'
            />
            <HistoryItem
              name='Event title'
              author='Event description'
              date='1m ago'
              image={Nft4}
              price='0.91 ETH'
            />
            {/* <HistoryItem
              name='Event title c '
              author='Event description'
              date='2m ago'
              image={Nft3}
              price='0.91 ETH'
            />
            <HistoryItem
              name='Event title d'
              author='Event description'
              date='3m ago'
              image={Nft6}
              price='0.91 ETH'
            /> */}
          </Card>
        </Flex>
      </Grid>
      {/* Delete Product */}
      </Box>
      
  );
}
