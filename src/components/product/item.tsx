import { Link } from "react-router-dom";
import { Product } from "../../graphql/products";

const ProductItem = ({
  id,
  imageUrl,
  price,
  description,
  title,
  createdAt,
}: Product) => {
  return (
    <li className="product-item">
      <Link to={`/products/${id}`}>
        <p className="product-item__title">{title}</p>
        <img src={imageUrl} className="product-item__image" />
        <span className="product-item__price">${price}</span>
      </Link>
    </li>
  );
};

export default ProductItem;
