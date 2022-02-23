import React, { useEffect } from "react";
import ProductC from "../components/product";
import { useState } from "react";
import axios from "axios";
import MessageBox from "../components/MessagBox";
import LoadingBox from "../components/LoadingBox";
import { useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import { useDispatch } from "react-redux";
function HomeScreen() {
  const productlist = useSelector((state) => state.productList);
  const { loading, error, products } = productlist;
  const dispatch = useDispatch();
  //since by default am not loading anything
  useEffect(() => {
    dispatch(listProducts());
  }, []);
  // let's build something to be shown to the user that
  // the website is loading
  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox varient="danger">{error}</MessageBox>
      ) : (
        <div className="row center">
          {products.map((product) => {
            return <ProductC key={product._id} product={product}></ProductC>;
          })}
        </div>
      )}
    </div>
  );
}

export default HomeScreen;
