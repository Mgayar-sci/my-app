import React from "react";

const Product1 = () => {
  return (
    <>
      <div>Product</div>
      <div>name: Product1</div>
    </>
  );
};

const Product2 = () => {
  const name="Product2";
  return (
    <>
      <div>Product</div>
      <div>name: {name}</div>
    </>
  );
};

const Product3 = (props) => {
  return (
    <>
      <div>Product</div>
      <div>name: {props.name + " " + (props.id || "")}</div>
    </>
  );
};

export default Product3;
