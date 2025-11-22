"use client";
import React, { useState, useCallback } from "react";
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

  const navItems = [
    { name: "About AMI", href: "/about" },
    { name: "Rosters", href: "/rosters" },
    { name: "Catalogue", href: "/catalogue" },
    { name: "Visuals", href: "/visual" },
    { name: "Brands & Label", href: "/brands" },
    { name: "Contact Us", href: "/contact" },
  ];

  const socialLinks = [
    {
      icon: FaFacebookF,
      href: "https://facebook.com",
      label: "Facebook",
      hoverColor: "hover:text-blue-400",
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/allegramusic.inc?utm_medium=copy_link",
      label: "Instagram",
      hoverColor: "hover:text-pink-500",
    },
    {
      icon: FaYoutube,
      href: "https://www.youtube.com/@AllegraMusicInc",
      label: "YouTube",
      hoverColor: "hover:text-red-500",
    },
    {
      icon: FaSoundcloud,
      href: "https://soundcloud.com",
      label: "SoundCloud",
      hoverColor: "hover:text-orange-500",
    },
    {
      icon: FaSpotify,
      href: "https://spotify.com",
      label: "Spotify",
      hoverColor: "hover:text-green-500",
    },
  ];

  const toggleMenu = useCallback(() => setOpen((prev) => !prev), []);
  const closeMenu = useCallback(() => setOpen(false), []);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4">
        {/* Hamburger */}
        <button
          className="text-2xl focus:outline-none text-white hover:text-gray-300 transition-colors"
          aria-label="Toggle menu"
          onClick={toggleMenu}
        >
          <FaBars />
        </button>

        {/* Center: Logo */}
        <Link
          href="/"
          className="absolute pt-9 left-1/2 transform -translate-x-1/2"
          aria-label="Home"
        >
          <Image
            src="/ami_logo.png"
            alt="Ami Music"
            width={200}
            height={90}
            priority
            className="w-auto h-auto"
          />
        </Link>

        {/* Right: Social Icons */}
        <div className="ml-auto hidden md:flex items-center space-x-4 text-lg text-white">
          {socialLinks.map(({ icon: Icon, href, label, hoverColor }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={`${hoverColor} transition-colors duration-200`}
            >
              <Icon />
            </Link>
          ))}
        </div>
      </nav>

      {/* Sidebar Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[60] transition-opacity duration-300"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Sidebar Menu */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-black shadow-2xl z-[70] transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Sidebar menu"
        role="navigation"
      >
        {/* Sidebar Header with Close Button */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <Link href="/" onClick={closeMenu}>
            <Image
              src="/ami_logo.png"
              alt="Ami Music"
              width={160}
              height={60}
              className="w-auto h-auto"
            />
          </Link>
          {/* Close button only on mobile */}
          <button
            onClick={closeMenu}
            className="md:hidden text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors focus:outline-none"
            aria-label="Close menu"
          >
            <FaTimes className="text-2xl" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="mt-6 px-4">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-3 px-4 rounded-lg text-gray-800 dark:text-white font-medium transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:shadow-md"
                  onClick={closeMenu}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Social Icons */}
        <div className="absolute bottom-8 left-0 right-0 px-6">
          <div className="flex justify-center space-x-6 text-xl text-gray-800 dark:text-white md:hidden">
            {socialLinks.map(({ icon: Icon, href, label, hoverColor }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`${hoverColor} transition-colors duration-200`}
              >
                <Icon />
              </Link>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
