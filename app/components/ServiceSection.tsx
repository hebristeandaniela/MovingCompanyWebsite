'use client'

import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default function ServiceSection() {

    return (

        <section className="bg-white py-12">

            <div
                className="relative pt-10 pb-10 flex items-center justify-center text-center"
                style={{
                    backgroundImage: `url("/assets/features.png")`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
            >
                {/* Overlay pentru contrast */}
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>

                {/* Conținut nou */}
                <div className="relative max-w-4xl px-6 text-white">
                    <h1 className="uppercase text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
                        Movers with Mountain Grit
                    </h1>
                    <h3 className="text-xl md:text-2xl font-medium mb-6 drop-shadow-md">
                        Local strength. Honest service. From Conway to wherever life takes you.
                    </h3>
                    <p className="text-md md:text-lg mb-6 text-gray-200">
                        We’re proud to serve the Mt. Washington Valley with reliable moving, packing, junk removal, and more. Follow our journey as we grow and give back.
                    </p>
                    <a
                        href="/servicess"
                        className="mt-4 px-6 py-3 bg-yellow-200 text-black font-semibold rounded-full shadow-lg hover:bg-yellow-400 transition"
                    >
                        Explore Our Services
                    </a>
                </div>
            </div>


            {/* What We Offer + Imagine */}
                 <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 justify-center items-center">
               {/* Imaginea în stanga */}
                <div className="flex justify-center">
                    <img
                        width={300}
                        height={300}
                        src="/assets/corey1.png"
                        alt="Mountain Men Movers Truck"
                        className="h-auto max-w-md rounded-2xl shadow-lg mt-10"
                    />
                </div>

                {/* Textul în dreapta */}
                <div>
                    <h2 className="uppercase text-3xl font-bold text-[#0a3c5c] mt-10 text-center">What We Offer</h2>

                    <div className="flex flex-col gap-2 xl:p-2">
                        {/* Servicii */}
                        {[
                            { icon: "🚚", title: "Local & Long-Distance Moving", desc: "Whether it’s across town or across the country, we deliver safely and swiftly." },
                            { icon: "🏢", title: "Business Relocation", desc: "We move your workspace so you can stay focused on your business." },
                            { icon: "📦", title: "Packing Assistance", desc: "Need help packing? We treat every item with care and precision." },
                            { icon: "🗑️", title: "Junk Removal", desc: "From clutter to clean — we haul away what you don’t need." },
                            { icon: "♻️", title: "Garbage & Recycling Pickup", desc: "We make the dump run so you don’t have to. Recycling must be pre-sorted." },
                            { icon: "📬", title: "Pickup & Delivery", desc: "Found something on Marketplace or Craigslist? We’ll bring it home — and take the old stuff out." },
                        ].map((service, index) => (
                            <div key={index} className="flex items-start gap-2">
                                <span className="mt-5 text-2xl">{service.icon}</span>
                                <div>
                                    <h3 className="font-bold text-lg">{service.title}</h3>
                                    <p className="text-gray-600">{service.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-5">
                        <a
                            href="/servicess"
                            className="px-6 py-2 bg-[#0a3c5c] text-[#f5e6c8] font-semibold rounded-full shadow-lg hover:bg-[#0c4a6e] transition"
                        >
                            View Full Service List
                        </a>
                    </div>
                </div>

            
            </div>
        </section>
    )}