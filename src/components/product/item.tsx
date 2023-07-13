import { Product } from "../../type";

const ProductItem = ({
  category,
  description,
  image,
  price,
  rating,
  title,
}: Product) => {
  return (
    <li className="product-item">
      <p className="product-item__category">{category}</p>
      <p className="product-item__title">{title}</p>
      <img src={image} className="product-item__image" />
      <span className="product-item__price">${price}</span>
      <span className="product-item__rating">{rating.rate}</span>
    </li>
  );
};

export default ProductItem;
