"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Montserrat } from "next/font/google";
import { motion } from "framer-motion";

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "700"], // normal + bold
});
export default function Header() {

    const [navHeight, setNavHeight] = useState(0);
    

    useEffect(() => {
        const isMobile = window.innerWidth < 1024; // Tailwind breakpoint lg
        const navbar = isMobile
            ? document.getElementById("mobile-navbar")
            : document.getElementById("main-navbar");

        if (navbar) {
            setNavHeight(navbar.offsetHeight);
        }
    }, []);

    return (
        <div
            className="bg-cover bg-center h-fit p-12 mx-auto relative"
            style={{
                backgroundImage: `url("/assets/header5.png")`,
                marginTop: `${navHeight}px`,
            }}
        >
            <div
                className="absolute inset-0"
                style={{ backgroundColor: "#0a3c5c", opacity: 0.6 }}
            ></div>

            <div className="relative z-10 container mx-auto px-6 py-[8vw] text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className={`outlined-text uppercase text-4xl md:text-6xl font-bold mb-6 ${montserrat.className}`}
                    
                >
                    We don’t just move boxes
                </motion.h1>

                <motion.h3
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                    className={`outlined-text text-lg md:text-2xl font-normal mb-8 max-w-3xl mx-auto leading-relaxed ${montserrat.className}`}
                 
                >
                    We move families, memories, and new beginnings. Let us take the weight
                    off your shoulders and help you settle into your next season. Ready to
                    move? We’re here to carry the load.
                </motion.h3>

                {/* Buttons */}
                <motion.div className="flex flex-col sm:flex-row justify-center items-center gap-6"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { staggerChildren: 0.3 },
                        },
                    }}
                    >
                    <motion.div variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}>
                    <Link
                        href="/requestQuote"
                        className="px-8 py-3 border border-white text-white rounded-full text-base font-semibold shadow-md hover:bg-white hover:text-[#007a9f] transition-all"
                    >
                        Request A Quote
                        </Link>
                    </motion.div>

                    <motion.div variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}>
                    <a
                            href="tel:603-726-0345"
                        className="px-8 py-3 bg-[#28a745] text-white rounded-full hover:bg-green-900 transition"
                    >
                            CALL US: 603-726-0345
                        </a>
                    </motion.div>

                </motion.div>
               
            </div>


            {/* Shape Divider */}
            <div
                className="nectar-shape-divider-wrap absolute bottom-0 left-0 w-full"
                style={{ height: "10%" }}
                data-using-percent-val="true"
                data-height="30%"
                data-front=""
                data-style="waves"
                data-position="bottom"
            >
                <svg
                    className="nectar-shape-divider w-full h-full"
                    aria-hidden="true"
                    fill="#ffffff"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1000 300"
                    preserveAspectRatio="none"
                >
                    <path d="M 1000 300 l 1 -230.29 c -217 -12.71 -300.47 129.15 -404 156.29 c -103 27 -174 -30 -257 -29 c -80 1 -130.09 37.07 -214 70 c -61.23 24 -108 15.61 -126 10.61 v 22.39 z" />
                </svg>
            </div>
            
        </div>
    );
}
