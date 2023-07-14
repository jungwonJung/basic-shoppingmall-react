import React from "react";
import { Product } from "../../graphql/products";

const ProductDetail = ({
  item: { imageUrl, price, title, description, createdAt },
}: {
  item: Product;
}) => {
  return (
    <div className="product-detail">
      detail
      <p className="product-detail__title">{title}</p>
      <img src={imageUrl} className="product-detail__image" />
      <p className="product-detail__description">{description}</p>
      <span className="product-detail__price">${price}</span>
    </div>
  );
};

export default ProductDetail;
