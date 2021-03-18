import React from "react";
const reactAppUrl = process.env.REACT_APP_URL;

const PublicProducts = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <a href={`${reactAppUrl}/products/public`} target="_blank">
        Public Products (Link)
      </a>
    </div>
  );
};

export default PublicProducts;
