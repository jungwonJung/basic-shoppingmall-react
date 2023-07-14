import { graphql } from "msw";
import { QueryKeys } from "../queryClient";
import { v4 as uuidv4 } from "uuid";
import GET_PRODUCTS, { GET_PRODUCT } from "../graphql/products";

const mock_products = Array.from({ length: 20 }).map((_, i) => ({
  id: uuidv4(),
  imageUrl: `https://loremflickr.com/640/360`,
  price: 5000,
  title: `mockProductTitle${i + 1}`,
  description: `mockProductdescription${i + 1}`,
  createdAt: new Date(1689351586671 + i * 1000 * 60 * 60 * 10).toString(),
}));

export const handlers = [
  graphql.query(GET_PRODUCTS, (req, res, ctx) => {
    return res(
      ctx.data({
        products: mock_products,
      })
    );
  }),
  graphql.query(GET_PRODUCT, (req, res, ctx) => {
    return res(ctx.data(mock_products[0]));
  }),
];
