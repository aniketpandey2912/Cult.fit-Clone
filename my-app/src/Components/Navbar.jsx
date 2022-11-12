import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Spacer,
  Square,
  Text,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

import { BsCart3, BsGeoAlt } from "react-icons/bs";
// import { CiUser } from "react-icons/ci";
import PopUpLoginForm from "./PopUpLoginForm";

// Menu options object
const menuObj = [
  {
    id: 1,
    link: "https://www.cult.fit/fitness",
    heading: "FITNESS",
    spacer: true,
  },
  {
    id: 2,
    link: "https://www.cult.fit/care/diagnostic-tests",
    heading: "CARE",
    spacer: true,
  },
  {
    id: 3,
    link: "https://www.cult.fit/mind/therapy",
    heading: "MIND",
    spacer: true,
  },
  { id: 4, link: "/products", heading: "STORE", spacer: false },
];

function Navbar() {
  const activeStyle = {
    color: "gray",
  };

  return (
    <Box
      width="100%"
      height="auto"
      marginInline="auto"
      paddingInline={{ base: "0px", sm: "24px" }}
      backgroundImage="linear-gradient(to bottom, #171A26, rgba(23, 26, 38, 0.0001))"
      backgroundColor="transparent"
      position="fixed" //sticky earlier, but didn't work properly
      top="0"
      zIndex="1"
    >
      <Flex
        // border="2px solid white"
        justifyContent="center"
        alignItems="center"
        h="100%"
        direction={{ base: "column", sm: "column", md: "column", lg: "row" }}
        rowGap={{ base: "10px" }}
      >
        {/* Logo */}
        <Box bg="none">
          <NavLink to="/">
            <Image
              h={{ base: "50px", sm: "40px", md: "35px" }}
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_120,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/vman-and-white-cult-text.png"
              // src="/logo.png"
              alt="logo"
            />
          </NavLink>
        </Box>
        <Spacer />

        {/* Menu options - all linked to original website */}
        <Box
          width={{ base: "90%", sm: "70%", lg: "30%" }}
          bg="none"
          color="white"
        >
          <Flex align="center" bg="none">
            {/* Logic for menu options */}
            {menuObj.map((el, index) =>
              el.spacer ? (
                <>
                  <NavLink
                    // key={el.index}
                    to={el.link}
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    end
                  >
                    <Heading as="h5" size={{ base: "lg", md: "md" }}>
                      {el.heading}
                    </Heading>
                  </NavLink>
                  <Spacer />
                </>
              ) : (
                <NavLink
                  key={el.id}
                  to={el.link}
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  end
                >
                  <Heading as="h5" size={{ base: "lg", md: "md" }}>
                    {el.heading}
                  </Heading>
                </NavLink>
              )
            )}
          </Flex>
        </Box>
        <Spacer />

        {/* right side */}
        <Box w={{ base: "90%", md: "70%", lg: "25%" }} bg="none" color="white">
          <Flex align="center">
            {/* Location button */}
            <NavLink to="#" end>
              <Menu>
                <MenuButton
                  as={Button}
                  colorScheme="none"
                  fontSize={{ base: "20px", md: "16px" }}
                  fontWeight="700"
                  _hover={{ bg: "#fff", color: "#333" }}
                >
                  <Flex alignItems="center">
                    <Text>Locations</Text>
                    <Icon as={BsGeoAlt} ml="5px" fontSize="24px" />
                  </Flex>
                </MenuButton>
                <MenuList bg="#333">
                  <MenuItem _hover={{ bg: "#333", color: "#fff" }}>
                    Bangalore
                  </MenuItem>
                  <MenuItem _hover={{ bg: "#333", color: "#fff" }}>
                    Mumbai
                  </MenuItem>
                  <MenuItem _hover={{ bg: "#333", color: "#fff" }}>
                    Delhi
                  </MenuItem>
                  <MenuItem _hover={{ bg: "#333", color: "#fff" }}>
                    Lucknow
                  </MenuItem>
                  <MenuItem _hover={{ bg: "#333", color: "#fff" }}>
                    Chennai
                  </MenuItem>
                </MenuList>
              </Menu>
            </NavLink>
            <Spacer />

            {/* Get App */}
            <NavLink
              to="https://itunes.apple.com/us/app/cure-fit/id1217794588"
              end
            >
              <Button
                colorScheme="transparent"
                variant="outline"
                border="3px solid white"
                fontSize={{ base: "20px", md: "16px" }}
                fontWeight="700"
              >
                Get App
              </Button>
            </NavLink>
            <Spacer />

            {/* Login-Avatar */}
            <NavLink to="#" end>
              {/* PopUp Login modal */}
              <PopUpLoginForm />
            </NavLink>
            <Spacer />

            {/* Cart */}
            <NavLink to="#" end>
              <Button
                colorScheme="none"
                borderRadius="50%"
                h="44px"
                _hover={{ bg: "#333" }}
              >
                <Icon as={BsCart3} fontSize={{ base: "24px", md: "20px" }} />
              </Button>
            </NavLink>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

export default Navbar;
