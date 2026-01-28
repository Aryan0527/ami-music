"use client";
import React from "react";
import { useEffect, useState } from "react";
import { LuChevronRight, LuChevronLeft } from "react-icons/lu";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/C1.jpg",
    "/C2.jpg",
    "/C3.jpg",
    "/C4.jpg",
  ];
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    // Timer to change picture every 5 seconds
    const timer = setInterval(nextSlide, 3000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Slides */}
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`slide-${index}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-10 text-white p-4 rounded-full hover:bg-black"
      >
        <LuChevronLeft size={28} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-10 text-white p-4 rounded-full hover:bg-black"
      >
        <LuChevronRight size={28} />
      </button>
    </section>
  );
}
