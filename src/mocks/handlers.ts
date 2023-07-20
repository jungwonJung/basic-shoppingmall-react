import { graphql } from "msw";

import GET_PRODUCTS, { GET_PRODUCT } from "../graphql/products";
import { GET_CART, ADD_CART, CartType } from "../graphql/cart";

const mock_products = (() =>
  Array.from({ length: 20 }).map((_, i) => ({
    id: i + 1 + "",
    imageUrl: `https://loremflickr.com/320/240?random=${i + 1}`,
    price: 5000,
    title: `mockProductTitle${i + 1}`,
    description: `mockProductdescription${i + 1}`,
    createdAt: new Date(1689351586671 + i * 1000 * 60 * 60 * 10).toString(),
  })))();

let cartData: { [key: string]: CartType } = {};

export const handlers = [
  graphql.query(GET_PRODUCTS, (_, res, ctx) => {
    return res(
      ctx.data({
        products: mock_products,
      })
    );
  }),
  graphql.query(GET_PRODUCT, (req, res, ctx) => {
    const found = mock_products.find((item) => item.id === req.variables.id);
    if (found) return res(ctx.data(found));
    return res();
  }),
  graphql.query(GET_CART, (_, res, ctx) => {
    return res(ctx.data(cartData));
  }),
  graphql.mutation(ADD_CART, (req, res, ctx) => {
    const newData = { ...cartData };
    const id = req.variables.id;
    if (newData[id]) {
      newData[id] = {
        ...newData[id],
        amount: (newData[id].amount || 0) + 1,
      };
    } else {
      const found = mock_products.find((item) => item.id === req.variables.id);
      if (found) {
        newData[id] = {
          ...found,
          amount: 1,
        };
      }
    }

    cartData = newData;
    return res(ctx.data(newData));
  }),
];
