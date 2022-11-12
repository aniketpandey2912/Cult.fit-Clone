import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { getGymProducts } from "../UtilityFunctions/Utils";
import ProductItem from "./ProductItem";

function AllProduts() {
  const [products, setProducts] = useState([]);

  // on load, get products
  useEffect(() => {
    getGymProducts().then((res) => {
      console.log(res);
      setProducts(res.data);
    });
  }, []);

  // const gotoSinglePageProduct = (id) => {

  // }

  return (
    <Box
      mt="100px"
      display="grid"
      gridTemplateColumns="repeat(3,1fr)"
      gap="10px"
    >
      {products &&
        products.map((el) => (
          <ProductItem
            key={el.id}
            id={el.id}
            src={el.img}
            title={el.title}
            price={el.price}
            sold={el.sold}
          />
        ))}
    </Box>
  );
}

export default AllProduts;
