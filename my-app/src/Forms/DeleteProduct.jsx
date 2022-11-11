import { Box, Input, FormControl, VStack, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { deleteGymProducts, postGymProducts } from "../UtilityFunctions/Utils";

function DeleteProduct() {
  const [productId, setProductId] = useState("");

  // on submit - add product and set formState to initial state
  const handleSubmit = (e) => {
    e.preventDefault();
    deleteGymProducts()
      .then((res) => alert("Deleted product successfully"))
      .catch((err) => alert("Something went wrong, cant't be deleted"));
    setProductId("");
  };

  return (
    <Box w="70%" m="auto" p="10px" border="5px solid red">
      <Heading as="h4" size="lg" textAlign="center" color="red">
        Delete Product
      </Heading>
      <FormControl onSubmit={(e) => handleSubmit(e)}>
        <VStack>
          <Input
            type="number"
            placeholder="Enter product id"
            name="id"
            value={productId.title}
            onChange={(e) => setProductId(e.target.value)}
          />

          <Input
            type="submit"
            value="DELETE PRODUCT"
            bg="red"
            cursor="pointer"
          />
        </VStack>
      </FormControl>
    </Box>
  );
}

export default DeleteProduct;
