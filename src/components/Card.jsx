import React from "react";
import { FaStar } from "react-icons/fa6";
import { GoHeart } from "react-icons/go";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../ReduxToolKit/ProductSlice";

import { toast } from "react-toastify";

export default function Card({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="relative group flex flex-col gap-3 w-65 p-5 border-gray-200 bg-white shadow-md rounded-xl">
      <Link to={`/${item.id}`}>
        <img src={item.imgUrl} className="w-100 h-50" alt="" />
      </Link>
      <h1 className="text-md my-1 font-semibold">{item.productName}</h1>
      <div className="flex gap-2 text-amber-300">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">${item.price}</h1>
        <h1
          className="text-3xl p-1 hover:text-white hover:bg-blue-900 hover:ease-in-out hover:rounded-full"
          onClick={() => {
            dispatch(addToCart(item));
            toast.success("Your product is added to cart successfully");
          }}
        >
          <FiPlus />
        </h1>
      </div>
    </div>
  );
}
