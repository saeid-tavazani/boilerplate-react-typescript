import { Stack, Button } from "react-bootstrap";
import { useCartContext } from "../context/CartContext";
import productItems from "../data/products.json";
const CartItem = ({ id, qty }: { id: number; qty: number }) => {
  const { removeItem } = useCartContext();
  const product = productItems.find((item) => item.id === id);
  if (product == null) return null;
  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={product.imgUrl}
        alt={product.title}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto text-dark">
        <div>
          {product.title}
          {qty > 1 && (
            <span className="text-nuted" style={{ fontSize: "0.65rem" }}>
              {qty}
            </span>
          )}
        </div>
        <div>{product.price * qty}</div>
        <Button variant="outline-dark" size="sm" onClick={() => removeItem(id)}>
          <i className="bi bi-x-octagon" />
        </Button>
      </div>
    </Stack>
  );
};

export default CartItem;
