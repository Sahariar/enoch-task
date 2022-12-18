import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	SimpleGrid,
	Heading,
	Button,
	Text,
	Container,
	Stack,
	HStack,
	Divider,
	ButtonGroup,
	Center,
	Box,
	Tag,
	Spacer,
	TagLabel,
	TagLeftIcon,
} from "@chakra-ui/react";
import Image from "next/image";
import { AiFillHeart } from "react-icons/ai";
const CardItem = ({ item }) => {
	const {
		id,
		itemType,
		itemFeatured,
		img,
		itemCode,
		itemName,
		itemStats,
		itemBidName,
		itemBid,
		itemDeals,
		itemCountDown,
        itemStatusUpdate
	} = item;
	return (
		<>
			<Card>
				<CardBody>
					<HStack py="20px">
						<Box>
							<Text
								fontSize="lg"
								as="b"
								borderRadius="full"
								border="1px"
								px={6}
								py={2}
								borderColor="gray.500"
								color="gray.500"
							>
								{itemFeatured}
							</Text>
						</Box>
						<Spacer />
						<Box>
							{itemType === "SALE" ? (
								<Text
									fontSize="lg"
									as="b"
									borderRadius="full"
									px={6}
									py={2}
									border="1px"
									borderColor="purple.600"
								>
									{itemType}
								</Text>
							) : (
								<Text
									fontSize="lg"
									as="b"
									borderRadius="full"
									px={6}
									py={2}
									border="1px"
									borderColor="yellow.600"
								>
									{itemType}
								</Text>
							)}
						</Box>
					</HStack>
				
                    <Image src={img} alt={itemName} width={500} height={400}
                    />

					<HStack py="10px">
						<Box>
							<Heading size="md" color="gray.400">
								{itemCode}
							</Heading>
							<Heading size="sm" color="blue.600">
								{itemName}
							</Heading>
						</Box>
						<Spacer />
						<Box>
							<HStack py="0px">
								
                                {
                                    itemStatusUpdate ? <>
                                    <AiFillHeart size="24px" color="red" />
                                    <Text fontSize="lg" color="white">
									{itemStats}
								</Text>
                                    </> :<>
                                    <AiFillHeart size="24px" color="gray" />
                                    <Text fontSize="lg" color="gray">
									{itemStats}
								</Text>
                                    </> 
                                }
								
							</HStack>
						</Box>
					</HStack>
					<HStack my={6}>
						{itemType === "SALE" ? (
							<>
								<Box
									border="1px"
									borderStyle="solid"
									borderColor="blue.800"
									w="40%"
									p="10px"
									boxShadow="md"
									pos="relative"
                                    borderRadius='5px'
								>
									<Tag
										pos="absolute"
										top="-3"
										right="0"
										borderRadius="full"
										backgroundColor="green.400"
										fontSize="20px"
										px="10px"
										py="5px"
                                      
									>
										15% OFF
									</Tag>
									<Text fontSize={{ base: '14px', md: '16px', lg: '18px' }} as="s" color="red.400">
										${itemBidName}
									</Text>
									<Spacer></Spacer>
									<Text fontSize="lg" as="b">
										${itemBid}
									</Text>
								</Box>

								<Box
									border="1px"
									borderColor="yellow.900"
									w="60%"
									p="5px"
									boxShadow="md"
                                    borderRadius='5px'
                                >
									<Text fontSize={{ base: '14px', md: '16px', lg: '18px' }} as="b" color="blue.300">
										{itemDeals}
									</Text>
									<Spacer></Spacer>
									<Text fontSize="xl" as="b">
										{itemCountDown}
									</Text>
								</Box>
							</>
						) : (
							<>
								<Box
									border="1px"
									borderStyle="solid"
									borderColor="blue.800"
									w="45%"
									p="11px"
									backgroundColor=""
									boxShadow="md"
                                    borderRadius='5px'
								>
									<Text fontSize={{ base: '16px', md: '16px', lg: '18px' }} as="b" color="green.400">
										{itemBidName}
									</Text>
									<Spacer></Spacer>
									<Text fontSize="lg" as="b">
										${itemBid}
									</Text>
								</Box>

								<Box
									border="1px"
									borderColor="yellow.900"
									w="55%"
									p="10px"
									boxShadow="md"
                                    borderRadius='5px'
								>
									<Text fontSize={{ base: '14px', md: '16px', lg: '18px' }} as="b" color="blue.300">
										{itemDeals}
									</Text>
									<Spacer></Spacer>
									<Text fontSize="xl" as="b">
										{itemCountDown}
									</Text>
								</Box>
							</>
						)}
					</HStack>
				</CardBody>
				<CardFooter pt="0">
					{itemType === "SALE" ? (
						<>
							<ButtonGroup spacing="2" w="100%">
                            <Button variant="outline" colorScheme="blue" w="100%" p="30px">
									ADD TO CART
							</Button>
								<Button variant="solid" backgroundColor="blue.500" w="100%" p="30px">
									BUY NOW
								</Button>
								
							</ButtonGroup>
						</>
					) : (
						<Button w="100%" p="30px" backgroundColor="blue.500" color="white">
							BID NOW
						</Button>
					)}
				</CardFooter>
			</Card>
		</>
	);
};

export default CardItem;
