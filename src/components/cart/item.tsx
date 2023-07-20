import { CartType } from "../../graphql/cart";

const CartItem = ({ id, imageUrl, price, title, amount }: CartType) => {
  return (
    <li>
      {id} {imageUrl} {title} {price} {amount}
    </li>
  );
};

export default CartItem;
