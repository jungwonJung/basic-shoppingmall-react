import React from "react";
import { Product } from "../../type";

const ProductDetail = ({
  item: { category, title, image, description, price, rating },
}: {
  item: Product;
}) => {
  return (
    <div className="product-detail">
      detail
      <p className="product-detail__category">{category}</p>
      <p className="product-detail__title">{title}</p>
      <img src={image} className="product-detail__image" />
      <p className="product-detail__description">{description}</p>
      <span className="product-detail__price">${price}</span>
      <span className="product-detail__rating">{rating.rate}</span>
    </div>
  );
};

export default ProductDetail;
