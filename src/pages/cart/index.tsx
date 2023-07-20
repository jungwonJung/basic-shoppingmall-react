import { useQuery } from "@tanstack/react-query";

import { QueryKeys, graphqlFetcher } from "../../queryClient";
import { CartType, GET_CART } from "../../graphql/cart";
import CartList from "../../components/cart";

const Cart = () => {
  const { data } = useQuery<CartType>(
    [QueryKeys.CART],
    () => graphqlFetcher<CartType>(GET_CART),
    {
      staleTime: 0,
      cacheTime: 1000,
    }
  );

  const cartItems = Object.values(data || {}) as unknown as CartType[];
  if (!cartItems.length) return <div>Cart is Empty</div>;
  return <CartList items={cartItems} />;
};

export default Cart;
