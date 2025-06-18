import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import { products } from "../../public/products";
import Card from "./Card";
import { toast } from "react-toastify";

import { useDispatch } from "react-redux";
import { addToCart } from "../ReduxToolKit/ProductSlice";

import Description from "./Description";
import Reviews from "./Reviews";

export default function ProductDetails() {
  const dispatch = useDispatch();
  const [inpValue, setInpValue] = useState(0);
  const { id } = useParams();
  const [showDesc, setShowDesc] = useState(true);

  function handleFunc1() {
    setShowDesc(true);
  }
  function handleFunc2() {
    setShowDesc(false);
  }
  const product = products.filter((item) => item.id == id);

  function handleQuantity(event) {
    console.log(event.target.value);
    setInpValue(event.target.value);
  }

  function handleCart(item) {
    const product = { ...item, noOf: parseInt(inpValue) };
    console.log(" sjhfkksf ", product);
    console.log("number of inputs", inpValue);
    dispatch(addToCart(product));
  }
  return (
    <div>
      <div className="h-50 content-center bg-gray-600 mt-15 ">
        <h1 className=" text-center text-3xl font-bold text-gray-300 ">
          {product[0].productName}
        </h1>
      </div>
      <div className="flex mx-30 gap-6 my-7  ">
        <div className="w-2/3">
          <img src={product[0].imgUrl} alt="" className=" " />
        </div>
        <div className="flex flex-col gap-5 my-7">
          <h1 className="text-3xl font-bold text-gray-800">
            {product[0].productName}
          </h1>
          <div className="flex items-center gap-5">
            <div className="flex gap-2 text-amber-300">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="font-semibold text-gray-700">
              {product[0].avgRating} ratings
            </p>
          </div>
          <div className="flex gap-6 items-center">
            <p className="font-bold text-2xl">${product[0].price}</p>
            <p className="font-semibold text-gray-700">{product[0].category}</p>
          </div>
          <p className="font-semibold text-gray">{product[0].shortDesc}</p>
          <input
            type="number"
            className=" border-2 w-20 px-2"
            defaultValue="1"
            min="0"
            onChange={handleQuantity}
          />
          <div>
            <button
              className="bg-blue-800 text-gray-100 p-2 px-3 rounded-xl"
              onClick={() => {
                handleCart(product[0]);
                toast.success("Your product is added to cart successfully");
              }}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>

      <div className="flex gap-2 mx-17 mt-5">
        <button
          onClick={() => setShowDesc(true)}
          className={`font-semibold px-2 py-1 border-b-2 ${
            showDesc
              ? "text-amber-500 border-amber-500"
              : "text-gray-500 border-transparent"
          }`}
        >
          Description
        </button>
        <button
          onClick={() => setShowDesc(false)}
          className={`font-semibold px-2 py-1 border-b-2 ${
            !showDesc
              ? "text-amber-500 border-amber-500"
              : "text-gray-500 border-transparent"
          }`}
        >
          Reviews (2)
        </button>
      </div>

      <div className="mx-17 mt-3 h-60">
        {showDesc ? <Description /> : <Reviews />}
      </div>
      <div className="">
        <h1 className="text-2xl font-semibold mx-17 my-2">
          You might also like
        </h1>
        <div className="flex mx-40   ms-45 flex-wrap gap-10 my-10 ">
          {products.map((item, index) =>
            item.category === product[0].category &&
            item.id !== product[0].id ? (
              <Card key={index} item={item} />
            ) : (
              " "
            )
          )}
        </div>
      </div>
    </div>
  );
}
