import { Box, Grid, SimpleGrid, Text, useColorModeValue, Input, InputGroup, InputRightElement, Icon, Flex, Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

// Custom components
import Card from "components/card/Card.js";
import React from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiEyeCloseLine } from "react-icons/ri";
import Information from "views/admin/profile/components/Information";
import {
	FormControl,
	FormLabel,
	FormErrorMessage,
	FormHelperText,
} from '@chakra-ui/react'
import { useState } from "react";

export default function GeneralInformation(props) {
	const textColorBrand = useColorModeValue("brand.500", "white");
	const handleClick = () => setShow(!show);
	const [show, setShow] = React.useState(false);
	const textColor = useColorModeValue("navy.700", "white");
	const { ...rest } = props;
	// Chakra Color Mode
	const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
	const textColorSecondary = "gray.400";
	const cardShadow = useColorModeValue(
		"0px 18px 40px rgba(112, 144, 176, 0.12)",
		"unset"
	);
	const [input, setInput] = useState('')

	const handleInputChange = (e) => setInput(e.target.value)

	const isError = input === ''
	return (
		<>
			<Box pt={{ base: "180px", md: "80px", xl: "80px" }}>
				<Grid
					mb='20px'
					gridTemplateColumns={{ xl: "repeat(3, 1fr)", "2xl": "1fr 0.46fr" }}
					gap={{ base: "20px", xl: "20px" }}
					display={{ base: "block", xl: "grid" }}>
				</Grid>
			</Box>
			<FormControl isInvalid={isError} isRequired>
				<FormLabel
					display='flex'
					ms='4px'
					fontSize='lg'
					fontWeight='500'
					color={textColor}
					mb='8px'>
					First Name
				</FormLabel>
				<Input
					backgroundColor="white"
					isRequired={true}
					variant='auth'
					fontSize='md'
					ms={{ base: "0px", md: "0px" }}
					type='email'
					placeholder='Enter your email id'
					mb='0px'
					fontWeight='500'
					size='lg'
					// value={input}
					onChange={handleInputChange}
				/>
				{!isError ? (
					<FormHelperText></FormHelperText>
				) : (
					<FormErrorMessage>First name is required.</FormErrorMessage>
				)}


				<FormLabel
					display='flex'
					ms='4px'
					fontSize='lg'
					fontWeight='500'
					color={textColor}
					mb='8px'
					mt='30px'>
					Last Name
				</FormLabel>
				<Input
					backgroundColor="white"
					isRequired={true}
					variant='auth'
					fontSize='md'
					ms={{ base: "0px", md: "0px" }}
					type='email'
					placeholder='Enter your Last name'
					mb='0px'
					fontWeight='500'
					size='lg'
					// value={input}
					onChange={handleInputChange}
				/>
				{!isError ? (
					<FormHelperText></FormHelperText>
				) : (
					<FormErrorMessage>Last name is required.</FormErrorMessage>
				)}

				<FormLabel
					display='flex'
					ms='4px'
					fontSize='lg'
					fontWeight='500'
					color={textColor}
					mb='8px'>
					Email
				</FormLabel>
				<Input
					backgroundColor="white"
					isRequired={true}
					variant='auth'
					fontSize='md'
					ms={{ base: "0px", md: "0px" }}
					type='email'
					placeholder='Enter your email id'
					mb='0px'
					fontWeight='500'
					size='lg'
					// value={input}
					onChange={handleInputChange}
				/>
				<FormLabel
					display='flex'
					ms='4px'
					fontSize='lg'
					fontWeight='500'
					color={textColor}
					mb='8px'>

				</FormLabel>
				<FormLabel
					display='flex'
					ms='4px'
					fontSize='lg'
					fontWeight='500'
					color={textColor}
					mb='8px'>

				</FormLabel>
				<FormLabel
					display='flex'
					ms='4px'
					fontSize='xx-large'
					fontWeight='500'
					color={textColor}
					mb='8px'>
					Address
				</FormLabel>
				<Input
					backgroundColor="white"
					isRequired={true}
					variant='auth'
					fontSize='md'
					ms={{ base: "0px", md: "0px" }}
					type='email'
					placeholder='Address line 1'
					mb='0px'
					fontWeight='500'
					size='lg'
					// value={input}
					onChange={handleInputChange}
				/>
				<Input
					backgroundColor="white"
					isRequired={true}
					variant='auth'
					fontSize='md'
					ms={{ base: "0px", md: "0px" }}
					type='email'
					placeholder='Address line 2'
					mb='0px'
					fontWeight='500'
					size='lg'
					// value={input}
					onChange={handleInputChange}
				/>
				<Input
					backgroundColor="white"
					isRequired={true}
					variant='auth'
					fontSize='md'
					ms={{ base: "0px", md: "0px" }}
					type='email'
					placeholder='City'
					mb='0px'
					fontWeight='500'
					size='lg'
					// value={input}
					onChange={handleInputChange}
				/>
				<Input
					backgroundColor="white"
					isRequired={true}
					variant='auth'
					fontSize='md'
					ms={{ base: "0px", md: "0px" }}
					type='email'
					placeholder='State'
					mb='0px'
					fontWeight='500'
					size='lg'
					// value={input}
					onChange={handleInputChange}
				/>
				<Input
					backgroundColor="white"
					isRequired={true}
					variant='auth'
					fontSize='md'
					ms={{ base: "0px", md: "0px" }}
					type='email'
					placeholder='Zip/Postal Code'
					mb='24px'
					fontWeight='500'
					size='lg'
					// value={input}
					onChange={handleInputChange}
				/>
				<Input
					backgroundColor="white"
					isRequired={true}
					variant='auth'
					fontSize='md'
					ms={{ base: "0px", md: "0px" }}
					type='number'
					placeholder='Phone number'
					mb='24px'
					fontWeight='500'
					size='lg'
					// value={input}
					onChange={handleInputChange}
				/>
				<FormLabel
					ms='4px'
					fontSize='lg'
					fontWeight='500'
					color={textColor}
					display='flex'>
					Password
				</FormLabel>
				<InputGroup size='md'>
					<Input
						backgroundColor="white"
						isRequired={true}
						fontSize='sm'
						placeholder='Min. 8 characters'
						mb='24px'
						size='lg'
						type={show ? "text" : "password"}
						variant='auth'
						// value={input}
						onChange={handleInputChange}
					/>
					<InputRightElement display='flex' alignItems='center' mt='4px'>
						<Icon
							color={textColorSecondary}
							_hover={{ cursor: "pointer" }}
							as={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
							onClick={handleClick}
						/>
					</InputRightElement>
				</InputGroup>
				{/* <Flex justifyContent='space-between' align='center' mb='24px'>
          <FormControl display='flex' alignItems='center'>
            <Checkbox
                  id='remember-login'
                  colorScheme='brandScheme'
                  me='10px'
                />
            <FormLabel
              htmlFor='remember-login'
              mb='0'
              fontWeight='normal'
              color={textColor}
              fontSize='sm'>
              Keep me logged in
            </FormLabel>
          </FormControl>
          <NavLink to='/auth/forgot-password'>
            <Text
              color={textColorBrand}
              fontSize='sm'
              w='124px'
              fontWeight='500'>
              Forgot password?
            </Text>
          </NavLink>
        </Flex> */}
				<Button
					fontSize='sm'
					variant='brand'
					fontWeight='500'
					w='100%'
					h='50'
					mb='24px'
					background="#F58220">
					Submit
				</Button>
			</FormControl>
		</>
	);
}