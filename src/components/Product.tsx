import { Card } from "react-bootstrap";

type ProductProps = {
  title: string;
  price: number;
  imgUrl: string;
};

const Product = ({ title, price, imgUrl }: ProductProps) => {
  return (
    <Card>
      <Card.Img
        src={imgUrl}
        alt={title}
        variant="top"
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex bg-dark flex-column">
        <Card.Title className="d-flex text-light justify-content-between align-items-baseline">
          <span className="fs-2 text-light">{title}</span>
          <span className="fs-2 text-light">{price}</span>
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default Product;
