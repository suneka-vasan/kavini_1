import { Flex, Box, Link, Heading, Stack, HStack, VStack, Text, Spacer, SimpleGrid, GridItem } from "@chakra-ui/react"
import Image from 'next/image'
import { BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs'

function Footer() {
    return (
        <>
            <Box bg='#033303'>
                <Box py='10' maxW='container.xl' color='#C99035' mx='auto' borderBottom='1px' >
                    <SimpleGrid columns={{ base: 1, md: 3 }} gap={2} mx={{ base: 0, md: 'auto' }}>
                        <GridItem display='block' alignItems='center' justifyContent='center' padding={{ base: 10, md: 0 }}>
                            <Image src='/Logo_Full.png' width='100' height='100' alt='Logo' />
                            <Text fontSize={{ base: 14, md: 16 }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda dicta et eveniet facere fuga impedit laboriosam neque numquam odio optio perspiciatis, quasi quod repudiandae sed voluptate voluptatibus. Earum, labore.</Text>
                        </GridItem>
                        <GridItem display={{ base: 'flex', md: 'flex' }} alignItems='start' justifyContent='center'>
                            <Stack direction={['column', 'column']} spacing={['20px', '20px']} textAlign={{ base: "left" }}>
                                <Link href="/">
                                    Home
                                </Link>
                                <Link href="/about">
                                    About Us
                                </Link>
                                <Link href="/services">
                                    Services
                                </Link>
                                <Link href="/contact">
                                    Contact
                                </Link>
                                <Link href="/contact">
                                    Privacy Policy
                                </Link>
                            </Stack>
                        </GridItem>
                        <Stack alignItems='start' ms={{ base: '10', md: '20' }}>
                            <Box pb='5' fontSize={{ base: 14, md: 16 }} lineHeight='10'>
                                <Heading fontSize='22'>Reach Us</Heading>
                                <Text>123, Church Road, Chennai- 28</Text>
                                <Text>info@kavini.com</Text>
                                <Text>+01 23456789</Text>
                            </Box>
                            <VStack alignItems='start'>
                                <Heading fontSize='22' pb='3'>Follow Us</Heading>
                                <HStack spacing='50px'>
                                    <BsFacebook />
                                    <BsTwitter />
                                    <BsInstagram />
                                </HStack>
                            </VStack>
                        </Stack>
                    </SimpleGrid>
                </Box>
                <SimpleGrid maxW='container.xl' mx='auto' color='#ffffff' columns={{ base: 1, md: 2 }} lineHeight={{ base: "18px", md: 1.5 }} fontSize={{ base: "14px", md: "16px" }}>
                    <GridItem textAlign={{ base: 'center', md: 'left' }} pt={{ base: 4, md: 4 }} pb={{ base: 0, md: 4 }}>
                        Kavini &copy; 2022. All Rights Reserved.
                    </GridItem>
                    <GridItem textAlign={{ base: 'center', md: 'right' }} py={4}>
                        Designed & Developed by <Link href='http://www.glenise.com/' target='_blank'>Glenise</Link>
                    </GridItem>
                </SimpleGrid>
            </Box>
        </>
    )
}

export default Footer