import {
    Box,
    Container,
    Flex,
    Text,
    ScaleFade,
    useTheme,
    Heading,
} from "@chakra-ui/react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import { useState } from "react"
import { nanoid } from "nanoid"

const slides = [
    {
        textcontent: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
        name: "Name 1"
    },
    {
        textcontent: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
        name: "Name 2"
    },
    {
        textcontent: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
        name: "Name 3"
    },
]

export default function TestimonialSection(props: any) {
    const [slideIndex, setSlideIndex] = useState(0)
    const [bubbles] = useState<any[]>([])

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        fade: true,
        draggable: false,
        swipe: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 5000,
        cssEase: "ease-in",
        afterChange: (e: any) => setSlideIndex(e),
    }

    return (
        <Box pos={"relative"} overflow={"hidden"}>
            {bubbles &&
                bubbles.map((e, index) => {
                    return (
                        <Box
                            w={e.wh}
                            height={e.wh}
                            key={index}
                            opacity={0.3}
                            pos={"absolute"}
                            borderRadius={"full"}
                            top={e.top}
                            left={e.left}
                            bg={"blue.400"}
                            className={"scale-up-center"}
                        />
                    )
                })}
            <Flex
                align={"center"}
                h={{ base: 400, md: 400, xl: 500 }}
                mt={{ base: "50px", md: "50px" }}
                style={{
                    backgroundImage: 'url(/Bg.jpg)',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    width: 'container.xl',
                }}>
                <Container maxW="container.xl">
                    <Slider {...settings}>
                        {slides.map((e, i) => {
                            return (
                                <Box key={nanoid()}>
                                    <Box
                                        alignItems={"center"}
                                        gridTemplateColumns={"repeat(5, 1fr)"}
                                    >
                                        <Heading mb={10} color="#C99035" textAlign={"center"}>What People Say</Heading>
                                        <ScaleFade initialScale={0.5} in={i === slideIndex}>

                                            <Text
                                                fontSize={{ base: "14px", md: "16px" }}
                                                textAlign={"center"}
                                                color={"white"}
                                                mb={5}>

                                                {e.textcontent}
                                                <Text color="#C99035">-- {e.name}</Text>
                                            </Text>
                                        </ScaleFade>
                                    </Box>
                                </Box>
                            )
                        })}
                    </Slider>
                </Container>
            </Flex>
        </Box >
    )
}
