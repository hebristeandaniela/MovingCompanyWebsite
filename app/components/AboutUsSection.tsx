'use client'

import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default function AboutUsSection() {

return (
        
         

        <div className='bg-white h-fit flex flex-col text-black gap-8'>

           

            {/* Secțiune principală - slogan și imagine */}
            <div className='flex flex-col md:flex-row items-center w-full max-w-screen-lg mx-auto gap-8 mb-8'>

                {/* Text și linkuri */}
            <div className='w-full p-6 flex flex-col gap-4 xl:gap-8 xl:p-10 md:w-1/2'>
                <h2 className='uppercase text-3xl font-bold text-[#0a3c5c]'>
                    Local Strength. Mountain Spirit.
                </h2>
                <p className='text-lg text-gray-700'>
                    Born in the heart of Mt. Washington Valley, we’re more than movers—we’re neighbors. Whether it’s lifting a couch or lifting up our community, we show up with grit, care, and a helping hand.
                </p>
                
                <a
                    href="/aboutus"
                    className='bg-[#0a3c5c] text-[#f5e6c8] px-6 py-3 rounded-full w-fit hover:bg-[#0c4a6e] transition-colors'
                >
                    Learn More About Us
                </a>
            </div>


                {/* Imagine */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <Image
                        width={520}
                        height={417}
                        src="/assets/features.png"
                        alt='Mountain Men Movers promotional graphic'
                        className="w-full h-auto max-w-md rounded-2xl shadow-lg"
                    />
                </div>
            </div>
        <section className="bg-[#f5f5f5] py-12">
            <div className="max-w-screen-lg mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-[#0a3c5c] mb-8">Why Choose Us</h2>

                {/* Grid centrat */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center text-left">
                    <div className="flex items-start gap-4 max-w-xs">
                        <span className="text-3xl">🏔️</span>
                        <div>
                            <h3 className="font-semibold text-lg">Local & Family-Owned</h3>
                            <p className="text-gray-600">Rooted in Conway, NH — we treat every move like it’s our own.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 max-w-xs">
                        <span className="text-3xl">📞</span>
                        <div>
                            <h3 className="font-semibold text-lg">Free Quotes, No Pressure</h3>
                            <p className="text-gray-600">Transparent pricing with zero commitment until you’re ready.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 max-w-xs">
                        <span className="text-3xl">🧰</span>
                        <div>
                            <h3 className="font-semibold text-lg">Versatile Services</h3>
                            <p className="text-gray-600">From moving to junk removal, we handle it all with care.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 max-w-xs">
                        <span className="text-3xl">🤝</span>
                        <div>
                            <h3 className="font-semibold text-lg">Community-First</h3>
                            <p className="text-gray-600">We give back as we grow—because we move more than furniture.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 max-w-xs ml-5">
                        <span className="text-3xl">₿</span>
                        <div>
                            <h3 className="font-semibold text-lg">Crypto-Friendly</h3>
                            <p className="text-gray-600">Pay with BTC, ETH, SOL & more—and get a 5% discount.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 max-w-xs">
                        <span className="text-3xl">🧊</span>
                        <div>
                            <h3 className="font-semibold text-lg">Respectful & Reliable</h3>
                            <p className="text-gray-600">We show up on time, work hard, and treat your space with care—even on rainy days.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>



        





        </div>

        
    )
}
