import { Box, Button, Heading, Image } from "@chakra-ui/react";
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
  //   const [searchParams, setSearchParams] = useSearchParams();
  const [singleProduct, setSingleProduct] = useState(initState);
  const { id } = useParams();

  console.log("id:", id);

  // on load, get products
  useEffect(() => {
    getSingleGymProduct(id).then((res) => {
      console.log(res);
      setSingleProduct(res.data);
    });
  }, [id]);

  //   useEffect(() => {
  //     setSearchParams({
  //       id: id,
  //     });
  //   }, [id]);

  console.log("single data:", singleProduct);

  return (
    <Box>
      <Heading>Product ID : {singleProduct.id}</Heading>
      <Image src={singleProduct.img} h="200px" />
      <Heading>Title : {singleProduct.title}</Heading>
      <Heading>Price : Rs. {singleProduct.price}</Heading>
      <NavLink to="/products">
        <Button>Go Back</Button>
      </NavLink>
    </Box>
  );
}

export default SingleProductPage;
