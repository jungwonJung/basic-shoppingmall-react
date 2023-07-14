import { useQuery } from "@tanstack/react-query";

import { QueryKeys, graphqlFetcher } from "../../queryClient";
import { useParams } from "react-router-dom";
import ProductDetail from "../../components/product/detail";
import { GET_PRODUCT, Product } from "../../graphql/products";

const ProductDetailPage = () => {
  const { id } = useParams();
  const { data } = useQuery<Product>([QueryKeys.PRODUCTS], () =>
    graphqlFetcher<Product>(GET_PRODUCT, { id })
  );
  if (!data) return null;

  return (
    <div>
      <h2>Products Detail</h2>
      <ProductDetail item={data} />;
    </div>
  );
};
export default ProductDetailPage;
