import React from "react";

const ProductImage = (props) => {
  return (
    <>
      <img src={props.image} className="productImg" width="100px" />
      <p className="productId">{props.id}</p>
    </>
  );
};

export default ProductImage;
