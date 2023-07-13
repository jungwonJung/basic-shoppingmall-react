import { useQuery } from "@tanstack/react-query";
import { QueryKeys, fetcher } from "../../queryClient.ts";
import { Product } from "../../type.tsx";
import ProductItem from "../../components/product/item.tsx";

const ProductList = () => {
  const { data } = useQuery<Product[]>({
    queryKey: [QueryKeys.PRODUCTS],
    queryFn: () =>
      fetcher({
        method: "GET",
        path: "/products",
      }),
  });

  return (
    <div>
      <h2>Products List</h2>
      <ul className="products">
        {data?.map((product) => (
          <ProductItem {...product} key={product.id} />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
