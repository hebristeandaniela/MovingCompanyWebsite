'use client'

import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default function ServiceSection() {

    return (
        <section className="bg-white py-8 sm:py-12">

            {/* Hero Section */}
            <div
                className="relative pt-8 pb-8 flex items-center justify-center text-center"
                style={{
                    backgroundImage: `url("/assets/features1.png")`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>

                {/* Content */}
                <div className="relative max-w-4xl px-4 sm:px-6 text-white">
                    <h1 className="uppercase text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
                        Movers with Mountain Grit
                    </h1>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-medium mb-4 sm:mb-6 drop-shadow-md">
                        Local strength. Honest service. From Conway to wherever life takes you.
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 text-gray-200">
                        We’re proud to serve the Mt. Washington Valley with reliable moving, packing, junk removal, and more. Follow our journey as we grow and give back.
                    </p>
                    <a
                        href="/servicess"
                        className="mt-2 sm:mt-4 px-4 sm:px-6 py-2 sm:py-3 bg-yellow-200 text-black font-semibold rounded-full shadow-lg hover:bg-yellow-400 transition"
                    >
                        Explore Our Services
                    </a>
                </div>
            </div>

            {/* What We Offer */}
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center items-start mt-10">

                {/* Image */}
                <div className="flex justify-center lg:justify-start">
                    <img
                        width={300}
                        height={300}
                        src="/assets/corey1.png"
                        alt="Mountain Men Movers Truck"
                        className="h-auto max-w-xs sm:max-w-md rounded-2xl shadow-lg"
                    />
                </div>

                {/* Text & Services */}
                <div className="flex flex-col items-center lg:items-start">
                    <h2 className="uppercase text-2xl sm:text-3xl font-bold text-[#0a3c5c] mb-6 text-center lg:text-left">
                        What We Offer
                    </h2>

                    <div className="flex flex-col gap-4 w-full max-w-md">
                        {[
                            { icon: "🚚", title: "Local & Long-Distance Moving", desc: "Whether it’s across town or across the country, we deliver safely and swiftly." },
                            { icon: "🏢", title: "Business Relocation", desc: "We move your workspace so you can stay focused on your business." },
                            { icon: "📦", title: "Packing Assistance", desc: "Need help packing? We treat every item with care and precision." },
                            { icon: "🗑️", title: "Junk Removal", desc: "From clutter to clean — we haul away what you don’t need." },
                            { icon: "♻️", title: "Garbage & Recycling Pickup", desc: "We make the dump run so you don’t have to. Recycling must be pre-sorted." },
                            { icon: "📬", title: "Pickup & Delivery", desc: "Found something on Marketplace or Craigslist? We’ll bring it home — and take the old stuff out." },
                        ].map((service, index) => (
                            <div key={index} className="flex items-start gap-2">
                                <span className="mt-1 text-2xl">{service.icon}</span>
                                <div>
                                    <h3 className="font-bold text-lg">{service.title}</h3>
                                    <p className="text-gray-600 text-sm sm:text-base">{service.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center lg:text-left mt-4 sm:mt-6">
                        <a
                            href="/servicess"
                            className="px-6 py-2 sm:py-3 bg-[#0a3c5c] text-[#f5e6c8] font-semibold rounded-full shadow-lg hover:bg-[#0c4a6e] transition"
                        >
                            View Full Service List
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}