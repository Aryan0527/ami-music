import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">
          © 2025 All Rights Reserved by{" "}
          <Link href="/" className="font-semibold hover:underline">
            Allegra Music Inc.
          </Link>
          .
        </p>

        <div className="flex gap-6 text-sm">
          <Link href="/terms" className="hover:underline">
            Terms & Conditions
          </Link>
          <Link href="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="/refund" className="hover:underline">
            Refund and Returns Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
