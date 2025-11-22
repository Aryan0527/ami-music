"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

const Roster = () => {
  const artists = [
    {
      id: 1,
      image: "/acash.png",
      name: "MixedbyAcash",
      desc: "Producer/DJ/MixEngineer",
      href: "#",
    },
    {
      id: 2,
      image: "/kbir.jpg",
      name: "Kbir",
      desc: "Rapper/Singer",
      href: "#",
    },
    {
      id: 3,
      image: "/kvin.jpeg",
      name: "St. Kevin",
      desc: "Rapper/Director",
      href: "#",
    },
    {
      id: 4,
      image: "/fredi.jpg",
      name: "Freddie",
      desc: "Rapper",
      href: "#",
    },
    {
      id: 5,
      image: "/JCole.webp",
      name: "J. Cole",
      desc: "Singer",
      href: "#",
    },
    {
      id: 6,
      image: "/art1.jpg",
      name: "Ari Lennox",
      desc: "Singer/Rapper",
      href: "#",
    },
  ];

  const scrollToRoster = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative w-full min-h-screen bg-black">
      <div className="relative w-full h-screen overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/catalogbg.mp4"
          autoPlay
          loop
          muted
          playsInline
          aria-label="Background video"
          preload="metadata"
        />
        <div className="absolute inset-0 bg-black/50" />

        {/* Scroll Down Indicator */}
        <button
          onClick={scrollToRoster}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce z-10 cursor-pointer bg-transparent border-none focus:outline-none"
          aria-label="Scroll down to roster"
        >
          <MdOutlineKeyboardDoubleArrowDown className="w-8 h-8 text-white hover:text-gray-300 transition-colors" />
        </button>
      </div>

      {/* Roster Section - Added relative z-10 for proper stacking */}
      <div className="bg-black py-16 px-6 md:px-12 lg:px-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-white text-3xl md:text-4xl font-medium mb-2 text-center">
              ROSTER
            </h2>
            <div className="h-0.5 w-28 bg-red-600 mx-auto"></div>
          </div>

          {/* Artist Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {artists.map((artist) => (
              <Link
                key={artist.id}
                href={artist.href}
                className="group relative overflow-hidden rounded-lg bg-gray-900 hover:bg-gray-800 transition-all duration-300 hover:scale-105"
              >
                <div className="relative aspect-square">
                  <Image
                    src={artist.image}
                    alt={`${artist.name} - ${artist.desc}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Artist Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <h3 className="text-white text-xl font-bold mb-1">
                    {artist.name}
                  </h3>
                  {artist.desc && (
                    <p className="text-gray-400 text-sm">{artist.desc}</p>
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

export default Roster;
