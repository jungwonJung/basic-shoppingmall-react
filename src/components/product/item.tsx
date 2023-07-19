import { Link } from "react-router-dom";
import { Product } from "../../graphql/products";
import { cartItemSelector } from "../../recoils/cart";
import { useRecoilState } from "recoil";

const ProductItem = ({
  id,
  imageUrl,
  price,
  description,
  title,
  createdAt,
}: Product) => {
  const [cartAmount, setCartAmount] = useRecoilState(cartItemSelector(id));
  const addToCart = () => setCartAmount((prev: any) => (prev || 0) + 1);
  return (
    <li className="product-item">
      <Link to={`/products/${id}`}>
        <p className="product-item__title">{title}</p>
        <img src={imageUrl} className="product-item__image" />
        <span className="product-item__price">${price}</span>
      </Link>
      <button className="product-item__add-cart" onClick={addToCart}>
        To Cart
      </button>
      <span>{cartAmount || 0}</span>
    </li>
  );
};

export default ProductItem;
