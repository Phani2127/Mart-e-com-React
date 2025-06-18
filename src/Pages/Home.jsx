import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CarouselComponent.css"; // custom CSS
import { SliderData } from "../../public/products.jsx";
import { serviceData } from "../../public/products.jsx";
import { products } from "../../public/products.jsx";

import { discoutProducts } from "../../public/products.jsx";
import Card from "../components/Card.jsx";
export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  return (
    <div>
      {/* Carousel */}

      <div className="carousel-wrapper my-10 bg-gray-50">
        <Slider {...settings}>
          {SliderData.map((slide, index) => (
            <div className="carousel-slide items-center " key={index}>
              <div className="slide-content mx-30 p-10 items-center">
                <div className="text-section">
                  <h2>{slide.title}</h2>
                  <p>{slide.desc}</p>
                  <p href="#">Visit Collections</p>
                </div>
                <div className="image-section">
                  <img
                    src={slide.cover}
                    alt={`Slide ${index + 1}`}
                    className="p-3"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* after carousel */}
      <div className="  mx-17 items-center gap-2 flex  p-5 my-5">
        {serviceData.map((item, index) => (
          <div className="bg-blue-100 text-center p-6 flex flex-col gap-4 w-1/4">
            <span className="mx-auto bg-white  p-2 rounded-full">
              {item.icon}
            </span>
            <h2 className="font-semibold">{item.title}</h2>
            <p className="text-xm">{item.subtitle}</p>
          </div>
        ))}
      </div>
      {/* discount */}
      <div className="my-20">
        <h1 className="font-bold text-3xl text-center my-10">Big Discount</h1>
        <div className="flex mx-40   ms-45 flex-wrap gap-10 ">
          {discoutProducts.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
      </div>
      {/* New Arrival */}

      <div className="my-20">
        <h1 className="font-bold text-3xl text-center my-10">New Arrivals</h1>
        <div className="flex mx-40   ms-45 flex-wrap gap-10 ">
          {products.map((item, index) =>
            item.category === "mobile" || item.category === "wireless" ? (
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
