import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { products } from "../../public/products";
import Card from "../components/Card";

export default function Shop() {
  const [reqProductCategory, setReqProductCategory] = useState("sofa");
  const [keywordBySearch, setKeywordBySearch] = useState("");

  function handleProducts(event) {
    setReqProductCategory(event.target.value);
  }

  function filterProducts(products, category, keyword) {
    return products.filter((item) =>
      item.productName.toLowerCase().includes(keyword.toLowerCase())
    );
  }

  const filteredProducts = keywordBySearch
    ? filterProducts(products, reqProductCategory, keywordBySearch)
    : products.filter((item) => item.category === reqProductCategory);

  return (
    <div className="mt-10 bg-gray-50">
      <div className="h-45 content-center bg-gray-600 mt-15 productBackground">
        <h1 className="text-center text-3xl font-bold text-gray-300">
          Product
        </h1>
      </div>

      <div className="ms-17 mr-40 flex justify-between my-10">
        <select
          className="bg-blue-800 text-white p-2 px-3 rounded-md font-semibold"
          onChange={handleProducts}
        >
          <option value="sofa">Filter by Category</option>
          <option value="sofa">Sofa</option>
          <option value="chair">Chair</option>
          <option value="watch">Watch</option>
          <option value="mobile">Mobile</option>
          <option value="wireless">Wireless</option>
        </select>

        <div className="flex rounded-xl items-center pr-5 bg-gray-200 py-2">
          <input
            type="text"
            placeholder="Search..."
            className="w-140 font-semibold ps-4 border-none focus:outline-none"
            onChange={(e) => setKeywordBySearch(e.target.value.toLowerCase())}
          />
          <IoIosSearch className="text-xl" />
        </div>
      </div>

      <div className="my-20">
        <div className="flex mx-40 ms-45 flex-wrap gap-10 justify-center">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item, index) => (
              <Card key={index} item={item} />
            ))
          ) : (
            <p className="text-3xl font-semibold text-gray-500">
              Product not found !!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
