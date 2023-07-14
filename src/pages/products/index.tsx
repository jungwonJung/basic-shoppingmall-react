import { useQuery } from "@tanstack/react-query";
import { QueryKeys, graphqlFetcher } from "../../queryClient.ts";
import ProductItem from "../../components/product/item.tsx";
import GET_PRODUCTS, { Products } from "../../graphql/products.ts";

const ProductList = () => {
  const { data } = useQuery<Products>([QueryKeys.PRODUCTS], () =>
    graphqlFetcher<Products>(GET_PRODUCTS)
  );

  return (
    <div>
      <h2>Products List</h2>
      <ul className="products">
        {data?.products?.map((product) => (
          <ProductItem {...product} key={product.id} />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
