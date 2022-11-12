import {
  Box,
  Input,
  FormControl,
  VStack,
  Heading,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { deleteGymProducts, postGymProducts } from "../UtilityFunctions/Utils";

function DeleteProduct() {
  const [productId, setProductId] = useState("");

  // on submit - add product and set formState to initial state
  const handleSubmit = (e) => {
    e.preventDefault();
    deleteGymProducts(productId)
      .then((res) => {
        setProductId("");
        alert("Deleted product successfully");
      })
      .catch((err) => alert("Something went wrong, cant't be deleted"));
  };

  return (
    <Box w="70%" m="auto" p="10px" border="0px solid red">
      <Heading as="h4" size="lg" textAlign="center" color="red">
        Delete Product
      </Heading>
      <FormControl>
        <VStack>
          <Input
            type="number"
            placeholder="Enter product id"
            name="id"
            value={productId.title}
            onChange={(e) => setProductId(e.target.value)}
          />

          <Button
            w="100%"
            colorScheme="red"
            fontWeight="bold"
            cursor="pointer"
            onClick={(e) => handleSubmit(e)}
          >
            DELETE PRODUCT
          </Button>
        </VStack>
      </FormControl>
    </Box>
  );
}

export default DeleteProduct;
