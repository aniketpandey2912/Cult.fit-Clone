import { Box, Button } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import Pagination from "../Components/Pagination";
import { AuthContext } from "../Contexts/AuthContextProvider";

import { getGymProducts } from "../UtilityFunctions/Utils";
import ProductItem from "./ProductItem";

function AllProduts() {
  const { token } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams(); // will retrive the latest values of url params
  const initPage = +searchParams.get("_page") || 1; // will stay on the same page using latest values of url params after refresh also
  const [page, setPage] = useState(initPage);
  const [totalPage, setTotalPage] = useState(1);

  // on load, get products
  useEffect(() => {
    getGymProducts(page, 6).then((res) => {
      // console.log(res);
      setProducts(res.data);
      const total = Math.floor(+res.headers["x-total-count"] / 3); // setting up total pages = floor(totalProducts/limit per page)
      setTotalPage(total - 1);
    });
  }, [page]);

  // handle page change
  const handlePageChange = (val) => {
    setPage(page + val);
  };

  // url params
  useEffect(() => {
    setSearchParams({
      _page: page,
      _limit: 3,
    });
  }, [page]);

  return (
    <Box
      bg="gray.600"
      py="70px"
      display="flex"
      flexDirection="column"
      gap="20px"
      justifyContent="center"
      alignItems="center"
    >
      {token.includes("admin") ? (
        <NavLink to="/admindashboard">
          <Button colorScheme="green" variant="solid">
            Goto Admin Dashboard
          </Button>
        </NavLink>
      ) : (
        <NavLink to="/userdashboard">
          <Button colorScheme="green" variant="solid">
            Goto User Dashboard
          </Button>
        </NavLink>
      )}
      <Box
        // mt="100px"
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
      <Pagination
        page={page}
        totalPage={totalPage}
        handlePageChange={handlePageChange}
      />
    </Box>
  );
}

export default AllProduts;
