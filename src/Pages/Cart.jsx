import React from "react";

import { useSelector } from "react-redux";
import { IoMdClose } from "react-icons/io";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../ReduxToolKit/ProductSlice";
import { increamentQuantity } from "../ReduxToolKit/ProductSlice";
import { decrementQuantity } from "../ReduxToolKit/ProductSlice";

export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems.cart);

  const quantity = useSelector((state) => state.cartItems.productQuantity);
  const total = useSelector((state) => state.cartItems.total);
  console.log("cartitems", cartItems);
  console.log("quantity", quantity);
  console.log("total", total);
  const isCartEmpty = cartItems.length === 0;

  return (
    <div className="min-h-80 bg-gray-50 flex items-center justify-center mt-15">
      {isCartEmpty ? (
        <div className=" container px-4 gap-3  flex items-center py-8 border-gray-50 border-2 rounded-lg">
          <div className="w-180 h-40 bg-white">
            <h1 className="font-semibold p-4 text-xl  text-gray-700 ">
              No items are add in cart
            </h1>
          </div>
          <div className="w-80 bg-white p-5 rounded-lg h-1/4">
            <h1 className="text-xl font-bold mb-4 text-gray-700 ">
              Cart Summary
            </h1>
            <hr />
            <div className="  my-2">
              <h1 className="text-md font-semibold ">Total Price:</h1>
              <span className="text-xl font-semibold text-gray-600">
                $
                {total && total.totalPrice
                  ? total.totalPrice.toFixed(2)
                  : "0.00"}
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="container py-5 bg-gray-50">
          <div className="min-h-60 flex gap-3 bg-gray-50  rounded-lg justify-between py-6">
            <div className="w-180 flex flex-col gap-7 bg-gray-50">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between p-4 bg-white "
                >
                  <div className="flex items-center">
                    <img
                      src={item.imgUrl}
                      alt={item.productName}
                      className="w-35 h-35 object-full mr-4"
                    />
                    <div className="flex flex-col gap-9 ">
                      <h2 className="font-bold text-xl text-gray-800 ">
                        {item.productName}
                      </h2>
                      <div className="flex  gap-6">
                        <p className="text-gray-400 font-bold text-md ">
                          ${item.price}.00 * {quantity[item.id]}
                        </p>
                        <p className="text-gray-600 font-bold ">
                          ${item.price}.00
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-16">
                    <div className="ms-16">
                      <button
                        type="button"
                        className=" text-3xl"
                        onClick={() => dispatch(removeFromCart(item))}
                      >
                        <IoMdClose />
                      </button>
                    </div>
                    <div className=" flex gap-7 text-xl mb-3 mr-2">
                      <button
                        className="text-xm bg-gray-50 p-1"
                        onClick={() => dispatch(increamentQuantity(item.id))}
                      >
                        <FaPlus />
                      </button>
                      <button
                        className="text-xm bg-gray-50 p-1"
                        onClick={() => dispatch(decrementQuantity(item.id))}
                      >
                        <FaMinus />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-80 bg-white p-5 rounded-lg h-1/4">
              <h1 className="text-xl font-bold mb-4 text-gray-700 ">
                Cart Summary
              </h1>
              <hr />
              <div className="  my-2">
                <h1 className="text-md font-semibold ">Total Price:</h1>
                <span className="text-xl font-semibold text-gray-600">
                  ${total.totalPrice.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
