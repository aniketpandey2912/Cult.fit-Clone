import { Box, Button } from "@chakra-ui/react";

function Pagination({ page, totalPage, handlePageChange }) {
  //   console.log("total pages:", totalPage);
  return (
    <Box>
      <Button
        colorScheme="red"
        variant="solid"
        disabled={page === 1}
        onClick={() => handlePageChange(-1)}
      >
        PREV
      </Button>
      <Button colorScheme="whiteAlpha" variant="solid" mx="5px">
        {page}
      </Button>
      <Button
        colorScheme="red"
        variant="solid"
        disabled={page === totalPage}
        onClick={() => handlePageChange(1)}
      >
        NEXT
      </Button>
    </Box>
  );
}

export default Pagination;
