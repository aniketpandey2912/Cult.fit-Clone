import { Box, Container, Divider, Flex, Grid, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Sidebar from "../Components/Sidebar";
import AddProduct from "../Forms/AddProducts";
import DeleteProduct from "../Forms/DeleteProduct";
import UpdateProduct from "../Forms/UpdateProduct";
import { getGymProducts } from "../UtilityFunctions/Utils";
function AdminDashboard() {
  const [products, setProducts] = useState([]);

  // getting and setting all products-on page load
  // useEffect(() => {
  //   getGymProducts().then((res) => {
  //     console.log("products:", res.data);
  //   });
  // }, []);

  return (
    <Box h="100%" paddingInline="24px">
      <Heading textAlign="center">AdminDashboard</Heading>
      <Flex color="white" gap="0" h="100%">
        <Box width="25%">
          <Sidebar />
        </Box>
        <Box width="75%" bg="black">
          <Grid templateColumns="repeat(1, 1fr)" rowGap="30px">
            {/* Add product */}
            <AddProduct />
            <Divider colorScheme="yellow" />

            {/* Delete Product */}
            <DeleteProduct />
            <Divider colorScheme="yellow" />

            {/* Update a product */}
            <UpdateProduct />
          </Grid>
        </Box>
      </Flex>
    </Box>
  );
}

export default AdminDashboard;
