import { Link } from "react-router-dom";
import { Product } from "../../graphql/products";
import { useMutation } from "@tanstack/react-query";
import { graphqlFetcher } from "../../queryClient";
import { ADD_CART } from "../../graphql/cart";

const ProductItem = ({ id, imageUrl, price, title }: Product) => {
  const { mutate: addCart } = useMutation((id: string) =>
    graphqlFetcher(ADD_CART, {
      id,
    })
  );
  return (
    <li className="product-item">
      <Link to={`/products/${id}`}>
        <p className="product-item__title">{title}</p>
        <img src={imageUrl} className="product-item__image" />
        <span className="product-item__price">${price}</span>
      </Link>
      <button className="product-item__add-cart" onClick={() => addCart(id)}>
        To Cart
      </button>
    </li>
  );
};

export default ProductItem;
