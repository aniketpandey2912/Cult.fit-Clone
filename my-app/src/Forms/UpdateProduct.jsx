import {
  Box,
  Input,
  FormControl,
  VStack,
  Heading,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { patchGymProducts } from "../UtilityFunctions/Utils";

const initState = {
  title: "",
  img: "",
  price: "",
  sold: false,
};

function UpdateProduct() {
  const [formState, setFormState] = useState(initState);

  // on input change
  const handleChange = (e) => {
    const { value, type, name } = e.target;
    const val = type === "number" ? Number(value) : value;

    setFormState({ ...formState, [name]: val });
  };

  // on submit - add product and set formState to initial state
  const handleSubmit = (e) => {
    e.preventDefault();
    patchGymProducts(formState)
      .then((res) => {
        setFormState(initState);
        alert("Product updated successfully");
      })
      .catch((err) => alert("Something went wrong, can't be updated"));
  };

  return (
    <Box w="70%" m="auto" p="10px" border="0px solid grey">
      <Heading as="h4" size="lg" textAlign="center" color="grey">
        Update Product
      </Heading>
      <FormControl>
        <VStack>
          <Input
            type="text"
            placeholder="Enter product id"
            name="id"
            value={formState.id}
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
          <Button
            w="100%"
            colorScheme="gray"
            color="black"
            fontWeight="bold"
            cursor="pointer"
            onClick={(e) => handleSubmit(e)}
          >
            UPDATE PRODUCT
          </Button>
        </VStack>
      </FormControl>
    </Box>
  );
}

export default UpdateProduct;
