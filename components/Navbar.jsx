"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaSoundcloud,
  FaSpotify,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-30 flex items-center justify-between  text-white px-6 py-4 transition-all duration-300">
        {/* Hamburger */}
        <button
          className="text-2xl focus:outline-none hover:text-gray-400 transition"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
        >
          <FaBars />
        </button>

        {/* Center: Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2 text-xl font-extrabold tracking-wide select-none">
          <Image
          className="pt-4"
            src={"/ami_logo.png"}
            alt="Ami Music"
            width={200}
            height={90}
          />
        </div>

        {/* Right: Social Icons */}
        <div className="ml-auto flex items-center space-x-4 text-lg">
          <div className="hidden md:flex space-x-4">
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF className="hover:text-blue-400 transition-colors duration-200" />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="hover:text-pink-500 transition-colors duration-200" />
            </Link>
            <Link
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube className="hover:text-red-500 transition-colors duration-200" />
            </Link>
            <Link
              href="https://soundcloud.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="SoundCloud"
            >
              <FaSoundcloud className="hover:text-orange-500 transition-colors duration-200" />
            </Link>
            <Link
              href="https://spotify.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Spotify"
            >
              <FaSpotify className="hover:text-green-500 transition-colors duration-200" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-black/70 backdrop-blur-xs z-40 transition-opacity duration-300 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Sidebar Menu */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-900 z-50 transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Sidebar menu"
        role="complementary"
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <span className="font-bold text-xl text-white">
            <Image
              src={"/ami_logo.png"}
              alt="Ami Music"
              width={120}
              height={55}
            />
          </span>
          <button
            className="text-2xl text-white hover:text-gray-400"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            <FaTimes />
          </button>
        </div>
        <ul className="mt-6 space-y-2 px-4">
          <li>
            <Link
              href="/"
              className="block py-3 px-2 rounded hover:bg-indigo-100 dark:hover:bg-gray-600 text-white font-medium"
              onClick={() => setOpen(false)}
            >
              Our Brands & Label
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="block py-3 px-2 rounded hover:bg-indigo-100 dark:hover:bg-gray-600 text-white font-medium"
              onClick={() => setOpen(false)}
            >
              Catalog
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className="block py-3 px-2 rounded hover:bg-indigo-100 dark:hover:bg-gray-600 text-white font-medium"
              onClick={() => setOpen(false)}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="block py-3 px-2 rounded hover:bg-indigo-100 dark:hover:bg-gray-600 text-white font-medium"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Navbar;
