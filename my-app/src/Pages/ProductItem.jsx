import { Box, Button, Heading, Image } from "@chakra-ui/react";
import { useEffect } from "react";
import { NavLink, useSearchParams } from "react-router-dom";

function ProductItem({ id, src, title, price, sold }) {
  return (
    <Box
      // border="1px solid black"
      bg="gray.600"
      py="10px"
      display="flex"
      flexDirection={{ base: "row", md: "column" }}
      gap="20px"
      justifyContent="center"
      alignItems="center"
    >
      <Image src={src} h="200px" w="200px" />
      <Heading as="h4" size="sm" color="white">
        {title}
      </Heading>
      <Heading as="h4" size="sm" color="white">
        Rs. {price}
      </Heading>
      <Box display="flex">
        <Button colorScheme="yellow" variant="solid">
          ADD TO CART
        </Button>
        <Button colorScheme="green" variant="solid" mx="2%">
          {sold ? "Sold Out" : "Available"}
        </Button>
        <NavLink to={`/products/${id}`}>
          <Button colorScheme="blue" variant="solid">
            View More
          </Button>
        </NavLink>
      </Box>
    </Box>
  );
}

export default ProductItem;
