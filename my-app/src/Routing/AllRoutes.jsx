import { Routes, Route } from "react-router-dom";
import AdminDashboard from "../Pages/AdminDashboard";
import Cart from "../Pages/Cart";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import UserDashBoard from "../Pages/UserDashboard";
import PrivateRoutes from "./PrivateRoutes";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
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
    </Routes>
  );
}

export default AllRoutes;
