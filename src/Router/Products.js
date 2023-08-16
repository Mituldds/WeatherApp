import React, { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
  const [productDetails, setProductDetails] = useState([]);

  const productData = async () => {
    try {
      const responce = await axios.get("https://dummyjson.com/products");

      //   console.log(responce.data, "===========");
      setProductDetails(responce.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    productData();
  }, []);

  return (
    <>
      <div>i am Product Component</div>

      {productDetails.map((detail) => (
        <div className="container">
          <div className="row">
            <div className="row-md-3">
              <div
                className="card border-secondary mb-3"
                style={{ maxWidth: "18rem" }}
                key={detail.id}
              >
                <img src={detail.images[0]} />
                <div className="card-header">{detail.title}</div>
                <p className="card-text">{detail.description}</p>
                <div className="card-body text-secondary">
                  <h5 className="card-title">Secondary card title</h5>
                  <h3>Price : {detail.price}</h3>
                  <h3>Discount Percentage : {detail.discountPercentage}</h3>
                  <div>
                    <h3>Rating : </h3> {detail.rating} <h3>Stock : </h3>{" "}
                    {detail.stock}
                  </div>
                  <h3>Brand : {detail.brand}</h3>
                  <h3>Category : {detail.category}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Products;
