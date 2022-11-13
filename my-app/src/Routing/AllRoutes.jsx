import { Routes, Route } from "react-router-dom";
import LoginForm from "../Components/LoginForm";
import AdminDashboard from "../Pages/AdminDashboard";
import AllProduts from "../Pages/AllProducts";
import Cart from "../Pages/Cart";
import Home from "../Pages/Home";
import PageNotFound from "../Pages/PageNotFound";
import SingleProductPage from "../Pages/SingleProductPage";
// import Login from "../Pages/Login";
import UserDashBoard from "../Pages/UserDashboard";
import PrivateRoutes from "./PrivateRoutes";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginForm />} />
      <Route
        path="/cart"
        element={
          <PrivateRoutes>
            <Cart />
          </PrivateRoutes>
        }
      />
      <Route
        path="/userdashboard"
        element={
          <PrivateRoutes>
            <UserDashBoard />
          </PrivateRoutes>
        }
      />
      <Route
        path="/admindashboard"
        element={
          <PrivateRoutes>
            <AdminDashboard />
          </PrivateRoutes>
        }
      />
      <Route
        path="/products"
        element={
          <PrivateRoutes>
            <AllProduts />
          </PrivateRoutes>
        }
      />
      <Route
        path="/products/:id"
        element={
          <PrivateRoutes>
            <SingleProductPage />
          </PrivateRoutes>
        }
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default AllRoutes;
