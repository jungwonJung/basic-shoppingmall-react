import { useMutation } from "@tanstack/react-query";
import { CartType, UPDATE_CART } from "../../graphql/cart";
import { QueryKeys, getClient, graphqlFetcher } from "../../queryClient";
import { SyntheticEvent } from "react";

const CartItem = ({ id, imageUrl, price, title, amount }: CartType) => {
  const queryClient = getClient();
  const { mutate: updateCart } = useMutation(
    ({ id, amount }: { id: string; amount: number }) =>
      graphqlFetcher(UPDATE_CART, {
        id,
        amount,
      })
  );

  const handleUpdateAmount = (e: SyntheticEvent) => {
    const amount = Number((e.target as HTMLInputElement).value);
    updateCart(
      { id, amount },
      {
        onSuccess: () => queryClient.invalidateQueries([QueryKeys.CART]),
      }
    );
  };

  return (
    <li className="cart-item">
      <img src={imageUrl} alt="cart-item__image" />
      <p className="cart-item__title">{title}</p>
      <p className="cart-item__price">{price}</p>
      <input
        className="cart-item__amount"
        type="number"
        value={amount}
        onChange={handleUpdateAmount}
      />
    </li>
  );
};

export default CartItem;
