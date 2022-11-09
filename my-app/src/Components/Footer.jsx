import {
  Box,
  Center,
  Grid,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
function Footer() {
  return (
    <VStack border="2px solid green" h="700px" spacing="0">
      {/* Part - 1 */}

      <Box bg="yellow" h="50%" w="100%">
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing="0.5%"
          align="left"
          h="100%"
        >
          {/* left box */}
          <Box bg="tomato" h="100%" px="10%" py="15%">
            <Image
              h="40px"
              mb="40px"
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_120,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/vman-and-white-cult-text.png"
              // src="/logo.png"
              alt="logo"
            />

            <Text fontWeight="bold" color="white">
              At cult.fit, we make group workouts fun, daily food healthy &
              tasty, mental fitness easy with yoga & meditation, Medical &
              lifestyle care hassle-free.#BeBetterEveryDay
            </Text>
          </Box>

          {/* middle box */}
          <Box bg="tomato">
            <Grid
              templateColumns="repeat(3, 1fr)"
              gap="3%"
              h="auto"
              py="11%"
              // px="0%"
            >
              <GridItem w="100%" bg="blue.500">
                {gridItem1.map((el) => (
                  <Box mb="18px">
                    <NavLink to={el.to} end>
                      {el.title}
                    </NavLink>
                  </Box>
                ))}
              </GridItem>
              <GridItem w="100%" bg="blue.500">
                {gridItem2.map((el) => (
                  <Box mb="32px">
                    <NavLink to={el.to} end>
                      {el.title}
                    </NavLink>
                  </Box>
                ))}
              </GridItem>
              <GridItem w="100%" bg="blue.500">
                {gridItem3.map((el) => (
                  <Box mb="32px">
                    <NavLink to={el.to} end>
                      {el.title}
                    </NavLink>
                  </Box>
                ))}
              </GridItem>
            </Grid>
          </Box>

          {/* right box */}
          <Box bg="tomato"></Box>
        </SimpleGrid>
      </Box>

      {/* Part-2 */}
      <Box bg="black" h="50%" w="100%"></Box>
    </VStack>
  );
}

export default Footer;

// footer part 1
// Middle Box
const gridItem1 = [
  { title: "cult.fit for business", to: "https://business.cult.fit/" },
  { title: "cult.fit franchise", to: "https://business.cult.fit/" },
  { title: "corporate partnerships", to: "https://business.cult.fit/" },
  { title: "cult pass network", to: "https://business.cult.fit/" },
  { title: "t&c for business", to: "https://business.cult.fit/" },
];
const gridItem2 = [
  { title: "partner.fit", to: "https://business.cult.fit/" },
  { title: "blogs", to: "https://business.cult.fit/" },
  { title: "security", to: "https://business.cult.fit/" },
  { title: "careers", to: "https://business.cult.fit/" },
];
const gridItem3 = [
  { title: "contact us", to: "https://business.cult.fit/" },
  { title: "privacy policy", to: "https://business.cult.fit/" },
  { title: "cult bmi calculator", to: "https://business.cult.fit/" },
  { title: "terms & conditions", to: "https://business.cult.fit/" },
];
