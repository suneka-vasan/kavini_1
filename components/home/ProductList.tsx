import { Box, Heading, SimpleGrid, GridItem, Flex, Image, Text, Spacer, Wrap, WrapItem, Center, Stack } from "@chakra-ui/react"
import { productitems } from "../home/ProductItems"
import CusButton2 from '../button/CusButton2'

function Product_1() {
    return (
        <>
            {productitems.map((data, key) => {
                return (
                    <div key={key}>
                        <Box p='5' bg='white'>
                            <Flex alignItems="center" justifyContent="center" flexFlow={{ base: "column", md: "row" }} >
                                <Image alt=' ' src={data.img} width='163' height='136' mr='5' border='1px' borderColor='gray.200' mb={{ base: 3 }} />
                                <Box>
                                    <Heading as='h4' size='md' color='#033303' mb='3'>{data.title}</Heading>
                                    <Text fontSize={{ base: "12px", md: "15px" }} mb='3'>{data.bodytext}</Text>
                                    <Flex alignItems="center" justifyContent="center">
                                        <Heading as='h6' size='xs' color='#C99035'>{data.price}</Heading>
                                        <Spacer />
                                        <CusButton2 title='Add To Cart' path={data.path} />
                                    </Flex>
                                </Box>
                            </Flex>
                        </Box>
                    </div>
                );
            })}
        </>
    );
};
export default Product_1