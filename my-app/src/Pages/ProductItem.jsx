import { Box, Button, Heading, Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

function ProductItem({ id, src, title, price, sold }) {
  return (
    <Box border="1px solid black">
      <Image src={src} h="150px" />
      <Heading>{title}</Heading>
      <Heading>Rs. {price}</Heading>
      <Button colorScheme="blue">ADD TO CART</Button>
      <Button>{sold ? "Sold Out" : "Available"}</Button>
      <NavLink to={`/products/${id}`}>
        <Button>View More</Button>
      </NavLink>
    </Box>
  );
}

export default ProductItem;
