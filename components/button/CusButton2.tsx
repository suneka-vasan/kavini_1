import { Box, LinkBox, LinkOverlay } from "@chakra-ui/react"

function CusButton2(props: any) {
    return (
        <div>
            <LinkBox>
                <LinkOverlay href={props.path}>
                    <Box
                        as="button"
                        transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                        border="1px"
                        p="5px 15px"
                        rounded="30px"
                        fontSize="13px"
                        fontWeight="semibold"
                        bg="#033303"
                        borderColor="#ccd0d5"
                        color="#C99035"
                        _hover={{ bg: "#033303" }}
                        _active={{
                            bg: "#033303",
                            transform: "scale(0.98)",
                            borderColor: "#033303",
                        }}
                    >
                        {props.title}
                    </Box>
                </LinkOverlay>
            </LinkBox>
        </div>
    )
}

export default CusButton2