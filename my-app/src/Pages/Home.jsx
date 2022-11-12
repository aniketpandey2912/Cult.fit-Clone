import {
  AspectRatio,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

import { BsChevronDown } from "react-icons/bs";

function Home() {
  return (
    <Box
      h="auto"
      // border="1px solid white"
      w="100%"
      m="auto"
      pos="relative"
      top="0"
    >
      {/* background video - keep attributes as it is, it's important*/}
      <AspectRatio
        maxW="100%"
        ratio={{ base: 2 / 3, sm: 2 / 2, md: 2 / 2, lg: 2 / 1, xl: 2 / 1 }}
      >
        <video
          src="video.mp4"
          type="video/mp4"
          loop
          controls={false}
          autoPlay
          muted
        />
      </AspectRatio>
      {/* Box - image, description */}
      <Box
        w={{ base: "70%", sm: "60%", md: "50%", lg: "50%", xl: "30%" }}
        pos="absolute"
        top={{ base: "11%", sm: "12%", md: "13%", lg: "10%", xl: "10%" }}
        left={{ base: "15%", sm: "20%", md: "25%", lg: "25%", xl: "35%" }}
        // border="1px solid white"
        align="center"
      >
        <Image
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_500,q_auto:eco,dpr_1,f_auto,fl_progressive/image/test/we-are-cult-logo/text-only-v2.png"
          h={{ base: "40px", md: "100px", lg: "150px" }}
        />
        <Heading
          as="h4"
          size={{ base: "sm", md: "lg" }}
          textAlign="center"
          color="white"
          letterSpacing="3px"
          mt={{ base: "10px", sm: "20px", md: "30px", lg: "40px", xl: "50px" }}
        >
          A fitness movement that is worth breaking a sweat for.
        </Heading>
      </Box>

      {/* Box - Explore Pass & cards */}
      <Box border="0px solid blue" bg="blackAlpha.800" color="white">
        <VStack>
          <NavLink to="https://www.cult.fit/fitness">
            <Button color="red">EXPLORE CULTPASS</Button>
          </NavLink>

          <Icon as={BsChevronDown} fontSize="25px" />

          {/* cards */}
          <Flex
            rowGap="10"
            columnGap="10"
            py="50px"
            w="100%"
            justifyContent="center"
            direction={{ base: "column", sm: "column", md: "row" }}
          >
            {/* Elite-card */}
            <Box
              w={{ base: "80%", sm: "60%", md: "30%", lg: "25%" }}
              m={{ base: "auto", sm: "auto", md: "0" }}
              h="auto"
              bg="blackAlpha.500"
              py="3%"
              px="4%"
              borderRadius="20px"
              align="center"
            >
              <NavLink to="https://www.cult.fit/fitness/cultpass-elite">
                <Image src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_106,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/brand-logo/cult-pass.svg" />
              </NavLink>
              <Image
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_107,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/brand-logo/cult-pass-elite-partial.png"
                mt="10px"
                mb="30px"
              />
              <Text>
                Unlimited access to group classes, all gyms and at-home workouts
              </Text>
            </Box>

            {/* Pro - card */}
            <Box
              w={{ base: "80%", sm: "60%", md: "30%", lg: "25%" }}
              m={{ base: "auto", sm: "auto", md: "0" }}
              h="auto"
              bg="blackAlpha.500"
              py="3%"
              px="4%"
              borderRadius="20px"
              align="center"
            >
              <NavLink to="https://www.cult.fit/fitness/cultpass-pro">
                <Image src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_106,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/brand-logo/cult-pass.svg" />
              </NavLink>
              <Image
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_78,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/brand-logo/cult-pass-pro-partial.png"
                mt="10px"
                mb="30px"
              />
              <Text>Unlimited access to all PRO gyms and at-home workouts</Text>
            </Box>

            {/* Live - card */}
            <Box
              w={{ base: "80%", sm: "60%", md: "30%", lg: "25%" }}
              m={{ base: "auto", sm: "auto", md: "0" }}
              h="auto"
              bg="blackAlpha.500"
              py="3%"
              px="4%"
              borderRadius="20px"
              align="center"
            >
              <NavLink to="https://www.cult.fit/fitness/cultpass-live">
                <Image src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_106,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/brand-logo/cult-pass.svg" />
              </NavLink>
              <Image
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_85,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/brand-logo/cult-pass-live-partial-4x.png"
                mt="10px"
                mb="30px"
              />
              <Text>
                Unlimited access to at-home workouts with calorie tracking
              </Text>
            </Box>
          </Flex>

          {/* one membership */}
          <Heading color="gold" textAlign="center">
            CULTPASS
          </Heading>
          <Heading textAlign="center">
            cultpass One membership for all your fitness needs
          </Heading>

          {/* 2 images */}
          <Flex gap="10" py="50px" w="100%" justifyContent="center">
            <Box w="25%" h="auto" bg="blackAlpha.500" borderRadius="20px">
              <Image src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_630,q_auto:eco,dpr_1,f_auto,fl_progressive/image/test/image_zoom_widget/image_zoom_widget_img_1.png" />
            </Box>
            <Box w="25%" h="auto" bg="blackAlpha.500" borderRadius="20px">
              <Image src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_630,q_auto:eco,dpr_1,f_auto,fl_progressive/image/test/image_zoom_widget/image_zoom_widget_img_2.png" />
            </Box>
          </Flex>

          {/* Fun Trainers */}

          <Heading textAlign="center">Fun, trainer led group classes</Heading>
          <Flex
            rowGap="10"
            columnGap="10"
            py="50px"
            w="100%"
            justifyContent="center"
            direction={{ base: "column", sm: "column", md: "row" }}
          >
            <Box
              w={{ base: "90%",sm:"70%", md: "25%" }}
              m={{ base: "auto", sm: "auto", md: "0" }}
              h="100%"
              bg="blackAlpha.500"
              borderRadius="20px"
            >
              <Image
                src="https://images.unsplash.com/photo-1550259979-ed79b48d2a30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcnNvbmFsJTIwdHJhaW5lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                h={{ base: "280px",sm:"300px", md: "450px" }}
                w="100%"
              />
            </Box>
            <Box
              w={{ base: "90%",sm:"70%", md: "25%" }}
              m={{ base: "auto", sm: "auto", md: "0" }}
              h="100%"
              bg="blackAlpha.500"
              borderRadius="20px"
            >
              <Image
                src="https://images.unsplash.com/photo-1571732154690-f6d1c3e5178a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29uYWwlMjB0cmFpbmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                h={{ base: "280px",sm:"300px", md: "450px" }}
                w="100%"
              />
            </Box>

            <Box
              w={{ base: "90%",sm:"70%", md: "25%" }}
              m={{ base: "auto", sm: "auto", md: "0" }}
              h="100%"
              bg="blackAlpha.500"
              borderRadius="20px"
            >
              <Image
                src="https://images.unsplash.com/photo-1584466977773-e625c37cdd50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29uYWwlMjB0cmFpbmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                h={{ base: "280px",sm:"300px", md: "450px" }}
                w="100%"
              />
            </Box>
          </Flex>
        </VStack>
      </Box>
    </Box>
  );
}

export default Home;
