"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react";

export default function NavbarTel() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // controlează montarea drawer-ului

  const handleLinkClick = () => {
    closeMenu();
  };

  const openMenu = () => {
    setIsVisible(true);
    setTimeout(() => setIsMenuOpen(true), 50); // mic delay pt. animație smooth
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setTimeout(() => setIsVisible(false), 600); // așteptăm animația să se termine
  };

  return (
    <div id="mobile-navbar" className="p-4 lg:hidden bg-white fixed w-full left-0 right-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image
            width={200}
            height={200}
            src="/assets/Logo_Corey.png"
            alt="logo"
          />
        </Link>

        {/* Hamburger button */}
        <div
          className="gap-1 p-2 flex flex-col cursor-pointer"
          onClick={openMenu}
        >
          <span className="sr-only">Open menu</span>
          <div className="w-6 border-b-[3px] border-[#004AEA]"></div>
          <div className="w-6 border-b-[3px] border-[#004AEA]"></div>
          <div className="w-6 border-b-[3px] border-[#004AEA]"></div>
        </div>

        {/* Drawer content */}
        {isVisible && (
          <>
            {/* Overlay */}
            <div
              className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-700 ${isMenuOpen ? "opacity-100" : "opacity-0"
                }`}
              onClick={closeMenu}
            />

            {/* Drawer */}
            <div
              className={`fixed right-0 top-0 w-72 h-full bg-blue-600 text-white font-semibold p-6 z-50 shadow-lg flex flex-col gap-6 transform transition-transform duration-700 ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
              {/* Close button */}
              <button
                className="self-end mb-4"
                onClick={closeMenu}
                aria-label="Close Menu"
              >
                <X size={28} />
              </button>

              {/* Links */}
              <nav className="flex flex-col gap-4">
                <Link href="/" className="py-2" onClick={handleLinkClick}>
                  Home
                </Link>
                <Link href="/servicess" className="py-2" onClick={handleLinkClick}>
                  Services
                </Link>
                <Link href="/aboutus" className="py-2" onClick={handleLinkClick}>
                  About Us
                </Link>
                <Link href="/payment" className="py-2" onClick={handleLinkClick}>
                  Payment
                </Link>
                <Link href="/moving" className="py-2" onClick={handleLinkClick}>
                  Moving Day
                </Link>
                <Link href="/contact" className="py-2" onClick={handleLinkClick}>
                  Contact
                </Link>
                <Link
                  href="/requestQuote"
                  className="px-8 py-3 border border-white text-white rounded-full text-base font-semibold shadow-md hover:bg-white hover:text-[#007a9f] transition-all"
                  onClick={handleLinkClick}
                >
                  Request A Quote
                </Link>
              </nav>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
