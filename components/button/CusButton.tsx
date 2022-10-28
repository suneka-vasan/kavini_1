import React from 'react'
import { Box, LinkBox, LinkOverlay } from "@chakra-ui/react"

function CusButton(props: any) {
    return (
        <div>
            <LinkBox>
                <LinkOverlay href={props.path}>
                    <Box
                        as="button"
                        lineHeight="1.2"
                        transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                        border="1px"
                        p="15px 30px"
                        rounded="30px"
                        fontSize="16px"
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

export default CusButton