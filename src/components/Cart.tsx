import { Offcanvas } from "react-bootstrap";
import { useCartContext } from "../context/CartContext";
type CartProps = {
  isOsen: boolean;
};
const Cart = ({ isOsen }: CartProps) => {
  const { closeCart } = useCartContext();
  return (
    <Offcanvas show={isOsen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
    </Offcanvas>
  );
};

export default Cart;
