import { Box, Heading } from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContextProvider";
function UserDashBoard() {
  const { token } = useContext(AuthContext);
  return (
    <Box py="50px" bg="blackAlpha.800" color="white" h="500px">
      <Heading textAlign="center" color="green">
        User DashBoard
      </Heading>
      <Heading as="h4" size="md" textAlign="center" color="yellow">
        Token : {token}
      </Heading>
    </Box>
  );
}

export default UserDashBoard;
