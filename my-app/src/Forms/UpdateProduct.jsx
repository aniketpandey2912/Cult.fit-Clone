import { Box, Input, FormControl, VStack, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { postGymProducts } from "../UtilityFunctions/Utils";

const initState = {
  title: null,
  img: null,
  price: null,
  sold: false,
};

function UpdateProduct() {
  const [formState, setFormState] = useState(initState);

  // on input change
  const handleChange = (e) => {
    const { value, type, name } = e.target;
    const val = "number" ? +value : value;

    setFormState({ ...formState, [name]: val });
  };

  // on submit - add product and set formState to initial state
  const handleSubmit = (e) => {
    e.preventDefault();
    postGymProducts()
      .then((res) => alert("Product added successfully"))
      .catch((err) => alert("Something went wrong, can't be added"));
    setFormState(initState);
  };

  return (
    <Box w="70%" m="auto" p="10px" border="5px solid grey">
      <Heading as="h4" size="lg" textAlign="center" color="grey">
        Update Product
      </Heading>
      <FormControl onSubmit={(e) => handleSubmit(e)}>
        <VStack>
          <Input
            type="number"
            placeholder="Enter product id"
            name="id"
            value={formState.title}
            onChange={(e) => handleChange(e)}
          />
          <Input
            type="text"
            placeholder="Enter product title"
            name="title"
            value={formState.title}
            onChange={(e) => handleChange(e)}
          />
          <Input
            type="url"
            placeholder="Enter product image url"
            name="img"
            value={formState.img}
            onChange={(e) => handleChange(e)}
          />
          <Input
            type="number"
            placeholder="Enter product price"
            name="price"
            value={formState.price}
            onChange={(e) => handleChange(e)}
          />
          <Input
            type="submit"
            value="ADD PRODUCT"
            bg="grey"
            cursor="pointer"
          />
        </VStack>
      </FormControl>
    </Box>
  );
}

export default UpdateProduct;
