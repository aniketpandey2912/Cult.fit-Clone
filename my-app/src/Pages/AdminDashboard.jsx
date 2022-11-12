import { Box, Container, Divider, Flex, Grid, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Sidebar from "../Components/Sidebar";
import AddProduct from "../Forms/AddProducts";
import DeleteProduct from "../Forms/DeleteProduct";
import UpdateProduct from "../Forms/UpdateProduct";
import { getGymProducts } from "../UtilityFunctions/Utils";
function AdminDashboard() {
  const [products, setProducts] = useState([]);

  return (
    <Box h="100%">
      <Heading textAlign="left" color="gold" bg="gray.700" pt="60px">
        AdminDashboard
      </Heading>
      <Flex color="white" gap="0" h="100%">
        <Box width="25%">
          <Sidebar />
        </Box>
        <Box width="75%" bg="blackAlpha.800" py="50px">
          <Grid templateColumns="repeat(1, 1fr)" rowGap="30px">
            {/* Add product */}
            <AddProduct />

            {/* Delete Product */}
            <DeleteProduct />

            {/* Update a product */}
            <UpdateProduct />
          </Grid>
        </Box>
      </Flex>
    </Box>
  );
}

export default AdminDashboard;
