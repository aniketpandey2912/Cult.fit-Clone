import { Box, Button, Container, Heading, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { NavLink, useParams, useSearchParams } from "react-router-dom";
import { getSingleGymProduct } from "../UtilityFunctions/Utils";

const initState = {
  id: "",
  title: "",
  img: "",
  sold: "",
};

function SingleProductPage() {
  const [singleProduct, setSingleProduct] = useState(initState);
  const { id } = useParams();

  // console.log("id:", id);

  // on load, get products
  useEffect(() => {
    getSingleGymProduct(id).then((res) => {
      // console.log(res);
      setSingleProduct(res.data);
    });
  }, [id]);

  // console.log("single data:", singleProduct);

  return (
    <Box bg="blackAlpha.800">
      <Box
        display="flex"
        flexDirection="column"
        m="auto"
        py="50px"
        justifyContent="center"
        alignItems="center"
        rowGap="20px"
        color="gold"
      >
        <Heading as="h4" size="lg">
          Product ID : {singleProduct.id}
        </Heading>
        <Image src={singleProduct.img} h="400px" w="400px" />

        <Heading as="h4" size="lg">
          Title : {singleProduct.title}
        </Heading>
        <Heading as="h4" size="lg">
          Price : Rs. {singleProduct.price}
        </Heading>
        <NavLink to="/products">
          <Button colorScheme="red" variant="solid">
            Go Back
          </Button>
        </NavLink>
      </Box>
    </Box>
  );
}

export default SingleProductPage;
