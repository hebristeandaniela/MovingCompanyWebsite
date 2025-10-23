'use client'

import React, { useEffect, useState } from 'react'
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    const [links, setLinks] = useState({
        facebook: '',
        instagram: '',
        tiktok: '',
        linkedin: '',
    })

    
    
    return (<footer className="bg-[#0a3c5c]">
        <div className="container mx-auto px-6 sm:px-20 text-white">
            <div className="flex flex-col md:flex-row justify-center items-center md:justify-between pt-12 pb-12 gap-12">

                {/* Logo + Social Links */}
                <div className="flex flex-col items-center md:items-start w-full md:w-1/2 lg:w-4/12 px-4">
                    <Link href="/" className="inline-block mb-5">
                        <Image width={300} height={300} src="/assets/Logo_Corey.png" alt="footer" />
                    </Link>
                    <div className="flex flex-wrap justify-center md:justify-start items-center gap-3">
                        {links.linkedin && (
                            <Link href={links.linkedin} target="_blank">
                                <Image width={38} height={32} src="/assets/linkedinwhite.svg" alt="LinkedIn" />
                            </Link>
                        )}
                        {links.facebook && (
                            <Link href={links.facebook} target="_blank">
                                <Image width={38} height={33} src="/assets/facebookwhite.svg" alt="Facebook" />
                            </Link>
                        )}
                        {links.instagram && (
                            <Link href={links.instagram} target="_blank">
                                <Image width={37} height={33} src="/assets/instagramwhite.svg" alt="Instagram" />
                            </Link>
                        )}
                        {links.tiktok && (
                            <Link href={links.tiktok} target="_blank">
                                <Image width={38} height={33} src="/assets/tiktokwhite.svg" alt="TikTok" />
                            </Link>
                        )}
                    </div>
                </div>

                {/* Menu Links */}
                <div className="flex flex-col items-center md:items-start w-full md:w-1/4 lg:w-2/12 px-4 mb-8 md:mb-0">
                    <h3 className="mb-4 md:mb-8 text-lg font-semibold text-center md:text-left">MENU</h3>
                    <div className="flex flex-col gap-2 text-center md:text-left">
                        <Link href="/">Home</Link>
                        <Link href="/services">Services</Link>
                        <Link href="/aboutus">About Us</Link>
                        <Link href="/payment">Payment</Link>
                        <Link href="/moving">Moving Day</Link>
                        <Link href="/contact">Contact</Link>
                    </div>
                </div>

                {/* Location */}
                <div className="flex flex-col items-center md:items-start w-full md:w-1/3 lg:w-4/12 px-4">
                    <div className="flex items-center gap-2 mb-4 lg:text-lg lg:font-semibold">
                        <Image width={20} height={10} src="/assets/LocationMarker.png" alt="LocationMarker" />
                        <h3>Our Location</h3>
                    </div>
                    <div className="w-full">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d154466.8347433396!2d-71.33335778919209!3d43.99650761110317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb309d1f5c0d125%3A0x1b169d905b98b116!2sConway%2C%20New%20Hampshire!5e0!3m2!1sro!2sus!4v1758391898360!5m2!1sro!2sus"
                            width="100%"
                            height="300"
                            className="rounded"
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>

            <div className="border-b border-[#CCCCCC] mt-8"></div>
        </div>

        <p className="text-[#999999] py-6 text-sm text-center">
            Website built by{' '}
            <a
                href="https://portfolio-git-main-hebristeandanielas-projects.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#999999] hover:text-white underline transition-colors"
            >
                Daniela Hebristean
            </a>.
        </p>
    </footer>);
}
