import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        
        <footer className="bg-[#002C52]">
           
            <div className="container mx-auto px-20 text-white">
                <div className="flex flex-wrap justify-center pt-24 pb-12 gap-12 ml-10">
                    <div className="w-full md:w-1/2 lg:w-4/12 px-4 lg:mb-0">
                        <Link href="/" className="inline-block mb-10">
                            <Image width={100} height={55} src="/assets/Logo_ROetCO.jpg" alt="footer" />
                        </Link>
                        <p>Implementăm soluții avansate <br />de cablare structurată, administrare <br /> servere și mentenanță IT.</p>
                        
                        <div className="flex flex-wrap gap-10 mt-14">
                            <Link href="/">
                                <Image width={39} height={33} src="/assets/facebook.png" alt="facebook" />
                            </Link>
                            <Link href="/" className="mt-1">
                                <Image width={32} height={30} src="/assets/instagram.png" alt="instagram" />
                            </Link>
                            <Link href="/">
                                <Image width={39} height={33} src="/assets/tiktok.png" alt="TikTok" />
                            </Link>
                        </div>
                    </div>
                    
                    <div className="w-full md:w-1/4 lg:w-2/12 px-4 mb-16 lg:mb-0">
                        <h3 className="mb-8 text-lg font-semibold">MENIU</h3>
                        <div className="flex flex-col gap-3">
                            <Link href="/">Acasă</Link>
                            <Link href="/solutii">Solutii</Link>
                            <Link href="/proiecte">Proiecte</Link>
                            <Link href="/evenimente">Evenimente</Link>
                            <Link href="/despre">Despre</Link>
                            <Link href="/contact">Contact</Link>
                        </div>
                    </div>
                   
                    <div className="w-full md:w-1/3 lg:w-4/12">
                        <div className="flex mb-8 gap-2 lg:text-lg lg:font-semibold">
                            <Image width={20} height={10} src="/assets/LocationMarker.png" alt='LocationMarker' />
                            <h3 className="">Locația Noastră</h3>
                        </div>
                        <div className="w-full lg:flex-1 py-1 lg:py-0">
                            <Link href="https://maps.app.goo.gl/AyUiRiL4zd1nLMdq6">
                                <Image width={340} height={219} src="/assets/location.jpeg" alt='location' />
                            </Link>
                        </div>
                    </div>
                </div>

              
                <div className="border-b border-[#CCCCCC]"></div>
            </div>
            <p className="text-[#999999] py-8 md:pb-8 text-sm text-center">
                ©Copyright. All rights reserved to RO ET CO INTERNATIONAL.
            </p>
        </footer>
    );
}
