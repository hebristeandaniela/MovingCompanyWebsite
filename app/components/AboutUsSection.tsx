'use client'

import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default function AboutUsSection() {
    return (
        <div className="bg-white h-fit flex flex-col text-black gap-8">

            {/* Secțiune principală - slogan și imagine */}
            <div className="flex flex-col md:flex-row items-center w-full max-w-screen-lg mx-auto gap-6 md:gap-8 mb-8 px-4 md:px-0">

                {/* Text și linkuri */}
                <div className="w-full md:w-1/2 flex flex-col gap-4 xl:gap-8">
                    <h2 className="uppercase text-2xl sm:text-3xl font-bold text-[#0a3c5c] text-center md:text-left">
                        Local Strength. Mountain Spirit.
                    </h2>
                    <p className="text-base sm:text-lg text-gray-700 text-center md:text-left">
                        Born in the heart of Mt. Washington Valley, we’re more than movers—we’re neighbors. Whether it’s lifting a couch or lifting up our community, we show up with grit, care, and a helping hand.
                    </p>

                    <a
                        href="/aboutus"
                        className="bg-[#0a3c5c] text-[#f5e6c8] px-6 py-3 rounded-full w-fit mx-auto md:mx-0 hover:bg-[#0c4a6e] transition-colors"
                    >
                        Learn More About Us
                    </a>
                </div>

                {/* Imagine */}
                <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
                    <Image
                        width={520}
                        height={417}
                        src="/assets/features.png"
                        alt="Mountain Men Movers promotional graphic"
                        className="w-full h-auto max-w-md rounded-2xl shadow-lg"
                    />
                </div>
            </div>

            {/* Section "Why Choose Us" */}
            <section className="bg-[#f5f5f5] py-8 sm:py-12 px-4 md:px-6">
                <div className="max-w-screen-lg mx-auto text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#0a3c5c] mb-8">Why Choose Us</h2>

                    {/* Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center text-center lg:text-left">
                        {[
                            { icon: "🏔️", title: "Local & Family-Owned", desc: "Rooted in Conway, NH — we treat every move like it’s our own." },
                            { icon: "📞", title: "Free Quotes, No Pressure", desc: "Transparent pricing with zero commitment until you’re ready." },
                            { icon: "🧰", title: "Versatile Services", desc: "From moving to junk removal, we handle it all with care." },
                            { icon: "🤝", title: "Community-First", desc: "We give back as we grow—because we move more than furniture." },
                            { icon: "₿", title: "Crypto-Friendly", desc: "Pay with BTC, ETH, SOL & more—and get a 5% discount." },
                            { icon: "🧊", title: "Respectful & Reliable", desc: "We show up on time, work hard, and treat your space with care—even on rainy days." },
                        ].map((item, index) => (
                            <div key={index} className="flex flex-col items-center max-w-xs gap-4">
                                <span className="text-3xl">{item.icon}</span>
                                <h3 className="font-semibold text-lg">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );

}
