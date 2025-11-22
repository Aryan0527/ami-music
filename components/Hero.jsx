"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

const Hero = () => {
  const albums = [
    {
      id: 1,
      title: "Chiddi Udd",
      artist: "by St. Kevin",
      image: "/chiddi.jpg",
      href: "/catalogue/chiddi-udd",
    },
    {
      id: 2,
      title: "Heisenberg",
      artist: "by Kbir",
      image: "/heisenberg.jpg",
      href: "/catalogue/heisenberg",
    },
    {
      id: 3,
      title: "Like You",
      artist: "by Kbir",
      image: "/likeyou.jpg",
      href: "/catalogue/like-you",
    },
    {
      id: 4,
      title: "Bekhud",
      artist: "by Kbir",
      image: "/bekhud.jpg",
      href: "/catalogue/bekhud",
    },
  ];

  const scrollToReleases = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative w-full min-h-screen bg-black">
      {/* Background Video */}
      <div className="relative w-full h-screen">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/hero3.mp4"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
          preload="metadata"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-white text-5xl md:text-7xl font-bold drop-shadow-2xl mb-6 cursor-default">
            AMI Music
          </h1>
          <Link
            href="/rosters"
            className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none"
            aria-label="Explore Ami Music catalogue"
          >
            Explore
          </Link>
        </div>

        {/* Scroll Down Indicator */}
        <button
          onClick={scrollToReleases}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce z-10 cursor-pointer bg-transparent border-none focus:outline-none"
          aria-label="Scroll down to releases"
        >
          <MdOutlineKeyboardDoubleArrowDown className="w-8 h-8 text-white hover:text-gray-300 transition-colors" />
        </button>
      </div>

      {/* Featured Albums Section - Added relative z-10 */}
      <div className="bg-black py-16 px-6 md:px-12 lg:px-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-white text-3xl md:text-4xl text-center font-bold mb-2 cursor-default">
              Releases
            </h2>
            <div className="h-1 w-24 bg-red-600 mx-auto"></div>
          </div>

          {/* Albums Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {albums.slice(0, 3).map((album) => (
              <Link
                key={album.id}
                href={album.href}
                className="group relative overflow-hidden rounded-lg bg-gray-900 hover:bg-gray-800 transition-all duration-300 hover:scale-105 focus:outline-none"
              >
                {/* Album Cover */}
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={album.image}
                    alt={album.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Album Info */}
                <div className="p-6">
                  <h3 className="text-white text-xl font-bold mb-1">
                    {album.title}
                  </h3>
                  {album.artist && (
                    <p className="text-gray-400 text-sm">{album.artist}</p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
