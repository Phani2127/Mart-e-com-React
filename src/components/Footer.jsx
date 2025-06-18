import React from "react";
import { IoBag } from "react-icons/io5";

export default function Footer() {
  return (
    <div>
      <footer class="bg-blue-950">
        <div class="max-w-screen-xl px-1 py-14 mx-17 ">
          <div class="flex  gap-20  ">
            <div className="">
              <div className="flex font-bold items-center text-2xl text-white">
                <span>
                  <IoBag />
                </span>
                <h1>MART</h1>
              </div>
              <p class="max-w-xs mt-4 text-sm text-gray-600">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem
                beatae omnis rem in explicabo nihil maiores hic commodi
                inventore dignissimos distinctio facere eius quas, repudiandae
                suscipit numquam mollitia quisquam excepturi.
              </p>
            </div>
            <div class="flex gap-30 ">
              <div className="">
                <p class="font-medium text-white">About Us</p>
                <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                  <a class="hover:opacity-75" href>
                    {" "}
                    Careers{" "}
                  </a>
                  <a class="hover:opacity-75" href>
                    {" "}
                    Our Stores{" "}
                  </a>
                  <a class="hover:opacity-75" href>
                    {" "}
                    Our Carers{" "}
                  </a>
                  <a class="hover:opacity-75" href>
                    {" "}
                    Terms & Conditions{" "}
                  </a>
                  <a class="hover:opacity-75" href>
                    {" "}
                    Privacy Policy{" "}
                  </a>
                </nav>
              </div>
              <div className="">
                <p class="font-medium  text-white">Customer Care</p>
                <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                  <a class="hover:opacity-75" href>
                    {" "}
                    Help Center{" "}
                  </a>
                  <a class="hover:opacity-75" href>
                    {" "}
                    How to Buy{" "}
                  </a>
                  <a class="hover:opacity-75" href>
                    {" "}
                    Track Your Order{" "}
                  </a>
                  <a class="hover:opacity-75" href>
                    {" "}
                    Corporate & Bulk Purchasing{" "}
                  </a>
                  <a class="hover:opacity-75" href>
                    {" "}
                    Returns & Refunds{" "}
                  </a>
                </nav>
              </div>
              <div className="">
                <p class="font-medium  text-white">Contact Us</p>
                <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                  <a class="hover:opacity-75" href>
                    {" "}
                    70 Washington Square South, New York, NY 10012,United States{" "}
                  </a>
                  <a class="hover:opacity-75" href>
                    {" "}
                    Email: example@gmail.com{" "}
                  </a>
                  <a class="hover:opacity-75" href>
                    {" "}
                    Phone: +1 1123 456 780{" "}
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
