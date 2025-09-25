"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {

    return (
        <div id="main-navbar" className="hidden lg:flex fixed top-0 left-0 w-full bg-white/85 backdrop-blur-md z-20">
            <div className="container mx-auto px-4 md:px-16 lg:px-36 flex justify-between items-center relative">

                {/* Logo */}
                <Link href="/">
                    <Image
                        src="/assets/Logo_Corey.png"
                        alt="Logo"
                        width={250}
                        height={250}
                        className="w-[7rem] md:w-[9rem] lg:w-[14rem]" // fluid scaling aproximativ
                    />
                </Link>

                {/* Meniu Desktop / Tableta */}
                <div className="hidden md:flex flex-wrap items-center gap-6 text-lg font-semibold text-[#181818] font-sans">
                    <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
                    <Link href="/servicess" className="hover:text-blue-600 transition-colors">Services</Link>
                    <Link href="/aboutus" className="hover:text-blue-600 transition-colors">About Us</Link>
                    <Link href="/payment" className="hover:text-blue-600 transition-colors">Payment</Link>
                    <Link href="/moving" className="hover:text-blue-600 transition-colors">Moving Day</Link>
                    <Link href="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>

                    <Link
                        href="/requestQuote"
                        className="ml-[clamp(0.25rem,1vw,1rem)] bg-gradient-to-r from-blue-600 to-blue-500 text-white px-[clamp(0.75rem,1vw,1.5rem)] py-[clamp(0.5rem,0.8vw,0.75rem)] rounded-full font-semibold shadow-md hover:from-blue-700 hover:to-blue-600 transition-all"
                    >
                        Request A Quote
                    </Link>
                </div>
            </div>
        </div>



    );
}
