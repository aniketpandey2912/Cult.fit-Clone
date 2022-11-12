import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
  Icon,
  Heading,
  Box,
  Image,
} from "@chakra-ui/react";
import { CiUser } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import LoginForm from "./LoginForm";

function PopUpLoginForm() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleCloseLoginModal = () => {
    onClose();
  };

  return (
    <>
      {/* modal opening button */}
      <Button
        onClick={onOpen}
        colorScheme="none"
        borderRadius="50%"
        h="44px"
        _hover={{ bg: "#333" }}
      >
        <Icon as={CiUser} fontSize={{ base: "28px",sm:"26px", md: "20px" }}  />
      </Button>

      <Modal isOpen={isOpen} onClose={handleCloseLoginModal}>
        <ModalOverlay />
        <ModalContent bg="black" color="white">
          <ModalHeader mb="20px">
            {/* Logo */}
            <Heading textAlign="center" my="30px">
              Welcome
            </Heading>
            <Box bg="black" align="center">
              <NavLink to="/">
                <Image
                  h="100px"
                  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_75,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/brand-logo/curefit-logo-white.svg"
                  // src="/logo.png"
                  alt="logo"
                />
                <Image src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_135,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/brand-logo/cf-name-white.png" />
              </NavLink>
            </Box>
          </ModalHeader>

          {/* Pop up closing button (cross - top right) */}
          <ModalCloseButton />

          <ModalBody>
            {/* Form */}
            <LoginForm handleCloseLoginModal={handleCloseLoginModal} />
          </ModalBody>

          <ModalFooter>
            <Text textAlign="center">
              * By Continuing you agree to the{" "}
              <NavLink
                to="https://static.cult.fit/terms_cult.html"
                style={({ isActive }) =>
                  isActive ? activeStyle : inactiveStyle
                }
                className="navlink"
                end
              >
                Terms of Services
              </NavLink>{" "}
              and{" "}
              <NavLink
                to="https://static.cult.fit/privacy_cult.html"
                style={({ isActive }) =>
                  isActive ? activeStyle : inactiveStyle
                }
                className="navlink"
                end
              >
                Privacy policy.
              </NavLink>
            </Text>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default PopUpLoginForm;

// Navlink styles - terms and policy
const activeStyle = {
  color: "red",
};

const inactiveStyle = {
  color: "green",
};
