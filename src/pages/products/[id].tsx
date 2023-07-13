import { useQuery } from "@tanstack/react-query";
import { Product } from "../../type";
import { QueryKeys, fetcher } from "../../queryClient";
import { useParams } from "react-router-dom";
import ProductDetail from "../../components/product/detail";

const ProductDetailPage = () => {
  const { id } = useParams();
  const { data } = useQuery<Product>([QueryKeys.PRODUCTS, id], () =>
    fetcher({
      method: "GET",
      path: `/products/${id}`,
    })
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
