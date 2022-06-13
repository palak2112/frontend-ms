import React from "react";
import { useHistory } from "react-router-dom";
// Chakra imports
import { Input, InputGroup,HStack,Box,Select,Button, Flex, Link, Text } from "@chakra-ui/react";

// Assets
//import banner from "assets/img/nfts/NftBanner1.png";

export default function Banner() {
  // Chakra Color Mode
  const history = useHistory();

  const redirectTo = () =>{
    history.replace("/admin/profile");
  }

  return (
    // <Flex
    //   direction='column'
    //   bgImage={banner}
    //   bgSize='cover'
    //   py={{ base: "30px", md: "56px" }}
    //   px={{ base: "30px", md: "64px" }}
    //   borderRadius='30px'>
    //   <Text
    //     fontSize={{ base: "24px", md: "34px" }}
    //     color='white'
    //     mb='14px'
    //     maxW={{
    //       base: "100%",
    //       md: "64%",
    //       lg: "46%",
    //       xl: "70%",
    //       "2xl": "50%",
    //       "3xl": "42%",
    //     }}
    //     fontWeight='700'
    //     lineHeight={{ base: "32px", md: "42px" }}>
    //     Discover, collect, and sell extraordinary NFTs
    //   </Text>
    //   <Text
    //     fontSize='md'
    //     color='#E3DAFF'
    //     maxW={{
    //       base: "100%",
    //       md: "64%",
    //       lg: "40%",
    //       xl: "56%",
    //       "2xl": "46%",
    //       "3xl": "34%",
    //     }}
    //     fontWeight='500'
    //     mb='40px'
    //     lineHeight='28px'>
    //     Enter in this creative world. Discover now the latest NFTs or start
    //     creating your own!
    //   </Text>
    //   <Flex align='center'>
    //     <Button
    //       bg='white'
    //       color='black'
    //       _hover={{ bg: "whiteAlpha.900" }}
    //       _active={{ bg: "white" }}
    //       _focus={{ bg: "white" }}
    //       fontWeight='500'
    //       fontSize='14px'
    //       py='20px'
    //       px='27'
    //       me='38px'>
    //       Discover now
    //     </Button>
    //     <Link>
    //       <Text color='white' fontSize='sm' fontWeight='500'>
    //         Watch video
    //       </Text>
    //     </Link>
    //   </Flex>
    // </Flex>
   <Box>
    <Flex justify="space-between">
    <HStack width="100%" >
      <>
       {/* <InputGroup size='md' width="100%"> */}
       {/* <Input
       
         placeholder='Enter event name'
         _placeholder={{color: 'gray.500'}}
         variant='brand'
       /> */}
       {/* <InputRightElement width='4.5rem'>
         <Button h='1.75rem' size='md' >
           Search
         </Button>
       </InputRightElement> */}
     {/* </InputGroup> */}
     {/* <Button
               fontSize='sm'
               variant='brand'
               fontWeight='500'
               w='10%'
               background="#1B254B"
               
               >
               Search
             </Button> */}
       
    {/* <Select placeholder="Theme" bg="white" width="100%">
          <option value="option1">Education</option>
          <option value="option2">Health</option>
          <option value="option3">Lifeskill</option>
          <option value="option4">Housing</option>
          <option value="option5">Transport</option>
          <option value="option6">Recreation</option>
          <option value="option7">Counselling</option>
          <option value="option8">Livelihood</option>
        </Select> */}
        {/* <Flex justify="flex-end"> */}
        {/* <Button
              fontSize='sm'
              variant='brand'
              fontWeight='500'
              w='30%'
              background="#1B254B"
              
              >
              Search
            </Button> */}
         {/* </Flex> */}
         </>
         {/* <Flex justify="flex-end"> */}
      {/* <Button 
      //colorScheme="blue" variant="outline" size="lg" mx="8" my="4" 
              
              fontSize='sm'
              variant='brand'
              fontWeight='500'
              w='30%'
              background="#1B254B"
              
      onClick={redirectTo}>
        Add Event
      </Button> */}
    {/* </Flex> */}
         </HStack>

         
    </Flex>

    </Box>
  );
}
