import Image from 'next/image'
import { Flex, Box, Center, Heading, Text, Container, Square, Button, Link, SimpleGrid, GridItem } from "@chakra-ui/react"
import CusButton from '../button/CusButton'

function DiscoverSection() {
    return (
        <>
            <Box maxW='container.xl' mx={{ base: 0, md: 'auto' }} >
                <SimpleGrid px={{ base: 5, md: 0 }} mt='10' columns={{ base: 1, md: 2 }} >
                    <GridItem mr={{ base: 0, md: 10 }}>
                        <Image src='/Saree_1.jpg' alt='Saree' width='612' height='422' />
                    </GridItem>
                    <GridItem display={{ md: 'flex' }} alignItems='center' justifyContent='center'>
                        <GridItem>
                            <Heading mb={{ base: 3, md: 5 }} color='brand' fontSize={{ base: "22px", md: "30px" }}>Discover Our<br />
                                Saree Collections</Heading>
                            <Text mb='5' color='black' lineHeight={{ base: "18px", md: 1.5 }} fontSize={{ base: "14px", md: "16px" }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. </Text>
                            <CusButton title='Explore More!' path='/about' />
                        </GridItem>
                    </GridItem>
                </SimpleGrid>
                <SimpleGrid px={{ base: 5, md: 0 }} my='10' columns={{ base: 1, md: 2 }}>
                    <GridItem display={{ md: 'flex' }} alignItems='center' justifyContent='center'>
                        <GridItem mr={{ base: 0, md: 10 }} flex='1' mb={{ base: 5, md: 0 }}>
                            <Heading mb={{ base: 3, md: 5 }} color='brand' fontSize={{ base: "22px", md: "30px" }}>Discover Our<br />
                                Jewellery Collections</Heading>
                            <Text mb='5' color='black' lineHeight={{ base: "18px", md: 1.5 }} fontSize={{ base: "14px", md: "16px" }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. </Text>
                            <CusButton title='Explore More!' path='/about' />
                        </GridItem>
                    </GridItem>
                    <GridItem >
                        <Image src='/Jewel_1.jpg' alt='Saree' width='612' height='422' />
                    </GridItem>
                </SimpleGrid>
            </Box>

        </>
    )
}

export default DiscoverSection