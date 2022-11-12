import { Heading, Box } from "@chakra-ui/react";
import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

import AllRoutes from "./Routing/AllRoutes";

function App() {
  return (
    <Box>
      <Navbar />
      <AllRoutes />
      <Footer />
    </Box>
  );
}

export default App;
