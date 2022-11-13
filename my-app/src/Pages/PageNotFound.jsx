const { Box, Heading } = require("@chakra-ui/react");

function PageNotFound() {
  return (
    <Box py="50px" bg="blue.800" h="500px">
      <Heading textAlign="center" color="red" mt="10%">
        ERROR 404 : PAGE NOT FOUND
      </Heading>
    </Box>
  );
}

export default PageNotFound;
