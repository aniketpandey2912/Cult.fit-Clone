import {
  Box,
  Input,
  FormControl,
  VStack,
  Heading,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { postGymProducts } from "../UtilityFunctions/Utils";

const initState = {
  title: "",
  img: "",
  price: "",
  sold: false,
};

function AddProduct() {
  const [formState, setFormState] = useState(initState);

  // on input change
  const handleChange = (e) => {
    const { value, type, name } = e.target;
    const val = type === "number" ? Number(value) : value;

    setFormState({ ...formState, [name]: value });
  };

  // on submit - add product and set formState to initial state
  const handleSubmit = (e) => {
    e.preventDefault();
    postGymProducts(formState)
      .then((res) => {
        setFormState(initState);
        alert("Product added successfully");
      })
      .catch((err) => {
        alert("Something went wrong, can't be added");
      });
  };

  return (
    <Box w="70%" m="auto" p="10px" border="0px solid green">
      <Heading as="h4" size="lg" textAlign="center" color="green">
        Add Product
      </Heading>
      <FormControl>
        <VStack>
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
            colorScheme="green"
            fontWeight="bold"
            cursor="pointer"
            onClick={(e) => handleSubmit(e)}
          >
            ADD PRODUCT
          </Button>
        </VStack>
      </FormControl>
    </Box>
  );
}

export default AddProduct;
