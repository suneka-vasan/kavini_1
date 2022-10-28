import {
    Flex, Box, Heading, Stack, HStack, VStack, Text, FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText, Input
} from "@chakra-ui/react"
import CusButton from '../button/CusButton'

function Newsletter() {
    return (
        <div>
            <Box>
                <Box mx='auto' m='10' style={{
                    backgroundImage: 'url(/Bg_222.jpg)',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    width: 'full',
                    backgroundPosition: 'center'
                }}>
                    <Box p='10'>
                        <Heading color='#C99035' textAlign='center' mb='5'>Sign up for Newsletter</Heading>
                        <Box w='100%' textAlign='center'>
                            Get updates about our new products and 10% discount on first order.
                            <FormControl isRequired>
                                <Input type='email' placeholder='Email address' w={{ base: 'full', md: '30%' }} my='10' />
                            </FormControl>
                            <CusButton title='Subscribe' path='/about' />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}

export default Newsletter