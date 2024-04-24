import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { CardProvider } from "./context/CartContext";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <CardProvider>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </Container>
    </CardProvider>
  );
};

export default App;
