import React from "react";
import { IoBag } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { IoCartSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Header() {
  const noOfItems = useSelector((state) => state.cartItems.total);

  return (
    <div
      className="bg-white shadow-xl p-4 fixed top-0 left-0  z-1000"
      style={{ width: "100%" }}
    >
      <div className="mx-17 flex flex-wrap justify-between max-sm:flex max-sm:flex-col">
        <Link to="/">
          <div className="flex   font-bold items-center text-2xl">
            <span>
              <IoBag />
            </span>
            <h1>MART</h1>
          </div>
        </Link>

        <div className="text-xm font-bold flex flex-wrap  gap-9 items-center max-sm:flex max-sm:flex-col">
          <p className="text-gray-600">Home</p>

          <p className="text-gray-600">Shop</p>

          <p className="text-gray-600">Cart</p>

          <div className="flex flex-wrap gap-2 ">
            <span className="text-2xl">
              <IoPerson />
            </span>
            <div className="flex">
              <span className="text-2xl">
                <IoCartSharp />
              </span>
              <p className=" text-gray-200  text-sm bg-black rounded-full w-5 ps-1  h-5 NoOfItems">
                {noOfItems.totalItems}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
