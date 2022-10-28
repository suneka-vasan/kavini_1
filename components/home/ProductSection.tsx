import { Box, Heading, SimpleGrid, GridItem } from "@chakra-ui/react"
import ProductList from '../home/ProductList'

function ProductSection() {
    return (
        <div>
            <Box bg='#FFF4E6' >
                <Box maxW='container.xl' mx={{ base: 0, md: 'auto' }} >
                    <Heading pt='10' color='#033303' textAlign='center' mb='5'>Trending Products</Heading>
                    <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} justifyItems={"center"} gap={5} pb='10'>
                        <ProductList />
                    </SimpleGrid>
                </Box>
            </Box>
        </div>
    )
}

export default ProductSection